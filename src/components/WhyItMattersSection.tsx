import { Card } from "@/components/ui/card";
import { Sparkles, TrendingUp, Clock, DollarSign } from "lucide-react";

export const WhyItMattersSection = () => {
  const reasons = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Video Content Dominance",
      description: "Video content generates 1200% more shares than text and images combined. Platforms prioritize video content in their algorithms."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Speed to Market",
      description: "Traditional video production can take weeks. AI generation reduces this to minutes, allowing rapid content iteration and testing."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Cost Efficiency",
      description: "Eliminate expensive video crews, equipment, and post-production costs. Generate professional videos at a fraction of traditional costs."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Creative Possibilities",
      description: "Unlock scenarios impossible with traditional filming – animate historical photos, create surreal landscapes, or bring artwork to life."
    }
  ];

  return (
    <section id="why-matters" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Why Image to Video Matters in 2025
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The digital landscape is evolving rapidly, and video content has become the cornerstone of effective communication, 
            marketing, and storytelling in the modern era.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <Card key={index} className="p-6 bg-card/80 border-border hover:border-primary/50 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="text-primary">{reason.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <Card className="p-8 bg-card/50 border-border">
          <div className="prose prose-lg max-w-none text-card-foreground">
            <p className="text-lg leading-relaxed mb-6">
              In 2025, we're witnessing an unprecedented shift in content consumption patterns. Social media platforms 
              like TikTok, Instagram Reels, and YouTube Shorts have fundamentally changed how audiences engage with content. 
              Static images, while still valuable, are increasingly overshadowed by dynamic, moving visuals that capture 
              and hold attention in our fast-paced digital environment.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              The rise of mobile-first content consumption has further amplified the importance of video. Users scroll 
              through feeds at lightning speed, and video content has the unique ability to stop that scroll and create 
              meaningful engagement. Studies show that video posts receive 48% more views and generate 1200% more shares 
              than text and image posts combined.
            </p>
            
            <p className="text-lg leading-relaxed">
              Image to Video AI democratizes video creation, making it accessible to everyone regardless of technical 
              expertise or budget constraints. Small businesses can now compete with large corporations in creating 
              compelling video content, creators can produce more engaging material with limited resources, and marketers 
              can test and iterate on video campaigns at unprecedented speed and scale.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};