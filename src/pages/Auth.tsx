import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Leaf, Mail, Lock, User, Phone, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

interface AuthProps {
  mode: "login" | "register";
}

export const Auth: React.FC<AuthProps> = ({ mode }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phone: "",
    role: "patient" as "admin" | "doctor" | "patient",
  });

  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { signIn, signUp, user, profile, signInMutation, signUpMutation } =
    useAuth();

  // Use React Query loading states
  const loading = signInMutation.isPending || signUpMutation.isPending;
  const isLogin = mode === "login";

  // Redirect if already logged in
  React.useEffect(() => {
    if (user && profile) {
      const roleRoutes = {
        admin: "/admin/dashboard",
        doctor: "/doctor/dashboard",
        patient: "/patient/dashboard",
      };
      navigate(roleRoutes[profile.role]);
    }
  }, [user, profile, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      if (isLogin) {
        // Handle login
        console.log("Starting sign-in process...");
        const { error } = await signIn(formData.email, formData.password);

        if (error) {
          console.error("Sign-in error:", error);
          setError(error.message);
        } else {
          console.log("Sign-in successful, waiting for navigation...");
          // Navigation will be handled by the useEffect hook
        }
      } else {
        // Handle registration
        if (formData.password !== formData.confirmPassword) {
          setError("Passwords do not match");
          toast.error("Passwords do not match");
          return;
        }

        if (formData.password.length < 6) {
          setError("Password must be at least 6 characters long");
          toast.error("Password must be at least 6 characters long");
          return;
        }

        const { error } = await signUp(formData.email, formData.password, {
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          role: formData.role,
        });

        if (error) {
          setError(error.message);
        } else {
          navigate("/login");
        }
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred";
      setError(errorMessage);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-earth">
      <Header />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="shadow-wellness border-border/50">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-healing rounded-full flex items-center justify-center mb-4">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">
                  {isLogin ? "Welcome Back" : "Join AyurHeal"}
                </CardTitle>
                <p className="text-muted-foreground">
                  {isLogin
                    ? "Sign in to access your wellness dashboard"
                    : "Create your account to start your healing journey"}
                </p>
              </CardHeader>

              <CardContent>
                {error && (
                  <div className="mb-4 p-3 bg-destructive/10 border border-destructive/20 rounded-md flex items-center gap-2 text-destructive">
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-sm">{error}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {!isLogin && (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                            <Input
                              id="firstName"
                              placeholder="John"
                              className="pl-10"
                              value={formData.firstName}
                              onChange={(e) =>
                                handleInputChange("firstName", e.target.value)
                              }
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                            <Input
                              id="lastName"
                              placeholder="Doe"
                              className="pl-10"
                              value={formData.lastName}
                              onChange={(e) =>
                                handleInputChange("lastName", e.target.value)
                              }
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+1 (555) 123-4567"
                            className="pl-10"
                            value={formData.phone}
                            onChange={(e) =>
                              handleInputChange("phone", e.target.value)
                            }
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="role">I am a...</Label>
                        <Select
                          value={formData.role}
                          onValueChange={(value) =>
                            handleInputChange("role", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="patient">Patient</SelectItem>
                            <SelectItem value="doctor">
                              Ayurvedic Practitioner
                            </SelectItem>
                            <SelectItem value="admin">Administrator</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="pl-10"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="pl-10"
                        value={formData.password}
                        onChange={(e) =>
                          handleInputChange("password", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  {!isLogin && (
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="confirmPassword"
                          type="password"
                          placeholder="Confirm your password"
                          className="pl-10"
                          value={formData.confirmPassword}
                          onChange={(e) =>
                            handleInputChange("confirmPassword", e.target.value)
                          }
                          required
                        />
                      </div>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full"
                    variant="healing"
                    disabled={loading}
                  >
                    {loading
                      ? "Please wait..."
                      : isLogin
                      ? "Sign In"
                      : "Create Account"}
                  </Button>

                  <div className="text-center text-sm text-muted-foreground">
                    {isLogin ? (
                      <>
                        Don't have an account?{" "}
                        <button
                          type="button"
                          className="text-primary hover:underline font-medium"
                          onClick={() => navigate("/register")}
                        >
                          Sign up
                        </button>
                      </>
                    ) : (
                      <>
                        Already have an account?{" "}
                        <button
                          type="button"
                          className="text-primary hover:underline font-medium"
                          onClick={() => navigate("/login")}
                        >
                          Sign in
                        </button>
                      </>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
