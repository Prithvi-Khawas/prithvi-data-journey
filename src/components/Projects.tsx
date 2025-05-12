
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Database, 
  FileText, 
  ChartBar,
  ChartPie,
  Code
} from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "SQL Data Cleaning Project",
    description: "Transformed raw, inconsistent data into a clean, structured format by implementing SQL queries for data cleaning, normalization, and validation.",
    icon: <Database className="h-10 w-10 text-data-blue" />,
    skills: ["SQL", "Data Cleaning", "Data Transformation"],
    color: "bg-blue-50"
  },
  {
    id: 2,
    title: "Excel Sales Insights",
    description: "Analyzed sales data using Excel's advanced features including pivot tables, functions, and conditional formatting to identify trends and provide actionable insights.",
    icon: <FileText className="h-10 w-10 text-data-teal" />,
    skills: ["Excel", "Data Analysis", "Sales Reporting"],
    color: "bg-teal-50"
  },
  {
    id: 3,
    title: "Tableau Sales Dashboard",
    description: "Designed interactive Tableau dashboards visualizing key sales metrics, geographical performance, and product analysis for informed decision making.",
    icon: <ChartBar className="h-10 w-10 text-data-purple" />,
    skills: ["Tableau", "Dashboard Design", "Data Visualization"],
    color: "bg-purple-50"
  },
  {
    id: 4,
    title: "Power BI Sales Analysis",
    description: "Created comprehensive Power BI reports for sales performance analysis with drill-through capabilities, custom measures, and executive-friendly visualizations.",
    icon: <ChartPie className="h-10 w-10 text-data-navy" />,
    skills: ["Power BI", "DAX", "Sales Analytics"],
    color: "bg-indigo-50"
  },
  {
    id: 5,
    title: "Airflow API Data Extraction",
    description: "Developed an automated data pipeline using Airflow to extract data from multiple APIs, transform it, and load it into a centralized database for analysis.",
    icon: <Code className="h-10 w-10 text-data-blue" />,
    skills: ["Airflow", "API Integration", "ETL"],
    color: "bg-blue-50"
  },
  {
    id: 6,
    title: "Python EDA for Customer Insights",
    description: "Performed exploratory data analysis in Python using pandas, NumPy, and matplotlib to discover customer behavior patterns and segment the customer base.",
    icon: <Database className="h-10 w-10 text-data-teal" />,
    skills: ["Python", "pandas", "EDA", "Data Visualization"],
    color: "bg-teal-50"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-data-blue to-data-teal mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Explore some of my recent projects showcasing skills in data engineering, analysis, and visualization
            using various tools and technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Card key={project.id} className="overflow-hidden card-hover">
              <div className={`p-6 ${project.color}`}>
                <div className="flex justify-center">
                  {project.icon}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-end">
                <Button variant="ghost" size="sm">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
