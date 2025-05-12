
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

const skillsData = [
  {
    category: "Database & Data Engineering",
    skills: [
      { name: "SQL", proficiency: 90 },
      { name: "PostgreSQL", proficiency: 85 },
      { name: "MySQL", proficiency: 85 },
      { name: "ETL Processes", proficiency: 80 },
      { name: "Data Migration", proficiency: 90 },
    ]
  },
  {
    category: "Data Analysis & Visualization",
    skills: [
      { name: "Python (NumPy, Pandas)", proficiency: 85 },
      { name: "Excel", proficiency: 90 },
      { name: "Power BI", proficiency: 85 },
      { name: "Matplotlib/Seaborn", proficiency: 80 },
      { name: "Data Cleaning", proficiency: 90 },
    ]
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Apache Airflow", proficiency: 80 },
      { name: "Docker", proficiency: 75 },
      { name: "Hadoop", proficiency: 70 },
      { name: "Git", proficiency: 85 },
      { name: "Jupyter Notebook", proficiency: 85 },
    ]
  },
];

const SkillBar = ({ name, proficiency }: { name: string; proficiency: number }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="font-medium">{name}</span>
      <span className="text-sm text-muted-foreground">{proficiency}%</span>
    </div>
    <Progress value={proficiency} className="h-2" />
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-data-blue to-data-teal mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            My expertise spans across various data technologies and methodologies, enabling me to effectively
            extract, transform, analyze, and visualize data for informed decision making.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((category) => (
            <Card key={category.category} className="card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 pb-3 border-b">{category.category}</h3>
                <div>
                  {category.skills.map((skill) => (
                    <SkillBar 
                      key={skill.name} 
                      name={skill.name} 
                      proficiency={skill.proficiency} 
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-8">
          {["SQL", "Python", "PostgreSQL", "Excel", "Power BI", "Airflow", "Docker", "Hadoop", "Git"].map((tech, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="font-medium text-center">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
