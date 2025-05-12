
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-data-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Prithvi Khawas</h3>
            <p className="text-gray-300">Database Engineer & Data Analyst</p>
          </div>
          
          <div className="flex space-x-6">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-white/10"
              asChild
            >
              <a href="https://linkedin.com/in/prithvi-khawas-236a091a2" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-white/10"
              asChild
            >
              <a href="https://github.com/Prithvi-Khawas" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-white/10"
              asChild
            >
              <a href="mailto:prithvikhawas740@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-700 my-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Prithvi Khawas. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#about" className="text-gray-300 text-sm hover:text-white transition-colors">About</a>
            <a href="#skills" className="text-gray-300 text-sm hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="text-gray-300 text-sm hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="text-gray-300 text-sm hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="text-gray-300 text-sm hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
