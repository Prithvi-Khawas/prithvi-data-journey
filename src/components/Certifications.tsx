
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const certificationsData = [
  {
    id: 1,
    title: "Big Data and Hadoop",
    issuer: "Coursera",
    date: "2023"
  },
  {
    id: 2,
    title: "Data Analysis Using Microsoft Excel",
    issuer: "Microsoft",
    date: "2023"
  },
  {
    id: 3,
    title: "Data Science Foundations",
    issuer: "IBM",
    date: "2022"
  },
  {
    id: 4,
    title: "Docker",
    issuer: "Udemy",
    date: "2023"
  },
  {
    id: 5,
    title: "PostgreSQL",
    issuer: "Codecademy",
    date: "2023"
  },
  {
    id: 6,
    title: "Data Visualization with Python",
    issuer: "Coursera",
    date: "2022"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-data-blue to-data-teal mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Professional certifications that validate my expertise and continuous learning in data engineering and analytics
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <Card key={cert.id} className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-md mt-1">
                    <Award className="h-6 w-6 text-data-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <span>{cert.issuer}</span>
                      <span className="mx-2">•</span>
                      <span>{cert.date}</span>
                    </div>
                    <Badge variant="outline" className="bg-blue-50/50">Verified</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
