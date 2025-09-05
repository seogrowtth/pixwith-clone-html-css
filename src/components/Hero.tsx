import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            AI Video Generator{" "}
            <span className="gradient-text text-glow">Create Stunning AI Videos</span>{" "}
            in Minutes
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform static images into dynamic videos with cutting-edge AI technology. 
            No editing skills needed. From simple prompts to professional HD videos in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="https://pixwith.ai/" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 shadow-button animate-pulse-glow px-8 py-6 text-lg w-full sm:w-auto"
              >
                Start Creating Now - Free
              </Button>
            </a>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg"
            >
              Watch Demo
            </Button>
          </div>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <img 
            src={heroImage} 
            alt="AI Video Generation Interface" 
            className="w-full rounded-2xl shadow-card animate-float border border-border/50"
          />
          <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
};