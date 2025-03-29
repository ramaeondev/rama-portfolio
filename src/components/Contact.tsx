
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Download } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out, I'll get back to you soon.",
        duration: 5000,
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  const handleDownloadCV = () => {
    const cvUrl = "https://personal-docs-rama.s3.ap-south-2.amazonaws.com/resume/Rama_Subba_Reddy_Vennapusa_April2025.docx";
    
    // Create an anchor element and trigger the download
    const link = document.createElement('a');
    link.href = cvUrl;
    link.setAttribute('download', 'Rama_Subba_Reddy_Vennapusa_Resume.docx');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Download started",
      description: "Your CV download has started.",
      duration: 3000,
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="flex flex-col lg:flex-row gap-10 mt-8">
          <div className="lg:w-1/2">
            <p className="text-lg text-muted-foreground mb-8">
              I'm currently looking for new opportunities. Whether you have a question, a project idea,
              or just want to say hello, my inbox is always open!
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-muted-foreground">
                <Mail className="mr-4 text-primary" size={20} />
                <span>ramaeon.dev@gmail.com</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone className="mr-4 text-primary" size={20} />
                <span>+91 9848102324</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="mr-4 text-primary" size={20} />
                <span>Bangalore, KA</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="lg" 
                onClick={handleDownloadCV}
                className="flex items-center"
              >
                <Download className="mr-2" size={16} />
                Download CV
              </Button>
              <Button size="lg" className="bg-accent hover:bg-accent/90">Hire Me</Button>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-4 bg-card/70 rounded-lg p-6 shadow-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-secondary/30"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="bg-secondary/30"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="bg-secondary/30"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={6}
                  required
                  className="bg-secondary/30"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send size={16} className="mr-2" /> Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
