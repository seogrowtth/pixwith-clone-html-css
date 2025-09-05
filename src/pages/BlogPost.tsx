import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { blogContent } from "@/data/blogContent";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  // Function to render properly formatted content
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: JSX.Element[] = [];
    let key = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      if (!line) continue;

      // Main headings (# )
      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={key++} className="text-4xl font-bold gradient-text mb-8 mt-12 first:mt-0">
            {line.substring(2)}
          </h1>
        );
      }
      // Subheadings (## )
      else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={key++} className="text-2xl font-semibold gradient-text mb-6 mt-10">
            {line.substring(3)}
          </h2>
        );
      }
      // Sub-subheadings (### )
      else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={key++} className="text-xl font-semibold text-foreground mb-4 mt-8">
            {line.substring(4)}
          </h3>
        );
      }
      // Bold text with colon (usually section intros)
      else if (line.match(/^\*\*(.*?)\*\*:/)) {
        const match = line.match(/^\*\*(.*?)\*\*:(.*)/);
        if (match) {
          elements.push(
            <p key={key++} className="text-lg leading-relaxed mb-6 mt-6">
              <strong className="text-primary font-semibold">{match[1]}:</strong>
              {formatInlineText(match[2])}
            </p>
          );
        }
      }
      // Regular paragraphs
      else if (!line.startsWith('**') || !line.includes(':**')) {
        // Group consecutive lines into paragraphs
        let paragraph = line;
        let j = i + 1;
        
        // Continue collecting lines until we hit an empty line or special formatting
        while (j < lines.length && lines[j].trim() && 
               !lines[j].startsWith('#') && 
               !lines[j].match(/^\*\*(.*?)\*\*:/)) {
          paragraph += ' ' + lines[j].trim();
          j++;
        }
        
        i = j - 1; // Update i to skip the lines we've processed
        
        elements.push(
          <p key={key++} className="text-lg leading-relaxed mb-6 text-card-foreground">
            {formatInlineText(paragraph)}
          </p>
        );
      }
    }

    return elements;
  };

  // Function to format inline text (bold, italic)
  const formatInlineText = (text: string) => {
    const parts = [];
    let lastIndex = 0;
    let key = 0;

    // Handle bold text
    const boldRegex = /\*\*(.*?)\*\*/g;
    let match;

    while ((match = boldRegex.exec(text)) !== null) {
      // Add text before the bold part
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      
      // Add the bold part
      parts.push(
        <strong key={key++} className="font-semibold text-foreground">
          {match[1]}
        </strong>
      );
      
      lastIndex = boldRegex.lastIndex;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  // Blog post metadata
  const blogPosts = {
    "best-ai-tools-animate-images-videos-2025-guide": {
      title: "Best AI Tools to Animate Images into Videos (2025 Guide)",
      author: "Sarah Chen",
      date: "March 15, 2025",
      readTime: "8 min read",
      category: "Guide",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop"
    },
    "how-image-video-ai-transforming-social-media-marketing": {
      title: "How Image to Video AI is Transforming Social Media Marketing",
      author: "Mark Rodriguez",
      date: "March 12, 2025",
      readTime: "6 min read",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop"
    },
    "step-by-step-still-photo-cinematic-video": {
      title: "Step-by-Step: How to Turn a Still Photo into a Cinematic Video",
      author: "Jennifer Walsh",
      date: "March 10, 2025",
      readTime: "10 min read",
      category: "Tutorial",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=400&fit=crop"
    },
    "top-5-motion-styles-ai-video-generators": {
      title: "Top 5 Motion Styles Every Creator Should Try with AI Video Generators",
      author: "Dr. Alex Kim",
      date: "March 8, 2025",
      readTime: "7 min read",
      category: "Creative",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
    },
    "why-short-form-video-beats-static-images-engagement": {
      title: "Why Short-Form Video Beats Static Images for Engagement",
      author: "Michael Park",
      date: "March 5, 2025",
      readTime: "5 min read",
      category: "Analysis",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
    },
    "image-video-ai-vs-traditional-animation": {
      title: "Image to Video AI vs Traditional Animation: Which is Right for You?",
      author: "Lisa Thompson",
      date: "March 3, 2025",
      readTime: "9 min read",
      category: "Comparison",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop"
    },
    "future-ai-video-generation-photos-hollywood-films": {
      title: "The Future of AI Video Generation: From Photos to Hollywood-Level Films",
      author: "Robert Chen",
      date: "March 1, 2025",
      readTime: "8 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
    },
    "artists-designers-image-video-ai-portfolios": {
      title: "How Artists & Designers Are Using Image to Video AI to Showcase Portfolios",
      author: "Emma Davis",
      date: "February 28, 2025",
      readTime: "6 min read",
      category: "Portfolio",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=400&fit=crop"
    },
    "10-creative-marketing-campaigns-image-video-ai": {
      title: "10 Creative Marketing Campaigns Powered by Image to Video AI",
      author: "David Wilson",
      date: "February 25, 2025",
      readTime: "7 min read",
      category: "Case Study",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=400&fit=crop"
    },
    "choosing-best-ai-image-animator-comparison": {
      title: "Choosing the Best AI Image Animator: Features, Specs, and Pricing Compared",
      author: "Sophie Martinez",
      date: "February 22, 2025",
      readTime: "12 min read",
      category: "Review",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop"
    }
  };

  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;
  const content = slug ? blogContent[slug as keyof typeof blogContent] : null;

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-32 pb-20 px-6 text-center">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-6">Blog Post Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Link to="/blog">
              <Button className="bg-gradient-primary text-primary-foreground">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Show coming soon message for posts without content
  if (!content) {
    return (
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-12 px-6">
          <div className="container mx-auto">
            <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="max-w-4xl mx-auto">
              <Badge className="mb-4 bg-gradient-secondary text-secondary-foreground">
                {post.category}
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg border border-border mb-8"
              />
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="pb-20 px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-card/50 border border-border rounded-lg p-12">
                <h2 className="text-3xl font-bold mb-4 gradient-text">Coming Soon!</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  This comprehensive article is currently being written by our expert team. 
                  Check back soon for in-depth insights on {post.title.toLowerCase()}.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://pixwith.ai/" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-button">
                      Try Pixwith.AI Now
                    </Button>
                  </a>
                  <Link to="/blog">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                      Browse Other Articles
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto">
          <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-gradient-secondary text-secondary-foreground">
              {post.category}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg border border-border mb-8"
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              {renderContent(content)}
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Ready to Create Your Own AI Videos?</h2>
            <p className="text-muted-foreground mb-8">
              Transform your images into stunning videos with Pixwith.AI's advanced AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://pixwith.ai/" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-button px-8 py-3">
                  Start Creating for Free
                </Button>
              </a>
              <Link to="/blog">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-3">
                  Read More Articles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;