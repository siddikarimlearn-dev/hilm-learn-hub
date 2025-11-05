import { useState } from "react";
import { Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { routines } from "@/data/demoData";

const Routine = () => {
  const [selectedClass, setSelectedClass] = useState<string>("Play");

  const classes = Object.keys(routines);
  const currentRoutine = routines[selectedClass as keyof typeof routines];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Class Routines
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            View daily class schedules for all grades
          </p>
        </div>

        <Card className="mb-8 max-w-md mx-auto animate-fade-in">
          <CardContent className="pt-6">
            <label className="text-sm font-medium mb-2 block">Select Class</label>
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger>
                <SelectValue placeholder="Select class" />
              </SelectTrigger>
              <SelectContent>
                {classes.map((cls) => (
                  <SelectItem key={cls} value={cls}>
                    {cls === "Hifz" ? "Hifz Program" : `Class ${cls}`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card className="animate-scale-in">
          <CardHeader className="bg-gradient-to-r from-primary to-accent text-white">
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              {selectedClass === "Hifz" ? "Hifz Program" : `Class ${selectedClass}`} - Daily Routine
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/3">Time</TableHead>
                    <TableHead>Subject/Activity</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentRoutine.map((period, index) => (
                    <TableRow key={index} className={period.subject === "Break" ? "bg-muted/50" : ""}>
                      <TableCell className="font-semibold">{period.time}</TableCell>
                      <TableCell className={period.subject === "Break" ? "font-semibold text-primary" : ""}>
                        {period.subject}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 animate-fade-in">
          <CardHeader>
            <CardTitle>Important Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>• School starts at 8:00 AM sharp. Please ensure students arrive on time.</li>
              <li>• All students must participate in morning assembly and dua.</li>
              <li>• Friday schedule may vary due to Jummah prayer.</li>
              <li>• Hifz students have extended hours for Quran memorization.</li>
              <li>• Parent-teacher meetings are held on the last Saturday of each month.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Routine;
