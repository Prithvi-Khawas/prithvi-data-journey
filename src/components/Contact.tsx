import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { User, Mail, Phone, MapPin, Linkedin, Github, ArrowRight } from "lucide-react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init("6WbtLD0CfStFJYiy7");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'prithvikhawas740@gmail.com',
      };

      const response = await emailjs.send(
        'service_m54855d',
        'template_h3k9d98',
        templateParams,
        '6WbtLD0CfStFJYiy7'
      );

      if (response.status === 200) {
        toast({
          title: "Message Sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-data-blue to-data-teal mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Have a project in mind or interested in working together? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="text-muted-foreground mb-8">
              I'm currently available for freelance work and full-time opportunities. If you'd like to discuss a project
              or have any questions, please don't hesitate to contact me.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 bg-blue-50 p-3 rounded-md">
                  <User className="h-5 w-5 text-data-blue" />
                </div>
                <div>
                  <h4 className="font-semibold">Name</h4>
                  <p className="text-muted-foreground">Prithvi Khawas</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-blue-50 p-3 rounded-md">
                  <Mail className="h-5 w-5 text-data-blue" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a 
                    href="mailto:prithvikhawas740@gmail.com" 
                    className="text-data-blue hover:underline"
                  >
                    prithvikhawas740@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 bg-blue-50 p-3 rounded-md">
                  <Phone className="h-5 w-5 text-data-blue" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-muted-foreground">+971528320024</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 bg-blue-50 p-3 rounded-md">
                  <MapPin className="h-5 w-5 text-data-blue" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-muted-foreground">Al Nahda, UAE</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 bg-blue-50 p-3 rounded-md">
                  <Linkedin className="h-5 w-5 text-data-blue" />
                </div>
                <div>
                  <h4 className="font-semibold">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/prithvi-khawas-236a091a2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-data-blue hover:underline"
                  >
                    linkedin.com/in/prithvi-khawas-236a091a2
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 bg-blue-50 p-3 rounded-md">
                  <Github className="h-5 w-5 text-data-blue" />
                </div>
                <div>
                  <h4 className="font-semibold">GitHub</h4>
                  <a 
                    href="https://github.com/Prithvi-Khawas" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-data-blue hover:underline"
                  >
                    github.com/Prithvi-Khawas
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-data-blue hover:bg-data-navy transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending Message..." : (
                    <>
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
