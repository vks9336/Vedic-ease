import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import {
  ProtectedRoute,
  AdminRoute,
  DoctorRoute,
  PatientRoute,
} from "@/components/ProtectedRoute";
import { Home } from "./pages/Home";
import { Auth } from "./pages/Auth";
import { AdminDashboard } from "./pages/dashboards/AdminDashboard";
import { DoctorDashboard } from "./pages/dashboards/DoctorDashboard";
import { PatientDashboard } from "./pages/dashboards/PatientDashboard";
import About from "./pages/Index";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import Appointment from "./pages/Appointment";
import DoctorLogin from "./pages/DoctorLogin";
import Doctors from "./pages/Doctors";
import JoinNetwork from "./pages/JoinNetwork";
import Resources from "./pages/Resources";
import Support from "./pages/Support";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/login" element={<Auth mode="login" />} />
            <Route path="/register" element={<Auth mode="register" />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctor-login" element={<DoctorLogin />} />
            <Route path="/join-network" element={<JoinNetwork />} />
            <Route path="/support" element={<Support />} />

            {/* Protected routes */}
            <Route
              path="/appointment"
              element={
                <ProtectedRoute>
                  <Appointment />
                </ProtectedRoute>
              }
            />
            <Route
              path="/resources"
              element={
                <ProtectedRoute allowedRoles={["doctor", "admin"]}>
                  <Resources />
                </ProtectedRoute>
              }
            />

            {/* Role-specific dashboard routes */}
            <Route
              path="/admin/dashboard"
              element={
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              }
            />
            <Route
              path="/doctor/dashboard"
              element={
                <DoctorRoute>
                  <DoctorDashboard />
                </DoctorRoute>
              }
            />
            <Route
              path="/patient/dashboard"
              element={
                <PatientRoute>
                  <PatientDashboard />
                </PatientRoute>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
