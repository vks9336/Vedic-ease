import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Search,
  Calendar,
  User,
  Clock,
  Heart,
  Leaf,
  Brain,
  BookOpen,
  TrendingUp,
  Filter,
  ArrowRight,
  Tag,
  Eye,
  MessageCircle,
} from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { value: "all", label: "All Posts" },
    { value: "ayurveda", label: "Ayurveda" },
    { value: "wellness", label: "Wellness" },
    { value: "nutrition", label: "Nutrition" },
    { value: "meditation", label: "Meditation" },
    { value: "lifestyle", label: "Lifestyle" },
  ];

  const blogPosts = [
    {
      id: 1,
      title:
        "The Complete Guide to Panchakarma: Ancient Healing for Modern Times",
      excerpt:
        "Discover the transformative power of Panchakarma therapy and how it can help detoxify your body, reduce stress, and restore natural balance.",
      content:
        "Panchakarma is one of the most comprehensive detoxification and rejuvenation therapies in Ayurveda...",
      author: "Dr. Priya Sharma",
      date: "2024-01-20",
      readTime: "8 min read",
      category: "ayurveda",
      tags: ["detox", "panchakarma", "healing"],
      image: "/api/placeholder/400/250",
      views: 1250,
      likes: 89,
      comments: 23,
      featured: true,
    },
    {
      id: 2,
      title: "Understanding Your Dosha: The Foundation of Ayurvedic Wellness",
      excerpt:
        "Learn about the three doshas (Vata, Pitta, Kapha) and how understanding your constitution can guide your wellness journey.",
      content:
        "In Ayurveda, the concept of doshas forms the foundation of understanding individual constitution...",
      author: "Dr. Rajesh Kumar",
      date: "2024-01-18",
      readTime: "6 min read",
      category: "ayurveda",
      tags: ["dosha", "constitution", "balance"],
      image: "/api/placeholder/400/250",
      views: 980,
      likes: 67,
      comments: 15,
      featured: false,
    },
    {
      id: 3,
      title: "10 Ayurvedic Herbs for Daily Wellness and Longevity",
      excerpt:
        "Explore powerful Ayurvedic herbs that can enhance your daily wellness routine and support long-term health.",
      content:
        "Ayurvedic herbs have been used for thousands of years to promote health and prevent disease...",
      author: "Dr. Maya Patel",
      date: "2024-01-15",
      readTime: "7 min read",
      category: "nutrition",
      tags: ["herbs", "wellness", "longevity"],
      image: "/api/placeholder/400/250",
      views: 1100,
      likes: 78,
      comments: 19,
      featured: true,
    },
    {
      id: 4,
      title: "The Science of Meditation: How Mindfulness Transforms Your Brain",
      excerpt:
        "Discover the neurological benefits of meditation and how regular practice can improve your mental and physical health.",
      content:
        "Recent scientific research has revealed the profound impact of meditation on brain structure and function...",
      author: "Dr. Priya Sharma",
      date: "2024-01-12",
      readTime: "9 min read",
      category: "meditation",
      tags: ["meditation", "mindfulness", "brain health"],
      image: "/api/placeholder/400/250",
      views: 1450,
      likes: 95,
      comments: 31,
      featured: false,
    },
    {
      id: 5,
      title: "Seasonal Eating: Aligning Your Diet with Nature's Rhythms",
      excerpt:
        "Learn how to adapt your diet according to seasonal changes for optimal health and energy throughout the year.",
      content:
        "Ayurveda teaches us that our bodies are deeply connected to the natural world and its cycles...",
      author: "Dr. Maya Patel",
      date: "2024-01-10",
      readTime: "5 min read",
      category: "nutrition",
      tags: ["seasonal", "diet", "nature"],
      image: "/api/placeholder/400/250",
      views: 850,
      likes: 52,
      comments: 12,
      featured: false,
    },
    {
      id: 6,
      title: "Building a Morning Routine for Optimal Wellness",
      excerpt:
        "Create a powerful morning routine that sets the tone for a healthy, productive day using Ayurvedic principles.",
      content:
        "The way you start your morning can significantly impact your entire day...",
      author: "Dr. Rajesh Kumar",
      date: "2024-01-08",
      readTime: "6 min read",
      category: "lifestyle",
      tags: ["morning routine", "wellness", "productivity"],
      image: "/api/placeholder/400/250",
      views: 1200,
      likes: 73,
      comments: 18,
      featured: false,
    },
  ];

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const filteredPosts = blogPosts.filter(
    (post) =>
      (selectedCategory === "all" || post.category === selectedCategory) &&
      (searchTerm === "" ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-earth">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-healing text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Health{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Discover insights, tips, and wisdom from our Ayurvedic
              practitioners to support your wellness journey
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
                placeholder="Search articles..."
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
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-primary-lighter/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Articles</h2>
            <p className="text-muted-foreground">
              Our most popular and impactful wellness content
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-wellness transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-healing relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-white opacity-50" />
                  </div>
                  <Badge className="absolute top-4 left-4 bg-white text-primary">
                    Featured
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">All Articles</h2>
            <p className="text-muted-foreground">
              {filteredPosts.length} article
              {filteredPosts.length !== 1 ? "s" : ""} found
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card
                key={post.id}
                className="hover:shadow-wellness transition-all duration-300 group"
              >
                <div className="aspect-video bg-gradient-healing relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-white opacity-50" />
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
                    {post.excerpt}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>{post.comments}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {post.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-healing text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest wellness insights,
            Ayurvedic tips, and exclusive content delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="bg-white/10 border-white/30 text-white placeholder:text-white/70"
            />
            <Button variant="wellness" className="whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
