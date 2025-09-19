import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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
  Search,
  Filter,
  MapPin,
  Star,
  Calendar,
  MessageCircle,
  Phone,
  Mail,
  Award,
  Users,
  Clock,
  Heart,
  Leaf,
  Brain,
  Shield,
  CheckCircle,
  ArrowRight,
  User,
  GraduationCap,
  Languages,
} from "lucide-react";

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  const specialties = [
    { value: "all", label: "All Specialties" },
    { value: "panchakarma", label: "Panchakarma Therapy" },
    { value: "herbal", label: "Herbal Medicine" },
    { value: "nutrition", label: "Ayurvedic Nutrition" },
    { value: "meditation", label: "Meditation & Yoga" },
    { value: "pediatrics", label: "Pediatric Ayurveda" },
    { value: "women", label: "Women's Health" },
    { value: "geriatric", label: "Geriatric Care" },
  ];

  const locations = [
    { value: "all", label: "All Locations" },
    { value: "new-york", label: "New York, NY" },
    { value: "california", label: "Los Angeles, CA" },
    { value: "texas", label: "Austin, TX" },
    { value: "florida", label: "Miami, FL" },
    { value: "online", label: "Online Consultations" },
  ];

  const doctors = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      title: "Chief Ayurvedic Practitioner",
      specialty: "panchakarma",
      location: "new-york",
      rating: 4.9,
      reviews: 156,
      experience: "15+ years",
      education: "BAMS, MD (Ayurveda)",
      languages: ["English", "Hindi", "Sanskrit"],
      image: "/api/placeholder/200/200",
      bio: "Dr. Priya Sharma is a renowned Ayurvedic practitioner with over 15 years of experience in Panchakarma therapy and holistic healing. She specializes in digestive disorders and stress management.",
      specialties: [
        "Panchakarma Therapy",
        "Digestive Health",
        "Stress Management",
      ],
      availability: "Available this week",
      consultationFee: "$150",
      nextAvailable: "Tomorrow 2:00 PM",
      verified: true,
      aiEnhanced: true,
    },
    {
      id: 2,
      name: "Dr. Rajesh Kumar",
      title: "Senior Wellness Consultant",
      specialty: "meditation",
      location: "california",
      rating: 4.8,
      reviews: 124,
      experience: "12+ years",
      education: "BAMS, Yoga Therapy Certification",
      languages: ["English", "Hindi"],
      image: "/api/placeholder/200/200",
      bio: "Dr. Rajesh Kumar combines traditional Ayurvedic wisdom with modern wellness techniques. He is an expert in meditation therapy and lifestyle counseling.",
      specialties: [
        "Meditation Therapy",
        "Lifestyle Counseling",
        "Stress Reduction",
      ],
      availability: "Available next week",
      consultationFee: "$120",
      nextAvailable: "Monday 10:00 AM",
      verified: true,
      aiEnhanced: true,
    },
    {
      id: 3,
      name: "Dr. Maya Patel",
      title: "Nutrition Specialist",
      specialty: "nutrition",
      location: "texas",
      rating: 4.9,
      reviews: 98,
      experience: "10+ years",
      education: "BAMS, Clinical Nutrition",
      languages: ["English", "Gujarati", "Hindi"],
      image: "/api/placeholder/200/200",
      bio: "Dr. Maya Patel specializes in Ayurvedic nutrition and dietary therapy. She helps patients achieve optimal health through personalized nutrition plans.",
      specialties: [
        "Ayurvedic Nutrition",
        "Dietary Therapy",
        "Weight Management",
      ],
      availability: "Available today",
      consultationFee: "$100",
      nextAvailable: "Today 4:00 PM",
      verified: true,
      aiEnhanced: false,
    },
    {
      id: 4,
      name: "Dr. Arjun Singh",
      title: "Pediatric Ayurvedic Specialist",
      specialty: "pediatrics",
      location: "florida",
      rating: 4.7,
      reviews: 87,
      experience: "8+ years",
      education: "BAMS, Pediatric Ayurveda",
      languages: ["English", "Punjabi", "Hindi"],
      image: "/api/placeholder/200/200",
      bio: "Dr. Arjun Singh is dedicated to providing gentle, effective Ayurvedic care for children. He specializes in pediatric digestive issues and immune support.",
      specialties: ["Pediatric Care", "Immune Support", "Child Development"],
      availability: "Available this week",
      consultationFee: "$90",
      nextAvailable: "Wednesday 11:00 AM",
      verified: true,
      aiEnhanced: true,
    },
    {
      id: 5,
      name: "Dr. Sita Reddy",
      title: "Women's Health Specialist",
      specialty: "women",
      location: "online",
      rating: 4.8,
      reviews: 112,
      experience: "13+ years",
      education: "BAMS, Women's Health",
      languages: ["English", "Telugu", "Hindi"],
      image: "/api/placeholder/200/200",
      bio: "Dr. Sita Reddy specializes in women's health and hormonal balance using Ayurvedic principles. She provides comprehensive care for all stages of women's health.",
      specialties: ["Women's Health", "Hormonal Balance", "Fertility Support"],
      availability: "Available online",
      consultationFee: "$130",
      nextAvailable: "Friday 3:00 PM",
      verified: true,
      aiEnhanced: true,
    },
    {
      id: 6,
      name: "Dr. Vikram Joshi",
      title: "Geriatric Care Specialist",
      specialty: "geriatric",
      location: "new-york",
      rating: 4.9,
      reviews: 76,
      experience: "18+ years",
      education: "BAMS, Geriatric Medicine",
      languages: ["English", "Marathi", "Hindi"],
      image: "/api/placeholder/200/200",
      bio: "Dr. Vikram Joshi provides compassionate Ayurvedic care for elderly patients, focusing on maintaining vitality and managing age-related conditions.",
      specialties: [
        "Geriatric Care",
        "Chronic Disease Management",
        "Vitality Enhancement",
      ],
      availability: "Available next week",
      consultationFee: "$140",
      nextAvailable: "Tuesday 1:00 PM",
      verified: true,
      aiEnhanced: false,
    },
  ];

  const filteredDoctors = doctors.filter(
    (doctor) =>
      (selectedSpecialty === "all" || doctor.specialty === selectedSpecialty) &&
      (selectedLocation === "all" || doctor.location === selectedLocation) &&
      (searchTerm === "" ||
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialties.some((s) =>
          s.toLowerCase().includes(searchTerm.toLowerCase())
        ))
  );

  const getSpecialtyIcon = (specialty: string) => {
    switch (specialty) {
      case "panchakarma":
        return <Heart className="w-5 h-5" />;
      case "herbal":
        return <Leaf className="w-5 h-5" />;
      case "nutrition":
        return <Shield className="w-5 h-5" />;
      case "meditation":
        return <Brain className="w-5 h-5" />;
      case "pediatrics":
        return <Users className="w-5 h-5" />;
      case "women":
        return <Heart className="w-5 h-5" />;
      case "geriatric":
        return <Award className="w-5 h-5" />;
      default:
        return <User className="w-5 h-5" />;
    }
  };

  const getSpecialtyColor = (specialty: string) => {
    switch (specialty) {
      case "panchakarma":
        return "text-wellness-orange";
      case "herbal":
        return "text-success";
      case "nutrition":
        return "text-wellness-blue";
      case "meditation":
        return "text-primary";
      case "pediatrics":
        return "text-wellness-purple";
      case "women":
        return "text-pink-500";
      case "geriatric":
        return "text-yellow-600";
      default:
        return "text-muted-foreground";
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
              Find Your{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Ayurvedic Doctor
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Connect with certified Ayurvedic practitioners who can guide you
              on your journey to optimal health and wellness
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search doctors by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-4">
              <Select
                value={selectedSpecialty}
                onValueChange={setSelectedSpecialty}
              >
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select specialty" />
                </SelectTrigger>
                <SelectContent>
                  {specialties.map((specialty) => (
                    <SelectItem key={specialty.value} value={specialty.value}>
                      {specialty.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={selectedLocation}
                onValueChange={setSelectedLocation}
              >
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location.value} value={location.value}>
                      {location.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our Certified Practitioners
            </h2>
            <p className="text-xl text-muted-foreground">
              {filteredDoctors.length} doctor
              {filteredDoctors.length !== 1 ? "s" : ""} found
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map((doctor) => (
              <Card
                key={doctor.id}
                className="hover:shadow-wellness transition-all duration-300 group"
              >
                <CardHeader className="text-center">
                  <div className="relative mx-auto mb-4">
                    <div className="w-24 h-24 bg-gradient-healing rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {doctor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    {doctor.verified && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    )}
                    {doctor.aiEnhanced && (
                      <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-healing text-white text-xs">
                        AI Enhanced
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{doctor.name}</CardTitle>
                  <p className="text-primary font-medium">{doctor.title}</p>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(doctor.rating)
                            ? "fill-wellness-orange text-wellness-orange"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">
                      {doctor.rating} ({doctor.reviews} reviews)
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <GraduationCap className="w-4 h-4 text-muted-foreground" />
                      <span>{doctor.education}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>{doctor.experience} experience</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>
                        {
                          locations.find((l) => l.value === doctor.location)
                            ?.label
                        }
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Languages className="w-4 h-4 text-muted-foreground" />
                      <span>{doctor.languages.join(", ")}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {doctor.bio}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {doctor.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Consultation Fee:
                      </span>
                      <span className="font-bold text-primary">
                        {doctor.consultationFee}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Next Available:
                      </span>
                      <span className="text-sm font-medium">
                        {doctor.nextAvailable}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Status:
                      </span>
                      <Badge className="bg-success/20 text-success text-xs">
                        {doctor.availability}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      Book
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredDoctors.length === 0 && (
            <div className="text-center py-12">
              <User className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No doctors found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Our Doctors */}
      <section className="py-16 bg-primary-lighter/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Our Practitioners?
            </h2>
            <p className="text-xl text-muted-foreground">
              Our doctors are carefully selected for their expertise,
              compassion, and commitment to holistic healing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-wellness transition-all duration-300">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 p-3 bg-success/20 rounded-full w-fit">
                  <Award className="w-6 h-6 text-success" />
                </div>
                <h3 className="font-semibold mb-2">Certified Practitioners</h3>
                <p className="text-muted-foreground text-sm">
                  All our doctors are certified in Ayurvedic medicine with years
                  of clinical experience
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-wellness transition-all duration-300">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 p-3 bg-primary/20 rounded-full w-fit">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">AI-Enhanced Care</h3>
                <p className="text-muted-foreground text-sm">
                  Many of our practitioners use AI tools to provide more
                  personalized and effective treatments
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-wellness transition-all duration-300">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 p-3 bg-wellness-orange/20 rounded-full w-fit">
                  <Heart className="w-6 h-6 text-wellness-orange" />
                </div>
                <h3 className="font-semibold mb-2">Holistic Approach</h3>
                <p className="text-muted-foreground text-sm">
                  Our doctors treat the whole person, not just symptoms, for
                  lasting wellness
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-wellness transition-all duration-300">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 p-3 bg-wellness-blue/20 rounded-full w-fit">
                  <Shield className="w-6 h-6 text-wellness-blue" />
                </div>
                <h3 className="font-semibold mb-2">Verified Reviews</h3>
                <p className="text-muted-foreground text-sm">
                  All reviews are verified to ensure you get authentic feedback
                  from real patients
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
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Book a consultation with one of our certified practitioners and take
            the first step towards optimal health and wellness
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="wellness" className="text-lg px-8 py-4">
              Book Consultation
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

export default Doctors;
