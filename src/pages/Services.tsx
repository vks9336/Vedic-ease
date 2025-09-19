import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useNavigate } from "react-router-dom";
import {
  Leaf,
  Heart,
  Brain,
  Clock,
  Users,
  Star,
  CheckCircle,
  Calendar,
  MessageCircle,
  Zap,
  Shield,
  Award,
  BookOpen,
  Stethoscope,
  Activity,
  Target,
} from "lucide-react";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Stethoscope className="w-8 h-8 text-wellness-blue" />,
      title: "Panchakarma Therapy",
      description:
        "Complete detoxification and rejuvenation therapy using traditional Ayurvedic techniques",
      duration: "7-21 days",
      price: "From $299",
      features: [
        "Complete body detox",
        "Stress relief",
        "Improved digestion",
        "Enhanced immunity",
      ],
      popular: true,
    },
    {
      icon: <Leaf className="w-8 h-8 text-success" />,
      title: "Herbal Medicine",
      description:
        "Personalized herbal treatments based on your unique constitution and health needs",
      duration: "3-6 months",
      price: "From $89/month",
      features: [
        "Custom formulations",
        "Natural healing",
        "No side effects",
        "Long-term wellness",
      ],
      popular: false,
    },
    {
      icon: <Brain className="w-8 h-8 text-wellness-orange" />,
      title: "Meditation & Yoga",
      description:
        "Mind-body healing through ancient practices combined with modern wellness techniques",
      duration: "Ongoing",
      price: "From $49/session",
      features: [
        "Stress reduction",
        "Mental clarity",
        "Physical flexibility",
        "Spiritual growth",
      ],
      popular: true,
    },
    {
      icon: <Heart className="w-8 h-8 text-wellness-purple" />,
      title: "Nutrition Counseling",
      description:
        "Ayurvedic dietary guidance tailored to your body type and health goals",
      duration: "1-3 months",
      price: "From $79/session",
      features: [
        "Personalized diet plans",
        "Seasonal adjustments",
        "Digestive health",
        "Weight management",
      ],
      popular: false,
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "AI-Enhanced Scheduling",
      description:
        "Smart appointment scheduling optimized for your health patterns and preferences",
      duration: "Ongoing",
      price: "Included",
      features: [
        "Optimal timing",
        "Auto-rescheduling",
        "Progress tracking",
        "Personalized reminders",
      ],
      popular: true,
    },
    {
      icon: <Shield className="w-8 h-8 text-success" />,
      title: "Wellness Monitoring",
      description:
        "Continuous health tracking with AI-powered insights and recommendations",
      duration: "Ongoing",
      price: "From $29/month",
      features: [
        "Health metrics",
        "AI analysis",
        "Progress reports",
        "Preventive care",
      ],
      popular: false,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Comprehensive health assessment and constitution analysis",
      icon: <Users className="w-6 h-6" />,
    },
    {
      step: "02",
      title: "Personalized Plan",
      description: "Custom treatment plan designed for your specific needs",
      icon: <Target className="w-6 h-6" />,
    },
    {
      step: "03",
      title: "Treatment Sessions",
      description: "Regular therapy sessions with certified practitioners",
      icon: <Stethoscope className="w-6 h-6" />,
    },
    {
      step: "04",
      title: "Progress Tracking",
      description: "AI-powered monitoring and continuous optimization",
      icon: <Activity className="w-6 h-6" />,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      service: "Panchakarma Therapy",
      rating: 5,
      content:
        "The Panchakarma treatment was life-changing. I feel rejuvenated and my digestive issues are completely resolved.",
      image: "/api/placeholder/60/60",
    },
    {
      name: "Michael Chen",
      service: "Meditation & Yoga",
      rating: 5,
      content:
        "The meditation sessions helped me manage stress better than any medication. Highly recommend!",
      image: "/api/placeholder/60/60",
    },
    {
      name: "Emily Davis",
      service: "Herbal Medicine",
      rating: 5,
      content:
        "The personalized herbal treatment plan worked wonders for my sleep issues. Natural and effective.",
      image: "/api/placeholder/60/60",
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
              Our{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Comprehensive Ayurvedic treatments and modern wellness solutions
              designed to restore your natural balance and vitality
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="wellness"
                onClick={() => navigate("/register")}
                className="text-lg px-8 py-4"
              >
                Book Consultation
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
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Treatment Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From traditional Ayurvedic therapies to AI-enhanced wellness
              monitoring, we offer comprehensive healing solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="relative hover:shadow-wellness transition-all duration-300 border-border/50 group"
              >
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-healing text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary-lighter rounded-full w-fit group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Duration:
                      </span>
                      <span className="font-medium">{service.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Starting from:
                      </span>
                      <span className="font-bold text-primary text-lg">
                        {service.price}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">What's included:</h4>
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CheckCircle className="w-4 h-4 text-success" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full mt-6" variant="healing">
                      Book This Service
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-primary-lighter/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Treatment Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to healing that combines ancient wisdom with
              modern technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-wellness transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 p-3 bg-gradient-healing rounded-full w-fit">
                    {step.icon}
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real experiences from people who have transformed their health
              with our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-wellness transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-wellness-orange text-wellness-orange"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-healing rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.service}
                      </p>
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
            Book a consultation with our certified practitioners and discover
            the perfect treatment plan for your wellness goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="wellness"
              onClick={() => navigate("/register")}
              className="text-lg px-8 py-4"
            >
              Book Free Consultation
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
      </section>

      <Footer />
    </div>
  );
};

export default Services;
