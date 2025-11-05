import { Star, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { reviews } from "@/data/demoData";

const Reviews = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? "fill-secondary text-secondary" : "text-muted"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Guardian Reviews
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What parents say about HILM Islamic School
          </p>
        </div>

        {/* Privacy Policy */}
        <Card className="mb-12 animate-fade-in">
          <CardHeader className="bg-primary text-white">
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Student Privacy Policy
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4 text-muted-foreground">
              <p>
                At HILM Islamic School, we are committed to protecting the privacy and safety of our students. 
                We adhere to strict policies regarding student information and data protection.
              </p>
              <ul className="space-y-2 ml-6">
                <li>• Student personal information is kept confidential and secure</li>
                <li>• We never share student data with third parties without parental consent</li>
                <li>• All staff members sign confidentiality agreements</li>
                <li>• Parents have the right to access and update their child's information</li>
                <li>• Photos and videos of students are only used with explicit guardian permission</li>
                <li>• Academic records are protected and accessible only to authorized personnel</li>
                <li>• We comply with all applicable data protection regulations</li>
              </ul>
              <p className="font-semibold text-foreground mt-4">
                For any privacy concerns or questions, please contact our administration office.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Reviews */}
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <Card key={review.id} className="hover:shadow-xl transition-shadow animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {review.parent.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{review.parent}</h3>
                    <p className="text-sm text-muted-foreground">{review.student}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {renderStars(review.rating)}
                </div>

                <p className="text-muted-foreground mb-4 italic">"{review.comment}"</p>

                <p className="text-xs text-muted-foreground">
                  {new Date(review.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="mt-12 bg-gradient-to-r from-primary to-accent text-white animate-fade-in">
          <CardContent className="pt-6 text-center">
            <h3 className="font-heading font-bold text-2xl mb-3">
              Join Our School Family
            </h3>
            <p className="mb-4 opacity-90">
              Experience the difference of Islamic education excellence. Contact us today to schedule a campus visit!
            </p>
            <p className="font-semibold text-lg">📞 01911-697136</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reviews;
