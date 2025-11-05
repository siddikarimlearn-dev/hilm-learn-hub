import { useState } from "react";
import { Search, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { results } from "@/data/demoData";

const Results = () => {
  const [selectedClass, setSelectedClass] = useState<string>("all");
  const [rollNumber, setRollNumber] = useState<string>("");

  const classes = ["all", "Play", "Nursery", "1", "2", "3", "4", "5", "Hifz"];

  const filteredResults = results.filter((result) => {
    const classMatch = selectedClass === "all" || result.class === selectedClass;
    const rollMatch = rollNumber === "" || result.roll.toString() === rollNumber;
    return classMatch && rollMatch;
  });

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Student Results
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            View academic performance and achievements
          </p>
        </div>

        <Card className="mb-8 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Search Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Select Class</label>
                <Select value={selectedClass} onValueChange={setSelectedClass}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select class" />
                  </SelectTrigger>
                  <SelectContent>
                    {classes.map((cls) => (
                      <SelectItem key={cls} value={cls}>
                        {cls === "all" ? "All Classes" : `Class ${cls}`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Roll Number (Optional)</label>
                <Input
                  type="number"
                  placeholder="Enter roll number"
                  value={rollNumber}
                  onChange={(e) => setRollNumber(e.target.value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="animate-scale-in">
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Class</TableHead>
                    <TableHead>Roll</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>GPA/Progress</TableHead>
                    <TableHead>Position</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredResults.length > 0 ? (
                    filteredResults.map((result, index) => (
                      <TableRow key={index} className="hover:bg-muted/50">
                        <TableCell className="font-medium">
                          {result.class === "Hifz" ? "Hifz" : `Class ${result.class}`}
                        </TableCell>
                        <TableCell>{result.roll}</TableCell>
                        <TableCell className="font-semibold">{result.name}</TableCell>
                        <TableCell>
                          <Badge variant={result.gpa === "A+" ? "default" : "secondary"}>
                            {result.gpa}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {typeof result.position === 'number' && result.position <= 3 && (
                              <Trophy className="h-4 w-4 text-secondary" />
                            )}
                            {result.position}
                            {typeof result.position === 'number' && result.position === 1 ? "st" : 
                             typeof result.position === 'number' && result.position === 2 ? "nd" : 
                             typeof result.position === 'number' && result.position === 3 ? "rd" : ""}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                        No results found for the selected criteria
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Results;
