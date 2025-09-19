import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useNavigate } from 'react-router-dom';
import { 
  Leaf, 
  Heart, 
  Shield, 
  Clock, 
  Users, 
  Star,
  CheckCircle,
  Calendar,
  MessageCircle,
  Brain,
} from 'lucide-react';
import heroImage from '@/assets/hero-ayurvedic.jpg';

export const Home = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: <Leaf className="w-8 h-8 text-wellness-blue" />,
      title: "Natural Healing",
      description: "Experience the power of traditional Ayurvedic treatments combined with modern healthcare"
    },
    {
      icon: <Heart className="w-8 h-8 text-wellness-orange" />,
      title: "Holistic Wellness",
      description: "Address root causes, not just symptoms, for complete mind-body-spirit healing"
    },
    {
      icon: <Shield className="w-8 h-8 text-success" />,
      title: "Certified Practitioners",
      description: "Connect with verified Ayurvedic doctors and wellness experts"
    },
    {
      icon: <Clock className="w-8 h-8 text-wellness-purple" />,
      title: "Flexible Scheduling",
      description: "Book sessions that fit your lifestyle with easy rescheduling options"
    }
  ];

  const features = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Smart Scheduling",
      description: "AI-powered session planning based on your therapy needs"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "24/7 AI Assistant",
      description: "Get instant answers and reminders for your wellness journey"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Personalized Plans",
      description: "Customized therapy schedules tailored to your unique constitution"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Network",
      description: "Access to qualified practitioners across different specializations"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Patient",
      rating: 5,
      content: "AyurHeal transformed my approach to wellness. The personalized treatment plans and caring doctors made all the difference."
    },
    {
      name: "Dr. Priya Sharma",
      role: "Ayurvedic Practitioner",
      content: "This platform streamlines my practice beautifully. I can focus on healing while the system handles scheduling and reminders."
    },
    {
      name: "Michael Chen",
      role: "Patient",
      rating: 5,
      content: "The AI chatbot is incredibly helpful, and the therapy sessions have been life-changing. Highly recommend!"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-earth">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-healing">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-slide-up">
              Ancient Wisdom, <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Modern Care
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 animate-slide-up">
              Connect with certified Ayurvedic practitioners for personalized therapy 
              sessions and holistic wellness management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button 
                size="lg"
                variant="wellness"
                onClick={() => navigate('/register')}
                className="text-lg px-8 py-4"
              >
                Start Your Healing Journey
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => navigate('/about')}
                className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose AyurHeal?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the perfect blend of traditional Ayurvedic healing and modern technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-wellness transition-all duration-300 border-border/50">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary-lighter rounded-full w-fit">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-primary-lighter/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Platform Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for comprehensive Ayurvedic therapy management
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-white rounded-2xl shadow-wellness p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Get Started Today</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Create your account in minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Complete health assessment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Connect with certified practitioners</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Begin your personalized therapy</span>
                </div>
              </div>
              <Button 
                className="w-full mt-6" 
                variant="healing"
                onClick={() => navigate('/register')}
              >
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What Our Community Says
            </h2>
            <p className="text-xl text-muted-foreground">
              Real stories from patients and practitioners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-wellness transition-shadow duration-300">
                <CardContent className="p-6">
                  {testimonial.rating && (
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-wellness-orange text-wellness-orange" />
                      ))}
                    </div>
                  )}
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-healing text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands who have discovered the power of personalized Ayurvedic care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="wellness"
              onClick={() => navigate('/register')}
              className="text-lg px-8 py-4"
            >
              Get Started Free
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => navigate('/contact')}
              className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};