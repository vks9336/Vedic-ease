import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useNavigate } from "react-router-dom";
import {
  Stethoscope,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Shield,
  CheckCircle,
  ArrowRight,
  Users,
  Calendar,
  Brain,
  Award,
  Heart,
  Leaf,
  Clock,
  MessageCircle,
  Phone,
  FileText,
  TrendingUp,
} from "lucide-react";

const DoctorLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Doctor login submitted:", formData);
    // TODO: Implement doctor login logic
    navigate("/doctor/dashboard");
  };

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Patient Management",
      description: "Comprehensive patient records and treatment tracking",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Smart Scheduling",
      description: "AI-optimized appointment scheduling and management",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Insights",
      description: "Advanced analytics and treatment recommendations",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Digital Records",
      description: "Secure, HIPAA-compliant patient documentation",
    },
  ];

  const stats = [
    {
      label: "Active Practitioners",
      value: "150+",
      icon: <Stethoscope className="w-5 h-5" />,
    },
    {
      label: "Patients Served",
      value: "10,000+",
      icon: <Users className="w-5 h-5" />,
    },
    {
      label: "Success Rate",
      value: "94%",
      icon: <Award className="w-5 h-5" />,
    },
    { label: "AI Accuracy", value: "98%", icon: <Brain className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-earth">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-healing text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Doctor{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Portal
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Access your AI-enhanced practice management dashboard and provide
              exceptional Ayurvedic care to your patients
            </p>
          </div>
        </div>
      </section>

      {/* Login Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Login Form */}
              <div className="max-w-md mx-auto lg:mx-0">
                <Card className="shadow-wellness">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-primary-lighter rounded-full w-fit">
                      <Stethoscope className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">
                      Welcome Back, Doctor
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Sign in to access your practice dashboard
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="doctor@example.com"
                            value={formData.email}
                            onChange={(e) =>
                              handleInputChange("email", e.target.value)
                            }
                            className="pl-10"
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
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={(e) =>
                              handleInputChange("password", e.target.value)
                            }
                            className="pl-10 pr-10"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                          >
                            {showPassword ? (
                              <EyeOff className="w-4 h-4" />
                            ) : (
                              <Eye className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="rememberMe"
                            checked={formData.rememberMe}
                            onCheckedChange={(checked) =>
                              handleInputChange(
                                "rememberMe",
                                checked as boolean
                              )
                            }
                          />
                          <Label htmlFor="rememberMe" className="text-sm">
                            Remember me
                          </Label>
                        </div>
                        <Button variant="link" className="text-sm p-0 h-auto">
                          Forgot password?
                        </Button>
                      </div>

                      <Button
                        type="submit"
                        className="w-full"
                        variant="healing"
                        size="lg"
                      >
                        <Stethoscope className="w-5 h-5 mr-2" />
                        Sign In to Dashboard
                      </Button>
                    </form>

                    <div className="mt-6 text-center">
                      <p className="text-sm text-muted-foreground">
                        Don't have an account?{" "}
                        <Button
                          variant="link"
                          className="p-0 h-auto"
                          onClick={() => navigate("/join-network")}
                        >
                          Join our network
                        </Button>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Features and Benefits */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    Powerful Practice Management
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Our AI-enhanced platform helps you provide better care while
                    streamlining your practice operations
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-wellness transition-all duration-300"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-primary-lighter rounded-lg">
                            {feature.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">
                              {feature.title}
                            </h3>
                            <p className="text-muted-foreground text-sm">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <Card key={index} className="text-center">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-center mb-2">
                          {stat.icon}
                        </div>
                        <div className="text-2xl font-bold text-primary">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-primary-lighter/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Practitioners Choose AyurHeal
            </h2>
            <p className="text-xl text-muted-foreground">
              Join a growing network of successful Ayurvedic practitioners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-wellness transition-all duration-300">
              <CardContent className="p-8">
                <div className="mx-auto mb-6 p-4 bg-success/20 rounded-full w-fit">
                  <TrendingUp className="w-8 h-8 text-success" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Increased Efficiency
                </h3>
                <p className="text-muted-foreground">
                  AI-powered scheduling and patient management tools help you
                  see more patients while providing better care
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-wellness transition-all duration-300">
              <CardContent className="p-8">
                <div className="mx-auto mb-6 p-4 bg-primary/20 rounded-full w-fit">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  AI-Enhanced Insights
                </h3>
                <p className="text-muted-foreground">
                  Get personalized treatment recommendations and patient
                  insights powered by advanced AI analytics
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-wellness transition-all duration-300">
              <CardContent className="p-8">
                <div className="mx-auto mb-6 p-4 bg-wellness-orange/20 rounded-full w-fit">
                  <Heart className="w-8 h-8 text-wellness-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Better Patient Outcomes
                </h3>
                <p className="text-muted-foreground">
                  Our platform helps you track patient progress and optimize
                  treatments for improved health outcomes
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-healing text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our network of successful practitioners and start providing
            AI-enhanced Ayurvedic care to your patients
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="wellness"
              onClick={() => navigate("/join-network")}
              className="text-lg px-8 py-4"
            >
              Join Our Network
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/contact")}
              className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DoctorLogin;
