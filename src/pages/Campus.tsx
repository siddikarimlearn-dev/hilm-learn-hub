import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { campusInfo } from "@/data/demoData";

const Campus = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Our Campus
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Modern facilities in a safe, Islamic environment
          </p>
        </div>

        <Card className="mb-12 animate-fade-in">
          <CardContent className="pt-6">
            <p className="text-lg leading-relaxed">{campusInfo.description}</p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {campusInfo.images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
              <img
                src={image}
                alt={`Campus view ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <Card className="animate-fade-in">
          <CardContent className="pt-6">
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 text-center">
              Campus Facilities
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {campusInfo.facilities.map((facility, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0" />
                  <span className="font-medium">{facility}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 bg-gradient-to-r from-primary to-accent text-white rounded-lg p-8 text-center animate-fade-in">
          <h3 className="font-heading font-bold text-2xl mb-4">
            Visit Our Campus
          </h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Schedule a visit to see our facilities and meet our staff. We welcome parents and guardians to tour our campus.
          </p>
          <div className="space-y-2">
            <p className="font-semibold">২১, নবাব সলিমুল্লাহ রোড, আমলাপাড়া, নারায়ণগঞ্জ</p>
            <p>(স্বপ্ন বিল্ডিং এর তৃতীয় তলা)</p>
            <p className="mt-4">📞 01911-697136</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campus;
