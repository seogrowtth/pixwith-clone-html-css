import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Target, Palette, Clock } from "lucide-react";

export const BestPracticesSection = () => {
  const practices = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Choose High-Quality Images",
      description: "Start with sharp, well-lit images at least 1024x1024 pixels for best results",
      tips: ["Use good lighting", "Avoid blurry or pixelated images", "Higher resolution = better output"]
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Be Specific with Prompts", 
      description: "Detailed descriptions produce more accurate and engaging animations",
      tips: ["Describe motion direction", "Mention speed and intensity", "Include mood and atmosphere"]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Consider Your Audience",
      description: "Tailor animation style and duration to your platform and viewers",
      tips: ["Short loops for social media", "Subtle motion for professional use", "Dynamic for entertainment"]
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Experiment & Iterate",
      description: "Try different settings and styles to find what works best for your content",
      tips: ["Test multiple motion styles", "Adjust timing and intensity", "Compare different approaches"]
    }
  ];

  return (
    <section id="best-practices" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-accent text-accent-foreground">
            Pro Tips & Guidelines
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Best Practices for Using Image to Video AI
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master the art of AI video generation with these proven techniques and expert recommendations 
            for creating professional-quality content.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {practices.map((practice, index) => (
            <Card key={index} className="p-8 bg-card/80 border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="text-primary bg-primary/10 p-3 rounded-lg">{practice.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{practice.title}</h3>
                  <p className="text-muted-foreground">{practice.description}</p>
                </div>
              </div>
              <div className="space-y-2">
                {practice.tips.map((tip, tipIndex) => (
                  <div key={tipIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-card-foreground">{tip}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        <Card className="p-8 bg-card/50 border-border">
          <div className="prose prose-lg max-w-none text-card-foreground">
            <h3 className="text-2xl font-semibold mb-6 gradient-text">Advanced Optimization Techniques</h3>
            
            <p className="text-lg leading-relaxed mb-6">
              <strong>Image Composition Matters:</strong> Images with clear focal points and good composition 
              translate better to video. Consider the rule of thirds, leading lines, and negative space when 
              selecting images. Portraits work best when the subject is well-centered, while landscapes benefit 
              from distinct foreground, middle ground, and background elements that can be animated independently.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              <strong>Prompt Engineering:</strong> The key to exceptional results lies in prompt specificity. 
              Instead of "make it move," try "gentle wind blowing through hair from left to right, subtle 
              breathing motion, soft natural lighting." Include temporal elements like "slowly," "rhythmically," 
              or "pulsing" to control animation timing. Mention environmental factors like lighting changes, 
              atmospheric effects, or seasonal elements.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              <strong>Quality Control:</strong> Always preview your videos before finalizing. Check for 
              unnatural movements, temporal inconsistencies, or artifacts. If results aren't satisfactory, 
              try adjusting your prompt rather than regenerating with the same parameters. Small changes 
              in description can yield dramatically different results.
            </p>
            
            <p className="text-lg leading-relaxed">
              <strong>Platform Optimization:</strong> Different social platforms favor different video 
              characteristics. Instagram prefers square or vertical formats with subtle, elegant motion. 
              TikTok thrives on dynamic, attention-grabbing animations. LinkedIn audiences respond well 
              to professional, understated motion graphics. Tailor your approach accordingly for maximum 
              engagement on each platform.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};