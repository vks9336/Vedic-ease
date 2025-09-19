import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Calendar as CalendarIcon,
  MessageCircle,
  FileText,
  Bell,
  Activity,
  Heart,
  Pill,
  Clock,
  Send,
  Bot,
  TrendingUp,
  Download,
  Star,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  Brain,
  Zap,
  Settings,
  HelpCircle,
  Info,
  ArrowLeft,
  Home,
  User,
  LogOut,
  ChevronRight,
} from "lucide-react";

export const PatientDashboard = () => {
  const navigate = useNavigate();
  const { user, profile, signOut } = useAuth();
  const [chatMessage, setChatMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      type: "bot",
      message:
        "Hello! I'm your AyurHeal AI assistant. How can I help you today?",
    },
    { type: "user", message: "When is my next appointment?" },
    {
      type: "bot",
      message:
        "Your next therapy session is tomorrow at 2:00 PM with Dr. Priya Sharma. I can also reschedule it if needed.",
    },
  ]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const [aiNotifications, setAiNotifications] = useState(true);
  const [wellnessLevel, setWellnessLevel] = useState([75]);
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Therapy Session Reminder",
      message: "Your Panchakarma session with Dr. Priya is in 2 hours",
      time: "2 hours ago",
      read: false,
      type: "reminder",
    },
    {
      id: 2,
      title: "AI Scheduling Update",
      message: "I've automatically scheduled your follow-up for next week",
      time: "5 hours ago",
      read: false,
      type: "ai",
    },
    {
      id: 3,
      title: "Report Ready",
      message: "Your wellness progress report is now available",
      time: "1 day ago",
      read: true,
      type: "report",
    },
  ]);

  const upcomingSessions = [
    {
      date: "Tomorrow",
      time: "2:00 PM",
      doctor: "Dr. Priya Sharma",
      type: "Panchakarma Therapy",
      status: "confirmed",
      aiScheduled: false,
      duration: "90 mins",
    },
    {
      date: "Friday",
      time: "10:00 AM",
      doctor: "Dr. Priya Sharma",
      type: "Follow-up Consultation",
      status: "confirmed",
      aiScheduled: true,
      duration: "45 mins",
    },
    {
      date: "Next Week",
      time: "3:00 PM",
      doctor: "Dr. Rajesh Kumar",
      type: "Herbal Medicine Review",
      status: "ai-suggested",
      aiScheduled: true,
      duration: "60 mins",
    },
  ];

  const healthMetrics = [
    { label: "Overall Wellness", value: 78, change: "+12%", trend: "up" },
    { label: "Stress Level", value: 32, change: "-18%", trend: "down" },
    { label: "Energy Level", value: 85, change: "+25%", trend: "up" },
    { label: "Sleep Quality", value: 74, change: "+8%", trend: "up" },
  ];

  const trackingRecord = [
    {
      date: "2024-01-15",
      metric: "Weight",
      value: "68 kg",
      status: "improving",
    },
    {
      date: "2024-01-10",
      metric: "Blood Pressure",
      value: "120/80",
      status: "normal",
    },
    {
      date: "2024-01-08",
      metric: "Stress Level",
      value: "3/10",
      status: "improving",
    },
    {
      date: "2024-01-05",
      metric: "Sleep Hours",
      value: "7.5 hrs",
      status: "good",
    },
  ];

  const todayReminders = [
    {
      icon: <Pill className="w-5 h-5 text-wellness-orange" />,
      task: "Take Triphala supplements",
      time: "8:00 AM",
      completed: true,
    },
    {
      icon: <Activity className="w-5 h-5 text-wellness-blue" />,
      task: "Morning yoga practice",
      time: "7:00 AM",
      completed: true,
    },
    {
      icon: <Heart className="w-5 h-5 text-success" />,
      task: "Meditation (20 minutes)",
      time: "6:00 PM",
      completed: false,
    },
    {
      icon: <Pill className="w-5 h-5 text-wellness-orange" />,
      task: "Evening herbs",
      time: "8:00 PM",
      completed: false,
    },
  ];

  const recentReports = [
    {
      title: "AI Wellness Analysis Report",
      doctor: "AyurHeal AI + Dr. Priya Sharma",
      date: "2024-01-22",
      type: "AI Analysis",
      status: "new",
      insights: "Stress reduction: 18% improvement detected",
    },
    {
      title: "Panchakarma Progress Report",
      doctor: "Dr. Priya Sharma",
      date: "2024-01-20",
      type: "Progress Report",
      status: "viewed",
      insights: "Digestive health showing significant improvement",
    },
    {
      title: "Herbal Medicine Effectiveness",
      doctor: "Dr. Rajesh Kumar",
      date: "2024-01-18",
      type: "Treatment Analysis",
      status: "viewed",
      insights: "Current herbs showing positive response",
    },
  ];

  const faqData = [
    {
      question: "How does AI scheduling work?",
      answer:
        "Our AI analyzes your health patterns, preferences, and optimal treatment times to automatically schedule sessions when you're most likely to benefit from therapy.",
    },
    {
      question: "Can I reschedule my appointments?",
      answer:
        "Yes! You can reschedule through the AI assistant, your dashboard, or by contacting your practitioner directly. The AI will suggest optimal alternative times.",
    },
    {
      question: "How accurate are the health metrics?",
      answer:
        "Our health tracking combines your self-reported data with AI analysis of your treatment progress to provide accurate, personalized insights.",
    },
    {
      question: "What if I miss a therapy session?",
      answer:
        "Don't worry! The AI will automatically suggest rescheduling options and adjust your treatment plan accordingly. Your practitioner will be notified.",
    },
  ];

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      setChatMessages([
        ...chatMessages,
        { type: "user", message: chatMessage },
      ]);
      setChatMessage("");

      // Enhanced AI responses with scheduling capabilities
      setTimeout(() => {
        const responses = [
          "I've analyzed your health data and can suggest optimal therapy times. Would you like me to schedule automatically?",
          "Based on your progress, I recommend scheduling your next Panchakarma session. I can arrange this with Dr. Priya.",
          "Your stress levels have improved 18%! Let me schedule a wellness check-up to maintain this progress.",
          "I notice your sleep quality is excellent. Would you like me to adjust your meditation schedule accordingly?",
        ];
        setChatMessages((prev) => [
          ...prev,
          {
            type: "bot",
            message: responses[Math.floor(Math.random() * responses.length)],
          },
        ]);
      }, 1000);
    }
  };

  const toggleReminder = (index: number) => {
    console.log(`Toggled reminder ${index}`);
  };

  const markNotificationRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
    );
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
              <span className="text-primary font-medium">
                Patient Dashboard
              </span>
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
                <p className="text-xs text-muted-foreground">Patient</p>
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

        {/* Enhanced Header with Notifications */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              My Wellness Dashboard
              <Sparkles className="w-6 h-6 text-wellness-orange animate-pulse-gentle" />
            </h1>
            <p className="text-muted-foreground">
              Welcome back, {profile?.first_name} {profile?.last_name} •
              AI-Powered Healing Journey
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <Button variant="healing">
              <Brain className="w-4 h-4 mr-2" />
              AI Schedule
            </Button>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            onClick={() => navigate("/appointment")}
            className="flex items-center gap-2"
          >
            <CalendarIcon className="w-4 h-4" />
            Book Appointment
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate("/doctors")}
            className="flex items-center gap-2"
          >
            <User className="w-4 h-4" />
            Find Doctors
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate("/resources")}
            className="flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            Health Resources
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate("/support")}
            className="flex items-center gap-2"
          >
            <HelpCircle className="w-4 h-4" />
            Get Support
          </Button>
        </div>

        {/* Health Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {healthMetrics.map((metric, index) => (
            <Card
              key={index}
              className="hover:shadow-wellness transition-all duration-300 border-l-4 border-l-primary"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    {metric.label}
                  </span>
                  {metric.trend === "up" ? (
                    <TrendingUp className="w-4 h-4 text-success" />
                  ) : (
                    <TrendingUp className="w-4 h-4 text-success rotate-180" />
                  )}
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold">{metric.value}%</div>
                  <Progress value={metric.value} className="h-2" />
                  <span
                    className={`text-xs ${
                      metric.trend === "up"
                        ? "text-success"
                        : "text-wellness-orange"
                    }`}
                  >
                    {metric.change} from last week
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="tracking">Health Tracking</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="ai-assistant">AI Assistant</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Schedule & Reminders */}
              <div className="lg:col-span-2 space-y-6">
                {/* Upcoming Sessions */}
                <Card className="shadow-wellness">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CalendarIcon className="w-5 h-5" />
                      Upcoming Therapy Sessions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingSessions.map((session, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-primary-lighter/30 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                                session.aiScheduled
                                  ? "bg-gradient-wellness"
                                  : "bg-gradient-healing"
                              }`}
                            >
                              {session.aiScheduled ? (
                                <Brain className="w-6 h-6 text-white" />
                              ) : (
                                <CalendarIcon className="w-6 h-6 text-white" />
                              )}
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <p className="font-medium">{session.type}</p>
                                {session.aiScheduled && (
                                  <Zap className="w-4 h-4 text-wellness-orange" />
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {session.doctor}
                              </p>
                              <p className="text-sm text-primary">
                                {session.date} at {session.time} (
                                {session.duration})
                              </p>
                            </div>
                          </div>
                          <div className="text-right space-y-1">
                            <span
                              className={`px-3 py-1 rounded-full text-xs block ${
                                session.status === "confirmed"
                                  ? "bg-success/20 text-success"
                                  : session.status === "ai-suggested"
                                  ? "bg-wellness-orange/20 text-wellness-orange"
                                  : "bg-warning/20 text-warning"
                              }`}
                            >
                              {session.status === "ai-suggested"
                                ? "AI Suggested"
                                : session.status}
                            </span>
                            {session.aiScheduled && (
                              <Badge variant="outline" className="text-xs">
                                AI Scheduled
                              </Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Today's Reminders */}
                <Card className="shadow-wellness">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="w-5 h-5" />
                      Today's Wellness Reminders
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {todayReminders.map((reminder, index) => (
                        <div
                          key={index}
                          className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                            reminder.completed
                              ? "bg-success/10 border-success/20"
                              : "bg-background border-border"
                          }`}
                        >
                          <button
                            onClick={() => toggleReminder(index)}
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              reminder.completed
                                ? "bg-success border-success text-white"
                                : "border-muted-foreground hover:border-success"
                            }`}
                          >
                            {reminder.completed && (
                              <span className="text-xs">✓</span>
                            )}
                          </button>
                          {reminder.icon}
                          <div className="flex-1">
                            <p
                              className={`font-medium ${
                                reminder.completed
                                  ? "line-through text-muted-foreground"
                                  : ""
                              }`}
                            >
                              {reminder.task}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {reminder.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Reports */}
                <Card className="shadow-wellness">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      My Reports & Prescriptions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recentReports.map((report, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-primary-lighter/30 transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                report.type === "AI Analysis"
                                  ? "bg-wellness-orange/20"
                                  : "bg-primary/20"
                              }`}
                            >
                              {report.type === "AI Analysis" ? (
                                <Brain className="w-5 h-5 text-wellness-orange" />
                              ) : (
                                <FileText className="w-5 h-5 text-primary" />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <p className="font-medium">{report.title}</p>
                                {report.status === "new" && (
                                  <Badge className="bg-wellness-orange text-white">
                                    New
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {report.doctor}
                              </p>
                              <p className="text-xs text-primary mt-1">
                                {report.insights}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Button size="sm" variant="outline">
                              <Download className="w-4 h-4 mr-1" />
                              View
                            </Button>
                            <p className="text-xs text-muted-foreground mt-1">
                              {report.date}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      View All Reports
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Enhanced AI Assistant */}
              <div className="space-y-6">
                <Card className="shadow-wellness flex flex-col border-gradient-healing">
                  <CardHeader className="bg-gradient-healing text-white">
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Brain className="w-5 h-5" />
                        AyurHeal AI Assistant
                      </div>
                      <Badge className="bg-white/20 text-white">
                        Smart Scheduling
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="flex-1 space-y-3 overflow-y-auto mb-4 min-h-[200px] max-h-[300px]">
                      {chatMessages.map((msg, index) => (
                        <div
                          key={index}
                          className={`flex ${
                            msg.type === "user"
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          <div
                            className={`max-w-xs p-3 rounded-lg break-words ${
                              msg.type === "user"
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary text-secondary-foreground"
                            }`}
                          >
                            <p className="text-sm">{msg.message}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <Input
                        placeholder="Ask me to schedule therapy, track progress..."
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                        onKeyPress={(e) =>
                          e.key === "Enter" && handleSendMessage()
                        }
                        className="flex-1 min-w-0"
                      />
                      <Button
                        size="icon"
                        onClick={handleSendMessage}
                        className="bg-gradient-healing flex-shrink-0"
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex gap-2 mt-2 flex-wrap">
                      <Badge
                        variant="outline"
                        className="cursor-pointer hover:bg-primary/10 flex-shrink-0"
                        onClick={() =>
                          setChatMessage("Schedule my next therapy")
                        }
                      >
                        Auto Schedule
                      </Badge>
                      <Badge
                        variant="outline"
                        className="cursor-pointer hover:bg-primary/10 flex-shrink-0"
                        onClick={() => setChatMessage("Analyze my progress")}
                      >
                        Progress Analysis
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Enhanced Quick Actions */}
                <Card className="shadow-wellness">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      Smart Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <Brain className="w-4 h-4 mr-2" />
                        AI Auto-Schedule
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Message Doctor
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Progress Analysis
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        Generate Report
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Health Tracking Tab */}
          <TabsContent value="tracking" className="space-y-6">
            <Card className="shadow-wellness">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Detailed Health Tracking Record
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trackingRecord.map((record, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border border-border rounded-lg"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            record.status === "improving"
                              ? "bg-success/20"
                              : record.status === "normal"
                              ? "bg-wellness-blue/20"
                              : "bg-primary/20"
                          }`}
                        >
                          <Activity
                            className={`w-5 h-5 ${
                              record.status === "improving"
                                ? "text-success"
                                : record.status === "normal"
                                ? "text-wellness-blue"
                                : "text-primary"
                            }`}
                          />
                        </div>
                        <div>
                          <p className="font-medium">{record.metric}</p>
                          <p className="text-sm text-muted-foreground">
                            {record.date}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{record.value}</p>
                        <Badge
                          className={
                            record.status === "improving"
                              ? "bg-success/20 text-success"
                              : record.status === "normal"
                              ? "bg-wellness-blue/20 text-wellness-blue"
                              : "bg-primary/20 text-primary"
                          }
                        >
                          {record.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports" className="space-y-6">
            <Card className="shadow-wellness">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Comprehensive Reports & Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {recentReports.map((report, index) => (
                    <Card
                      key={index}
                      className="p-4 hover:shadow-wellness transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                            report.type === "AI Analysis"
                              ? "bg-wellness-orange/20"
                              : "bg-primary/20"
                          }`}
                        >
                          {report.type === "AI Analysis" ? (
                            <Brain className="w-6 h-6 text-wellness-orange" />
                          ) : (
                            <FileText className="w-6 h-6 text-primary" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold">{report.title}</h3>
                            {report.status === "new" && (
                              <Badge className="bg-wellness-orange">New</Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            {report.doctor}
                          </p>
                          <p className="text-sm text-primary bg-primary/10 p-2 rounded">
                            {report.insights}
                          </p>
                          <div className="flex justify-between items-center mt-3">
                            <span className="text-xs text-muted-foreground">
                              {report.date}
                            </span>
                            <Button size="sm">
                              <Download className="w-4 h-4 mr-1" />
                              Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <Card className="shadow-wellness">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Notification Center
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification, index) => (
                    <div
                      key={index}
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        !notification.read
                          ? "border-primary bg-primary/5"
                          : "border-border"
                      }`}
                      onClick={() => markNotificationRead(notification.id)}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            notification.type === "ai"
                              ? "bg-wellness-orange/20"
                              : notification.type === "reminder"
                              ? "bg-warning/20"
                              : "bg-primary/20"
                          }`}
                        >
                          {notification.type === "ai" ? (
                            <Brain className="w-5 h-5 text-wellness-orange" />
                          ) : notification.type === "reminder" ? (
                            <Clock className="w-5 h-5 text-warning" />
                          ) : (
                            <FileText className="w-5 h-5 text-primary" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">
                              {notification.title}
                            </h4>
                            {!notification.read && (
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {notification.message}
                          </p>
                          <span className="text-xs text-muted-foreground">
                            {notification.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* AI Assistant Tab */}
          <TabsContent value="ai-assistant" className="space-y-6">
            <Card className="shadow-wellness">
              <CardHeader className="bg-gradient-healing text-white">
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  Advanced AI Assistant & Auto Scheduling
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {/* AI Capabilities */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="p-4 border-wellness-orange/20">
                      <div className="text-center">
                        <Brain className="w-8 h-8 text-wellness-orange mx-auto mb-2" />
                        <h3 className="font-semibold">Smart Scheduling</h3>
                        <p className="text-sm text-muted-foreground">
                          AI analyzes your health patterns and automatically
                          schedules optimal therapy sessions
                        </p>
                      </div>
                    </Card>
                    <Card className="p-4 border-wellness-blue/20">
                      <div className="text-center">
                        <TrendingUp className="w-8 h-8 text-wellness-blue mx-auto mb-2" />
                        <h3 className="font-semibold">Progress Analysis</h3>
                        <p className="text-sm text-muted-foreground">
                          Real-time health tracking with predictive insights and
                          recommendations
                        </p>
                      </div>
                    </Card>
                    <Card className="p-4 border-primary/20">
                      <div className="text-center">
                        <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                        <h3 className="font-semibold">Instant Reports</h3>
                        <p className="text-sm text-muted-foreground">
                          Generate comprehensive health reports with AI-powered
                          insights
                        </p>
                      </div>
                    </Card>
                  </div>

                  {/* Enhanced Chat Interface */}
                  <div className="h-96 flex flex-col border rounded-lg">
                    <div className="flex-1 space-y-3 overflow-y-auto p-4">
                      {chatMessages.map((msg, index) => (
                        <div
                          key={index}
                          className={`flex ${
                            msg.type === "user"
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          <div
                            className={`max-w-xs p-3 rounded-lg ${
                              msg.type === "user"
                                ? "bg-primary text-primary-foreground"
                                : "bg-gradient-healing text-white"
                            }`}
                          >
                            <p className="text-sm">{msg.message}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 border-t">
                      <div className="flex gap-2">
                        <Input
                          placeholder="Ask me anything about scheduling, health tracking, or reports..."
                          value={chatMessage}
                          onChange={(e) => setChatMessage(e.target.value)}
                          onKeyPress={(e) =>
                            e.key === "Enter" && handleSendMessage()
                          }
                          className="flex-1"
                        />
                        <Button
                          onClick={handleSendMessage}
                          className="bg-gradient-healing"
                        >
                          <Send className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <Badge
                          variant="outline"
                          className="cursor-pointer hover:bg-primary/10"
                          onClick={() =>
                            setChatMessage(
                              "Auto-schedule my therapy sessions for next month"
                            )
                          }
                        >
                          Auto Schedule Month
                        </Badge>
                        <Badge
                          variant="outline"
                          className="cursor-pointer hover:bg-primary/10"
                          onClick={() =>
                            setChatMessage(
                              "Generate my wellness report with AI insights"
                            )
                          }
                        >
                          AI Report
                        </Badge>
                        <Badge
                          variant="outline"
                          className="cursor-pointer hover:bg-primary/10"
                          onClick={() =>
                            setChatMessage(
                              "Analyze my health trends and suggest improvements"
                            )
                          }
                        >
                          Health Analysis
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Calendar Tab */}
          <TabsContent value="calendar" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="shadow-wellness">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5" />
                    Therapy Schedule Calendar
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CalendarComponent
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>

              <Card className="shadow-wellness">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5" />
                    Frequently Asked Questions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {faqData.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>

            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Calendar Tips</AlertTitle>
              <AlertDescription>
                Click on any date to view available appointment slots. Green
                dates indicate optimal therapy days based on your health
                patterns.
              </AlertDescription>
            </Alert>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card className="shadow-wellness">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Wellness Preferences & Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-base font-medium">
                        AI Notifications
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Receive AI-powered insights and scheduling suggestions
                      </div>
                    </div>
                    <Switch
                      checked={aiNotifications}
                      onCheckedChange={setAiNotifications}
                    />
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="text-base font-medium">
                      Wellness Level Target
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      Set your target wellness level for AI optimization
                    </div>
                    <div className="px-3">
                      <Slider
                        value={wellnessLevel}
                        onValueChange={setWellnessLevel}
                        max={100}
                        step={5}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-2">
                        <span>0%</span>
                        <span className="font-medium text-primary">
                          {wellnessLevel[0]}%
                        </span>
                        <span>100%</span>
                      </div>
                    </div>
                  </div>
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
                Stay updated with your wellness journey and AI insights
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 max-h-[60vh] overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Bell className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No notifications yet</p>
                  <p className="text-sm">
                    You'll see updates about your therapy sessions and AI
                    insights here
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
                              : notification.type === "reminder"
                              ? "bg-warning/20"
                              : "bg-primary/20"
                          }`}
                        >
                          {notification.type === "ai" ? (
                            <Brain className="w-5 h-5 text-wellness-orange" />
                          ) : notification.type === "reminder" ? (
                            <Clock className="w-5 h-5 text-warning" />
                          ) : (
                            <FileText className="w-5 h-5 text-primary" />
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
                                  : notification.type === "reminder"
                                  ? "border-warning text-warning"
                                  : "border-primary text-primary"
                              }`}
                            >
                              {notification.type === "ai"
                                ? "AI"
                                : notification.type === "reminder"
                                ? "Reminder"
                                : "Report"}
                            </Badge>
                            {!notification.read && (
                              <Badge variant="secondary" className="text-xs">
                                New
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
