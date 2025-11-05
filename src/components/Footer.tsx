import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="HILM Logo" className="h-12 w-12 object-contain" />
              <div>
                <h3 className="font-heading font-bold text-lg">HILM Islamic School</h3>
                <p className="text-xs opacity-90">Education with Islam in Practice</p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Providing quality Islamic education that combines academic excellence with Islamic values.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="opacity-80 hover:opacity-100 transition">Home</Link></li>
              <li><Link to="/events" className="opacity-80 hover:opacity-100 transition">Events</Link></li>
              <li><Link to="/teachers" className="opacity-80 hover:opacity-100 transition">Teachers</Link></li>
              <li><Link to="/admission" className="opacity-80 hover:opacity-100 transition">Admission</Link></li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Information</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/results" className="opacity-80 hover:opacity-100 transition">Results</Link></li>
              <li><Link to="/routine" className="opacity-80 hover:opacity-100 transition">Routine</Link></li>
              <li><Link to="/campus" className="opacity-80 hover:opacity-100 transition">Campus</Link></li>
              <li><Link to="/reviews" className="opacity-80 hover:opacity-100 transition">Reviews</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="opacity-80">২১, নবাব সলিমুল্লাহ রোড, আমলাপাড়া, নারায়ণগঞ্জ (স্বপ্ন বিল্ডিং এর তৃতীয় তলা)</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="opacity-80">01911-697136</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="opacity-80">hilmislamicschool@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} HILM Islamic School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
