import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,hsla(221,45%,73%,1)_0%,hsla(220,78%,29%,1)_100%)] opacity-5"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-data-blue/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-data-teal/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-left">
            <p className="text-data-blue font-medium mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Prithvi Khawas
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-data-blue to-data-teal mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}></div>
            <h2 className="text-xl md:text-3xl font-medium mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              Data Engineer & Data Analyst
            </h2>
            <p className="text-muted-foreground mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
              Transforming raw data into meaningful insights through engineering, analytics, and visualization. 
              Specializing in data migration, quality assurance, and creating insightful dashboards with SQL, 
              Power BI, Python, and Airflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <Button 
                asChild 
                size="lg" 
                className="bg-data-blue hover:bg-data-navy transition-colors"
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
              >
                <a href="#skills">My Skills</a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img
              src="./assets/pic.jpg"
              alt="Prithvi Khawas"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="p-2">
          <ArrowDown className="h-6 w-6 text-data-blue" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
