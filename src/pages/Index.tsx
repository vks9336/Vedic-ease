import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useNavigate } from "react-router-dom";
import {
  Leaf,
  Heart,
  Shield,
  Users,
  Star,
  Award,
  Clock,
  CheckCircle,
  Brain,
  Zap,
  Target,
  Globe,
  BookOpen,
  Stethoscope,
} from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: "Dr. Priya Sharma",
      role: "Chief Ayurvedic Practitioner",
      image: "/api/placeholder/100/100",
      specialty: "Panchakarma & Herbal Medicine",
      experience: "15+ years",
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Senior Wellness Consultant",
      image: "/api/placeholder/100/100",
      specialty: "Stress Management & Meditation",
      experience: "12+ years",
    },
    {
      name: "Dr. Maya Patel",
      role: "Nutrition Specialist",
      image: "/api/placeholder/100/100",
      specialty: "Ayurvedic Nutrition & Lifestyle",
      experience: "10+ years",
    },
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-wellness-orange" />,
      title: "Holistic Healing",
      description:
        "We believe in treating the whole person - mind, body, and spirit - not just symptoms.",
    },
    {
      icon: <Shield className="w-8 h-8 text-success" />,
      title: "Authentic Ayurveda",
      description:
        "Our practitioners are certified in traditional Ayurvedic medicine with modern healthcare training.",
    },
    {
      icon: <Brain className="w-8 h-8 text-wellness-blue" />,
      title: "AI-Enhanced Care",
      description:
        "We combine ancient wisdom with cutting-edge technology for personalized treatment plans.",
    },
    {
      icon: <Users className="w-8 h-8 text-wellness-purple" />,
      title: "Community Focus",
      description:
        "Building a supportive community where patients and practitioners work together for wellness.",
    },
  ];

  const stats = [
    {
      label: "Years of Experience",
      value: "50+",
      icon: <Award className="w-6 h-6" />,
    },
    {
      label: "Patients Helped",
      value: "10,000+",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      label: "Certified Practitioners",
      value: "25+",
      icon: <Stethoscope className="w-6 h-6" />,
    },
    {
      label: "Success Rate",
      value: "94%",
      icon: <Target className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-earth">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-healing text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                AyurHeal
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Bridging ancient Ayurvedic wisdom with modern technology to create
              personalized healing experiences for every individual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="wellness"
                onClick={() => navigate("/register")}
                className="text-lg px-8 py-4"
              >
                Join Our Community
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/contact")}
                className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-wellness transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 p-3 bg-primary-lighter rounded-full w-fit">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-primary-lighter/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Story</h2>
              <p className="text-xl text-muted-foreground">
                Founded on the principle that healing should be accessible,
                personalized, and effective
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-healing rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Ancient Wisdom
                      </h3>
                      <p className="text-muted-foreground">
                        Drawing from 5,000 years of Ayurvedic knowledge, we
                        provide authentic treatments rooted in traditional
                        medicine.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-wellness rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Modern Innovation
                      </h3>
                      <p className="text-muted-foreground">
                        Our AI-powered platform personalizes treatment plans and
                        optimizes scheduling for better patient outcomes.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="bg-white rounded-2xl shadow-wellness p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  To make authentic Ayurvedic healing accessible to everyone
                  through technology, while maintaining the integrity and
                  effectiveness of traditional practices.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span>Personalized treatment plans</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span>Certified practitioners</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span>AI-enhanced scheduling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span>Holistic wellness approach</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at AyurHeal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-wellness transition-all duration-300 border-border/50"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary-lighter rounded-full w-fit">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-primary-lighter/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced practitioners dedicated to your wellness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-wellness transition-all duration-300"
              >
                <CardHeader>
                  <div className="mx-auto mb-4">
                    <Avatar className="w-24 h-24 mx-auto">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="bg-gradient-healing text-white text-xl">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Badge
                      variant="outline"
                      className="bg-primary/10 text-primary"
                    >
                      {member.specialty}
                    </Badge>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{member.experience}</span>
                    </div>
                    <div className="flex justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-wellness-orange text-wellness-orange"
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-healing text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands who have discovered the power of personalized
            Ayurvedic care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="wellness"
              onClick={() => navigate("/register")}
              className="text-lg px-8 py-4"
            >
              Get Started Free
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

export default About;
