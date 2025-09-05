import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "The Complete Guide to AI Video Generation in 2025",
    excerpt: "Everything you need to know about transforming static images into dynamic videos using artificial intelligence. From basic concepts to advanced techniques.",
    author: "Sarah Chen",
    date: "March 15, 2025",
    readTime: "8 min read",
    category: "Guide",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop"
  };

  const blogPosts = [
    {
      title: "5 Creative Ways to Use AI Video Generation for Marketing",
      excerpt: "Discover innovative marketing strategies using AI-generated videos that boost engagement and drive conversions.",
      author: "Mark Rodriguez", 
      date: "March 12, 2025",
      readTime: "5 min read",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop"
    },
    {
      title: "Technical Deep Dive: How Neural Networks Create Motion",
      excerpt: "An in-depth look at the machine learning algorithms powering modern image-to-video AI technology.",
      author: "Dr. Alex Kim",
      date: "March 10, 2025", 
      readTime: "12 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop"
    },
    {
      title: "Case Study: How TechCorp Increased Engagement by 300%",
      excerpt: "Learn how one company transformed their social media strategy using AI-generated video content.",
      author: "Jennifer Walsh",
      date: "March 8, 2025",
      readTime: "6 min read", 
      category: "Case Study",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    },
    {
      title: "The Future of Content Creation: Trends to Watch",
      excerpt: "Explore emerging trends in AI-powered content creation and what they mean for creators and businesses.",
      author: "Michael Park",
      date: "March 5, 2025",
      readTime: "7 min read",
      category: "Trends",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop"
    },
    {
      title: "Best Practices: Optimizing Images for AI Video Generation",
      excerpt: "Professional tips for preparing your images to get the best results from AI video generation tools.",
      author: "Lisa Thompson",
      date: "March 3, 2025",
      readTime: "4 min read",
      category: "Tutorial",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=250&fit=crop"
    },
    {
      title: "Industry Analysis: AI Video Tools Market Report 2025",
      excerpt: "Comprehensive analysis of the AI video generation market, key players, and growth projections.",
      author: "Robert Chen",
      date: "March 1, 2025",
      readTime: "10 min read",
      category: "Analysis",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    }
  ];

  const categories = ["All", "Guide", "Marketing", "Technology", "Case Study", "Trends", "Tutorial", "Analysis"];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Blogs
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Insights, tutorials, and industry news about AI-powered video generation technology
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant={category === "All" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Recent Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden bg-card/80 border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                    {post.category}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary/80">
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Get the latest insights on AI video generation, industry trends, and exclusive tutorials 
              delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90 px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;