import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Search,
  BookOpen,
  FileText,
  Video,
  Download,
  ExternalLink,
  Calendar,
  Users,
  Award,
  Brain,
  Heart,
  Leaf,
  Shield,
  Clock,
  Star,
  Filter,
  ArrowRight,
  Play,
  File,
  Image,
  Database,
  Settings,
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
  CheckCircle,
  TrendingUp,
  Target,
  Zap,
  User,
} from "lucide-react";

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    {
      value: "all",
      label: "All Resources",
      icon: <BookOpen className="w-4 h-4" />,
    },
    {
      value: "clinical",
      label: "Clinical Guidelines",
      icon: <Heart className="w-4 h-4" />,
    },
    {
      value: "training",
      label: "Training Materials",
      icon: <Award className="w-4 h-4" />,
    },
    {
      value: "ai-tools",
      label: "AI Tools",
      icon: <Brain className="w-4 h-4" />,
    },
    {
      value: "research",
      label: "Research Papers",
      icon: <FileText className="w-4 h-4" />,
    },
    {
      value: "videos",
      label: "Video Tutorials",
      icon: <Video className="w-4 h-4" />,
    },
    {
      value: "templates",
      label: "Templates",
      icon: <File className="w-4 h-4" />,
    },
  ];

  const resources = [
    {
      id: 1,
      title: "Ayurvedic Treatment Protocols",
      description:
        "Comprehensive guidelines for common Ayurvedic treatments including Panchakarma, herbal medicine, and lifestyle counseling.",
      category: "clinical",
      type: "PDF",
      size: "2.3 MB",
      downloads: 1247,
      rating: 4.9,
      author: "Dr. Priya Sharma",
      date: "2024-01-15",
      tags: ["panchakarma", "protocols", "treatment"],
      featured: true,
    },
    {
      id: 2,
      title: "AI-Powered Patient Assessment Guide",
      description:
        "Learn how to use our AI tools for patient assessment, diagnosis, and treatment planning.",
      category: "ai-tools",
      type: "Video",
      duration: "45 min",
      views: 892,
      rating: 4.8,
      author: "AI Team",
      date: "2024-01-12",
      tags: ["ai", "assessment", "diagnosis"],
      featured: true,
    },
    {
      id: 3,
      title: "Herbal Medicine Database",
      description:
        "Comprehensive database of Ayurvedic herbs with properties, indications, and contraindications.",
      category: "clinical",
      type: "Database",
      size: "15.7 MB",
      downloads: 2103,
      rating: 4.9,
      author: "Dr. Maya Patel",
      date: "2024-01-10",
      tags: ["herbs", "medicine", "database"],
      featured: false,
    },
    {
      id: 4,
      title: "Practice Management Best Practices",
      description:
        "Essential tips and strategies for running a successful Ayurvedic practice.",
      category: "training",
      type: "PDF",
      size: "1.8 MB",
      downloads: 756,
      rating: 4.7,
      author: "Dr. Rajesh Kumar",
      date: "2024-01-08",
      tags: ["practice", "management", "business"],
      featured: false,
    },
    {
      id: 5,
      title: "Patient Communication Templates",
      description:
        "Ready-to-use templates for patient consultations, follow-ups, and treatment plans.",
      category: "templates",
      type: "DOCX",
      size: "0.5 MB",
      downloads: 1456,
      rating: 4.8,
      author: "Clinical Team",
      date: "2024-01-05",
      tags: ["templates", "communication", "consultation"],
      featured: true,
    },
    {
      id: 6,
      title: "Research: Efficacy of Panchakarma Therapy",
      description:
        "Latest research findings on the effectiveness of Panchakarma therapy in treating various conditions.",
      category: "research",
      type: "PDF",
      size: "3.2 MB",
      downloads: 634,
      rating: 4.9,
      author: "Research Team",
      date: "2024-01-03",
      tags: ["research", "panchakarma", "efficacy"],
      featured: false,
    },
    {
      id: 7,
      title: "AI Scheduling Optimization Tutorial",
      description:
        "Step-by-step guide to optimizing your practice schedule using AI recommendations.",
      category: "ai-tools",
      type: "Video",
      duration: "32 min",
      views: 567,
      rating: 4.6,
      author: "AI Team",
      date: "2024-01-01",
      tags: ["ai", "scheduling", "optimization"],
      featured: false,
    },
    {
      id: 8,
      title: "Continuing Education Course Catalog",
      description:
        "Complete catalog of available continuing education courses and certification programs.",
      category: "training",
      type: "PDF",
      size: "1.2 MB",
      downloads: 423,
      rating: 4.8,
      author: "Education Team",
      date: "2023-12-28",
      tags: ["education", "courses", "certification"],
      featured: false,
    },
  ];

  const filteredResources = resources.filter(
    (resource) =>
      (selectedCategory === "all" || resource.category === selectedCategory) &&
      (searchTerm === "" ||
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        ))
  );

  const featuredResources = resources.filter((resource) => resource.featured);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "PDF":
        return <FileText className="w-5 h-5" />;
      case "Video":
        return <Video className="w-5 h-5" />;
      case "DOCX":
        return <File className="w-5 h-5" />;
      case "Database":
        return <Database className="w-5 h-5" />;
      default:
        return <File className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "PDF":
        return "text-red-500";
      case "Video":
        return "text-blue-500";
      case "DOCX":
        return "text-blue-600";
      case "Database":
        return "text-green-500";
      default:
        return "text-muted-foreground";
    }
  };

  const quickActions = [
    {
      icon: <Download className="w-6 h-6" />,
      title: "Download Center",
      description: "Access all downloadable resources in one place",
      action: "Browse Downloads",
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Video Library",
      description: "Watch training videos and tutorials",
      action: "Watch Videos",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Knowledge Base",
      description: "Search our comprehensive knowledge base",
      action: "Search Knowledge",
    },
    {
      icon: <HelpCircle className="w-6 h-6" />,
      title: "Get Support",
      description: "Contact our support team for assistance",
      action: "Contact Support",
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
              Provider{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Resources
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Access comprehensive resources, training materials, and tools to
              enhance your Ayurvedic practice
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
                placeholder="Search resources..."
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

      {/* Featured Resources */}
      <section className="py-16 bg-primary-lighter/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Resources</h2>
            <p className="text-xl text-muted-foreground">
              Most popular and essential resources for practitioners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource) => (
              <Card
                key={resource.id}
                className="hover:shadow-wellness transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className="bg-gradient-healing text-white">
                      Featured
                    </Badge>
                    <div className={`${getTypeColor(resource.type)}`}>
                      {getTypeIcon(resource.type)}
                    </div>
                  </div>
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                    {resource.title}
                  </CardTitle>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(resource.rating)
                            ? "fill-wellness-orange text-wellness-orange"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">
                      {resource.rating} ({resource.downloads || resource.views}{" "}
                      {resource.type === "Video" ? "views" : "downloads"})
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {resource.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      <span>{resource.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(resource.date).toLocaleDateString()}
                      </span>
                    </div>
                    {resource.size && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <File className="w-4 h-4" />
                        <span>{resource.size}</span>
                      </div>
                    )}
                    {resource.duration && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{resource.duration}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {resource.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      {resource.type === "Video" ? (
                        <>
                          <Play className="w-4 h-4 mr-1" />
                          Watch
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </>
                      )}
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">All Resources</h2>
            <p className="text-xl text-muted-foreground">
              {filteredResources.length} resource
              {filteredResources.length !== 1 ? "s" : ""} found
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => (
              <Card
                key={resource.id}
                className="hover:shadow-wellness transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {
                        categories.find((c) => c.value === resource.category)
                          ?.label
                      }
                    </Badge>
                    <div className={`${getTypeColor(resource.type)}`}>
                      {getTypeIcon(resource.type)}
                    </div>
                  </div>
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                    {resource.title}
                  </CardTitle>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(resource.rating)
                            ? "fill-wellness-orange text-wellness-orange"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">
                      {resource.rating} ({resource.downloads || resource.views}{" "}
                      {resource.type === "Video" ? "views" : "downloads"})
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {resource.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      <span>{resource.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(resource.date).toLocaleDateString()}
                      </span>
                    </div>
                    {resource.size && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <File className="w-4 h-4" />
                        <span>{resource.size}</span>
                      </div>
                    )}
                    {resource.duration && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{resource.duration}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {resource.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      {resource.type === "Video" ? (
                        <>
                          <Play className="w-4 h-4 mr-1" />
                          Watch
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </>
                      )}
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No resources found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-primary-lighter/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Quick Actions</h2>
            <p className="text-xl text-muted-foreground">
              Access common resources and tools quickly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-wellness transition-all duration-300 cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 p-3 bg-primary-lighter rounded-full w-fit">
                    {action.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{action.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {action.description}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    {action.action}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Need Help Finding Resources?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our support team is here to help you find the resources you need
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Live Chat
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call Support
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
