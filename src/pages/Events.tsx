import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { events } from "@/data/demoData";

const Events = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Upcoming Events
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our school events, programs, and important dates
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-xl transition-shadow animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="h-64 overflow-hidden relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 right-4 bg-secondary">
                  Upcoming
                </Badge>
              </div>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-3 text-primary">
                  <Calendar className="h-5 w-5" />
                  <p className="font-semibold">
                    {new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'long',
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </p>
                </div>
                <h3 className="font-heading font-bold text-2xl mb-3">{event.title}</h3>
                <p className="text-muted-foreground mb-4">{event.description}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <p>HILM Islamic School Campus</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
