import { Card } from "@/components/ui/card";

export const WhatIsSection = () => {
  return (
    <section id="what-is" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            What Is Image to Video AI?
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card/50 border-border backdrop-blur-sm">
            <div className="prose prose-lg max-w-none text-card-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Image to Video AI represents a revolutionary breakthrough in artificial intelligence technology 
                that transforms static images into dynamic, engaging video content. This cutting-edge technology 
                uses advanced machine learning algorithms and neural networks to analyze static photographs and 
                generate realistic motion, creating seamless video sequences that breathe life into still images.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                At its core, Image to Video AI understands the spatial relationships within an image, predicts 
                natural movement patterns, and generates intermediate frames to create fluid motion. Whether it's 
                making a portrait blink and smile, turning a landscape into a flowing scene with moving clouds 
                and water, or animating product shots for marketing campaigns, this technology opens up endless 
                creative possibilities.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                The process involves sophisticated computer vision techniques that analyze depth, texture, and 
                contextual elements within the image. The AI then generates plausible motion vectors and creates 
                frame-by-frame animations that maintain visual consistency while introducing natural-looking movement. 
                This technology has evolved rapidly from simple morphing effects to complex, physics-aware animations 
                that can understand how different materials, lighting conditions, and objects should behave in motion.
              </p>
              
              <p className="text-lg leading-relaxed">
                What makes modern Image to Video AI particularly powerful is its ability to maintain temporal 
                coherence – ensuring that the generated video frames are consistent with each other and don't 
                exhibit jarring artifacts or unrealistic movements. This breakthrough has made it possible for 
                creators, marketers, and content producers to generate professional-quality video content from 
                simple static images, dramatically reducing production time and costs.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};