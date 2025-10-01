import React, { useEffect, useState } from "react";
import { 
  CheckCircle, 
  ArrowRight,
  Droplet,
  Building2,
  Layers,
  Shield,
  Users,
  TrendingUp,
  Award,
  Target,
  Zap,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

const bgImage = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80";

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      title: "Irrigation Systems Development",
      description:
        "Complete design and construction of irrigation infrastructure including canals, water channels, distribution networks, and modern irrigation systems to enhance agricultural productivity.",
      features: [
        "Canal Construction",
        "Water Distribution Systems",
        "Drip Irrigation",
       
        "Drainage Solutions",
      ],
      icon: Droplet,
    },
    {
      title: "Water Management Solutions",
      description:
        "Comprehensive water management projects including dams, reservoirs, water treatment facilities, and flood control systems to ensure sustainable water resource utilization.",
      features: [
        "Dam Construction",
        "Reservoir Development",
        "Flood Control",
        "Water Treatment Plants",
        "Pumping Stations",
      ],
      icon: Layers,
    },
    {
      title: "Infrastructure Development",
      description:
        "Large-scale infrastructure projects encompassing roads, bridges, culverts, and civil structures that form the backbone of modern development.",
      features: [
        "Road Construction",
        "Bridge Building",
        "Culvert Installation",
        "Civil Structures",
        "Urban Infrastructure",
      ],
      icon: Building2,
    },
    {
      title: "Lining & Waterproofing",
      description:
        "Specialized services in canal lining, water channel protection, and waterproofing solutions to prevent water loss and ensure structural integrity.",
      features: [
        "Canal Lining",
        "Concrete Lining",
        "Waterproof Membranes",
        "Structural Protection",
        "Seepage Control",
      ],
      icon: Shield,
    },
    {
      title: "Government Contracting",
      description:
        "Trusted partner for government projects with proven track record in delivering public sector infrastructure projects on time and within budget.",
      features: [
        "Public Sector Projects",
        "Government Tenders",
        "Compliance Management",
        "Quality Assurance",
        "Timely Delivery",
      ],
      icon: Award,
    },
    {
      title: "Project Management",
      description:
        "End-to-end project management services ensuring efficient execution, quality control, and timely completion of construction projects of all scales.",
      features: [
        "Project Planning",
        "Quality Control",
        "Resource Management",
        "Timeline Management",
        "Risk Assessment",
      ],
      icon: Target,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in-up").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);



  return (
    <div className="bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        .fade-in-up {
          opacity: 0;
          transform: translateY(60px);
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .fade-in-up.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .hover-lift {
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-8px);
        }
        
        .service-card {
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(251, 191, 36, 0.03) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        
        .service-card:hover::before {
          opacity: 1;
        }
        
        .service-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
        }
        
        .icon-wrapper {
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .service-card:hover .icon-wrapper {
          transform: scale(1.1) rotate(5deg);
        }
        
        .feature-item {
          transition: all 0.3s ease;
        }
        
        .feature-item:hover {
          transform: translateX(8px);
        }
        
        .section-padding {
          padding: 120px 0;
        }
        
        @media (max-width: 768px) {
          .section-padding {
            padding: 80px 0;
          }
        }
        
        .hero-overlay {
          background: linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 100%);
        }
        
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        
        .floating {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .stat-card {
          position: relative;
          overflow: hidden;
        }
        
        .stat-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, transparent 0%, rgba(251, 191, 36, 0.1) 100%);
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        
        .stat-card:hover::after {
          opacity: 1;
        }
      `}</style>

      {/* HERO SECTION */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
        
       

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="fade-in-up mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 bg-opacity-10 border border-yellow-400 border-opacity-30 rounded-full mb-8">
              <Sparkles className="text-yellow-400" size={16} />
              <span className="text-yellow-400 text-sm font-semibold tracking-wide">WHAT WE OFFER</span>
            </div>
          </div>
          
          <h1 className="fade-in-up text-5xl md:text-7xl font-black text-white mb-6 leading-tight stagger-1">
            Our <span className="gradient-text">Services</span>
          </h1>
          
          <p className="fade-in-up text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed stagger-2">
            Comprehensive civil construction and infrastructure development services tailored to meet the diverse needs of our clients
          </p>
        </div>

      
      </section>

      {/* STATS SECTION */}
    

      {/* SERVICES SECTION */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-block px-4 py-2 bg-yellow-400 bg-opacity-10 border border-yellow-400 border-opacity-30 rounded-full mb-6">
              <span className="text-yellow-400 text-sm font-semibold tracking-wide">OUR EXPERTISE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Premium <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Delivering excellence across multiple construction domains with precision and reliability
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="fade-in-up service-card bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
                style={{animationDelay: `${i * 0.1}s`}}
                onMouseEnter={() => setActiveService(i)}
                onMouseLeave={() => setActiveService(null)}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="icon-wrapper inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-lg">
                    <service.icon className="text-white" size={30} strokeWidth={2} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-gray-900 mb-4 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, fi) => (
                    <div key={fi} className="feature-item flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-yellow-400 bg-opacity-20 rounded-full flex items-center justify-center mt-0.5">
                        <CheckCircle className="text-yellow-400" size={14} strokeWidth={3} />
                      </div>
                      <span className="text-sm text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="group/btn w-full py-3 bg-gray-50 hover:bg-yellow-400 text-gray-900 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300">
                  <span className="text-sm">Learn More</span>
                  <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={16} strokeWidth={2.5} />
                </button>

                {/* Accent Line */}
                <div className="h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mt-8 rounded-full transform scale-x-0 origin-left transition-transform duration-500" 
                     style={{transform: activeService === i ? 'scaleX(1)' : 'scaleX(0)'}}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="fade-in-up">
              <div className="inline-block px-4 py-2 bg-yellow-400 bg-opacity-10 border border-yellow-400 border-opacity-30 rounded-full mb-6">
                <span className="text-yellow-400 text-sm font-semibold tracking-wide">WHY US</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Building Excellence, <span className="gradient-text">One Project at a Time</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over 25 years of experience in civil construction and infrastructure development, we have established ourselves as a trusted partner for projects of all scales.
              </p>
              <div className="space-y-4">
                {[
                  "Proven track record of 100+ successful projects",
                  "Certified professionals and modern equipment",
                  "Commitment to quality and timely delivery",
                  "Sustainable and eco-friendly practices"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 fade-in-up" style={{animationDelay: `${i * 0.1}s`}}>
                    <div className="flex-shrink-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="text-white" size={16} strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image/Stats Grid */}
            <div className="fade-in-up grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white hover-lift">
                <Award className="text-yellow-400 mb-4" size={32} />
                <div className="text-4xl font-black mb-2">ISO</div>
                <div className="text-sm text-gray-300">Certified Quality</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl p-8 text-white hover-lift">
                <Users className="mb-4" size={32} />
                <div className="text-4xl font-black mb-2">500+</div>
                <div className="text-sm">Team Members</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl p-8 text-white hover-lift ">
                <Target className="mb-4" size={32} />
                <div className="text-4xl font-black mb-2">100%</div>
                <div className="text-sm">Client Focus</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white hover-lift">
                <TrendingUp className="text-yellow-400 mb-4" size={32} />
                <div className="text-4xl font-black mb-2">24/7</div>
                <div className="text-sm text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,_#FBBF24_0%,_transparent_50%)]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_50%,_#F59E0B_0%,_transparent_50%)]"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="fade-in-up">
            <div className="inline-block px-4 py-2 bg-yellow-400 bg-opacity-10 border border-yellow-400 border-opacity-30 rounded-full mb-8">
              <span className="text-yellow-400 text-sm font-semibold tracking-wide">GET STARTED</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Ready to Start Your Project?
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Contact us today to discuss your construction and infrastructure development needs. Let's build something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
               to="/Contact"
              className="group px-10 py-5 bg-yellow-400 text-gray-900 rounded-full font-bold text-lg hover:bg-yellow-500 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/50 inline-flex items-center justify-center gap-2">
                Contact Us
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link 
               to="/Projects"
              className="px-10 py-5 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;