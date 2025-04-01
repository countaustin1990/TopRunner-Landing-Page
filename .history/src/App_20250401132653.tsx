import  { ArrowRight, BarChart2, Calendar, Check, ChevronRight, Clock, Database, FileText, Rocket, Search } from 'lucide-react';
import Navbar from './components/Navbar';
import FloatingCard from './components/FloatingCard.test';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative px-4 pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden">
          {/* Floating Card for SEO Score */}
          <FloatingCard 
            className="absolute top-40 -left-10 md:left-20 lg:left-40 z-10 floating-card"
            title="SEO Content Score"
            content={
              <div className="flex items-center justify-center">
                <div className="relative w-24 h-24">
                  <svg className="w-24 h-24 circular-progress">
                    <circle cx="48" cy="48" r="36" stroke="#e2e8f0" strokeWidth="6" fill="none" />
                    <circle cx="48" cy="48" r="36" stroke="#10b981" strokeWidth="6" fill="none" 
                      strokeDasharray="226" 
                      strokeDashoffset="7" 
                      strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-800">
                    97%
                  </div>
                </div>
              </div>
            }
          />
          
          {/* Floating Card for Keywords */}
          <FloatingCard 
            className="absolute -bottom-5 -left-10 md:left-12 z-10 floating-card floating-card-delay-1"
            title="Power keywords"
            content={
              <div className="flex flex-col gap-2">
                <div className="bg-purple-100/80 text-purple-800 px-3 py-1 rounded-full text-xs">content marketing</div>
                <div className="bg-blue-100/80 text-blue-800 px-3 py-1 rounded-full text-xs">SEO automation</div>
              </div>
            }
          />
          
          {/* Floating Card for Publishing */}
          <FloatingCard 
            className="absolute -right-10 top-60 md:right-20 lg:right-40 z-10 floating-card floating-card-delay-2"
            title="SEO Analytics"
            content={
              <div className="flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1556155092-8707de31f9c4?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxzZW8lMjBhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBncmFwaCUyMGNoYXJ0JTIwc2NvcmV8ZW58MHx8fHwxNzQzNDkzMTM5fDA&ixlib=rb-4.0.3&fit=fillmax&h=400&w=500" 
                  alt="SEO analytics on phone" 
                  className="w-20 h-20 rounded-lg object-cover"
                />
              </div>
            }
          />
          
          {/* Floating Card for Blog Posts */}
          <FloatingCard 
            className="absolute bottom-10 right-5 md:right-32 z-10 floating-card"
            title="How to write blog posts"
            content={
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">Theme:</span>
                  <span className="text-xs font-medium">SEO</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">Difficulty:</span>
                  <span className="text-xs font-medium">Medium</span>
                </div>
                <button className="w-full bg-violet-600/90 hover:bg-violet-600 text-white text-xs py-1 rounded mt-2 transition-colors">
                  View Article
                </button>
              </div>
            }
          />
          
          <div className="container mx-auto max-w-6xl relative z-0">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                Grow Organic Traffic <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-500">on Auto-Pilot</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Get traffic and outrank competitors with TopRunner's automatic SEO-optimized content generation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Start for Free <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="btn-secondary">
                  <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mr-2" />
                  Join with Google
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How it works</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our AI-powered platform automates your content creation with SEO optimization at its core.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: <Search className="w-6 h-6 text-violet-600" />, 
                  title: "Keyword Analysis", 
                  description: "Our AI identifies high-performing keywords in your niche with low competition."
                },
                { 
                  icon: <FileText className="w-6 h-6 text-violet-600" />, 
                  title: "Content Generation", 
                  description: "Generate SEO-optimized content automatically based on your industry and target audience."
                },
                { 
                  icon: <BarChart2 className="w-6 h-6 text-violet-600" />, 
                  title: "Performance Tracking", 
                  description: "Monitor your content performance and search rankings in real-time."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all">
                  <div className="bg-violet-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <a href="#learn-more" className="text-violet-600 font-medium flex items-center justify-center hover:text-violet-700">
                Learn more about our technology
                <ChevronRight className="ml-1 w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section with Updated Image */}
        <section className="py-20 bg-gradient-to-br from-violet-50 to-purple-100 relative">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why choose TopRunner</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Save time and resources while growing your organic traffic with our automated solution.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { 
                  icon: <Clock className="w-5 h-5 text-violet-600" />,
                  title: "Save 20+ hours per week", 
                  description: "Automate content creation and optimization tasks that normally take days."
                },
                { 
                  icon: <Rocket className="w-5 h-5 text-violet-600" />,
                  title: "Increase organic traffic by 300%", 
                  description: "Our clients see significant traffic growth within the first 3 months."
                },
                { 
                  icon: <Database className="w-5 h-5 text-violet-600" />,
                  title: "Data-driven strategy", 
                  description: "Every piece of content is backed by data and optimized for performance."
                },
                { 
                  icon: <Calendar className="w-5 h-5 text-violet-600" />,
                  title: "Consistent publishing", 
                  description: "Maintain a regular content schedule without manual effort."
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/40 shadow-sm hover:shadow-md transition-all flex items-start">
                  <div className="bg-violet-100 rounded-lg w-10 h-10 flex items-center justify-center mr-4 shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1639389016237-85a1a16f76d0?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxzZW8lMjBhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBncmFwaCUyMGNoYXJ0JTIwc2NvcmV8ZW58MHx8fHwxNzQzNDkzMTM5fDA&ixlib=rb-4.0.3&fit=fillmax&h=600&w=800" 
                  alt="SEO analytics dashboard" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Real-time analytics at your fingertips</h3>
                <p className="text-gray-600">
                  Track your content performance, keyword rankings, and traffic growth with our intuitive dashboard. Get actionable insights to continuously improve your SEO strategy.
                </p>
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Weekly traffic growth</span>
                    <span className="text-green-500 font-bold">+28%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white relative">
          <div className="absolute inset-0 opacity-20" style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1556155092-490a1ba16284?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxzZW8lMjBhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBncmFwaCUyMGNoYXJ0JTIwc2NvcmV8ZW58MHx8fHwxNzQzNDkzMTM5fDA&ixlib=rb-4.0.3&fit=fillmax&h=600&w=800)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center' 
          }}></div>
          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to grow your organic traffic?</h2>
              <p className="text-lg text-gray-300 mb-8">Join thousands of businesses that are already growing with TopRunner</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-full font-semibold transition-all">
                  Start for Free
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full font-semibold transition-all">
                  Schedule a Demo
                </button>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8">
                <div className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-violet-400 mr-2" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-violet-400 mr-2" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-violet-400 mr-2" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-50 py-12 border-t border-gray-200">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-violet-600">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-violet-600">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-violet-600">Integrations</a></li>
                <li><a href="#" className="text-gray-600 hover:text-violet-600">Enterprise</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-violet-600">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-violet-600">Documentation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-violet-600">Guides</a></li>
                <li><a href="#" className="text-gray-600 hover:text-violet-600">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-violet-600">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-violet-600">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-violet-600">Contact</a></li>
                <li><a href="#" className="text-gray-600 hover:text-violet-600">Partners</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-violet-600">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-violet-600">Terms of Service</a></li>
                <li><a href="#" className="text-gray-600 hover:text-violet-600">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-violet-600">GDPR</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Rocket className="w-6 h-6 text-violet-600 mr-2" />
              <span className="font-semibold text-gray-900">TopRunner</span>
            </div>
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} TopRunner. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
 