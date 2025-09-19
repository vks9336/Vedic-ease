import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Calendar,
  Users,
  Heart,
  Leaf,
  Brain,
  Shield,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // TODO: Implement form submission
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      description: "Call us for immediate assistance",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["contact@ayurheal.com", "support@ayurheal.com"],
      description: "Send us an email anytime",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: ["123 Wellness Street", "Healing City, HC 12345"],
      description: "Visit our wellness center",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: ["Mon-Fri: 8:00 AM - 8:00 PM", "Sat-Sun: 9:00 AM - 6:00 PM"],
      description: "We're here to help you",
    },
  ];

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "appointment", label: "Book Appointment" },
    { value: "treatment", label: "Treatment Information" },
    { value: "emergency", label: "Emergency Consultation" },
    { value: "feedback", label: "Feedback & Suggestions" },
    { value: "partnership", label: "Partnership Opportunities" },
  ];

  const teamMembers = [
    {
      name: "Dr. Priya Sharma",
      role: "Chief Ayurvedic Practitioner",
      email: "priya@ayurheal.com",
      phone: "+1 (555) 123-4567",
      specialty: "Panchakarma & Herbal Medicine",
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Senior Wellness Consultant",
      email: "rajesh@ayurheal.com",
      phone: "+1 (555) 123-4568",
      specialty: "Stress Management & Meditation",
    },
    {
      name: "Dr. Maya Patel",
      role: "Nutrition Specialist",
      email: "maya@ayurheal.com",
      phone: "+1 (555) 123-4569",
      specialty: "Ayurvedic Nutrition & Lifestyle",
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
              Get in{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              We're here to help you on your wellness journey. Reach out to us
              for consultations, questions, or to schedule your healing
              sessions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-wellness transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 p-3 bg-primary-lighter rounded-full w-fit">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground mb-1">
                      {detail}
                    </p>
                  ))}
                  <p className="text-sm text-primary mt-2">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Team */}
      <section className="py-20 bg-primary-lighter/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-wellness">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-6 h-6" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <Select
                        value={formData.inquiryType}
                        onValueChange={(value) =>
                          handleInputChange("inquiryType", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="How can we help you?"
                      value={formData.subject}
                      onChange={(e) =>
                        handleInputChange("subject", e.target.value)
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your wellness goals or any questions you have..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" variant="healing">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Team Members */}
            <div className="space-y-6">
              <Card className="shadow-wellness">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-6 h-6" />
                    Meet Our Team
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {teamMembers.map((member, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 border border-border rounded-lg hover:bg-primary-lighter/30 transition-colors"
                      >
                        <div className="w-12 h-12 bg-gradient-healing rounded-full flex items-center justify-center text-white font-bold">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">{member.name}</h3>
                          <p className="text-sm text-primary font-medium">
                            {member.role}
                          </p>
                          <p className="text-xs text-muted-foreground mb-2">
                            {member.specialty}
                          </p>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm">
                              <Mail className="w-3 h-3" />
                              <span>{member.email}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Phone className="w-3 h-3" />
                              <span>{member.phone}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="shadow-wellness">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-6 h-6" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book a Consultation
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Live Chat Support
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Phone className="w-4 h-4 mr-2" />
                      Emergency Contact
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">
                How do I book an appointment?
              </h3>
              <p className="text-muted-foreground text-sm">
                You can book an appointment through our online portal, by
                calling us, or by filling out the contact form above. We'll get
                back to you within 24 hours.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">
                What should I expect in my first consultation?
              </h3>
              <p className="text-muted-foreground text-sm">
                Your first consultation includes a comprehensive health
                assessment, constitution analysis, and personalized treatment
                plan development.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Do you accept insurance?</h3>
              <p className="text-muted-foreground text-sm">
                We work with most major insurance providers. Please contact us
                to verify your coverage and discuss payment options.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">
                How long does treatment take?
              </h3>
              <p className="text-muted-foreground text-sm">
                Treatment duration varies based on your condition and goals.
                Most patients see significant improvement within 2-4 weeks.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
