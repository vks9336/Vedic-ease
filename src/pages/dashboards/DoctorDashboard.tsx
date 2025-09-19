import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Users,
  Calendar,
  Plus,
  FileText,
  Clock,
  CheckCircle,
  Activity,
  AlertCircle,
  Brain,
  TrendingUp,
  Bell,
  Star,
  Award,
  Stethoscope,
  BookOpen,
  Zap,
  Send,
  Download,
  PlusCircle,
  Edit,
  MoreHorizontal,
  Filter,
  Search,
  Eye,
  Trash2,
  Copy,
  ArrowLeft,
  Home,
  User,
  ChevronRight,
  LogOut,
} from "lucide-react";

export const DoctorDashboard = () => {
  const navigate = useNavigate();
  const { user, profile, signOut } = useAuth();
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [newReport, setNewReport] = useState({
    title: "",
    content: "",
    patientId: "",
  });
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "AI Schedule Suggestion",
      message: "Optimal time for Sarah Johnson therapy: 2:00 PM",
      type: "ai",
      urgent: false,
      read: false,
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "Patient Progress Alert",
      message: "Michael Chen showing excellent improvement",
      type: "progress",
      urgent: false,
      read: false,
      time: "4 hours ago",
    },
    {
      id: 3,
      title: "Urgent: Patient Needs Attention",
      message: "Emily Davis stress levels elevated",
      type: "alert",
      urgent: true,
      read: true,
      time: "1 day ago",
    },
    {
      id: 4,
      title: "New Patient Registration",
      message: "John Smith has registered for Panchakarma therapy",
      type: "patient",
      urgent: false,
      read: false,
      time: "3 hours ago",
    },
    {
      id: 5,
      title: "Therapy Session Completed",
      message: "Sarah Johnson's Panchakarma session completed successfully",
      type: "session",
      urgent: false,
      read: true,
      time: "6 hours ago",
    },
  ]);

  const stats = [
    {
      title: "My Patients",
      value: "18",
      icon: Users,
      color: "text-wellness-blue",
      change: "+2 this week",
    },
    {
      title: "Today's Sessions",
      value: "6",
      icon: Calendar,
      color: "text-wellness-orange",
      change: "3 completed",
    },
    {
      title: "Pending Reports",
      value: "3",
      icon: FileText,
      color: "text-warning",
      change: "2 urgent",
    },
    {
      title: "Success Rate",
      value: "94%",
      icon: Activity,
      color: "text-success",
      change: "+5% this month",
    },
  ];

  const myPatients = [
    {
      id: 1,
      name: "Sarah Johnson",
      condition: "Digestive Issues",
      nextSession: "Today 2:00 PM",
      progress: "Improving",
      priority: "normal",
      progressPercentage: 75,
      lastVisit: "2024-01-20",
      treatmentPlan: "Panchakarma + Herbal Medicine",
      adherence: 88,
      vitalSigns: { bp: "120/80", pulse: "72", weight: "68kg" },
      aiInsights: "Digestive function improving 25% faster than average",
    },
    {
      id: 2,
      name: "Michael Chen",
      condition: "Stress Management",
      nextSession: "Tomorrow 10:00 AM",
      progress: "Stable",
      priority: "normal",
      progressPercentage: 60,
      lastVisit: "2024-01-18",
      treatmentPlan: "Meditation + Ayurvedic Lifestyle",
      adherence: 92,
      vitalSigns: { bp: "118/78", pulse: "68", weight: "75kg" },
      aiInsights: "Stress levels reduced by 18% - excellent progress",
    },
    {
      id: 3,
      name: "Emily Davis",
      condition: "Sleep Disorders",
      nextSession: "Today 4:00 PM",
      progress: "Needs Attention",
      priority: "high",
      progressPercentage: 40,
      lastVisit: "2024-01-22",
      treatmentPlan: "Sleep Therapy + Herbal Supplements",
      adherence: 65,
      vitalSigns: { bp: "125/85", pulse: "78", weight: "62kg" },
      aiInsights: "Sleep quality inconsistent - recommend treatment adjustment",
    },
    {
      id: 4,
      name: "James Wilson",
      condition: "Joint Pain",
      nextSession: "Friday 11:00 AM",
      progress: "Excellent",
      priority: "low",
      progressPercentage: 92,
      lastVisit: "2024-01-19",
      treatmentPlan: "Massage + Anti-inflammatory Herbs",
      adherence: 95,
      vitalSigns: { bp: "115/75", pulse: "65", weight: "78kg" },
      aiInsights: "Outstanding recovery - 40% faster than typical",
    },
  ];

  const todaySchedule = [
    {
      time: "10:00 AM",
      patient: "Sarah Johnson",
      type: "Follow-up",
      duration: "30 min",
      status: "completed",
      aiNotes: "Good progress noted",
    },
    {
      time: "11:00 AM",
      patient: "Alex Kumar",
      type: "Initial Consultation",
      duration: "45 min",
      status: "completed",
      aiNotes: "Baseline assessment complete",
    },
    {
      time: "2:00 PM",
      patient: "Maria Garcia",
      type: "Therapy Session",
      duration: "60 min",
      status: "upcoming",
      aiNotes: "AI suggests stress management focus",
    },
    {
      time: "4:00 PM",
      patient: "Emily Davis",
      type: "Progress Review",
      duration: "30 min",
      status: "upcoming",
      aiNotes: "Sleep patterns need review",
    },
  ];

  const aiSuggestions = [
    {
      type: "scheduling",
      message:
        "Optimal slot for Michael Chen: Tomorrow 9:00 AM (based on his stress patterns)",
      priority: "medium",
    },
    {
      type: "treatment",
      message: "Sarah Johnson may benefit from extended Panchakarma sessions",
      priority: "high",
    },
    {
      type: "alert",
      message:
        "Emily Davis showing signs of treatment resistance - consider alternative approach",
      priority: "urgent",
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-l-red-500 bg-red-50";
      case "normal":
        return "border-l-blue-500 bg-blue-50";
      case "low":
        return "border-l-green-500 bg-green-50";
      default:
        return "border-l-gray-500 bg-gray-50";
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleNotificationClick = () => {
    setIsNotificationModalOpen(true);
  };

  const markNotificationRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notif) => ({ ...notif, read: true })));
  };

  return (
    <div className="min-h-screen bg-gradient-earth p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Navigation Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handleGoBack}
              className="hover:bg-primary/10"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleGoHome}
                className="p-0 h-auto hover:text-primary"
              >
                <Home className="w-4 h-4 mr-1" />
                Home
              </Button>
              <ChevronRight className="w-4 h-4" />
              <span className="text-primary font-medium">Doctor Dashboard</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Button
                variant="outline"
                size="icon"
                onClick={handleNotificationClick}
                className="hover:bg-primary/10"
              >
                <Bell className="w-4 h-4" />
                {notifications.filter((n) => !n.read).length > 0 && (
                  <Badge className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-wellness-orange text-xs p-0 flex items-center justify-center">
                    {notifications.filter((n) => !n.read).length}
                  </Badge>
                )}
              </Button>
            </div>

            {/* User Profile Dropdown */}
            <div className="flex items-center gap-2">
              <div className="text-right">
                <p className="text-sm font-medium">
                  {profile?.first_name} {profile?.last_name}
                </p>
                <p className="text-xs text-muted-foreground">Doctor</p>
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={handleSignOut}
                className="hover:bg-destructive/10 hover:text-destructive"
                title="Sign Out"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              Doctor Dashboard
              <Stethoscope className="w-7 h-7 text-primary" />
            </h1>
            <p className="text-muted-foreground">
              Welcome back, Dr. Priya Sharma • AI-Enhanced Practice
            </p>
            <div className="flex items-center gap-4 mt-2">
              <Badge className="bg-success/20 text-success">
                <Star className="w-3 h-3 mr-1" />
                4.9 Rating
              </Badge>
              <Badge className="bg-wellness-blue/20 text-wellness-blue">
                <Award className="w-3 h-3 mr-1" />
                18 Active Patients
              </Badge>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="relative">
              <Button variant="outline" size="icon">
                <Bell className="w-4 h-4" />
                <Badge className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-wellness-orange text-xs p-0 flex items-center justify-center">
                  {notifications.filter((n) => n.urgent).length}
                </Badge>
              </Button>
            </div>
            <Button variant="outline">
              <Brain className="w-4 h-4 mr-2" />
              AI Insights
            </Button>
            <Button variant="healing">
              <Plus className="w-4 h-4 mr-2" />
              Smart Schedule
            </Button>
          </div>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="hover:shadow-wellness transition-all duration-300 border-l-4 border-l-primary"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
                {index === 3 && (
                  <div className="mt-2">
                    <Progress value={94} className="h-2" />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Suggestions Banner */}
        <Card className="bg-gradient-healing text-white shadow-wellness">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Brain className="w-6 h-6" />
              <div>
                <h3 className="font-semibold">AI Assistant Suggestions</h3>
                <p className="text-sm opacity-90">
                  3 new insights available for your patients
                </p>
              </div>
              <Button
                variant="outline"
                className="ml-auto bg-white/20 text-white border-white/30 hover:bg-white/30"
              >
                View All
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="patients">Patient Records</TabsTrigger>
            <TabsTrigger value="reports">Reports & Analysis</TabsTrigger>
            <TabsTrigger value="schedule">AI Scheduling</TabsTrigger>
            <TabsTrigger value="insights">AI Insights</TabsTrigger>
            <TabsTrigger value="analytics">Analytics Table</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Enhanced Patient Overview */}
              <Card className="shadow-wellness">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Patient Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {myPatients.slice(0, 3).map((patient, index) => (
                      <div
                        key={index}
                        className={`p-4 border-l-4 rounded-r-lg ${getPriorityColor(
                          patient.priority
                        )} cursor-pointer hover:bg-primary/5 transition-colors`}
                        onClick={() => setSelectedPatient(patient)}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <p className="font-medium">{patient.name}</p>
                              <Badge className="text-xs">
                                {patient.adherence}% adherence
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {patient.condition}
                            </p>
                            <p className="text-sm text-primary">
                              {patient.nextSession}
                            </p>
                            <div className="mt-2">
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <span>Progress:</span>
                                <div className="flex-1">
                                  <Progress
                                    value={patient.progressPercentage}
                                    className="h-1"
                                  />
                                </div>
                                <span>{patient.progressPercentage}%</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right space-y-1">
                            <span
                              className={`px-2 py-1 rounded-full text-xs block ${
                                patient.progress === "Excellent"
                                  ? "bg-success/20 text-success"
                                  : patient.progress === "Improving"
                                  ? "bg-wellness-blue/20 text-wellness-blue"
                                  : patient.progress === "Needs Attention"
                                  ? "bg-warning/20 text-warning"
                                  : "bg-muted text-muted-foreground"
                              }`}
                            >
                              {patient.progress}
                            </span>
                            <Button size="sm" variant="outline">
                              <Edit className="w-3 h-3 mr-1" />
                              Update
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">
                      View All Patients
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Enhanced Today's Schedule */}
              <Card className="shadow-wellness">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Today's Schedule
                    <Badge className="bg-wellness-orange/20 text-wellness-orange">
                      AI Optimized
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {todaySchedule.map((session, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-primary-lighter/30 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                              session.status === "completed"
                                ? "bg-success/20 text-success"
                                : "bg-primary text-primary-foreground"
                            }`}
                          >
                            {session.status === "completed" ? (
                              <CheckCircle className="w-5 h-5" />
                            ) : (
                              <Clock className="w-5 h-5" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{session.patient}</p>
                            <p className="text-sm text-muted-foreground">
                              {session.type}
                            </p>
                            <p className="text-xs text-wellness-blue bg-wellness-blue/10 px-2 py-1 rounded mt-1 inline-block">
                              AI: {session.aiNotes}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{session.time}</p>
                          <p className="text-sm text-muted-foreground">
                            {session.duration}
                          </p>
                          <Badge
                            className={
                              session.status === "completed"
                                ? "bg-success/20 text-success"
                                : "bg-warning/20 text-warning"
                            }
                          >
                            {session.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">
                      <Brain className="w-4 h-4 mr-2" />
                      AI Schedule Optimization
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Patient Records Tab */}
          <TabsContent value="patients" className="space-y-6">
            <Card className="shadow-wellness">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Comprehensive Patient Records
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {myPatients.map((patient, index) => (
                    <Card
                      key={index}
                      className="p-4 hover:shadow-wellness transition-all cursor-pointer"
                      onClick={() => setSelectedPatient(patient)}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                            patient.priority === "high"
                              ? "bg-warning/20 text-warning"
                              : patient.priority === "low"
                              ? "bg-success/20 text-success"
                              : "bg-wellness-blue/20 text-wellness-blue"
                          }`}
                        >
                          <Users className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold">{patient.name}</h3>
                            <Badge
                              className={
                                patient.priority === "high"
                                  ? "bg-warning/20 text-warning"
                                  : "bg-primary/20 text-primary"
                              }
                            >
                              {patient.priority}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            {patient.condition}
                          </p>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Progress:</span>
                              <span className="font-medium">
                                {patient.progressPercentage}%
                              </span>
                            </div>
                            <Progress
                              value={patient.progressPercentage}
                              className="h-2"
                            />
                            <div className="text-xs text-muted-foreground space-y-1">
                              <p>Last Visit: {patient.lastVisit}</p>
                              <p>Treatment: {patient.treatmentPlan}</p>
                              <p>Adherence: {patient.adherence}%</p>
                            </div>
                            <div className="text-xs text-wellness-blue bg-wellness-blue/10 p-2 rounded">
                              AI Insight: {patient.aiInsights}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {selectedPatient && (
                  <Card className="mt-6 border-primary">
                    <CardHeader>
                      <CardTitle>
                        Detailed Record: {selectedPatient.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Vital Signs</h4>
                          <div className="space-y-1 text-sm">
                            <p>BP: {selectedPatient.vitalSigns.bp}</p>
                            <p>Pulse: {selectedPatient.vitalSigns.pulse}</p>
                            <p>Weight: {selectedPatient.vitalSigns.weight}</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Treatment Plan</h4>
                          <p className="text-sm text-muted-foreground">
                            {selectedPatient.treatmentPlan}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Quick Actions</h4>
                          <div className="space-y-2">
                            <Button size="sm" className="w-full">
                              Add Report
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="w-full"
                            >
                              Schedule Session
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports" className="space-y-6">
            <Card className="shadow-wellness">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Generate & Manage Reports
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Quick Report Generation */}
                  <Card className="p-4 bg-gradient-healing text-white">
                    <h3 className="font-semibold mb-4">
                      AI-Powered Report Generation
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Button
                        variant="outline"
                        className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                      >
                        <Brain className="w-4 h-4 mr-2" />
                        Patient Progress
                      </Button>
                      <Button
                        variant="outline"
                        className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                      >
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Treatment Analysis
                      </Button>
                      <Button
                        variant="outline"
                        className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                      >
                        <Activity className="w-4 h-4 mr-2" />
                        Weekly Summary
                      </Button>
                    </div>
                  </Card>

                  {/* Create New Report Form */}
                  <Card className="p-4">
                    <h3 className="font-semibold mb-4">Create Custom Report</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">
                          Report Title
                        </label>
                        <Input
                          placeholder="Enter report title..."
                          value={newReport.title}
                          onChange={(e) =>
                            setNewReport({
                              ...newReport,
                              title: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Patient</label>
                        <select className="w-full p-2 border rounded-md">
                          <option>Select patient...</option>
                          {myPatients.map((patient) => (
                            <option key={patient.id} value={patient.id}>
                              {patient.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium">
                          Report Content
                        </label>
                        <Textarea
                          placeholder="Enter report details..."
                          value={newReport.content}
                          onChange={(e) =>
                            setNewReport({
                              ...newReport,
                              content: e.target.value,
                            })
                          }
                          rows={4}
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button>
                          <PlusCircle className="w-4 h-4 mr-2" />
                          Generate Report
                        </Button>
                        <Button variant="outline">
                          <Brain className="w-4 h-4 mr-2" />
                          AI Assist
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* AI Scheduling Tab */}
          <TabsContent value="schedule" className="space-y-6">
            <Card className="shadow-wellness">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  AI-Powered Smart Scheduling
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* AI Suggestions */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {aiSuggestions.map((suggestion, index) => (
                      <Card
                        key={index}
                        className={`p-4 ${
                          suggestion.priority === "urgent"
                            ? "border-warning"
                            : suggestion.priority === "high"
                            ? "border-primary"
                            : "border-border"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                              suggestion.type === "alert"
                                ? "bg-warning/20 text-warning"
                                : suggestion.type === "treatment"
                                ? "bg-primary/20 text-primary"
                                : "bg-wellness-blue/20 text-wellness-blue"
                            }`}
                          >
                            {suggestion.type === "alert" ? (
                              <AlertCircle className="w-4 h-4" />
                            ) : suggestion.type === "treatment" ? (
                              <Stethoscope className="w-4 h-4" />
                            ) : (
                              <Calendar className="w-4 h-4" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium mb-1">
                              {suggestion.message}
                            </p>
                            <div className="flex items-center justify-between">
                              <Badge
                                className={
                                  suggestion.priority === "urgent"
                                    ? "bg-warning/20 text-warning"
                                    : suggestion.priority === "high"
                                    ? "bg-primary/20 text-primary"
                                    : "bg-muted text-muted-foreground"
                                }
                              >
                                {suggestion.priority}
                              </Badge>
                              <Button size="sm" variant="outline">
                                Accept
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>

                  {/* Auto-Schedule Settings */}
                  <Card className="p-4 bg-gradient-wellness text-white">
                    <h3 className="font-semibold mb-4">
                      Auto-Scheduling Preferences
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm opacity-90">
                          Optimal Session Duration
                        </label>
                        <select className="w-full p-2 rounded bg-white/20 text-white border border-white/30">
                          <option>30 minutes</option>
                          <option>45 minutes</option>
                          <option>60 minutes</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm opacity-90">
                          Preferred Time Slots
                        </label>
                        <select className="w-full p-2 rounded bg-white/20 text-white border border-white/30">
                          <option>Morning (9AM-12PM)</option>
                          <option>Afternoon (2PM-5PM)</option>
                          <option>Flexible</option>
                        </select>
                      </div>
                    </div>
                    <Button className="mt-4 bg-white/20 hover:bg-white/30 text-white border-white/30">
                      <Zap className="w-4 h-4 mr-2" />
                      Enable Auto-Scheduling
                    </Button>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* AI Insights Tab */}
          <TabsContent value="insights" className="space-y-6">
            <Card className="shadow-wellness">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  AI Insights & Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Practice Analytics */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="p-4">
                      <h3 className="font-semibold mb-4">
                        Treatment Effectiveness
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Panchakarma Therapy</span>
                          <Badge className="bg-success/20 text-success">
                            94% Success
                          </Badge>
                        </div>
                        <Progress value={94} className="h-2" />
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Herbal Medicine</span>
                          <Badge className="bg-wellness-blue/20 text-wellness-blue">
                            87% Success
                          </Badge>
                        </div>
                        <Progress value={87} className="h-2" />
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Meditation Therapy</span>
                          <Badge className="bg-wellness-orange/20 text-wellness-orange">
                            91% Success
                          </Badge>
                        </div>
                        <Progress value={91} className="h-2" />
                      </div>
                    </Card>

                    <Card className="p-4">
                      <h3 className="font-semibold mb-4">
                        Patient Satisfaction
                      </h3>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">
                          4.9
                        </div>
                        <div className="flex justify-center mb-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className="w-5 h-5 text-wellness-orange fill-current"
                            />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Based on 156 reviews
                        </p>
                        <Badge className="mt-2 bg-success/20 text-success">
                          +0.3 this month
                        </Badge>
                      </div>
                    </Card>
                  </div>

                  {/* AI Recommendations */}
                  <Card className="p-4 bg-gradient-healing text-white">
                    <h3 className="font-semibold mb-4">
                      AI Recommendations for Practice Improvement
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 mt-1" />
                        <div>
                          <p className="font-medium">
                            Optimize Morning Sessions
                          </p>
                          <p className="text-sm opacity-90">
                            Your patients show 23% better response in morning
                            slots (9-11 AM)
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <BookOpen className="w-5 h-5 mt-1" />
                        <div>
                          <p className="font-medium">
                            Personalized Treatment Plans
                          </p>
                          <p className="text-sm opacity-90">
                            Consider stress-reduction focus for 3 patients
                            showing elevated cortisol patterns
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Zap className="w-5 h-5 mt-1" />
                        <div>
                          <p className="font-medium">Automated Follow-ups</p>
                          <p className="text-sm opacity-90">
                            Enable AI scheduling for 85% improved adherence
                            rates
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Table Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <Card className="shadow-wellness">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Detailed Patient Analytics & Treatment Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Search and Filter Controls */}
                  <div className="flex gap-4 items-center">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="Search patients..."
                        className="pl-10"
                      />
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Plus className="w-4 h-4 mr-2" />
                          Add Patient
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Add New Patient</DialogTitle>
                          <DialogDescription>
                            Add a new patient to your practice for AI-powered
                            treatment management.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <Input placeholder="Patient Name" />
                          <Input placeholder="Email" type="email" />
                          <Textarea placeholder="Initial Assessment Notes" />
                          <div className="flex gap-2">
                            <Button className="flex-1">Add Patient</Button>
                            <Button variant="outline">Cancel</Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>

                  {/* Patient Analytics Table */}
                  <div className="border rounded-lg">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-12">
                            <Checkbox />
                          </TableHead>
                          <TableHead>Patient</TableHead>
                          <TableHead>Condition</TableHead>
                          <TableHead>Treatment</TableHead>
                          <TableHead>Progress</TableHead>
                          <TableHead>Last Visit</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="w-12"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {myPatients.map((patient) => (
                          <TableRow key={patient.id}>
                            <TableCell>
                              <Checkbox />
                            </TableCell>
                            <TableCell>
                              <div>
                                <div className="font-medium">
                                  {patient.name}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  ID: {patient.id}
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>{patient.condition}</TableCell>
                            <TableCell>
                              <div className="text-sm">
                                {patient.treatmentPlan
                                  .split(" + ")
                                  .map((treatment, idx) => (
                                    <Badge
                                      key={idx}
                                      variant="outline"
                                      className="mr-1 mb-1"
                                    >
                                      {treatment}
                                    </Badge>
                                  ))}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                  <Progress
                                    value={patient.progressPercentage}
                                    className="h-2 w-20"
                                  />
                                  <span className="text-sm font-medium">
                                    {patient.progressPercentage}%
                                  </span>
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {patient.progress}
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>{patient.lastVisit}</TableCell>
                            <TableCell>
                              <Badge
                                className={
                                  patient.priority === "high"
                                    ? "bg-warning/20 text-warning"
                                    : patient.priority === "low"
                                    ? "bg-success/20 text-success"
                                    : "bg-primary/20 text-primary"
                                }
                              >
                                {patient.priority}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm">
                                    <MoreHorizontal className="w-4 h-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>
                                    <Eye className="w-4 h-4 mr-2" />
                                    View Details
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Edit className="w-4 h-4 mr-2" />
                                    Edit Record
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Copy className="w-4 h-4 mr-2" />
                                    Duplicate
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="text-destructive">
                                    <Trash2 className="w-4 h-4 mr-2" />
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  {/* Treatment Selection Form */}
                  <Card className="p-4">
                    <h3 className="font-semibold mb-4">
                      Treatment Plan Selection
                    </h3>
                    <RadioGroup defaultValue="panchakarma">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="panchakarma" id="panchakarma" />
                        <label
                          htmlFor="panchakarma"
                          className="text-sm font-medium"
                        >
                          Panchakarma Therapy (Recommended)
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="herbal" id="herbal" />
                        <label htmlFor="herbal" className="text-sm font-medium">
                          Herbal Medicine Treatment
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="meditation" id="meditation" />
                        <label
                          htmlFor="meditation"
                          className="text-sm font-medium"
                        >
                          Meditation & Lifestyle Therapy
                        </label>
                      </div>
                    </RadioGroup>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Notification Modal */}
        <Dialog
          open={isNotificationModalOpen}
          onOpenChange={setIsNotificationModalOpen}
        >
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notifications
                {notifications.filter((n) => !n.read).length > 0 && (
                  <Badge className="bg-wellness-orange text-white">
                    {notifications.filter((n) => !n.read).length} new
                  </Badge>
                )}
              </DialogTitle>
              <DialogDescription>
                Stay updated with patient progress, AI insights, and scheduling
                updates
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 max-h-[60vh] overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Bell className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No notifications yet</p>
                  <p className="text-sm">
                    You'll see updates about your patients and AI insights here
                  </p>
                </div>
              ) : (
                <>
                  {notifications.filter((n) => !n.read).length > 0 && (
                    <div className="flex justify-end">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={markAllAsRead}
                        className="text-xs"
                      >
                        Mark All as Read
                      </Button>
                    </div>
                  )}

                  {notifications.map((notification, index) => (
                    <div
                      key={notification.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        !notification.read
                          ? "border-primary bg-primary/5"
                          : "border-border hover:bg-muted/50"
                      }`}
                      onClick={() => markNotificationRead(notification.id)}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            notification.type === "ai"
                              ? "bg-wellness-orange/20"
                              : notification.type === "alert"
                              ? "bg-red-100"
                              : notification.type === "progress"
                              ? "bg-green-100"
                              : notification.type === "patient"
                              ? "bg-blue-100"
                              : "bg-primary/20"
                          }`}
                        >
                          {notification.type === "ai" ? (
                            <Brain className="w-5 h-5 text-wellness-orange" />
                          ) : notification.type === "alert" ? (
                            <AlertCircle className="w-5 h-5 text-red-600" />
                          ) : notification.type === "progress" ? (
                            <TrendingUp className="w-5 h-5 text-green-600" />
                          ) : notification.type === "patient" ? (
                            <Users className="w-5 h-5 text-blue-600" />
                          ) : (
                            <Stethoscope className="w-5 h-5 text-primary" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">
                              {notification.title}
                            </h4>
                            <div className="flex items-center gap-2">
                              {!notification.read && (
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                              )}
                              <span className="text-xs text-muted-foreground">
                                {notification.time}
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {notification.message}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge
                              variant="outline"
                              className={`text-xs ${
                                notification.type === "ai"
                                  ? "border-wellness-orange text-wellness-orange"
                                  : notification.type === "alert"
                                  ? "border-red-500 text-red-600"
                                  : notification.type === "progress"
                                  ? "border-green-500 text-green-600"
                                  : notification.type === "patient"
                                  ? "border-blue-500 text-blue-600"
                                  : "border-primary text-primary"
                              }`}
                            >
                              {notification.type === "ai"
                                ? "AI"
                                : notification.type === "alert"
                                ? "Alert"
                                : notification.type === "progress"
                                ? "Progress"
                                : notification.type === "patient"
                                ? "Patient"
                                : "Session"}
                            </Badge>
                            {!notification.read && (
                              <Badge variant="secondary" className="text-xs">
                                New
                              </Badge>
                            )}
                            {notification.urgent && (
                              <Badge variant="destructive" className="text-xs">
                                Urgent
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
