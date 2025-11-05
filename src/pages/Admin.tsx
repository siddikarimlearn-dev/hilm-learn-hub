import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, BookOpen, Trophy, Plus, Edit, Trash2 } from "lucide-react";
import { toast } from "sonner";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const handleDemoAction = (action: string) => {
    toast.success(`Demo: ${action} action triggered`, {
      description: "This is a demo admin panel. No actual changes are made.",
    });
  };

  return (
    <div className="min-h-screen py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-8 animate-fade-in">
          <h1 className="font-heading font-bold text-4xl mb-2">Admin Panel</h1>
          <p className="text-muted-foreground">Manage school content and data (Demo Version)</p>
          <Badge variant="secondary" className="mt-2">Demo Mode - No Changes Saved</Badge>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 h-auto">
            <TabsTrigger value="overview" className="gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="events" className="gap-2">
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">Events</span>
            </TabsTrigger>
            <TabsTrigger value="teachers" className="gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Teachers</span>
            </TabsTrigger>
            <TabsTrigger value="results" className="gap-2">
              <Trophy className="h-4 w-4" />
              <span className="hidden sm:inline">Results</span>
            </TabsTrigger>
            <TabsTrigger value="admission" className="gap-2">
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">Admission</span>
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Total Students", value: "500", icon: Users, color: "text-blue-500" },
                { label: "Total Teachers", value: "25", icon: Users, color: "text-green-500" },
                { label: "Upcoming Events", value: "4", icon: Calendar, color: "text-orange-500" },
                { label: "Classes", value: "8", icon: BookOpen, color: "text-purple-500" },
              ].map((stat, index) => (
                <Card key={index} className="animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <p className="text-3xl font-bold mt-1">{stat.value}</p>
                      </div>
                      <stat.icon className={`h-12 w-12 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-4">
                <Button onClick={() => handleDemoAction("Add New Event")}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Event
                </Button>
                <Button onClick={() => handleDemoAction("Add Teacher")}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Teacher
                </Button>
                <Button onClick={() => handleDemoAction("Update Results")}>
                  <Edit className="mr-2 h-4 w-4" />
                  Update Results
                </Button>
                <Button onClick={() => handleDemoAction("Manage Fees")}>
                  <Edit className="mr-2 h-4 w-4" />
                  Manage Fees
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Manage Events</CardTitle>
                  <Button onClick={() => handleDemoAction("Create Event")}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Event
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="event-title">Event Title</Label>
                    <Input id="event-title" placeholder="Enter event title" />
                  </div>
                  <div>
                    <Label htmlFor="event-date">Event Date</Label>
                    <Input id="event-date" type="date" />
                  </div>
                  <div>
                    <Label htmlFor="event-desc">Description</Label>
                    <Textarea id="event-desc" placeholder="Event description" rows={4} />
                  </div>
                  <div>
                    <Label htmlFor="event-image">Image URL</Label>
                    <Input id="event-image" placeholder="https://..." />
                  </div>
                  <Button onClick={() => handleDemoAction("Save Event")} className="w-full">
                    Save Event
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Teachers Tab */}
          <TabsContent value="teachers" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Manage Teachers</CardTitle>
                  <Button onClick={() => handleDemoAction("Add Teacher")}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Teacher
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="teacher-name">Teacher Name</Label>
                    <Input id="teacher-name" placeholder="Enter teacher name" />
                  </div>
                  <div>
                    <Label htmlFor="teacher-position">Position</Label>
                    <Input id="teacher-position" placeholder="e.g., Mathematics Teacher" />
                  </div>
                  <div>
                    <Label htmlFor="teacher-qualification">Qualification</Label>
                    <Input id="teacher-qualification" placeholder="e.g., MA in Mathematics" />
                  </div>
                  <div>
                    <Label htmlFor="teacher-quote">Quote</Label>
                    <Textarea id="teacher-quote" placeholder="Teacher's quote" rows={3} />
                  </div>
                  <div>
                    <Label htmlFor="teacher-image">Image URL</Label>
                    <Input id="teacher-image" placeholder="https://..." />
                  </div>
                  <Button onClick={() => handleDemoAction("Save Teacher")} className="w-full">
                    Save Teacher
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Results Tab */}
          <TabsContent value="results" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Manage Results</CardTitle>
                  <Button onClick={() => handleDemoAction("Add Result")}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Result
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="result-class">Class</Label>
                      <Input id="result-class" placeholder="e.g., Class 5" />
                    </div>
                    <div>
                      <Label htmlFor="result-roll">Roll Number</Label>
                      <Input id="result-roll" type="number" placeholder="1" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="result-name">Student Name</Label>
                    <Input id="result-name" placeholder="Enter student name" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="result-gpa">GPA/Grade</Label>
                      <Input id="result-gpa" placeholder="e.g., A+" />
                    </div>
                    <div>
                      <Label htmlFor="result-position">Position</Label>
                      <Input id="result-position" type="number" placeholder="1" />
                    </div>
                  </div>
                  <Button onClick={() => handleDemoAction("Save Result")} className="w-full">
                    Save Result
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Admission Tab */}
          <TabsContent value="admission" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Manage Admission Fees</CardTitle>
                  <Button onClick={() => handleDemoAction("Update Fees")}>
                    <Edit className="mr-2 h-4 w-4" />
                    Update Fees
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="fee-class">Class</Label>
                    <Input id="fee-class" placeholder="e.g., Class 5" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fee-admission">Admission Fee (৳)</Label>
                      <Input id="fee-admission" type="number" placeholder="5000" />
                    </div>
                    <div>
                      <Label htmlFor="fee-monthly">Monthly Tuition (৳)</Label>
                      <Input id="fee-monthly" type="number" placeholder="1500" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fee-exam">Exam Fee (৳)</Label>
                      <Input id="fee-exam" type="number" placeholder="800" />
                    </div>
                    <div>
                      <Label htmlFor="fee-yearly">Yearly Fee (৳)</Label>
                      <Input id="fee-yearly" type="number" placeholder="20000" />
                    </div>
                  </div>
                  <Button onClick={() => handleDemoAction("Save Fees")} className="w-full">
                    Save Fees
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
