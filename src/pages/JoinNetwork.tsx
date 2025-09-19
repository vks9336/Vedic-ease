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
import { Checkbox } from "@/components/ui/checkbox";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Users,
  Stethoscope,
  Award,
  CheckCircle,
  Star,
  Heart,
  Brain,
  Shield,
  Clock,
  TrendingUp,
  FileText,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Languages,
  Calendar,
  DollarSign,
  Target,
  Zap,
  Leaf,
  Activity,
} from "lucide-react";

const JoinNetwork = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",

    // Professional Information
    licenseNumber: "",
    specialization: "",
    yearsOfExperience: "",
    education: "",
    certifications: "",
    languages: "",

    // Practice Information
    practiceName: "",
    practiceType: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    website: "",

    // Services and Availability
    services: [] as string[],
    consultationFee: "",
    availability: "",
    emergencyContact: "",

    // Additional Information
    motivation: "",
    expectations: "",
    references: "",
    agreeToTerms: false,
    agreeToBackgroundCheck: false,
  });

  const specializations = [
    "Panchakarma Therapy",
    "Herbal Medicine",
    "Ayurvedic Nutrition",
    "Meditation & Yoga",
    "Pediatric Ayurveda",
    "Women's Health",
    "Geriatric Care",
    "Mental Health",
    "Digestive Health",
    "Skin Care",
    "Pain Management",
    "Other",
  ];

  const practiceTypes = [
    "Private Practice",
    "Clinic/Hospital",
    "Wellness Center",
    "Spa/Resort",
    "Online Practice",
    "Mobile Practice",
    "Other",
  ];

  const availableServices = [
    "Initial Consultation",
    "Follow-up Visits",
    "Panchakarma Therapy",
    "Herbal Medicine Prescription",
    "Nutrition Counseling",
    "Meditation Therapy",
    "Yoga Therapy",
    "Online Consultations",
    "Home Visits",
    "Group Sessions",
  ];

  const benefits = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Enhanced Practice",
      description:
        "Access to advanced AI tools for patient management, treatment recommendations, and practice optimization",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Patient Network",
      description:
        "Connect with patients actively seeking Ayurvedic care through our verified patient network",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Practice Growth",
      description:
        "Marketing support and patient referrals to help grow your practice and increase revenue",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Malpractice Insurance",
      description:
        "Comprehensive malpractice insurance coverage and legal support for network practitioners",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Digital Records",
      description:
        "HIPAA-compliant electronic health records and practice management software",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Continuing Education",
      description:
        "Access to exclusive training programs, workshops, and certification courses",
    },
  ];

  const requirements = [
    "Valid Ayurvedic medicine license or certification",
    "Minimum 2 years of clinical experience",
    "Professional liability insurance",
    "Clean background check",
    "Commitment to evidence-based practice",
    "Agreement to network standards and protocols",
  ];

  const handleInputChange = (
    field: string,
    value: string | string[] | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Join network application submitted:", formData);
    // TODO: Implement application submission logic
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) =>
                    handleInputChange("dateOfBirth", e.target.value)
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Gender</Label>
                <RadioGroup
                  value={formData.gender}
                  onValueChange={(value) => handleInputChange("gender", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">Other</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">
              Professional Information
            </h3>
            <div className="space-y-2">
              <Label htmlFor="licenseNumber">
                License/Certification Number
              </Label>
              <Input
                id="licenseNumber"
                value={formData.licenseNumber}
                onChange={(e) =>
                  handleInputChange("licenseNumber", e.target.value)
                }
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="specialization">Primary Specialization</Label>
                <Select
                  value={formData.specialization}
                  onValueChange={(value) =>
                    handleInputChange("specialization", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select specialization" />
                  </SelectTrigger>
                  <SelectContent>
                    {specializations.map((spec) => (
                      <SelectItem key={spec} value={spec}>
                        {spec}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="yearsOfExperience">Years of Experience</Label>
                <Select
                  value={formData.yearsOfExperience}
                  onValueChange={(value) =>
                    handleInputChange("yearsOfExperience", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-2">0-2 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="6-10">6-10 years</SelectItem>
                    <SelectItem value="11-15">11-15 years</SelectItem>
                    <SelectItem value="15+">15+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="education">Education & Training</Label>
              <Textarea
                id="education"
                value={formData.education}
                onChange={(e) => handleInputChange("education", e.target.value)}
                placeholder="List your degrees, certifications, and training programs"
                rows={3}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="certifications">Additional Certifications</Label>
              <Textarea
                id="certifications"
                value={formData.certifications}
                onChange={(e) =>
                  handleInputChange("certifications", e.target.value)
                }
                placeholder="List any additional certifications or specializations"
                rows={2}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="languages">Languages Spoken</Label>
              <Input
                id="languages"
                value={formData.languages}
                onChange={(e) => handleInputChange("languages", e.target.value)}
                placeholder="e.g., English, Hindi, Sanskrit"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Practice Information</h3>
            <div className="space-y-2">
              <Label htmlFor="practiceName">Practice Name</Label>
              <Input
                id="practiceName"
                value={formData.practiceName}
                onChange={(e) =>
                  handleInputChange("practiceName", e.target.value)
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="practiceType">Practice Type</Label>
              <Select
                value={formData.practiceType}
                onValueChange={(value) =>
                  handleInputChange("practiceType", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select practice type" />
                </SelectTrigger>
                <SelectContent>
                  {practiceTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Practice Address</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Input
                  id="state"
                  value={formData.state}
                  onChange={(e) => handleInputChange("state", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zipCode">ZIP Code</Label>
                <Input
                  id="zipCode"
                  value={formData.zipCode}
                  onChange={(e) => handleInputChange("zipCode", e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Website (Optional)</Label>
              <Input
                id="website"
                type="url"
                value={formData.website}
                onChange={(e) => handleInputChange("website", e.target.value)}
                placeholder="https://yourwebsite.com"
              />
            </div>
            <div className="space-y-4">
              <Label>Services You Offer</Label>
              <div className="grid grid-cols-2 gap-2">
                {availableServices.map((service) => (
                  <div key={service} className="flex items-center space-x-2">
                    <Checkbox
                      id={service}
                      checked={formData.services.includes(service)}
                      onCheckedChange={() => handleServiceToggle(service)}
                    />
                    <Label htmlFor={service} className="text-sm">
                      {service}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="consultationFee">Consultation Fee</Label>
                <Input
                  id="consultationFee"
                  value={formData.consultationFee}
                  onChange={(e) =>
                    handleInputChange("consultationFee", e.target.value)
                  }
                  placeholder="e.g., $150"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="availability">Availability</Label>
                <Select
                  value={formData.availability}
                  onValueChange={(value) =>
                    handleInputChange("availability", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-time">Full-time</SelectItem>
                    <SelectItem value="part-time">Part-time</SelectItem>
                    <SelectItem value="weekends">Weekends only</SelectItem>
                    <SelectItem value="evenings">Evenings only</SelectItem>
                    <SelectItem value="flexible">Flexible schedule</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">
              Additional Information
            </h3>
            <div className="space-y-2">
              <Label htmlFor="motivation">
                Why do you want to join our network?
              </Label>
              <Textarea
                id="motivation"
                value={formData.motivation}
                onChange={(e) =>
                  handleInputChange("motivation", e.target.value)
                }
                placeholder="Tell us about your motivation and goals"
                rows={3}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="expectations">
                What do you expect from our network?
              </Label>
              <Textarea
                id="expectations"
                value={formData.expectations}
                onChange={(e) =>
                  handleInputChange("expectations", e.target.value)
                }
                placeholder="Share your expectations and how we can support your practice"
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="references">Professional References</Label>
              <Textarea
                id="references"
                value={formData.references}
                onChange={(e) =>
                  handleInputChange("references", e.target.value)
                }
                placeholder="Provide contact information for 2-3 professional references"
                rows={3}
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) =>
                    handleInputChange("agreeToTerms", checked as boolean)
                  }
                  required
                />
                <Label htmlFor="agreeToTerms" className="text-sm">
                  I agree to the{" "}
                  <a href="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </a>{" "}
                  and network policies
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="agreeToBackgroundCheck"
                  checked={formData.agreeToBackgroundCheck}
                  onCheckedChange={(checked) =>
                    handleInputChange(
                      "agreeToBackgroundCheck",
                      checked as boolean
                    )
                  }
                  required
                />
                <Label htmlFor="agreeToBackgroundCheck" className="text-sm">
                  I consent to a background check and verification of
                  credentials
                </Label>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-earth">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-healing text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Join Our{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Network
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Become part of the leading network of Ayurvedic practitioners and
              grow your practice with AI-enhanced tools
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Join Our Network?</h2>
            <p className="text-xl text-muted-foreground">
              Access exclusive benefits and tools to grow your practice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="hover:shadow-wellness transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 p-3 bg-primary-lighter rounded-full w-fit">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-primary-lighter/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-wellness">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Practitioner Application
                </CardTitle>
                <div className="flex items-center gap-2 mt-4">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          step <= currentStep
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {step}
                      </div>
                      {step < 4 && (
                        <div
                          className={`w-16 h-1 mx-2 ${
                            step < currentStep ? "bg-primary" : "bg-muted"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  {renderStepContent()}

                  <div className="flex justify-between mt-8">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      disabled={currentStep === 1}
                    >
                      Previous
                    </Button>
                    {currentStep < 4 ? (
                      <Button type="button" onClick={nextStep}>
                        Next
                      </Button>
                    ) : (
                      <Button type="submit" variant="healing">
                        <Users className="w-5 h-5 mr-2" />
                        Submit Application
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Application Requirements
              </h2>
              <p className="text-xl text-muted-foreground">
                Ensure you meet our standards for network membership
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{requirement}</span>
                </div>
              ))}
            </div>
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
            Join hundreds of successful practitioners who are already using our
            AI-enhanced platform to provide better care and grow their practices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="wellness"
              className="text-lg px-8 py-4"
              onClick={() =>
                document
                  .getElementById("application-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Start Application
            </Button>
            <Button
              size="lg"
              variant="outline"
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

export default JoinNetwork;
