import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Crown, Rocket } from "lucide-react";

export const PricingSection = () => {
  const plans = [
    {
      name: "Free Starter",
      icon: <Zap className="w-6 h-6" />,
      price: "Free",
      period: "forever",
      description: "Perfect for trying out our AI technology",
      features: [
        "5 videos per month",
        "720p HD quality", 
        "Basic motion styles",
        "Standard processing",
        "Community support"
      ],
      limitations: [
        "Pixwith.ai watermark",
        "Up to 5 seconds duration"
      ],
      popular: false,
      buttonText: "Start Free",
      buttonVariant: "outline" as const
    },
    {
      name: "Pro Creator",
      icon: <Crown className="w-6 h-6" />,
      price: "$19",
      period: "per month",
      description: "For content creators and small businesses",
      features: [
        "100 videos per month",
        "1080p Full HD quality",
        "All motion styles",
        "Priority processing",
        "Email support",
        "No watermark",
        "Commercial license",
        "Custom presets"
      ],
      limitations: [],
      popular: true,
      buttonText: "Start Pro Trial",
      buttonVariant: "default" as const
    },
    {
      name: "Enterprise",
      icon: <Rocket className="w-6 h-6" />,
      price: "Custom",
      period: "pricing", 
      description: "For agencies and large organizations",
      features: [
        "Unlimited videos",
        "4K Ultra HD quality",
        "Custom motion styles",
        "Dedicated processing",
        "24/7 phone support",
        "White-label options",
        "API access",
        "Team collaboration",
        "Advanced analytics"
      ],
      limitations: [],
      popular: false,
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const
    }
  ];

  return (
    <section id="pricing" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Pricing Plans
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the plan that fits your needs. All plans include our core AI technology 
            with different usage limits and feature access.
          </p>
          <Badge className="bg-gradient-primary text-primary-foreground">
            30-day money-back guarantee
          </Badge>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative p-8 bg-card/80 border-border transition-all duration-300 hover:shadow-glow ${plan.popular ? 'border-primary shadow-glow' : 'hover:border-primary/50'}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="text-primary mr-2">{plan.icon}</div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                </div>
                <div className="mb-4">
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/ {plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>
              
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
                
                {plan.limitations.length > 0 && (
                  <div className="pt-4 border-t border-border/50">
                    {plan.limitations.map((limitation, limitIndex) => (
                      <div key={limitIndex} className="flex items-start">
                        <span className="w-5 h-5 text-muted-foreground mr-3 mt-0.5 text-xs">⚠</span>
                        <span className="text-sm text-muted-foreground">{limitation}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <a href="https://pixwith.ai/" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button 
                  variant={plan.buttonVariant}
                  className={`w-full ${plan.popular ? 'bg-gradient-primary text-primary-foreground shadow-button' : ''}`}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </a>
            </Card>
          ))}
        </div>
        
        <Card className="p-8 bg-card/50 border-border text-center">
          <h3 className="text-2xl font-semibold mb-4 gradient-text">Need a Custom Solution?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We offer flexible enterprise solutions with custom integrations, dedicated infrastructure, 
            and specialized support for unique business requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://pixwith.ai/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">Schedule a Demo</Button>
            </a>
            <a href="https://pixwith.ai/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-secondary text-secondary-foreground" size="lg">Contact Enterprise Sales</Button>
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};