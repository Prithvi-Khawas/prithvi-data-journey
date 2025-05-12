
import { Card, CardContent } from "@/components/ui/card";
import { User, Calendar, Code } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-data-blue to-data-teal mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Database & Data Professional with expertise in data engineering and analysis
            </h3>
            <p className="text-muted-foreground">
              I am Prithvi Khawas, a Database Engineer and Data Analyst with a Bachelor's degree in Computer Science and
              Information Technology from Deerwalk Institute of Technology. With professional experience in
              database engineering and data migration, I've developed a strong foundation
              in transforming and analyzing data to derive valuable insights.
            </p>
            <p className="text-muted-foreground">
              My technical expertise spans across SQL, PostgreSQL, and MySQL for data extraction and transformation,
              Python libraries like NumPy and Pandas for analysis, Power BI and Excel for creating interactive dashboards,
              and Apache Airflow for workflow orchestration and ETL processes.
            </p>
            <p className="text-muted-foreground">
              I'm passionate about solving complex data problems and helping organizations
              make data-driven decisions through efficient data pipelines, quality assurance, and insightful
              visualizations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5">
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-blue-50 p-3 rounded-md">
                    <User className="h-6 w-6 text-data-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Education</h4>
                    <p className="text-muted-foreground">Bachelor's degree in Computer Science and Information Technology, Deerwalk Institute of Technology</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-blue-50 p-3 rounded-md">
                    <Calendar className="h-6 w-6 text-data-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Experience</h4>
                    <p className="text-muted-foreground">1+ year as a Database Engineer specializing in data migration and QA at Pioneer Associate Pvt. Ltd</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-blue-50 p-3 rounded-md">
                    <Code className="h-6 w-6 text-data-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Technical Proficiency</h4>
                    <p className="text-muted-foreground">SQL, Python, PostgreSQL, Power BI, Airflow, Excel, Docker, Hadoop</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
