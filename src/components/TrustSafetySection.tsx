import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, FileCheck, Users, Gavel, Eye } from "lucide-react";

export const TrustSafetySection = () => {
  const trustFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level encryption and security protocols protect your content"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Private Processing",
      description: "Your images are processed securely and never stored permanently"
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Commercial Rights",
      description: "Full commercial usage rights included with all generated content"
    }
  ];

  return (
    <section id="trust-safety" className="py-20 px-6 bg-muted/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-secondary text-secondary-foreground">
            Trust & Safety First
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Trust, Safety & Rights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your privacy and rights are our top priority. We've built comprehensive safeguards 
            to ensure secure, ethical, and legally compliant AI video generation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {trustFeatures.map((feature, index) => (
            <Card key={index} className="p-8 text-center bg-card/80 border-border hover:border-primary/30 transition-colors">
              <div className="text-primary mb-6 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-8 bg-card/50 border-border">
            <div className="flex items-center mb-6">
              <Gavel className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-2xl font-semibold gradient-text">Legal & Compliance</h3>
            </div>
            <div className="prose prose-lg max-w-none text-card-foreground">
              <p className="text-base leading-relaxed mb-4">
                <strong>Copyright Protection:</strong> All generated videos are created using our proprietary AI models 
                and do not infringe on existing copyrights. Users retain full ownership of their input images and 
                generated content.
              </p>
              <p className="text-base leading-relaxed mb-4">
                <strong>Commercial License:</strong> Every video generated through Pixwith.ai comes with unlimited 
                commercial usage rights. Use your content for marketing, sales, social media, or any business purpose 
                without additional licensing fees.
              </p>
              <p className="text-base leading-relaxed">
                <strong>Content Guidelines:</strong> We maintain strict content policies prohibiting the generation 
                of illegal, harmful, or inappropriate content. Our AI systems are trained to detect and refuse 
                problematic requests automatically.
              </p>
            </div>
          </Card>
          
          <Card className="p-8 bg-card/50 border-border">
            <div className="flex items-center mb-6">
              <Eye className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-2xl font-semibold gradient-text">Privacy & Data Protection</h3>
            </div>
            <div className="prose prose-lg max-w-none text-card-foreground">
              <p className="text-base leading-relaxed mb-4">
                <strong>Zero Data Retention:</strong> Your uploaded images are processed and automatically deleted 
                from our servers within 24 hours. We do not build databases of user content or use your images 
                to train our models.
              </p>
              <p className="text-base leading-relaxed mb-4">
                <strong>GDPR Compliance:</strong> Full compliance with European data protection regulations. Users 
                have complete control over their data with rights to access, modify, or delete their information 
                at any time.
              </p>
              <p className="text-base leading-relaxed">
                <strong>Secure Infrastructure:</strong> All data transmission uses TLS 1.3 encryption, and our 
                processing infrastructure employs military-grade security protocols with regular third-party 
                security audits.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};