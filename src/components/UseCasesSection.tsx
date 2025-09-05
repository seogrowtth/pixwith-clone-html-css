import { Card } from "@/components/ui/card";
import { Users, Briefcase, Camera, Palette, Heart, Gamepad2, GraduationCap, Building2 } from "lucide-react";

export const UseCasesSection = () => {
  const useCases = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Social Media Content",
      description: "Transform static posts into engaging video content that stops the scroll",
      examples: ["Instagram Reels", "TikTok videos", "Facebook Stories", "LinkedIn posts"]
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Marketing & Advertising", 
      description: "Create compelling promotional videos from product photos and marketing materials",
      examples: ["Product demos", "Brand storytelling", "Email campaigns", "Digital ads"]
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Real Estate",
      description: "Bring property photos to life with realistic walkthroughs and atmospheric videos",
      examples: ["Property showcases", "Virtual tours", "Listing highlights", "Market presentations"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Arts",
      description: "Animate artwork, photographs, and creative projects for portfolios and exhibitions",
      examples: ["Digital art animation", "Photography portfolios", "Gallery exhibits", "NFT creation"]
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education & Training",
      description: "Make learning materials more engaging with animated diagrams and visual content",
      examples: ["Course content", "Training materials", "Presentations", "Educational videos"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Personal Projects",
      description: "Create memorable videos from family photos, travel memories, and special moments",
      examples: ["Family memories", "Travel vlogs", "Event highlights", "Personal stories"]
    }
  ];

  return (
    <section id="use-cases" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Use Cases for Image to Video AI
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the endless possibilities of AI-powered video generation across industries and creative applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {useCases.map((useCase, index) => (
            <Card key={index} className="p-6 bg-card/80 border-border hover:border-primary/50 transition-all duration-300 group">
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {useCase.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
              <p className="text-muted-foreground mb-4">{useCase.description}</p>
              <div className="space-y-2">
                {useCase.examples.map((example, exampleIndex) => (
                  <div key={exampleIndex} className="text-sm text-accent bg-accent/10 px-3 py-1 rounded-full inline-block mr-2 mb-2">
                    {example}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        <Card className="p-8 bg-card/50 border-border">
          <div className="prose prose-lg max-w-none text-card-foreground">
            <h3 className="text-2xl font-semibold mb-6 gradient-text">Industry Impact & Success Stories</h3>
            
            <p className="text-lg leading-relaxed mb-6">
              <strong>E-commerce Revolution:</strong> Online retailers are experiencing up to 80% higher engagement 
              rates when using AI-generated product videos instead of static images. Fashion brands can now show 
              fabric movement and texture, electronics companies can demonstrate functionality, and home decor 
              businesses can create ambient lifestyle videos that help customers visualize products in their spaces.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              <strong>Content Creator Economy:</strong> Individual creators and influencers are leveraging 
              Image to Video AI to produce consistent, high-quality content at scale. Travel bloggers can 
              animate their photography to create immersive destination guides, food creators can show the 
              sizzle and steam of their dishes, and lifestyle influencers can bring their aesthetic posts 
              to life with subtle, elegant movements.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              <strong>Corporate Communications:</strong> Businesses are transforming their internal and external 
              communications with dynamic visual content. Company announcements become more engaging, training 
              materials are more memorable, and brand storytelling becomes more impactful when static corporate 
              imagery is brought to life with purposeful animation.
            </p>
            
            <p className="text-lg leading-relaxed">
              <strong>Preserving Memories:</strong> Perhaps most meaningfully, families and individuals are using 
              this technology to breathe new life into cherished photographs. Historical family photos can be 
              animated to create moving portraits, wedding photographers offer clients living memories, and 
              memorial services use gentle animations to celebrate lives in beautiful, respectful ways.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};