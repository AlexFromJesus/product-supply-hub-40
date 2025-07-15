import React, { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Loader2 } from "lucide-react";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    territory: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.company || !formData.territory || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      // Initialize EmailJS first
      console.log('Initializing EmailJS...');
      emailjs.init('UR8EgZT1iPqTp5iGg');
      
      // Prepare template parameters for EmailJS - using standard parameter names
      const templateParams = {
        to_name: 'Spanish Protein Team',
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        reply_to: formData.email,
        company: formData.company,
        territory: formData.territory,
        message: formData.message,
        full_message: `
Contact Information:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Company: ${formData.company}
Territory: ${formData.territory}

Message:
${formData.message}
        `.trim()
      };

      console.log('EmailJS Configuration:');
      console.log('Service ID:', 'service_kaxuj7e');
      console.log('Template ID:', 'template_kbbhkbc');
      console.log('Template params:', templateParams);

      // Send email using EmailJS
      console.log('Attempting to send email...');
      const result = await emailjs.send(
        'service_kaxuj7e',
        'template_kbbhkbc',
        templateParams
      );
      
      console.log('EmailJS Success Response:', result);
      console.log('Status:', result.status);
      console.log('Text:', result.text);

      // Success feedback
      toast({
        title: "Message sent successfully!",
        description: "We'll review your application and get back to you soon."
      });

      // Clear form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        territory: '',
        message: ''
      });

    } catch (error) {
      console.error('EmailJS Error Details:', error);
      
      // More specific error handling
      let errorMessage = "Please try again later or contact us directly.";
      if (error instanceof Error) {
        console.error('Error message:', error.message);
        errorMessage = error.message.includes('network') 
          ? "Network error. Please check your connection and try again."
          : "Service temporarily unavailable. Please try again in a moment.";
      }
      
      toast({
        title: "Failed to send message",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-hero overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
            Join Our Authorized Network
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            Apply for authorized distributor status and access the European nutrition brands your market demands.
            Selective qualification ensures better support for committed partners.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">
                Authorized Distributor Application
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      value={formData.firstName}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      value={formData.lastName}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@company.com" 
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input 
                    id="company" 
                    placeholder="Your Distribution Company" 
                    value={formData.company}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="territory">Territory/Region</Label>
                  <Input 
                    id="territory" 
                    placeholder="California, Northeast, etc." 
                    value={formData.territory}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your distribution experience, current market reach, and why you'd be a good fit for our authorized network"
                    className="min-h-[120px]"
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-primary text-white hover:opacity-90 shadow-glow text-sm sm:text-base py-3 sm:py-4"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending Application...
                    </>
                  ) : (
                    'Apply for Authorized Status'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <Card className="shadow-elegant">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="bg-gradient-primary rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm sm:text-base">Email</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">contact@spanishprotein.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-elegant">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="bg-gradient-primary rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm sm:text-base">Phone</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">+1 920-360-0485</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-elegant">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="bg-gradient-primary rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm sm:text-base">Office</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      Green Bay, Wisconsin<br />
                      United States
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-elegant">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="bg-gradient-primary rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm sm:text-base">Business Hours</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      Mon - Fri: 9:00 AM - 6:00 PM EST<br />
                      Sat: 10:00 AM - 2:00 PM EST
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}