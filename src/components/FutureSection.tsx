import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Globe, Brain, Sparkles } from "lucide-react";

export const FutureSection = () => {
  const innovations = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Advanced AI Models",
      description: "Next-generation neural networks with enhanced understanding of physics and motion dynamics"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Real-time Generation",
      description: "Instant video creation with live preview and interactive motion adjustment capabilities"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "3D Scene Understanding",
      description: "Full 3D spatial awareness enabling complex camera movements and depth-based animations"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Multi-modal Integration",
      description: "Combining text, audio, and visual inputs for comprehensive multimedia content creation"
    }
  ];

  return (
    <section id="future" className="py-20 px-6 bg-muted/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-primary text-primary-foreground">
            Innovation Roadmap
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            The Future of Image to Video AI
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're pioneering the next evolution of AI-powered content creation with groundbreaking 
            technologies that will reshape how we think about visual storytelling.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {innovations.map((innovation, index) => (
            <Card key={index} className="p-6 text-center bg-card/80 border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-glow">
              <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {innovation.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3">{innovation.title}</h3>
              <p className="text-muted-foreground text-sm">{innovation.description}</p>
            </Card>
          ))}
        </div>
        
        <Card className="p-8 bg-card/50 border-border">
          <div className="prose prose-lg max-w-none text-card-foreground">
            <h3 className="text-2xl font-semibold mb-6 gradient-text">Transforming Industries & Creative Expression</h3>
            
            <p className="text-lg leading-relaxed mb-6">
              <strong>The Democratization of Video Production:</strong> We envision a future where anyone, 
              regardless of technical expertise or budget, can create Hollywood-quality video content. 
              Advanced AI will understand not just what to animate, but how to tell compelling stories, 
              automatically suggesting narrative structures, pacing, and emotional beats that resonate 
              with audiences across cultures and contexts.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              <strong>Immersive Experiences:</strong> The next frontier involves creating fully immersive 
              3D environments from single images. Imagine uploading a photograph of a room and having 
              AI generate a complete 360-degree virtual space with realistic lighting, physics, and 
              interactive elements. This technology will revolutionize virtual reality, gaming, 
              architecture visualization, and remote collaboration.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              <strong>Personalized Content at Scale:</strong> Future AI systems will understand individual 
              viewer preferences and automatically generate personalized variations of the same content. 
              A single product image could become thousands of unique videos, each optimized for different 
              demographics, cultural contexts, or marketing objectives, all while maintaining brand 
              consistency and message clarity.
            </p>
            
            <p className="text-lg leading-relaxed">
              <strong>Ethical AI Development:</strong> As we advance these technologies, we remain committed 
              to responsible AI development. This includes robust safeguards against misuse, transparent 
              algorithms, fair compensation for content creators whose work contributes to training data, 
              and ensuring that AI-generated content serves to augment human creativity rather than replace 
              it. The future of Image to Video AI is not just about better technology—it's about 
              empowering human expression and connection through accessible, ethical innovation.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};