import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const MotionStylesSection = () => {
  const motionStyles = [
    {
      style: "Cinematic Pan",
      description: "Smooth horizontal or vertical camera movements that reveal more of the scene",
      bestFor: "Landscapes, architecture, wide shots"
    },
    {
      style: "Portrait Animation",
      description: "Subtle facial movements, blinking, breathing, and hair movement",
      bestFor: "Headshots, portraits, character art"
    },
    {
      style: "Parallax Effect",
      description: "Different layers move at different speeds creating depth illusion",
      bestFor: "Layered compositions, depth enhancement"
    },
    {
      style: "Ambient Motion",
      description: "Environmental elements like flowing water, swaying trees, moving clouds",
      bestFor: "Nature scenes, backgrounds, atmospheres"
    },
    {
      style: "Product Rotation",
      description: "360-degree spins and tilts to showcase products from all angles",
      bestFor: "E-commerce, product photography"
    },
    {
      style: "Zoom & Focus",
      description: "Dynamic zoom in/out effects with focus shifts",
      bestFor: "Highlighting details, dramatic reveals"
    },
    {
      style: "Cinemagraph Style",
      description: "Small, repetitive motions in otherwise static scenes",
      bestFor: "Social media, elegant backgrounds"
    },
    {
      style: "Dynamic Transitions",
      description: "Morphing between different states or revealing hidden elements",
      bestFor: "Before/after shots, transformations"
    }
  ];

  return (
    <section id="motion-styles" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Motion Styles You Can Try
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our comprehensive library of motion styles and effects. Each style can be customized 
            to match your creative vision and brand aesthetic.
          </p>
          <a href="https://pixwith.ai/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-accent text-accent-foreground font-semibold hover:opacity-90 shadow-button">
              Explore All Styles
            </Button>
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {motionStyles.map((motion, index) => (
            <Card key={index} className="p-6 bg-card/80 border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-glow">
              <h3 className="text-lg font-semibold mb-3 text-primary group-hover:text-secondary transition-colors">
                {motion.style}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{motion.description}</p>
              <div className="text-xs text-accent bg-accent/10 px-3 py-2 rounded-full">
                Best for: {motion.bestFor}
              </div>
            </Card>
          ))}
        </div>
        
        <Card className="p-8 bg-card/50 border-border">
          <div className="prose prose-lg max-w-none text-card-foreground">
            <h3 className="text-2xl font-semibold mb-6 gradient-text">Custom Motion Controls & Advanced Settings</h3>
            
            <p className="text-lg leading-relaxed mb-6">
              Beyond our preset motion styles, Pixwith.ai offers granular control over every aspect of your video 
              generation. Advanced users can adjust motion intensity, direction vectors, temporal dynamics, and 
              even specify which areas of the image should remain static versus which should be animated. This 
              level of control ensures that your creative vision is perfectly realized.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Our motion prediction engine understands contextual relationships within images. For example, when 
              animating a portrait, it knows that eyes should blink naturally, hair should move with realistic 
              physics, and clothing should respond appropriately to simulated wind or movement. This contextual 
              awareness eliminates the need for extensive manual fine-tuning.
            </p>
            
            <p className="text-lg leading-relaxed">
              Professional creators can save custom motion presets, combine multiple motion styles in a single 
              video, and even create motion templates that can be applied to similar images consistently. This 
              workflow optimization makes it possible to maintain brand consistency across large content campaigns 
              while still achieving unique, engaging results for each piece.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};