import { Mail, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { teachers } from "@/data/demoData";

const Teachers = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Our Dedicated Teachers
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet our qualified and experienced team of educators committed to Islamic excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <Card key={teacher.id} className="hover:shadow-xl transition-shadow animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary mb-4"
                  />
                  <h3 className="font-heading font-bold text-xl mb-1">{teacher.name}</h3>
                  <p className="text-primary font-semibold mb-2">{teacher.position}</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
                    <Award className="h-4 w-4" />
                    <p>{teacher.qualification}</p>
                  </div>
                </div>
                
                <div className="bg-muted rounded-lg p-4 mb-4">
                  <div className="text-3xl text-primary mb-2">"</div>
                  <p className="text-sm italic">{teacher.quote}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teachers;
