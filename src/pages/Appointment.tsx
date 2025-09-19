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
import { Calendar } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  CheckCircle,
  Star,
  Heart,
  Leaf,
  Brain,
  Shield,
  ArrowRight,
  AlertCircle,
  Info,
  Zap,
  Users,
  Award,
} from "lucide-react";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [appointmentType, setAppointmentType] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    reason: "",
    symptoms: "",
    previousTreatment: "",
    insuranceProvider: "",
    emergencyContact: "",
    emergencyPhone: "",
    agreeToTerms: false,
    agreeToPrivacy: false,
  });

  const doctors = [
    {
      id: "1",
      name: "Dr. Priya Sharma",
      specialty: "Panchakarma Therapy",
      rating: 4.9,
      available: true,
    },
    {
      id: "2",
      name: "Dr. Rajesh Kumar",
      specialty: "Meditation & Yoga",
      rating: 4.8,
      available: true,
    },
    {
      id: "3",
      name: "Dr. Maya Patel",
      specialty: "Ayurvedic Nutrition",
      rating: 4.9,
      available: false,
    },
    {
      id: "4",
      name: "Dr. Arjun Singh",
      specialty: "Pediatric Ayurveda",
      rating: 4.7,
      available: true,
    },
  ];

  const appointmentTypes = [
    {
      value: "consultation",
      label: "Initial Consultation",
      duration: "60 minutes",
      price: "$150",
    },
    {
      value: "follow-up",
      label: "Follow-up Visit",
      duration: "30 minutes",
      price: "$100",
    },
    {
      value: "panchakarma",
      label: "Panchakarma Session",
      duration: "90 minutes",
      price: "$200",
    },
    {
      value: "nutrition",
      label: "Nutrition Counseling",
      duration: "45 minutes",
      price: "$120",
    },
    {
      value: "meditation",
      label: "Meditation Therapy",
      duration: "60 minutes",
      price: "$110",
    },
    {
      value: "emergency",
      label: "Emergency Consultation",
      duration: "30 minutes",
      price: "$180",
    },
  ];

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Appointment booking submitted:", {
      selectedDate,
      selectedTime,
      selectedDoctor,
      appointmentType,
      formData,
    });
    // TODO: Implement appointment booking logic
  };

  const selectedAppointmentType = appointmentTypes.find(
    (type) => type.value === appointmentType
  );

  return (
    <div className="min-h-screen bg-gradient-earth">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-healing text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Book Your{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Appointment
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Schedule a consultation with our certified Ayurvedic practitioners
              and take the first step towards optimal health
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Booking Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-wellness">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CalendarIcon className="w-6 h-6" />
                      Appointment Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Doctor Selection */}
                      <div className="space-y-2">
                        <Label htmlFor="doctor">Select Doctor</Label>
                        <Select
                          value={selectedDoctor}
                          onValueChange={setSelectedDoctor}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Choose your preferred doctor" />
                          </SelectTrigger>
                          <SelectContent>
                            {doctors.map((doctor) => (
                              <SelectItem
                                key={doctor.id}
                                value={doctor.id}
                                disabled={!doctor.available}
                              >
                                <div className="flex items-center justify-between w-full">
                                  <div>
                                    <div className="font-medium">
                                      {doctor.name}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                      {doctor.specialty}
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 fill-wellness-orange text-wellness-orange" />
                                    <span className="text-sm">
                                      {doctor.rating}
                                    </span>
                                    {!doctor.available && (
                                      <Badge
                                        variant="secondary"
                                        className="ml-2"
                                      >
                                        Unavailable
                                      </Badge>
                                    )}
                                  </div>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Appointment Type */}
                      <div className="space-y-2">
                        <Label htmlFor="appointmentType">
                          Appointment Type
                        </Label>
                        <Select
                          value={appointmentType}
                          onValueChange={setAppointmentType}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select appointment type" />
                          </SelectTrigger>
                          <SelectContent>
                            {appointmentTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                <div className="flex items-center justify-between w-full">
                                  <div>
                                    <div className="font-medium">
                                      {type.label}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                      {type.duration}
                                    </div>
                                  </div>
                                  <div className="font-bold text-primary">
                                    {type.price}
                                  </div>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Date and Time Selection */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label>Select Date</Label>
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            className="rounded-md border"
                            disabled={(date) => date < new Date()}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Select Time</Label>
                          <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                            {timeSlots.map((time) => (
                              <Button
                                key={time}
                                type="button"
                                variant={
                                  selectedTime === time ? "default" : "outline"
                                }
                                size="sm"
                                onClick={() => setSelectedTime(time)}
                                className="justify-start"
                              >
                                <Clock className="w-4 h-4 mr-2" />
                                {time}
                              </Button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Personal Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">
                          Personal Information
                        </h3>
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
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) =>
                                handleInputChange("email", e.target.value)
                              }
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={(e) =>
                                handleInputChange("phone", e.target.value)
                              }
                              required
                            />
                          </div>
                        </div>
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
                      </div>

                      {/* Health Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">
                          Health Information
                        </h3>
                        <div className="space-y-2">
                          <Label htmlFor="reason">Reason for Visit</Label>
                          <Input
                            id="reason"
                            value={formData.reason}
                            onChange={(e) =>
                              handleInputChange("reason", e.target.value)
                            }
                            placeholder="Brief description of your health concern"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="symptoms">Current Symptoms</Label>
                          <Textarea
                            id="symptoms"
                            value={formData.symptoms}
                            onChange={(e) =>
                              handleInputChange("symptoms", e.target.value)
                            }
                            placeholder="Describe any symptoms you're experiencing"
                            rows={3}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="previousTreatment">
                            Previous Treatments
                          </Label>
                          <Textarea
                            id="previousTreatment"
                            value={formData.previousTreatment}
                            onChange={(e) =>
                              handleInputChange(
                                "previousTreatment",
                                e.target.value
                              )
                            }
                            placeholder="Any previous treatments or medications"
                            rows={2}
                          />
                        </div>
                      </div>

                      {/* Insurance Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">
                          Insurance Information
                        </h3>
                        <div className="space-y-2">
                          <Label htmlFor="insuranceProvider">
                            Insurance Provider
                          </Label>
                          <Input
                            id="insuranceProvider"
                            value={formData.insuranceProvider}
                            onChange={(e) =>
                              handleInputChange(
                                "insuranceProvider",
                                e.target.value
                              )
                            }
                            placeholder="Your insurance company name"
                          />
                        </div>
                      </div>

                      {/* Emergency Contact */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">
                          Emergency Contact
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="emergencyContact">
                              Emergency Contact Name
                            </Label>
                            <Input
                              id="emergencyContact"
                              value={formData.emergencyContact}
                              onChange={(e) =>
                                handleInputChange(
                                  "emergencyContact",
                                  e.target.value
                                )
                              }
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="emergencyPhone">
                              Emergency Contact Phone
                            </Label>
                            <Input
                              id="emergencyPhone"
                              type="tel"
                              value={formData.emergencyPhone}
                              onChange={(e) =>
                                handleInputChange(
                                  "emergencyPhone",
                                  e.target.value
                                )
                              }
                              required
                            />
                          </div>
                        </div>
                      </div>

                      {/* Terms and Conditions */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onCheckedChange={(checked) =>
                              handleInputChange(
                                "agreeToTerms",
                                checked as boolean
                              )
                            }
                            required
                          />
                          <Label htmlFor="agreeToTerms" className="text-sm">
                            I agree to the{" "}
                            <a
                              href="/terms"
                              className="text-primary hover:underline"
                            >
                              Terms of Service
                            </a>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="agreeToPrivacy"
                            checked={formData.agreeToPrivacy}
                            onCheckedChange={(checked) =>
                              handleInputChange(
                                "agreeToPrivacy",
                                checked as boolean
                              )
                            }
                            required
                          />
                          <Label htmlFor="agreeToPrivacy" className="text-sm">
                            I agree to the{" "}
                            <a
                              href="/privacy"
                              className="text-primary hover:underline"
                            >
                              Privacy Policy
                            </a>
                          </Label>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full"
                        variant="healing"
                        size="lg"
                      >
                        <CalendarIcon className="w-5 h-5 mr-2" />
                        Book Appointment
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Appointment Summary */}
                <Card className="shadow-wellness">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Info className="w-5 h-5" />
                      Appointment Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {selectedAppointmentType && (
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Type:</span>
                          <span className="font-medium">
                            {selectedAppointmentType.label}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Duration:
                          </span>
                          <span>{selectedAppointmentType.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Price:</span>
                          <span className="font-bold text-primary">
                            {selectedAppointmentType.price}
                          </span>
                        </div>
                      </div>
                    )}
                    {selectedDate && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Date:</span>
                        <span>{selectedDate.toLocaleDateString()}</span>
                      </div>
                    )}
                    {selectedTime && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Time:</span>
                        <span>{selectedTime}</span>
                      </div>
                    )}
                    {selectedDoctor && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Doctor:</span>
                        <span>
                          {doctors.find((d) => d.id === selectedDoctor)?.name}
                        </span>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* AI Scheduling Benefits */}
                <Card className="bg-gradient-healing text-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      AI-Enhanced Scheduling
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1" />
                      <span className="text-sm">
                        Optimal timing based on your health patterns
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1" />
                      <span className="text-sm">
                        Automatic reminders and rescheduling
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1" />
                      <span className="text-sm">
                        Personalized treatment recommendations
                      </span>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="shadow-wellness">
                  <CardHeader>
                    <CardTitle>Need Help?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Live Chat Support
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Us: (555) 123-4567
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Support
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-primary-lighter/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose AyurHeal?</h2>
            <p className="text-xl text-muted-foreground">
              Experience the benefits of AI-enhanced Ayurvedic healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-wellness transition-all duration-300">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 p-3 bg-success/20 rounded-full w-fit">
                  <Heart className="w-6 h-6 text-success" />
                </div>
                <h3 className="font-semibold mb-2">Holistic Care</h3>
                <p className="text-muted-foreground text-sm">
                  Comprehensive treatment addressing mind, body, and spirit
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-wellness transition-all duration-300">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 p-3 bg-primary/20 rounded-full w-fit">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">AI-Enhanced</h3>
                <p className="text-muted-foreground text-sm">
                  Smart scheduling and personalized treatment recommendations
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-wellness transition-all duration-300">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 p-3 bg-wellness-orange/20 rounded-full w-fit">
                  <Leaf className="w-6 h-6 text-wellness-orange" />
                </div>
                <h3 className="font-semibold mb-2">Natural Healing</h3>
                <p className="text-muted-foreground text-sm">
                  Traditional Ayurvedic treatments with modern safety standards
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-wellness transition-all duration-300">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 p-3 bg-wellness-blue/20 rounded-full w-fit">
                  <Shield className="w-6 h-6 text-wellness-blue" />
                </div>
                <h3 className="font-semibold mb-2">Certified Practitioners</h3>
                <p className="text-muted-foreground text-sm">
                  Licensed and experienced Ayurvedic healthcare providers
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Appointment;
