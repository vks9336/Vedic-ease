import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Search,
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
  Calendar,
  Heart,
  Leaf,
  Brain,
  Shield,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    {
      value: "all",
      label: "All Questions",
      icon: <HelpCircle className="w-4 h-4" />,
    },
    { value: "general", label: "General", icon: <Users className="w-4 h-4" /> },
    {
      value: "appointments",
      label: "Appointments",
      icon: <Calendar className="w-4 h-4" />,
    },
    {
      value: "treatments",
      label: "Treatments",
      icon: <Heart className="w-4 h-4" />,
    },
    {
      value: "billing",
      label: "Billing",
      icon: <Shield className="w-4 h-4" />,
    },
    {
      value: "technical",
      label: "Technical",
      icon: <Brain className="w-4 h-4" />,
    },
  ];

  const faqData = [
    {
      id: 1,
      category: "general",
      question: "What is Ayurveda and how does it work?",
      answer:
        "Ayurveda is a 5,000-year-old holistic healing system from India that focuses on balancing the body, mind, and spirit. It works by identifying your unique constitution (dosha) and using natural treatments, diet, lifestyle changes, and herbal remedies to restore balance and promote optimal health. Our AI-enhanced platform personalizes these traditional practices for modern wellness needs.",
    },
    {
      id: 2,
      category: "appointments",
      question: "How do I book an appointment?",
      answer:
        "You can book an appointment in several ways: 1) Use our online booking system through your patient dashboard, 2) Call us directly at (555) 123-4567, 3) Use our AI assistant for smart scheduling, or 4) Fill out our contact form. Our AI system will suggest optimal appointment times based on your health patterns and preferences.",
    },
    {
      id: 3,
      category: "appointments",
      question: "Can I reschedule or cancel my appointment?",
      answer:
        "Yes, you can reschedule or cancel appointments up to 24 hours in advance through your patient dashboard, by calling us, or using our AI assistant. For cancellations within 24 hours, please contact us directly. Our AI system will automatically suggest alternative times that work best for your treatment schedule.",
    },
    {
      id: 4,
      category: "treatments",
      question: "What treatments do you offer?",
      answer:
        "We offer comprehensive Ayurvedic treatments including Panchakarma therapy, herbal medicine consultations, meditation and yoga sessions, nutrition counseling, and AI-enhanced wellness monitoring. Each treatment is personalized based on your constitution and health goals. Our practitioners are certified in traditional Ayurvedic medicine with modern healthcare training.",
    },
    {
      id: 5,
      category: "treatments",
      question: "How long does treatment take to show results?",
      answer:
        "Treatment results vary based on individual conditions and adherence to recommendations. Most patients notice initial improvements within 2-4 weeks, with significant benefits typically seen within 2-3 months. Our AI monitoring system tracks your progress and adjusts treatment plans accordingly. Chronic conditions may require longer-term treatment for optimal results.",
    },
    {
      id: 6,
      category: "billing",
      question: "Do you accept insurance?",
      answer:
        "We work with most major insurance providers and offer flexible payment options. Please contact our billing department to verify your coverage. We also offer payment plans and accept HSA/FSA accounts. Our AI system can help estimate costs and coverage for different treatment options.",
    },
    {
      id: 7,
      category: "billing",
      question: "What are your payment options?",
      answer:
        "We accept all major credit cards, health savings accounts (HSA), flexible spending accounts (FSA), and offer payment plans for longer treatments. You can pay online through your patient portal, in-person at our clinic, or set up automatic payments. Our AI system provides transparent pricing and can help you understand treatment costs upfront.",
    },
    {
      id: 8,
      category: "technical",
      question: "How does the AI scheduling work?",
      answer:
        "Our AI scheduling system analyzes your health patterns, treatment history, and preferences to suggest optimal appointment times. It considers factors like your energy levels, medication schedules, and treatment effectiveness patterns. The system can automatically reschedule appointments if needed and sends personalized reminders to improve treatment adherence.",
    },
    {
      id: 9,
      category: "technical",
      question: "Is my health data secure?",
      answer:
        "Yes, we use enterprise-grade security measures to protect your health information. All data is encrypted, stored securely, and complies with HIPAA regulations. Our AI systems are designed with privacy-first principles, and you have full control over your data sharing preferences. We never share your information without explicit consent.",
    },
    {
      id: 10,
      category: "general",
      question: "What should I expect in my first consultation?",
      answer:
        "Your first consultation includes a comprehensive health assessment, constitution analysis (dosha evaluation), discussion of your health goals, and development of a personalized treatment plan. The session typically lasts 60-90 minutes and may include basic health measurements. Our AI system will analyze your responses to provide additional insights and recommendations.",
    },
    {
      id: 11,
      category: "treatments",
      question: "Are Ayurvedic treatments safe?",
      answer:
        "Yes, when administered by qualified practitioners, Ayurvedic treatments are generally safe and have been used for thousands of years. Our practitioners are certified and trained in both traditional Ayurvedic medicine and modern safety protocols. We conduct thorough health assessments before recommending treatments and monitor your progress throughout your care.",
    },
    {
      id: 12,
      category: "general",
      question: "Can I combine Ayurvedic treatment with conventional medicine?",
      answer:
        "Yes, Ayurvedic treatments can often complement conventional medicine. However, it's important to inform all your healthcare providers about any treatments you're receiving. Our practitioners work collaboratively with your existing healthcare team and can help coordinate care. We always recommend consulting with your primary care physician before starting new treatments.",
    },
  ];

  const filteredFAQs = faqData.filter(
    (faq) =>
      (selectedCategory === "all" || faq.category === selectedCategory) &&
      (searchTerm === "" ||
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      description: "Speak directly with our team",
      contact: "+1 (555) 123-4567",
      action: "Call Now",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "Send us your questions",
      contact: "support@ayurheal.com",
      action: "Send Email",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      description: "Chat with our AI assistant",
      contact: "Available 24/7",
      action: "Start Chat",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Book Consultation",
      description: "Schedule a personal meeting",
      contact: "Free 15-min consultation",
      action: "Book Now",
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
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Find answers to common questions about our Ayurvedic treatments,
              AI-enhanced services, and wellness programs
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search questions..."
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
                  className="flex items-center gap-2"
                >
                  {category.icon}
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                {selectedCategory === "all"
                  ? "All Questions"
                  : categories.find((c) => c.value === selectedCategory)?.label}
              </h2>
              <p className="text-muted-foreground">
                {filteredFAQs.length} question
                {filteredFAQs.length !== 1 ? "s" : ""} found
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {filteredFAQs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={`item-${faq.id}`}
                  className="border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="text-xs">
                        {
                          categories.find((c) => c.value === faq.category)
                            ?.label
                        }
                      </Badge>
                      <span className="font-medium">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  No questions found
                </h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-primary-lighter/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl text-muted-foreground">
              Our team is here to help you on your wellness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-wellness transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 p-3 bg-primary-lighter rounded-full w-fit">
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                  <p className="text-muted-foreground mb-3">
                    {method.description}
                  </p>
                  <p className="text-primary font-medium mb-4">
                    {method.contact}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    {method.action}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Quick Tips</h2>
            <p className="text-xl text-muted-foreground">
              Helpful information to get the most out of your wellness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center">
              <div className="mx-auto mb-4 p-3 bg-success/20 rounded-full w-fit">
                <CheckCircle className="w-6 h-6 text-success" />
              </div>
              <h3 className="font-semibold mb-2">Prepare for Your Visit</h3>
              <p className="text-muted-foreground text-sm">
                Bring a list of current medications, recent lab results, and any
                questions you have about your health.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="mx-auto mb-4 p-3 bg-wellness-blue/20 rounded-full w-fit">
                <Clock className="w-6 h-6 text-wellness-blue" />
              </div>
              <h3 className="font-semibold mb-2">Arrive Early</h3>
              <p className="text-muted-foreground text-sm">
                Arrive 10-15 minutes early to complete any necessary paperwork
                and relax before your appointment.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="mx-auto mb-4 p-3 bg-wellness-orange/20 rounded-full w-fit">
                <Heart className="w-6 h-6 text-wellness-orange" />
              </div>
              <h3 className="font-semibold mb-2">Follow Your Plan</h3>
              <p className="text-muted-foreground text-sm">
                Consistency is key to success. Follow your personalized
                treatment plan and track your progress.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
