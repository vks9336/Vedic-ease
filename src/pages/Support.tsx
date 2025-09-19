import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Search,
  FileText,
  Video,
  BookOpen,
  Users,
  Settings,
  AlertCircle,
  Star,
  ArrowRight,
  Send,
  Calendar,
  MapPin,
  Headphones,
  Zap,
  Shield,
  Heart,
  Brain,
  Leaf,
  Award,
} from "lucide-react";

const Support = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [ticketForm, setTicketForm] = useState({
    subject: "",
    category: "",
    priority: "",
    description: "",
    email: "",
    name: "",
  });

  const categories = [
    { value: "all", label: "All Topics" },
    { value: "technical", label: "Technical Issues" },
    { value: "billing", label: "Billing & Payments" },
    { value: "appointments", label: "Appointments" },
    { value: "account", label: "Account Issues" },
    { value: "features", label: "Features & Requests" },
    { value: "general", label: "General Questions" },
  ];

  const faqs = [
    {
      id: 1,
      question: "How do I reset my password?",
      answer:
        "You can reset your password by clicking the 'Forgot Password' link on the login page. Enter your email address and follow the instructions sent to your email.",
      category: "account",
      helpful: 89,
    },
    {
      id: 2,
      question: "How do I book an appointment?",
      answer:
        "You can book an appointment by visiting our 'Book Appointment' page, selecting your preferred doctor, choosing a date and time, and filling out the required information.",
      category: "appointments",
      helpful: 156,
    },
    {
      id: 3,
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, debit cards, PayPal, and most insurance plans. We also accept HSA and FSA payments for eligible services.",
      category: "billing",
      helpful: 124,
    },
    {
      id: 4,
      question: "How does AI scheduling work?",
      answer:
        "Our AI scheduling system analyzes your health patterns, preferences, and optimal treatment times to automatically suggest the best appointment slots for your needs.",
      category: "features",
      helpful: 98,
    },
    {
      id: 5,
      question: "Can I cancel or reschedule my appointment?",
      answer:
        "Yes, you can cancel or reschedule appointments up to 24 hours in advance through your patient dashboard or by calling our support team.",
      category: "appointments",
      helpful: 167,
    },
    {
      id: 6,
      question: "Is my health information secure?",
      answer:
        "Yes, we use enterprise-grade security measures and are HIPAA compliant. All data is encrypted and stored securely with strict access controls.",
      category: "technical",
      helpful: 145,
    },
    {
      id: 7,
      question: "How do I update my profile information?",
      answer:
        "You can update your profile information by logging into your account, going to the 'Profile' section, and making the necessary changes.",
      category: "account",
      helpful: 76,
    },
    {
      id: 8,
      question: "What if I have a technical issue?",
      answer:
        "For technical issues, please contact our support team through live chat, email, or phone. We also have a comprehensive troubleshooting guide in our help center.",
      category: "technical",
      helpful: 112,
    },
  ];

  const supportMethods = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "Available 24/7",
      responseTime: "Usually within 2 minutes",
      action: "Start Chat",
      color: "text-blue-500",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone Support",
      description: "Speak directly with our support specialists",
      availability: "Mon-Fri 8AM-8PM EST",
      responseTime: "Immediate",
      action: "Call Now",
      color: "text-green-500",
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Support",
      description: "Send us a detailed message",
      availability: "24/7",
      responseTime: "Within 4 hours",
      action: "Send Email",
      color: "text-purple-500",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Call",
      description: "Schedule a video consultation",
      availability: "By appointment",
      responseTime: "Scheduled",
      action: "Schedule Call",
      color: "text-orange-500",
    },
  ];

  const filteredFAQs = faqs.filter(
    (faq) =>
      (selectedCategory === "all" || faq.category === selectedCategory) &&
      (searchTerm === "" ||
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Support ticket submitted:", ticketForm);
    // TODO: Implement ticket submission logic
  };

  const handleInputChange = (field: string, value: string) => {
    setTicketForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-earth">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-healing text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              How Can We{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Help?
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Get the support you need to make the most of your AyurHeal
              experience
            </p>
          </div>
        </div>
      </section>

      {/* Support Methods */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get Support</h2>
            <p className="text-xl text-muted-foreground">
              Choose the support method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportMethods.map((method, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-wellness transition-all duration-300 cursor-pointer"
              >
                <CardContent className="p-6">
                  <div
                    className={`mx-auto mb-4 p-3 bg-primary-lighter rounded-full w-fit ${method.color}`}
                  >
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {method.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{method.availability}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Zap className="w-4 h-4" />
                      <span>{method.responseTime}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    {method.action}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-primary-lighter/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Find quick answers to common questions
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={
                    selectedCategory === category.value ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredFAQs.map((faq) => (
              <Card
                key={faq.id}
                className="hover:shadow-wellness transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-xs">
                      {categories.find((c) => c.value === faq.category)?.label}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="w-4 h-4" />
                      <span>{faq.helpful} helpful</span>
                    </div>
                  </div>
                  <h3 className="font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No FAQs found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-wellness">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <Send className="w-6 h-6" />
                  Submit a Support Ticket
                </CardTitle>
                <p className="text-muted-foreground">
                  Can't find what you're looking for? Send us a message and
                  we'll get back to you
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleTicketSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={ticketForm.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={ticketForm.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      value={ticketForm.subject}
                      onChange={(e) =>
                        handleInputChange("subject", e.target.value)
                      }
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select
                        value={ticketForm.category}
                        onValueChange={(value) =>
                          handleInputChange("category", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.slice(1).map((category) => (
                            <SelectItem
                              key={category.value}
                              value={category.value}
                            >
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="priority">Priority</Label>
                      <Select
                        value={ticketForm.priority}
                        onValueChange={(value) =>
                          handleInputChange("priority", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="urgent">Urgent</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={ticketForm.description}
                      onChange={(e) =>
                        handleInputChange("description", e.target.value)
                      }
                      placeholder="Please provide as much detail as possible about your issue or question..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" variant="healing">
                    <Send className="w-5 h-5 mr-2" />
                    Submit Ticket
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Help Resources */}
      <section className="py-16 bg-primary-lighter/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Help Resources</h2>
            <p className="text-xl text-muted-foreground">
              Additional resources to help you get the most out of AyurHeal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-wellness transition-all duration-300">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 p-3 bg-primary-lighter rounded-full w-fit">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">User Guide</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Comprehensive guide to using all AyurHeal features
                </p>
                <Button variant="outline" size="sm">
                  Read Guide
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-wellness transition-all duration-300">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 p-3 bg-primary-lighter rounded-full w-fit">
                  <Video className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Video Tutorials</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Step-by-step video tutorials for common tasks
                </p>
                <Button variant="outline" size="sm">
                  Watch Videos
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-wellness transition-all duration-300">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 p-3 bg-primary-lighter rounded-full w-fit">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Community Forum</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Connect with other users and share experiences
                </p>
                <Button variant="outline" size="sm">
                  Join Forum
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
              <p className="text-xl text-muted-foreground">
                Get in touch with our support team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 p-3 bg-primary-lighter rounded-full w-fit">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-primary font-medium mb-2">
                    +1 (555) 123-4567
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Mon-Fri 8AM-8PM EST
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 p-3 bg-primary-lighter rounded-full w-fit">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-primary font-medium mb-2">
                    support@ayurheal.com
                  </p>
                  <p className="text-sm text-muted-foreground">24/7 support</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 p-3 bg-primary-lighter rounded-full w-fit">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">Address</h3>
                  <p className="text-primary font-medium mb-2">
                    123 Wellness Street
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Healing City, HC 12345
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support;
