import { Calendar, BookOpen, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { events, boardMembers, teachers } from "@/data/demoData";

const Home = () => {
  const heroImages = events.map(e => e.image);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary via-accent to-secondary text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
              Education with Islam in Practice
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Building future Muslim leaders with strong Islamic foundation and quality modern education
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/admission">
                <Button size="lg" variant="secondary" className="font-semibold">
                  Apply for Admission
                </Button>
              </Link>
              <Link to="/campus">
                <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                  Explore Campus
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, label: "Students", value: "500+" },
              { icon: BookOpen, label: "Expert Teachers", value: "25+" },
              { icon: Calendar, label: "Years of Excellence", value: "10+" },
              { icon: Award, label: "Success Rate", value: "98%" },
            ].map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="pt-6">
                  <stat.icon className="h-10 w-10 mx-auto mb-3 text-primary" />
                  <p className="font-bold text-3xl mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes from Leadership */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12 animate-fade-in">
            Message from Our Leadership
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {boardMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="pt-6">
                  <div className="text-5xl text-primary mb-4">"</div>
                  <p className="text-lg italic mb-6">{member.quote}</p>
                  <div>
                    <p className="font-semibold text-lg">{member.name}</p>
                    <p className="text-muted-foreground">{member.position}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Teachers Quote */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12 animate-fade-in">
            Words from Our Principal
          </h2>
          <Card className="max-w-3xl mx-auto hover:shadow-xl transition-shadow">
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <img
                  src={teachers[0].image}
                  alt={teachers[0].name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-primary"
                />
                <div className="flex-1 text-center md:text-left">
                  <div className="text-4xl text-primary mb-3">"</div>
                  <p className="text-lg italic mb-4">{teachers[0].quote}</p>
                  <p className="font-semibold text-xl">{teachers[0].name}</p>
                  <p className="text-muted-foreground">{teachers[0].position}</p>
                  <p className="text-sm text-muted-foreground mt-1">{teachers[0].qualification}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl animate-fade-in">
              Upcoming Events
            </h2>
            <Link to="/events">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.slice(0, 3).map((event, index) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-xl transition-shadow animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-4">
                  <p className="text-sm text-primary font-semibold mb-2">{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                  <h3 className="font-heading font-semibold text-xl mb-2">{event.title}</h3>
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Join Our Islamic Educational Community
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Enroll your child in an environment where Islamic values meet academic excellence
          </p>
          <Link to="/admission">
            <Button size="lg" variant="secondary" className="font-semibold">
              Start Admission Process
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
