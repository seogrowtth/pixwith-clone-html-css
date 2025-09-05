import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const SpecificationsSection = () => {
  const specs = [
    {
      category: "Input Specifications",
      items: [
        { label: "Supported Formats", value: "JPG, PNG, WebP, HEIC" },
        { label: "Maximum File Size", value: "50MB per image" },
        { label: "Resolution Range", value: "512x512 to 4096x4096 pixels" },
        { label: "Aspect Ratios", value: "1:1, 4:3, 16:9, 9:16, Custom" }
      ]
    },
    {
      category: "Output Specifications", 
      items: [
        { label: "Video Formats", value: "MP4, WebM, GIF" },
        { label: "Resolution Options", value: "HD (720p), FHD (1080p), 4K (2160p)" },
        { label: "Frame Rate", value: "24fps, 30fps, 60fps" },
        { label: "Duration Range", value: "1-10 seconds" }
      ]
    },
    {
      category: "AI Model Specifications",
      items: [
        { label: "Model Architecture", value: "Transformer-based Diffusion" },
        { label: "Training Dataset", value: "100M+ video-image pairs" },
        { label: "Processing Time", value: "30-120 seconds average" },
        { label: "Quality Modes", value: "Fast, Balanced, High Quality" }
      ]
    }
  ];

  return (
    <section id="specifications" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Key Specifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technical specifications and capabilities of our advanced AI video generation system.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {specs.map((spec, index) => (
            <Card key={index} className="p-6 bg-card/80 border-border">
              <div className="mb-6">
                <Badge className="mb-3 bg-gradient-secondary text-secondary-foreground">
                  {spec.category}
                </Badge>
              </div>
              <div className="space-y-4">
                {spec.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-b border-border/50 pb-3 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start">
                      <span className="text-muted-foreground text-sm">{item.label}</span>
                      <span className="text-foreground font-medium text-sm text-right ml-4">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        <Card className="p-8 bg-card/50 border-border">
          <div className="prose prose-lg max-w-none text-card-foreground">
            <h3 className="text-2xl font-semibold mb-6 gradient-text">Advanced Capabilities & Performance</h3>
            
            <p className="text-lg leading-relaxed mb-6">
              Our infrastructure is built on enterprise-grade cloud computing resources, ensuring consistent 
              performance regardless of demand. The system can process multiple requests simultaneously while 
              maintaining the same high-quality output standards. We utilize GPU clusters specifically 
              optimized for AI inference, reducing processing times and enabling real-time preview capabilities.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              The AI models powering Pixwith.ai have been trained on diverse datasets encompassing various 
              art styles, photography genres, and motion patterns. This extensive training enables the system 
              to handle everything from photorealistic portraits to artistic illustrations, from natural 
              landscapes to abstract compositions. The models understand context and can adapt their approach 
              based on the input image characteristics.
            </p>
            
            <p className="text-lg leading-relaxed">
              Quality assurance is built into every step of our process. Automated systems monitor output 
              quality, detect potential artifacts, and trigger re-processing when necessary. This ensures 
              that every video meets our high standards before delivery. Additionally, our continuous learning 
              system incorporates user feedback to constantly improve model performance and expand creative 
              capabilities.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};