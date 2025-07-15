import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-hero overflow-x-hidden">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@company.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Your Distribution Company" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="territory">Territory/Region</Label>
                <Input id="territory" placeholder="California, Northeast, etc." />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your distribution experience, current market reach, and why you'd be a good fit for our authorized network"
                  className="min-h-[120px]"
                />
              </div>
              
              <Button className="w-full bg-gradient-primary text-white hover:opacity-90 shadow-glow text-sm sm:text-base py-3 sm:py-4">
                Apply for Authorized Status
              </Button>
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