
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experienceData = [
  {
    id: 1,
    role: "Data Engineer",
    company: "Tech Solutions Inc.",
    period: "2023 - Present",
    responsibilities: [
      "Led data migration projects, ensuring data integrity and quality throughout the process",
      "Developed robust QA procedures for data validation and verification",
      "Implemented ETL pipelines for efficient data processing",
      "Collaborated with cross-functional teams to align data solutions with business requirements"
    ],
    skills: ["Data Migration", "Data Quality Assurance", "ETL", "SQL"],
  },
  {
    id: 2,
    role: "Data Analyst Intern",
    company: "DataTech Solutions",
    period: "2022 - 2023",
    responsibilities: [
      "Created detailed sales analysis reports using Excel and SQL",
      "Developed interactive dashboards in Tableau for executive stakeholders",
      "Performed data cleaning and preprocessing for various analytics projects",
      "Collaborated with marketing team to deliver data-driven insights"
    ],
    skills: ["Data Analysis", "SQL", "Excel", "Tableau"],
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
            My professional journey in the data engineering and analysis field
          </p>
        </div>

        <div className="space-y-10">
          {experienceData.map((exp) => (
            <Card key={exp.id} className="card-hover">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <span className="mx-2 text-muted-foreground">•</span>
                      <span className="text-data-blue font-medium">{exp.company}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{exp.period}</p>
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
