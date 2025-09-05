import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Wand2, Download, Sparkles } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: <Upload className="w-8 h-8" />,
      title: "Upload Your Image",
      description: "Simply drag and drop your image or select from our gallery. We support JPG, PNG, and WebP formats up to 10MB."
    },
    {
      number: "02", 
      icon: <Wand2 className="w-8 h-8" />,
      title: "Describe Your Vision",
      description: "Tell our AI what kind of motion you want. Be specific about movement, style, and mood for best results."
    },
    {
      number: "03",
      icon: <Sparkles className="w-8 h-8" />,
      title: "AI Magic Happens", 
      description: "Our advanced algorithms analyze your image and generate smooth, realistic motion based on your description."
    },
    {
      number: "04",
      icon: <Download className="w-8 h-8" />,
      title: "Download & Share",
      description: "Get your professional-quality video in multiple formats. Ready to share across all social platforms."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 bg-muted/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            How Pixwith.ai Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transform your static images into dynamic videos in just four simple steps. 
            No technical expertise required – our AI handles all the complexity.
          </p>
          <Button className="bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 shadow-button">
            Try It Now - Free
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="relative p-8 text-center bg-card/80 border-border hover:border-primary/30 transition-all duration-300 group">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                {step.number}
              </div>
              <div className="text-primary mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </Card>
          ))}
        </div>
        
        <Card className="p-8 bg-card/50 border-border">
          <div className="prose prose-lg max-w-none text-card-foreground">
            <h3 className="text-2xl font-semibold mb-6 gradient-text">Detailed Process Breakdown</h3>
            
            <p className="text-lg leading-relaxed mb-6">
              <strong>Image Analysis Phase:</strong> When you upload an image, our AI immediately begins analyzing 
              its contents using advanced computer vision techniques. The system identifies objects, people, 
              backgrounds, lighting conditions, and potential motion points. It creates a depth map and 
              understands the spatial relationships between different elements in the frame.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              <strong>Motion Planning:</strong> Based on your text prompt, the AI generates a motion plan that 
              respects physics laws and visual coherence. It determines which parts of the image should move, 
              how they should move, and what the temporal progression should look like. The system considers 
              factors like wind patterns for outdoor scenes, facial muscle movements for portraits, or mechanical 
              rotations for products.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              <strong>Frame Generation:</strong> Using our proprietary neural networks, the system generates 
              intermediate frames between the original image and the intended motion. Each frame maintains 
              visual consistency while progressively introducing the desired movement. The AI ensures smooth 
              transitions, proper occlusion handling, and realistic lighting changes.
            </p>
            
            <p className="text-lg leading-relaxed">
              <strong>Quality Enhancement:</strong> Finally, our post-processing algorithms enhance the video 
              quality, adjust color grading, and apply temporal smoothing to eliminate any artifacts. The 
              result is a professional-quality video that looks natural and engaging, ready for immediate use 
              across any platform or application.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};