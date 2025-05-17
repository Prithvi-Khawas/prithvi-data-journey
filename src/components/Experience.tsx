
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experienceData = [
  {
    id: 1,
    role: "Data Engineer",
    company: "Pioneer Associate Pvt. Ltd",
    period: "March 2024 - April 2025",
    location: "Lalitpur, Nepal",
    responsibilities: [
      "Data extraction from different sources and analyzed it for insights",
      "Data migration and QA",
      "Implemented ETL for third parties migration",
      "Implemented best practices in SQL scripts ensure data migration",
      "Handled large database and maintained in SQL Server"
    ],
    skills: ["Data Migration", "ETL", "SQL Server", "Data Quality Assurance"],
  },
  {
    id: 2,
    role: "Graphic Designer",
    company: "Deerwalk Institute of Technology (DMT)",
    period: "April 2022 - November 2022",
    location: "Kathmandu, Nepal",
    responsibilities: [
      "Created a wide range of graphic design materials for events, social media, and internal communications. ",
      "Created ecommerce social media content for IT Trainings and Events",
      "Worked on Deerwalkl group (Deerwalk Compware) branding and marketing materials.",
      "Designed event banners and visual content for college clubs and student activities, ensuring brand consistency across materials."
      
    ],
    skills: ["graphic design", "visual content", "branding"],
  },
  {
    id: 3,
    role: "Graphic Designer",
    company: "Deerwalk Institute of Technology (DMT)",
    period: "March 2021 - February 2022",
    location: "Kathmandu, Nepal",
    responsibilities: [
      "Designed and implemented frontend for the projects",
      "Updated and enhanced pre-existing projects, making them more user-friendly and efficient",
      "Collaborated with the design and development teams to ensure seamless integration and functionality",
      "Implemented best practices in frontend development to optimize performance and user experience"
    ],
    skills: ["Frontend Development", "UI/UX", "Collaboration"],
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-data-blue to-data-teal mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            My professional journey in data engineering and data analysis
          </p>
        </div>

        <div className="space-y-10">
          {experienceData.map((exp) => (
            <Card key={exp.id} className="card-hover">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center mb-2 gap-2">
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <div className="flex items-center">
                        <span className="hidden sm:inline mx-2 text-muted-foreground">•</span>
                        <span className="text-data-blue font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center mb-4 text-sm text-muted-foreground">
                      <p>{exp.period}</p>
                      <span className="hidden sm:inline mx-2">•</span>
                      <p>{exp.location}</p>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                      {exp.responsibilities.map((item, index) => (
                        <li key={index} className="text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="outline">{skill}</Badge>
                      ))}
                    </div>
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

export default Experience;
