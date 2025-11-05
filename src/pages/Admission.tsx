import { useState } from "react";
import { GraduationCap, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { admissionFees } from "@/data/demoData";

const Admission = () => {
  const [selectedClass, setSelectedClass] = useState<string>("all");

  const classes = ["all", "Play", "Nursery", "Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Hifz"];

  const filteredFees = selectedClass === "all" 
    ? admissionFees 
    : admissionFees.filter(fee => fee.class === selectedClass);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Admission Information
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent fee structure for all classes. Enroll your child today!
          </p>
        </div>

        <Card className="mb-8 max-w-md mx-auto animate-fade-in">
          <CardContent className="pt-6">
            <label className="text-sm font-medium mb-2 block">Filter by Class</label>
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger>
                <SelectValue placeholder="Select class" />
              </SelectTrigger>
              <SelectContent>
                {classes.map((cls) => (
                  <SelectItem key={cls} value={cls}>
                    {cls === "all" ? "All Classes" : cls}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFees.map((fee, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader className="bg-gradient-to-r from-primary to-accent text-white">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    {fee.class}
                  </CardTitle>
                  <Badge variant="secondary">2024-25</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-muted-foreground">Admission Fee</span>
                    <span className="font-semibold">৳{fee.admission}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-muted-foreground">Monthly Tuition</span>
                    <span className="font-semibold">৳{fee.monthly}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-muted-foreground">Exam Fee</span>
                    <span className="font-semibold">৳{fee.exam}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 bg-muted rounded-lg p-3">
                    <span className="font-semibold flex items-center gap-2">
                      <DollarSign className="h-4 w-4" />
                      Yearly (Approx)
                    </span>
                    <span className="font-bold text-primary text-lg">৳{fee.yearly}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 animate-fade-in">
          <CardHeader>
            <CardTitle>Admission Process</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  1
                </div>
                <h3 className="font-semibold mb-2">Visit School</h3>
                <p className="text-sm text-muted-foreground">
                  Visit our campus and meet with admissions staff
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  2
                </div>
                <h3 className="font-semibold mb-2">Submit Documents</h3>
                <p className="text-sm text-muted-foreground">
                  Provide required documents and fill application form
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  3
                </div>
                <h3 className="font-semibold mb-2">Pay Fees & Enroll</h3>
                <p className="text-sm text-muted-foreground">
                  Complete payment and start your child's Islamic education journey
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admission;
