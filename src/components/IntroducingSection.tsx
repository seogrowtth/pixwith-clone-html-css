import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Brain, Sparkles, Shield } from "lucide-react";

export const IntroducingSection = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Generate videos in under 60 seconds"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Advanced AI",
      description: "Powered by cutting-edge neural networks"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Premium Quality",
      description: "Up to 4K resolution output"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Private",
      description: "Your content stays protected"
    }
  ];

  return (
    <section id="introducing" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-primary text-primary-foreground">
            Revolutionary Technology
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Introducing Pixwith.ai's Image to Video AI
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proprietary AI technology represents the next evolution in content creation, 
            combining advanced computer vision with generative AI to produce stunning video content.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center bg-card/80 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
              <div className="text-primary mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>
        
        <Card className="p-8 bg-card/50 border-border">
          <div className="prose prose-lg max-w-none text-card-foreground">
            <p className="text-lg leading-relaxed mb-6">
              Pixwith.ai represents a quantum leap in AI video generation technology. Our platform leverages 
              state-of-the-art deep learning models trained on millions of video sequences to understand motion 
              dynamics, temporal consistency, and visual aesthetics. Unlike traditional video editing tools that 
              require extensive manual work, Pixwith.ai automates the entire process while maintaining 
              professional-quality output.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              What sets Pixwith.ai apart is our proprietary MotionFlow™ algorithm that analyzes image content 
              at a pixel level, identifies potential motion vectors, and generates smooth, realistic animations. 
              Our AI understands physics principles, lighting conditions, and material properties to create 
              believable motion that feels natural and engaging. Whether you're animating a portrait, landscape, 
              or product shot, our technology adapts to deliver optimal results.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              The platform also features advanced prompt understanding capabilities, allowing users to describe 
              their desired motion in natural language. Want a gentle breeze through a field? Simply type it. 
              Need a product to rotate slowly? Just describe it. Our AI interprets these instructions and 
              generates precisely the motion you envision, making video creation as simple as writing a sentence.
            </p>
            
            <p className="text-lg leading-relaxed">
              Built with enterprise-grade infrastructure, Pixwith.ai ensures fast processing times, secure data 
              handling, and consistent availability. Our cloud-based architecture scales automatically to handle 
              peak demand while maintaining the same high-quality output, whether you're generating one video 
              or a thousand.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};