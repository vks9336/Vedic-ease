import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Users,
  Calendar,
  UserPlus,
  MessageSquare,
  Activity,
  TrendingUp,
  Clock,
  CheckCircle,
  Brain,
  Bell,
  Shield,
  BarChart3,
  Settings,
  Zap,
  ArrowLeft,
  Home,
  User,
  ChevronRight,
  LogOut,
  AlertCircle,
  FileText,
} from "lucide-react";

export const AdminDashboard = () => {
  const navigate = useNavigate();
  const { user, profile, signOut } = useAuth();
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Doctor Registration",
      message: "Dr. Meera Joshi has applied to join the platform",
      type: "registration",
      urgent: false,
      read: false,
      time: "1 hour ago",
    },
    {
      id: 2,
      title: "System Performance Alert",
      message: "Server response time increased by 15% in the last hour",
      type: "system",
      urgent: true,
      read: false,
      time: "2 hours ago",
    },
    {
      id: 3,
      title: "Monthly Report Generated",
      message: "January 2024 analytics report is ready for review",
      type: "report",
      urgent: false,
      read: true,
      time: "1 day ago",
    },
    {
      id: 4,
      title: "User Feedback Submitted",
      message:
        "Patient Sarah Johnson left a 5-star review for Dr. Priya Sharma",
      type: "feedback",
      urgent: false,
      read: false,
      time: "3 hours ago",
    },
    {
      id: 5,
      title: "Payment Processing Update",
      message: "Weekly payment batch processed successfully - $15,240",
      type: "payment",
      urgent: false,
      read: true,
      time: "2 days ago",
    },
  ]);

  const stats = [
    {
      title: "Total Doctors",
      value: "24",
      icon: Users,
      color: "text-wellness-blue",
    },
    {
      title: "Active Patients",
      value: "342",
      icon: Activity,
      color: "text-wellness-orange",
    },
    {
      title: "Sessions Today",
      value: "18",
      icon: Calendar,
      color: "text-success",
    },
    {
      title: "Pending Approvals",
      value: "7",
      icon: Clock,
      color: "text-warning",
    },
  ];

  const recentDoctors = [
    {
      name: "Dr. Priya Sharma",
      specialty: "Panchakarma",
      status: "Active",
      patients: 24,
    },
    {
      name: "Dr. Rajesh Kumar",
      specialty: "Herbal Medicine",
      status: "Active",
      patients: 18,
    },
    {
      name: "Dr. Maya Patel",
      specialty: "Nutrition",
      status: "Pending",
      patients: 0,
    },
    {
      name: "Dr. Arjun Singh",
      specialty: "Meditation",
      status: "Active",
      patients: 12,
    },
  ];

  const upcomingSessions = [
    {
      patient: "Sarah Johnson",
      doctor: "Dr. Priya Sharma",
      time: "10:00 AM",
      type: "Consultation",
    },
    {
      patient: "Michael Chen",
      doctor: "Dr. Rajesh Kumar",
      time: "11:30 AM",
      type: "Follow-up",
    },
    {
      patient: "Emily Davis",
      doctor: "Dr. Maya Patel",
      time: "2:00 PM",
      type: "Initial Assessment",
    },
    {
      patient: "James Wilson",
      doctor: "Dr. Arjun Singh",
      time: "3:30 PM",
      type: "Therapy Session",
    },
  ];

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
              <span className="text-primary font-medium">Admin Dashboard</span>
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
                <p className="text-xs text-muted-foreground">Admin</p>
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
              Admin Dashboard
              <Shield className="w-7 h-7 text-primary" />
            </h1>
            <p className="text-muted-foreground">
              AI-Powered Platform Management & Analytics
            </p>
            <div className="flex items-center gap-4 mt-2">
              <Badge className="bg-success/20 text-success">
                System Healthy
              </Badge>
              <Badge className="bg-wellness-blue/20 text-wellness-blue">
                24 Active Doctors
              </Badge>
              <Badge className="bg-wellness-orange/20 text-wellness-orange">
                342 Patients
              </Badge>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <Button variant="outline">
              <Brain className="w-4 h-4 mr-2" />
              AI Analytics
            </Button>
            <Button variant="healing">
              <UserPlus className="w-4 h-4 mr-2" />
              Add Doctor
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="hover:shadow-wellness transition-shadow"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {index === 0 && "+2 this week"}
                  {index === 1 && "+12 this month"}
                  {index === 2 && "5 completed"}
                  {index === 3 && "3 urgent"}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">AI Analytics</TabsTrigger>
            <TabsTrigger value="management">User Management</TabsTrigger>
            <TabsTrigger value="reports">System Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Doctors Management */}
              <Card className="shadow-wellness">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Doctor Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentDoctors.map((doctor, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 border border-border rounded-lg"
                      >
                        <div>
                          <p className="font-medium">{doctor.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {doctor.specialty}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2">
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                doctor.status === "Active"
                                  ? "bg-success/20 text-success"
                                  : "bg-warning/20 text-warning"
                              }`}
                            >
                              {doctor.status}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {doctor.patients} patients
                          </p>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">
                      View All Doctors
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Today's Sessions */}
              <Card className="shadow-wellness">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Today's Sessions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingSessions.map((session, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 border border-border rounded-lg"
                      >
                        <div>
                          <p className="font-medium">{session.patient}</p>
                          <p className="text-sm text-muted-foreground">
                            {session.doctor}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{session.time}</p>
                          <p className="text-sm text-muted-foreground">
                            {session.type}
                          </p>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">
                      View All Sessions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Quick Actions */}
            <Card className="shadow-wellness">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  AI-Powered Admin Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button variant="outline" className="h-20 flex-col">
                    <Brain className="w-6 h-6 mb-2" />
                    AI System Analysis
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <BarChart3 className="w-6 h-6 mb-2" />
                    Performance Analytics
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <Settings className="w-6 h-6 mb-2" />
                    Auto-Optimize Platform
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card className="shadow-wellness">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  AI-Powered Platform Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-4 bg-gradient-healing text-white">
                    <h3 className="font-semibold mb-4">Platform Performance</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Success Rate</span>
                        <span className="font-bold">94.2%</span>
                      </div>
                      <Progress value={94} className="h-2 bg-white/20" />
                      <div className="flex justify-between">
                        <span>Patient Satisfaction</span>
                        <span className="font-bold">4.9/5</span>
                      </div>
                      <Progress value={98} className="h-2 bg-white/20" />
                    </div>
                  </Card>
                  <Card className="p-4">
                    <h3 className="font-semibold mb-4">AI Insights</h3>
                    <div className="space-y-3 text-sm">
                      <p className="text-wellness-blue">
                        • 23% increase in treatment effectiveness with AI
                        scheduling
                      </p>
                      <p className="text-success">
                        • Patient adherence improved by 15% this month
                      </p>
                      <p className="text-wellness-orange">
                        • Automated systems handling 67% of routine tasks
                      </p>
                    </div>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="management" className="space-y-6">
            <Card className="shadow-wellness">
              <CardHeader>
                <CardTitle>Enhanced User Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {recentDoctors.map((doctor, index) => (
                    <Card
                      key={index}
                      className="p-4 hover:shadow-wellness transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{doctor.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {doctor.specialty}
                          </p>
                          <Badge
                            className={
                              doctor.status === "Active"
                                ? "bg-success/20 text-success"
                                : "bg-warning/20 text-warning"
                            }
                          >
                            {doctor.status}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">
                            {doctor.patients} patients
                          </p>
                          <Button size="sm" variant="outline">
                            Manage
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card className="shadow-wellness">
              <CardHeader>
                <CardTitle>System Reports & Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Card className="p-4 bg-gradient-wellness text-white">
                    <h3 className="font-semibold mb-2">
                      AI-Generated System Report
                    </h3>
                    <p className="text-sm opacity-90">
                      Platform operating at 98.5% efficiency with excellent user
                      satisfaction metrics.
                    </p>
                  </Card>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button variant="outline" className="h-16 flex-col">
                      <TrendingUp className="w-5 h-5 mb-1" />
                      Growth Report
                    </Button>
                    <Button variant="outline" className="h-16 flex-col">
                      <Activity className="w-5 h-5 mb-1" />
                      Usage Analytics
                    </Button>
                    <Button variant="outline" className="h-16 flex-col">
                      <CheckCircle className="w-5 h-5 mb-1" />
                      Performance Summary
                    </Button>
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
                Stay updated with platform management, system alerts, and
                administrative tasks
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 max-h-[60vh] overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Bell className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No notifications yet</p>
                  <p className="text-sm">
                    You'll see updates about platform management and system
                    alerts here
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
                            notification.type === "system"
                              ? "bg-red-100"
                              : notification.type === "registration"
                              ? "bg-blue-100"
                              : notification.type === "report"
                              ? "bg-green-100"
                              : notification.type === "feedback"
                              ? "bg-yellow-100"
                              : "bg-purple-100"
                          }`}
                        >
                          {notification.type === "system" ? (
                            <AlertCircle className="w-5 h-5 text-red-600" />
                          ) : notification.type === "registration" ? (
                            <UserPlus className="w-5 h-5 text-blue-600" />
                          ) : notification.type === "report" ? (
                            <FileText className="w-5 h-5 text-green-600" />
                          ) : notification.type === "feedback" ? (
                            <MessageSquare className="w-5 h-5 text-yellow-600" />
                          ) : (
                            <BarChart3 className="w-5 h-5 text-purple-600" />
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
                                notification.type === "system"
                                  ? "border-red-500 text-red-600"
                                  : notification.type === "registration"
                                  ? "border-blue-500 text-blue-600"
                                  : notification.type === "report"
                                  ? "border-green-500 text-green-600"
                                  : notification.type === "feedback"
                                  ? "border-yellow-500 text-yellow-600"
                                  : "border-purple-500 text-purple-600"
                              }`}
                            >
                              {notification.type === "system"
                                ? "System"
                                : notification.type === "registration"
                                ? "Registration"
                                : notification.type === "report"
                                ? "Report"
                                : notification.type === "feedback"
                                ? "Feedback"
                                : "Payment"}
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
