import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

export const FAQSection = () => {
  const faqs = [
    {
      question: "How long does it take to generate a video?",
      answer: "Video generation typically takes 30-120 seconds depending on the complexity and quality settings. Our fast mode can generate videos in under 30 seconds, while high-quality 4K videos may take up to 2 minutes."
    },
    {
      question: "What image formats do you support?",
      answer: "We support JPG, PNG, WebP, and HEIC formats. Images should be at least 512x512 pixels for best results, with a maximum file size of 50MB. Higher resolution images (1024x1024 or larger) produce significantly better video quality."
    },
    {
      question: "Can I use the generated videos commercially?",
      answer: "Yes! All videos generated through Pixwith.ai come with full commercial usage rights. You can use them for marketing, advertising, social media, or any business purpose without additional licensing fees."
    },
    {
      question: "Do you store my uploaded images?",
      answer: "No, we prioritize your privacy. Uploaded images are processed and automatically deleted from our servers within 24 hours. We do not build databases of user content or use your images to train our AI models."
    },
    {
      question: "What video formats can I download?",
      answer: "Generated videos can be downloaded in MP4, WebM, or GIF formats. You can choose from various quality settings including HD (720p), Full HD (1080p), and 4K (2160p) depending on your plan."
    },
    {
      question: "How accurate is the AI in following my prompts?",
      answer: "Our AI achieves high accuracy with specific, descriptive prompts. The more detailed your description, the better the results. We recommend describing motion direction, intensity, and environmental factors for optimal outcomes."
    },
    {
      question: "Can I edit the generated videos?",
      answer: "Yes, you can download the videos and edit them in any video editing software. We also offer basic editing tools within our platform for trimming, cropping, and adding simple effects."
    },
    {
      question: "Is there an API available?",
      answer: "Yes, we offer a comprehensive API for Enterprise customers. This allows integration into existing workflows, batch processing, and custom applications. Contact our sales team for API documentation and access."
    },
    {
      question: "What happens if I'm not satisfied with the results?",
      answer: "We offer unlimited regenerations within your plan limits. If you're still not satisfied, our Pro and Enterprise plans include revision credits. We also have a 30-day money-back guarantee for paid subscriptions."
    },
    {
      question: "Can the AI animate people and faces?",
      answer: "Yes, our AI specializes in natural human animation including facial expressions, blinking, breathing, and hair movement. We use advanced facial recognition and motion prediction to create realistic human animations while maintaining portrait quality."
    }
  ];

  return (
    <section id="faq" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our AI video generation technology, 
            pricing, and features.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card/50 border-border">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:text-primary transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </div>
    </section>
  );
};