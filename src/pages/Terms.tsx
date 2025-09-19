import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  FileText,
  Scale,
  Shield,
  Users,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Clock,
  Mail,
  Phone,
  Heart,
  Brain,
  Settings,
} from "lucide-react";

const Terms = () => {
  const lastUpdated = "January 1, 2024";
  const effectiveDate = "January 1, 2024";

  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: <CheckCircle className="w-6 h-6" />,
      content: [
        "By accessing and using AyurHeal's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.",
        "If you do not agree to these terms, please do not use our services.",
        "These terms apply to all users of our platform, including patients, practitioners, and visitors.",
        "We reserve the right to modify these terms at any time, and your continued use constitutes acceptance of any changes.",
      ],
    },
    {
      id: "services",
      title: "Our Services",
      icon: <Heart className="w-6 h-6" />,
      content: [
        "AyurHeal provides comprehensive Ayurvedic healthcare services, including consultations, treatments, and wellness programs.",
        "Our AI-enhanced platform offers personalized treatment recommendations, appointment scheduling, and health monitoring.",
        "Services are provided by licensed and certified Ayurvedic practitioners and healthcare professionals.",
        "We strive to provide accurate, evidence-based care while respecting traditional Ayurvedic principles.",
        "All services are subject to availability and may vary based on location and practitioner schedules.",
      ],
    },
    {
      id: "user-responsibilities",
      title: "User Responsibilities",
      icon: <Users className="w-6 h-6" />,
      content: [
        "Provide accurate and complete health information during consultations and assessments.",
        "Follow treatment plans and recommendations as prescribed by your healthcare providers.",
        "Inform us of any changes in your health status, medications, or other relevant information.",
        "Respect appointment times and provide adequate notice for cancellations or rescheduling.",
        "Use our platform responsibly and in accordance with applicable laws and regulations.",
        "Maintain the confidentiality of your account credentials and notify us of any unauthorized access.",
      ],
    },
    {
      id: "medical-disclaimer",
      title: "Medical Disclaimer",
      icon: <AlertTriangle className="w-6 h-6" />,
      content: [
        "AyurHeal's services are not intended to replace emergency medical care or conventional medical treatment.",
        "In case of medical emergencies, please contact emergency services immediately (911).",
        "Our AI recommendations are tools to assist practitioners and should not replace professional medical judgment.",
        "Individual results may vary, and we cannot guarantee specific health outcomes.",
        "Always consult with your primary care physician before making significant changes to your healthcare routine.",
        "Some treatments may not be suitable for all individuals, and we reserve the right to refuse service when appropriate.",
      ],
    },
    {
      id: "ai-services",
      title: "AI-Enhanced Services",
      icon: <Brain className="w-6 h-6" />,
      content: [
        "Our AI systems are designed to assist healthcare providers and enhance patient care.",
        "AI recommendations are based on available data and should be reviewed by qualified practitioners.",
        "We continuously improve our AI algorithms while maintaining patient privacy and data security.",
        "Users may opt out of certain AI-enhanced features while maintaining access to core services.",
        "AI-generated insights are supplementary and do not replace professional medical advice.",
        "We are not responsible for decisions made solely based on AI recommendations without practitioner oversight.",
      ],
    },
    {
      id: "appointments",
      title: "Appointments and Scheduling",
      icon: <Calendar className="w-6 h-6" />,
      content: [
        "Appointments can be scheduled through our online platform, by phone, or through our AI assistant.",
        "We require 24-hour notice for appointment cancellations to avoid cancellation fees.",
        "Late arrivals may result in shortened appointment times or rescheduling.",
        "Our AI scheduling system may automatically suggest optimal appointment times based on your health patterns.",
        "Emergency appointments are available for urgent health concerns.",
        "We reserve the right to reschedule appointments due to practitioner availability or other circumstances.",
      ],
    },
    {
      id: "payment",
      title: "Payment and Billing",
      icon: <Shield className="w-6 h-6" />,
      content: [
        "Payment is due at the time of service unless other arrangements have been made.",
        "We accept most major insurance plans and will assist with insurance claims.",
        "For services not covered by insurance, payment plans may be available.",
        "Cancellation fees may apply for appointments cancelled with less than 24-hour notice.",
        "We use secure payment processing systems to protect your financial information.",
        "Refunds are subject to our refund policy and may require approval from the treating practitioner.",
      ],
    },
    {
      id: "privacy",
      title: "Privacy and Data Protection",
      icon: <Shield className="w-6 h-6" />,
      content: [
        "We are committed to protecting your privacy and maintaining the confidentiality of your health information.",
        "All data is encrypted and stored securely in compliance with HIPAA and other applicable regulations.",
        "We do not sell or share your personal health information with third parties without your consent.",
        "Our AI systems are designed with privacy-first principles and use anonymized data when possible.",
        "You have the right to access, correct, or delete your personal information as permitted by law.",
        "For detailed information about our privacy practices, please review our Privacy Policy.",
      ],
    },
    {
      id: "limitations",
      title: "Limitations of Liability",
      icon: <Scale className="w-6 h-6" />,
      content: [
        "AyurHeal's liability is limited to the cost of services provided.",
        "We are not liable for indirect, incidental, or consequential damages.",
        "Our AI systems are provided 'as is' and we make no warranties about their accuracy or reliability.",
        "We are not responsible for decisions made by users based on information provided through our platform.",
        "Liability limitations do not apply to gross negligence or willful misconduct.",
        "Some jurisdictions may not allow limitation of liability, so these limitations may not apply to you.",
      ],
    },
    {
      id: "termination",
      title: "Termination of Services",
      icon: <Clock className="w-6 h-6" />,
      content: [
        "Either party may terminate the service relationship at any time with appropriate notice.",
        "We may suspend or terminate services for violations of these terms or inappropriate behavior.",
        "Upon termination, you remain responsible for any outstanding payments or obligations.",
        "We will provide reasonable notice before terminating services, except in cases of immediate safety concerns.",
        "Termination does not affect your right to access your health records as required by law.",
        "We may retain certain information as required by law or for legitimate business purposes.",
      ],
    },
  ];

  const contactInfo = [
    {
      title: "Legal Department",
      name: "Legal Team",
      email: "legal@ayurheal.com",
      phone: "+1 (555) 123-4567",
    },
    {
      title: "Patient Relations",
      name: "Sarah Johnson",
      email: "support@ayurheal.com",
      phone: "+1 (555) 123-4568",
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
              Terms of{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Please read these terms carefully before using our Ayurvedic
              healthcare services and AI-enhanced wellness platform
            </p>
            <div className="flex items-center justify-center gap-6 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Effective: {effectiveDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Last updated: {lastUpdated}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-wellness">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-6 h-6" />
                  Agreement Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  These Terms of Service ("Terms") govern your use of AyurHeal's
                  healthcare services, including our AI-enhanced wellness
                  platform, mobile applications, and related services
                  (collectively, the "Services"). By using our Services, you
                  agree to be bound by these Terms.
                </p>
                <p className="text-muted-foreground">
                  These Terms are designed to protect both you and AyurHeal
                  while ensuring the highest quality of care and service. We
                  encourage you to read them carefully and contact us if you
                  have any questions.
                </p>
                <div className="flex items-center gap-2 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">
                    These terms are effective as of {effectiveDate}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-primary-lighter/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section) => (
              <Card key={section.id} className="shadow-wellness">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {section.icon}
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.content.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Questions About These Terms?
              </h2>
              <p className="text-xl text-muted-foreground">
                Contact our legal team for clarification or assistance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-wellness transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 p-3 bg-primary-lighter rounded-full w-fit">
                      <Settings className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {contact.title}
                    </h3>
                    <p className="text-primary font-medium mb-4">
                      {contact.name}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <Mail className="w-4 h-4" />
                        <span>{contact.email}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <Phone className="w-4 h-4" />
                        <span>{contact.phone}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Notices */}
      <section className="py-16 bg-gradient-healing text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Important Legal Notices
              </h2>
              <p className="text-xl opacity-90">
                Key legal information about your rights and our obligations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-300 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Governing Law</h3>
                      <p className="text-sm opacity-90">
                        These terms are governed by the laws of the state where
                        AyurHeal is incorporated, and any disputes will be
                        resolved in the appropriate courts of that jurisdiction.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <FileText className="w-6 h-6 text-blue-300 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Severability</h3>
                      <p className="text-sm opacity-90">
                        If any provision of these terms is found to be
                        unenforceable, the remaining provisions will continue to
                        be valid and enforceable.
                      </p>
                    </div>
                  </div>
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

export default Terms;
