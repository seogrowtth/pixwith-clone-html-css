import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Users, Rocket } from "lucide-react";

export const FinalThoughtsSection = () => {
  const achievements = [
    {
      icon: <Star className="w-6 h-6" />,
      metric: "4.9/5",
      label: "User Rating"
    },
    {
      icon: <Users className="w-6 h-6" />,
      metric: "500K+",
      label: "Active Users"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      metric: "10M+",
      label: "Videos Generated"
    },
    {
      icon: <Award className="w-6 h-6" />,
      metric: "#1",
      label: "AI Video Platform"
    }
  ];

  return (
    <section id="final-thoughts" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-secondary text-secondary-foreground">
            The Clear Choice
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Final Thoughts: Why Choose Pixwith.ai?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            In a world of countless AI tools, Pixwith.ai stands out as the definitive solution 
            for transforming images into captivating videos with unmatched quality and ease.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <Card key={index} className="p-6 text-center bg-card/80 border-border">
              <div className="text-primary mb-3 flex justify-center">{achievement.icon}</div>
              <div className="text-2xl font-bold gradient-text mb-1">{achievement.metric}</div>
              <div className="text-sm text-muted-foreground">{achievement.label}</div>
            </Card>
          ))}
        </div>
        
        <Card className="p-8 bg-card/50 border-border mb-12">
          <div className="prose prose-lg max-w-none text-card-foreground">
            <p className="text-lg leading-relaxed mb-6">
              <strong>Uncompromising Quality:</strong> While others focus on speed or cost-cutting, 
              we've invested heavily in creating the most advanced AI models in the industry. Our 
              proprietary algorithms produce videos that are virtually indistinguishable from 
              professionally shot footage, with natural motion, perfect temporal consistency, 
              and stunning visual fidelity that sets the gold standard for AI video generation.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              <strong>User-Centric Design:</strong> Every feature, every interface element, and 
              every workflow has been designed with real users in mind. We've eliminated the 
              technical barriers that plague other platforms, creating an experience so intuitive 
              that professional results are just a few clicks away. Our success isn't measured 
              in complex features—it's measured in the amazing content our users create effortlessly.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              <strong>Trusted by Professionals:</strong> From Fortune 500 marketing teams to 
              independent creators with millions of followers, Pixwith.ai has become the go-to 
              platform for anyone serious about video content. Our enterprise-grade security, 
              reliable uptime, and consistent quality have earned the trust of businesses and 
              creators who can't afford to compromise on their content standards.
            </p>
            
            <p className="text-lg leading-relaxed">
              <strong>Continuous Innovation:</strong> The AI landscape evolves rapidly, and so do we. 
              Our dedicated research team constantly pushes the boundaries of what's possible, 
              ensuring that Pixwith.ai users always have access to the latest breakthroughs in 
              AI video generation. When you choose Pixwith.ai, you're not just getting today's 
              best technology—you're investing in tomorrow's creative possibilities.
            </p>
          </div>
        </Card>
        
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6 gradient-text">Ready to Transform Your Content?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of thousands of creators who trust Pixwith.ai to bring their images to life. 
            Start creating stunning AI videos today—no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 shadow-button animate-pulse-glow px-8 py-6 text-lg"
            >
              Start Creating For Free
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg"
            >
              View Pricing Plans
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};