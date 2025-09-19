import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">AyurHeal</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Connecting ancient Ayurvedic wisdom with modern healthcare technology 
              for holistic wellness and natural healing.
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Mail className="w-4 h-4" />
              <span>contact@ayurheal.com</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/services" className="block hover:text-white transition-colors">
                Our Services
              </Link>
              <Link to="/doctors" className="block hover:text-white transition-colors">
                Find Doctors
              </Link>
              <Link to="/blog" className="block hover:text-white transition-colors">
                Health Blog
              </Link>
            </div>
          </div>

          {/* Patient Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">For Patients</h3>
            <div className="space-y-2">
              <Link to="/register" className="block hover:text-white transition-colors">
                Register
              </Link>
              <Link to="/login" className="block hover:text-white transition-colors">
                Patient Login
              </Link>
              <Link to="/appointment" className="block hover:text-white transition-colors">
                Book Appointment
              </Link>
              <Link to="/faq" className="block hover:text-white transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          {/* Healthcare Providers */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">For Providers</h3>
            <div className="space-y-2">
              <Link to="/doctor-login" className="block hover:text-white transition-colors">
                Doctor Login
              </Link>
              <Link to="/join-network" className="block hover:text-white transition-colors">
                Join Our Network
              </Link>
              <Link to="/resources" className="block hover:text-white transition-colors">
                Provider Resources
              </Link>
              <Link to="/support" className="block hover:text-white transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/80">
            © 2024 AyurHeal. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-primary-foreground/80 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-primary-foreground/80 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/accessibility" className="text-primary-foreground/80 hover:text-white transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};