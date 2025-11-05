import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [points, setPoints] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const updatePoints = () => {
      const savedPoints = localStorage.getItem("testPoints");
      setPoints(savedPoints ? parseInt(savedPoints) : 0);
    };

    updatePoints();
    window.addEventListener("storage", updatePoints);
    return () => window.removeEventListener("storage", updatePoints);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Teachers", path: "/teachers" },
    { name: "Results", path: "/results" },
    { name: "Admission", path: "/admission" },
    { name: "Campus", path: "/campus" },
    { name: "Routine", path: "/routine" },
    { name: "Reviews", path: "/reviews" },
    { name: "Test", path: "/test" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden md:flex items-center justify-end gap-6 py-2 text-sm border-b">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span>01911-697136</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Mail className="h-4 w-4" />
            <span>hilmislamicschool@gmail.com</span>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="HILM Islamic School Logo" 
              className="h-14 w-14 object-contain transition-transform group-hover:scale-105"
            />
            <div>
              <h1 className="font-heading font-bold text-xl md:text-2xl text-primary">
                HILM Islamic School
              </h1>
              <p className="text-xs md:text-sm text-muted-foreground">
                Education with Islam in Practice
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-2 ml-2 px-3 py-1.5 bg-gradient-to-r from-primary to-secondary text-white rounded-md">
              <Trophy className="h-4 w-4" />
              <span className="font-semibold">{points}</span>
            </div>
            <Link to="/admin">
              <Button variant="outline" size="sm" className="ml-2">
                Admin
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-muted"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-center gap-2 mb-2 px-4 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-md">
                <Trophy className="h-5 w-5" />
                <span className="font-semibold">Points: {points}</span>
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-md font-medium transition-colors ${
                    isActive(link.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/admin" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full">
                  Admin Panel
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
