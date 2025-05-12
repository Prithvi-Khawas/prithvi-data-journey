
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Database, 
  FileText, 
  ChartBar,
  Code,
  Server,
  BarChart,
  LineChart
} from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Data Quality Assurance Pipeline",
    description: "Designed and implemented a data quality pipeline using Apache Airflow to automate checks for completeness, accuracy, and consistency. Utilized Docker for containerized deployment.",
    icon: <Code className="h-10 w-10 text-data-blue" />,
    skills: ["Airflow", "Docker", "ETL", "Data Validation"],
    color: "bg-blue-50"
  },
  {
    id: 2,
    title: "Automated Data Extraction & Processing",
    description: "Created Python scripts to extract data from external APIs, parsed JSON responses, and established PostgreSQL connections for efficient data loading and analysis.",
    icon: <Database className="h-10 w-10 text-data-teal" />,
    skills: ["Python", "APIs", "PostgreSQL", "Data Processing"],
    color: "bg-teal-50"
  },
  {
    id: 3,
    title: "SQL Data Cleaning & Transformation",
    description: "Performed comprehensive data cleaning on large datasets using SQL. Implemented complex queries to handle missing values, duplicates, and inconsistencies in customer and transaction data.",
    icon: <Database className="h-10 w-10 text-data-purple" />,
    skills: ["SQL", "Data Cleaning", "ETL", "Data Quality"],
    color: "bg-purple-50"
  },
  {
    id: 4,
    title: "Digital Music Store Data Analysis",
    description: "Restored and analyzed datasets in PostgreSQL related to a digital music store, performed data cleaning operations and implemented SQL queries for reporting and analysis.",
    icon: <Database className="h-10 w-10 text-data-navy" />,
    skills: ["PostgreSQL", "SQL", "Data Analysis", "Reporting"],
    color: "bg-indigo-50"
  },
  {
    id: 5,
    title: "Sales Insights Dashboard with Excel",
    description: "Performed data cleaning and preprocessing on sales data using Excel. Implemented an interactive dashboard with slicers to visualize key sales metrics, trends, and regional performance.",
    icon: <FileText className="h-10 w-10 text-data-blue" />,
    skills: ["Excel", "Data Cleaning", "Dashboard Design", "Sales Analytics"],
    color: "bg-blue-50"
  },
  {
    id: 6,
    title: "Sales Performance Dashboard with Power BI",
    description: "Created comprehensive sales insights dashboard with Power BI using customer and transaction data. Designed interactive visualizations showing sales trends, customer segments, and product performance.",
    icon: <ChartBar className="h-10 w-10 text-data-teal" />,
    skills: ["Power BI", "Data Visualization", "Sales Analytics", "Dashboard Design"],
    color: "bg-teal-50"
  },
  {
    id: 7,
    title: "Regional Sales Analysis with Tableau",
    description: "Developed interactive Tableau dashboards visualizing regional sales performance, customer demographics, and product category analysis. Implemented drill-down capabilities for detailed insights.",
    icon: <BarChart className="h-10 w-10 text-data-purple" />,
    skills: ["Tableau", "Data Visualization", "Sales Analytics", "Interactive Dashboards"],
    color: "bg-purple-50"
  },
  {
    id: 8,
    title: "Heart Disease EDA and Prediction",
    description: "Performed exploratory data analysis using Python libraries on health data. Implemented machine learning models like SVM, Random Forest and MLP for heart disease prediction.",
    icon: <LineChart className="h-10 w-10 text-data-navy" />,
    skills: ["Python", "EDA", "Machine Learning", "Healthcare Analytics"],
    color: "bg-indigo-50"
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
            Explore my projects showcasing skills in database engineering, data cleaning, analysis, and visualization
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
