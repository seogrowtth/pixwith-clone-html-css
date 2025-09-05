import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
              <span className="text-xl font-bold gradient-text">Pixwith.AI</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Transform your images into stunning videos with the power of AI. 
              Professional results in minutes, not hours.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm">Twitter</Button>
              <Button variant="ghost" size="sm">LinkedIn</Button>
              <Button variant="ghost" size="sm">YouTube</Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Product</h4>
            <div className="space-y-3 text-sm">
              <a href="#features" className="block text-muted-foreground hover:text-primary transition-colors">Features</a>
              <a href="#pricing" className="block text-muted-foreground hover:text-primary transition-colors">Pricing</a>
              <a href="#api" className="block text-muted-foreground hover:text-primary transition-colors">API</a>
              <a href="#integrations" className="block text-muted-foreground hover:text-primary transition-colors">Integrations</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
            <div className="space-y-3 text-sm">
              <a href="#blog" className="block text-muted-foreground hover:text-primary transition-colors">Blog</a>
              <a href="#tutorials" className="block text-muted-foreground hover:text-primary transition-colors">Tutorials</a>
              <a href="#case-studies" className="block text-muted-foreground hover:text-primary transition-colors">Case Studies</a>
              <a href="#community" className="block text-muted-foreground hover:text-primary transition-colors">Community</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <div className="space-y-3 text-sm">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#careers" className="block text-muted-foreground hover:text-primary transition-colors">Careers</a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">Contact</a>
              <a href="#press" className="block text-muted-foreground hover:text-primary transition-colors">Press Kit</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 Pixwith.AI. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            <a href="#cookies" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};