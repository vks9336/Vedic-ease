import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";
import { toast } from "sonner";

type UserProfile = Tables<"user_profiles">;
type DoctorProfile = Tables<"doctor_profiles">;
type PatientProfile = Tables<"patient_profiles">;
type AdminProfile = Tables<"admin_profiles">;

// Sign In Mutation
export const useSignIn = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      console.log("useSignIn: Starting signInWithPassword...");
      const startTime = Date.now();

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      const authTime = Date.now();
      console.log(
        `useSignIn: signInWithPassword completed in ${authTime - startTime}ms`
      );

      if (error) {
        console.error("useSignIn: Sign-in error:", error);
        throw error;
      }

      if (data.user) {
        console.log("useSignIn: Fetching user profile...");
        const profileStartTime = Date.now();

        // Fetch user profile
        const { data: userProfile, error: profileError } = await supabase
          .from("user_profiles")
          .select("*")
          .eq("id", data.user.id)
          .single();

        if (profileError) {
          console.error(
            "useSignIn: Error fetching user profile:",
            profileError
          );
          throw new Error("Failed to fetch user profile");
        }

        console.log(
          `useSignIn: User profile fetched in ${
            Date.now() - profileStartTime
          }ms`
        );

        const totalTime = Date.now();
        console.log(
          `useSignIn: Total sign-in process completed in ${
            totalTime - startTime
          }ms`
        );

        return {
          user: data.user,
          session: data.session,
          profile: userProfile,
        };
      }

      throw new Error("No user data returned");
    },
    onSuccess: (data) => {
      console.log("useSignIn: Sign-in successful");
      toast.success("Login successful!");

      // Invalidate and refetch user-related queries
      queryClient.invalidateQueries({ queryKey: ["user"] });
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
    onError: (error: any) => {
      console.error("useSignIn: Sign-in failed:", error);

      let errorMessage = "Sign-in failed. Please try again.";

      if (error.message === "Email not confirmed") {
        errorMessage =
          "Please check your email and click the confirmation link before signing in.";
      } else if (error.message?.includes("Invalid login credentials")) {
        errorMessage = "Invalid email or password.";
      } else if (error.message?.includes("timeout")) {
        errorMessage =
          "Request timed out. Please check your connection and try again.";
      }

      toast.error(errorMessage);
    },
    retry: (failureCount, error) => {
      // Don't retry on authentication errors
      if (
        error.message?.includes("Invalid login credentials") ||
        error.message?.includes("Email not confirmed")
      ) {
        return false;
      }
      // Retry up to 2 times for network errors
      return failureCount < 2;
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

// Sign Up Mutation
export const useSignUp = () => {
  return useMutation({
    mutationFn: async ({
      email,
      password,
      userData,
    }: {
      email: string;
      password: string;
      userData: {
        firstName: string;
        lastName: string;
        phone: string;
        role: "patient" | "doctor" | "admin";
      };
    }) => {
      console.log("useSignUp: Starting signUp...");
      const startTime = Date.now();

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: userData.firstName,
            last_name: userData.lastName,
            phone: userData.phone,
            role: userData.role,
          },
        },
      });

      if (error) {
        console.error("useSignUp: Sign-up error:", error);
        throw error;
      }

      // Manually create user profile if signup was successful
      if (data.user) {
        console.log("useSignUp: Creating user profile...");
        // Wait a moment for the session to be established
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const { error: profileError } = await supabase
          .from("user_profiles")
          .insert({
            id: data.user.id,
            email: data.user.email!,
            first_name: userData.firstName,
            last_name: userData.lastName,
            phone: userData.phone,
            role: userData.role,
          });

        if (profileError) {
          console.error(
            "useSignUp: Error creating user profile:",
            profileError
          );
          // Don't throw error, let the user sign up first
          console.log(
            "useSignUp: Profile creation failed, but user was created. Profile can be created later."
          );
        }
      }

      const totalTime = Date.now();
      console.log(
        `useSignUp: Total sign-up process completed in ${
          totalTime - startTime
        }ms`
      );

      return {
        user: data.user,
        session: data.session,
      };
    },
    onSuccess: () => {
      console.log("useSignUp: Sign-up successful");
      toast.success("Registration successful!");
    },
    onError: (error: any) => {
      console.error("useSignUp: Sign-up failed:", error);

      let errorMessage = "Registration failed. Please try again.";

      if (error.message?.includes("User already registered")) {
        errorMessage = "An account with this email already exists.";
      } else if (error.message?.includes("timeout")) {
        errorMessage =
          "Request timed out. Please check your connection and try again.";
      }

      toast.error(errorMessage);
    },
    retry: (failureCount, error) => {
      // Don't retry on user already exists errors
      if (error.message?.includes("User already registered")) {
        return false;
      }
      // Retry up to 2 times for network errors
      return failureCount < 2;
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

// Sign Out Mutation
export const useSignOut = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    },
    onSuccess: () => {
      console.log("useSignOut: Sign-out successful");
      toast.success("Signed out successfully!");

      // Clear all cached data
      queryClient.clear();
    },
    onError: (error: any) => {
      console.error("useSignOut: Sign-out failed:", error);
      toast.error("Sign-out failed. Please try again.");
    },
  });
};

// Get Current User Query
export const useCurrentUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error) throw error;
      return user;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
};

// Get User Profile Query
export const useUserProfile = (userId: string | undefined) => {
  return useQuery({
    queryKey: ["userProfile", userId],
    queryFn: async () => {
      if (!userId) throw new Error("No user ID provided");

      const { data: userProfile, error: profileError } = await supabase
        .from("user_profiles")
        .select("*")
        .eq("id", userId)
        .single();

      if (profileError) throw profileError;
      return userProfile;
    },
    enabled: !!userId,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
};
