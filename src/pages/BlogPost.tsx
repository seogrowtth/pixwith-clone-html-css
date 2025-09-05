import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { blogContent } from "@/data/blogContent";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

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
    }
  };

  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;
  const content = slug ? blogContent[slug as keyof typeof blogContent] : null;

  if (!post || !content) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-32 pb-20 px-6 text-center">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-6">Blog Post Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The blog post you're looking for doesn't exist or is still being written.
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
            <div 
              className="prose prose-lg prose-invert max-w-none text-card-foreground"
              style={{
                lineHeight: '1.7',
                color: 'hsl(var(--card-foreground))'
              }}
              dangerouslySetInnerHTML={{ 
                __html: content.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br/>').replace(/^/, '<p>').replace(/$/, '</p>')
                  .replace(/<p># /g, '<h1 class="text-3xl font-bold gradient-text mb-6 mt-12">')
                  .replace(/<\/h1><\/p>/g, '</h1>')
                  .replace(/<p>## /g, '<h2 class="text-2xl font-semibold gradient-text mb-4 mt-10">')
                  .replace(/<\/h2><\/p>/g, '</h2>')
                  .replace(/<p>### /g, '<h3 class="text-xl font-semibold mb-3 mt-8">')
                  .replace(/<\/h3><\/p>/g, '</h3>')
                  .replace(/<p>\*\*(.*?)\*\*:/g, '<p><strong class="text-primary">$1:</strong>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em>$1</em>')
              }} 
            />
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