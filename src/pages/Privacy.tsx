import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Shield,
  Lock,
  Eye,
  Database,
  Users,
  Mail,
  Phone,
  Calendar,
  CheckCircle,
  AlertTriangle,
  FileText,
  Settings,
} from "lucide-react";

const Privacy = () => {
  const lastUpdated = "January 1, 2024";

  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: <Database className="w-6 h-6" />,
      content: [
        {
          subtitle: "Personal Information",
          details: [
            "Name, email address, phone number, and date of birth",
            "Health information, medical history, and treatment preferences",
            "Payment information and insurance details",
            "Emergency contact information",
          ],
        },
        {
          subtitle: "Usage Information",
          details: [
            "Appointment history and treatment records",
            "AI interaction data and wellness metrics",
            "Device information and browser type",
            "IP address and location data (with consent)",
          ],
        },
        {
          subtitle: "Health Data",
          details: [
            "Symptoms, conditions, and treatment responses",
            "Vital signs and wellness measurements",
            "Medication history and allergies",
            "Lifestyle and dietary information",
          ],
        },
      ],
    },
    {
      id: "data-usage",
      title: "How We Use Your Information",
      icon: <Settings className="w-6 h-6" />,
      content: [
        {
          subtitle: "Healthcare Services",
          details: [
            "Providing personalized Ayurvedic treatments",
            "Scheduling appointments and managing care",
            "Monitoring treatment progress and outcomes",
            "Coordinating with healthcare providers",
          ],
        },
        {
          subtitle: "AI Enhancement",
          details: [
            "Improving treatment recommendations",
            "Optimizing appointment scheduling",
            "Analyzing health patterns and trends",
            "Personalizing wellness insights",
          ],
        },
        {
          subtitle: "Communication",
          details: [
            "Sending appointment reminders and updates",
            "Providing health education and tips",
            "Responding to inquiries and support requests",
            "Sharing important health information",
          ],
        },
      ],
    },
    {
      id: "data-sharing",
      title: "Information Sharing",
      icon: <Users className="w-6 h-6" />,
      content: [
        {
          subtitle: "Healthcare Providers",
          details: [
            "Your treating physicians and practitioners",
            "Specialists and referral providers",
            "Emergency medical personnel (when necessary)",
            "Insurance companies (for billing purposes)",
          ],
        },
        {
          subtitle: "Service Providers",
          details: [
            "Secure cloud storage providers",
            "Payment processing services",
            "Communication and notification services",
            "Analytics and AI processing platforms",
          ],
        },
        {
          subtitle: "Legal Requirements",
          details: [
            "When required by law or court order",
            "To protect patient safety and public health",
            "In case of medical emergencies",
            "To prevent fraud or abuse",
          ],
        },
      ],
    },
    {
      id: "data-security",
      title: "Data Security",
      icon: <Lock className="w-6 h-6" />,
      content: [
        {
          subtitle: "Technical Safeguards",
          details: [
            "End-to-end encryption for all data transmission",
            "Secure servers with regular security updates",
            "Multi-factor authentication for access",
            "Regular security audits and penetration testing",
          ],
        },
        {
          subtitle: "Administrative Safeguards",
          details: [
            "Strict access controls and user authentication",
            "Regular staff training on privacy practices",
            "Background checks for all personnel",
            "Incident response and breach notification procedures",
          ],
        },
        {
          subtitle: "Physical Safeguards",
          details: [
            "Secure data centers with restricted access",
            "Encrypted storage devices and backups",
            "Secure disposal of physical records",
            "Environmental controls and monitoring",
          ],
        },
      ],
    },
    {
      id: "your-rights",
      title: "Your Rights",
      icon: <CheckCircle className="w-6 h-6" />,
      content: [
        {
          subtitle: "Access and Control",
          details: [
            "Request copies of your health records",
            "Correct inaccurate or incomplete information",
            "Request restrictions on data use or disclosure",
            "Obtain a list of entities with whom we've shared your data",
          ],
        },
        {
          subtitle: "Privacy Choices",
          details: [
            "Opt out of certain communications",
            "Control AI data processing preferences",
            "Request data portability",
            "Withdraw consent for specific uses",
          ],
        },
        {
          subtitle: "Complaints and Appeals",
          details: [
            "File complaints about privacy practices",
            "Request review of denied access requests",
            "Appeal decisions about your data",
            "Contact our Privacy Officer directly",
          ],
        },
      ],
    },
  ];

  const contactInfo = [
    {
      title: "Privacy Officer",
      name: "Dr. Sarah Johnson",
      email: "privacy@ayurheal.com",
      phone: "+1 (555) 123-4567",
    },
    {
      title: "Data Protection Officer",
      name: "Michael Chen",
      email: "dpo@ayurheal.com",
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
              Privacy{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Your privacy and data security are fundamental to our commitment
              to providing safe, effective healthcare services
            </p>
            <div className="flex items-center justify-center gap-4 text-sm opacity-90">
              <Calendar className="w-4 h-4" />
              <span>Last updated: {lastUpdated}</span>
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
                  <Shield className="w-6 h-6" />
                  Our Commitment to Your Privacy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  At AyurHeal, we understand that your health information is
                  deeply personal and sensitive. We are committed to protecting
                  your privacy and maintaining the confidentiality of your
                  health information while providing you with the highest
                  quality Ayurvedic healthcare services.
                </p>
                <p className="text-muted-foreground">
                  This Privacy Policy explains how we collect, use, disclose,
                  and protect your information when you use our services,
                  including our AI-enhanced wellness platform. We comply with
                  all applicable privacy laws, including HIPAA, and maintain the
                  highest standards of data security.
                </p>
                <div className="flex items-center gap-2 p-4 bg-success/10 border border-success/20 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-sm font-medium">
                    We never sell your personal health information to third
                    parties
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
                <CardContent className="space-y-6">
                  {section.content.map((item, index) => (
                    <div key={index}>
                      <h4 className="font-semibold mb-3 text-primary">
                        {item.subtitle}
                      </h4>
                      <ul className="space-y-2">
                        {item.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-muted-foreground"
                          >
                            <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
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
              <h2 className="text-3xl font-bold mb-4">Privacy Contacts</h2>
              <p className="text-xl text-muted-foreground">
                Questions about your privacy? Contact our privacy team
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
                      <Shield className="w-6 h-6" />
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
              <h2 className="text-3xl font-bold mb-4">Important Notices</h2>
              <p className="text-xl opacity-90">
                Key information about your privacy rights and our practices
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-300 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Data Breach Notification
                      </h3>
                      <p className="text-sm opacity-90">
                        In the unlikely event of a data breach, we will notify
                        affected individuals within 72 hours and take immediate
                        steps to secure your information.
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
                      <h3 className="font-semibold mb-2">Policy Updates</h3>
                      <p className="text-sm opacity-90">
                        We may update this privacy policy periodically. We will
                        notify you of significant changes and post the updated
                        policy on our website.
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

export default Privacy;
