import React, { createContext, useContext, useEffect, useState } from "react";
import { User, Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";

// Type for Supabase client to avoid 'any' usage
type SupabaseClient = typeof supabase;
import {
  useCurrentUser,
  useUserProfile,
  useSignIn,
  useSignUp,
  useSignOut,
} from "@/hooks/useAuthMutations";
import type { UseMutationResult } from "@tanstack/react-query";

type UserProfile = Tables<"user_profiles">;
type DoctorProfile = Tables<"doctor_profiles">;
type PatientProfile = Tables<"patient_profiles">;
type AdminProfile = Tables<"admin_profiles">;

interface AuthContextType {
  user: User | null;
  session: Session | null;
  profile: UserProfile | null;
  doctorProfile: DoctorProfile | null;
  patientProfile: PatientProfile | null;
  adminProfile: AdminProfile | null;
  loading: boolean;
  signUp: (
    email: string,
    password: string,
    userData: {
      firstName: string;
      lastName: string;
      phone: string;
      role: "patient" | "doctor" | "admin";
    }
  ) => Promise<{ error: Error | null }>;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<{ error: Error | null }>;
  updateProfile: (
    updates: Partial<UserProfile>
  ) => Promise<{ error: Error | null }>;
  updateDoctorProfile: (
    updates: Partial<DoctorProfile>
  ) => Promise<{ error: Error | null }>;
  updatePatientProfile: (
    updates: Partial<PatientProfile>
  ) => Promise<{ error: Error | null }>;
  updateAdminProfile: (
    updates: Partial<AdminProfile>
  ) => Promise<{ error: Error | null }>;
  // React Query mutations for loading states
  signInMutation: UseMutationResult<
    unknown,
    Error,
    { email: string; password: string },
    unknown
  >;
  signUpMutation: UseMutationResult<
    unknown,
    Error,
    {
      email: string;
      password: string;
      userData: {
        firstName: string;
        lastName: string;
        phone: string;
        role: "patient" | "doctor" | "admin";
      };
    },
    unknown
  >;
  signOutMutation: UseMutationResult<unknown, Error, void, unknown>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [doctorProfile, setDoctorProfile] = useState<DoctorProfile | null>(
    null
  );
  const [patientProfile, setPatientProfile] = useState<PatientProfile | null>(
    null
  );
  const [adminProfile, setAdminProfile] = useState<AdminProfile | null>(null);

  // Use React Query for user data
  const {
    data: user,
    isLoading: userLoading,
    error: userError,
  } = useCurrentUser();
  const { data: profile, isLoading: profileLoading } = useUserProfile(user?.id);

  // Use React Query mutations
  const signInMutation = useSignIn();
  const signUpMutation = useSignUp();
  const signOutMutation = useSignOut();

  const loading = userLoading || profileLoading;

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      setSession(session);

      if (!session?.user) {
        setDoctorProfile(null);
        setPatientProfile(null);
        setAdminProfile(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // Fetch role-specific profiles when main profile changes
  useEffect(() => {
    if (profile && user?.id) {
      const currentProfile = profile as UserProfile; // Explicit type assertion
      const userId = user.id;

      if (!currentProfile.role) return; // Early return if no role

      const fetchRoleProfile = async () => {
        try {
          if (currentProfile.role === "doctor") {
            const { data: doctorData, error: doctorError } = await supabase
              .from("doctor_profiles")
              .select("*")
              .eq("id", userId)
              .single();

            if (!doctorError) {
              setDoctorProfile(doctorData);
            }
          } else if (currentProfile.role === "patient") {
            const { data: patientData, error: patientError } = await supabase
              .from("patient_profiles")
              .select("*")
              .eq("id", userId)
              .single();

            if (!patientError) {
              setPatientProfile(patientData);
            }
          } else if (currentProfile.role === "admin") {
            const { data: adminData, error: adminError } = await supabase
              .from("admin_profiles")
              .select("*")
              .eq("id", userId)
              .single();

            if (!adminError) {
              setAdminProfile(adminData);
            }
          }
        } catch (error) {
          console.error("Error fetching role-specific profile:", error);
        }
      };

      fetchRoleProfile();
    }
  }, [profile, user?.id]);

  // Wrapper functions for React Query mutations
  const signUp = async (
    email: string,
    password: string,
    userData: {
      firstName: string;
      lastName: string;
      phone: string;
      role: "patient" | "doctor" | "admin";
    }
  ) => {
    try {
      await signUpMutation.mutateAsync({ email, password, userData });
      return { error: null };
    } catch (error) {
      return {
        error: error instanceof Error ? error : new Error(String(error)),
      };
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      await signInMutation.mutateAsync({ email, password });
      return { error: null };
    } catch (error) {
      return {
        error: error instanceof Error ? error : new Error(String(error)),
      };
    }
  };

  const signOut = async () => {
    try {
      await signOutMutation.mutateAsync();
      return { error: null };
    } catch (error) {
      return {
        error: error instanceof Error ? error : new Error(String(error)),
      };
    }
  };

  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (!user) return { error: new Error("No user logged in") };

    const { error } = await (supabase as SupabaseClient)
      .from("user_profiles")
      .update(updates)
      .eq("id", user.id);

    if (!error && profile) {
      // Update the profile state manually since we're not using React Query for updates
      // The profile will be refetched on next query
    }

    return { error };
  };

  const updateDoctorProfile = async (updates: Partial<DoctorProfile>) => {
    if (!user) return { error: new Error("No user logged in") };

    const { error } = await (supabase as SupabaseClient)
      .from("doctor_profiles")
      .upsert({ id: user.id, ...updates });

    if (!error) {
      setDoctorProfile((prev) =>
        prev
          ? { ...prev, ...updates }
          : ({ id: user.id, ...updates } as DoctorProfile)
      );
    }

    return { error };
  };

  const updatePatientProfile = async (updates: Partial<PatientProfile>) => {
    if (!user) return { error: new Error("No user logged in") };

    const { error } = await (supabase as SupabaseClient)
      .from("patient_profiles")
      .upsert({ id: user.id, ...updates });

    if (!error) {
      setPatientProfile((prev) =>
        prev
          ? { ...prev, ...updates }
          : ({ id: user.id, ...updates } as PatientProfile)
      );
    }

    return { error };
  };

  const updateAdminProfile = async (updates: Partial<AdminProfile>) => {
    if (!user) return { error: new Error("No user logged in") };

    const { error } = await (supabase as SupabaseClient)
      .from("admin_profiles")
      .upsert({ id: user.id, ...updates });

    if (!error) {
      setAdminProfile((prev) =>
        prev
          ? { ...prev, ...updates }
          : ({ id: user.id, ...updates } as AdminProfile)
      );
    }

    return { error };
  };

  const value = {
    user,
    session,
    profile,
    doctorProfile,
    patientProfile,
    adminProfile,
    loading,
    signUp,
    signIn,
    signOut,
    updateProfile,
    updateDoctorProfile,
    updatePatientProfile,
    updateAdminProfile,
    // Expose React Query mutations for loading states
    signInMutation,
    signUpMutation,
    signOutMutation,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
