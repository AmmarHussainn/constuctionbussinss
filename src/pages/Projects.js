import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  ArrowRight, 
  Calendar,
  MapPin,
  TrendingUp,
  Award,
  Filter,
  ChevronRight,
  Layers,
  Droplet,
  Building2,
  Eye
} from "lucide-react";

const bgImage = "./projectbanner.png";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);

  const projects = [
    {
      title: "Major Irrigation Canal System - Sindh Province",
      category: "Irrigation Infrastructure",
      description:
        "Construction of a 50km irrigation canal system serving over 10,000 acres of agricultural land, including main canals, distributaries, and water control structures.",
      status: "Completed",
      year: "2023",
      location: "Sindh Province",
      features: [
        "50km Main Canal",
        "15 Distributaries",
        "Water Control Gates",
        "Concrete Lining",
      ],
      image: "/1.png",
      icon: Droplet,
    },
    {
      title: "Small Dam Construction - Balochistan",
      category: "Water Management",
      description:
        "Development of small dam facility with 5 million cubic meter capacity for water storage and irrigation purposes in drought-prone areas.",
      status: "Completed",
      year: "2022",
      location: "Balochistan",
      image: "/2.jpg",
      features: [
        "5M Cubic Meter Capacity",
        "Spillway Construction",
        "Embankment Work",
        "Instrumentation",
      ],
      icon: Layers,
    },
    {
      title: "Urban Infrastructure Development - Hyderabad",
      category: "Infrastructure",
      description:
        "Comprehensive urban infrastructure project including road construction, drainage systems, and utility installations across multiple sectors.",
      status: "Completed",
      year: "2023",
      location: "Hyderabad",
      image: "/3.png",
      features: [
        "Road Networks",
        "Drainage Systems",
        "Utility Infrastructure",
        "Traffic Management",
      ],
      icon: Building2,
    },
    {
      title: "Canal Lining Project - Punjab",
      category: "Water Management",
      description:
        "Extensive canal lining project covering 75km of irrigation canals to reduce water losses and improve irrigation efficiency.",
      status: "In Progress",
      year: "2024",
      location: "Punjab",
      image: "/4.png",
      features: [
        "75km Canal Lining",
        "Concrete Structures",
        "Water Conservation",
        "Efficiency Improvement",
      ],
      icon: Droplet,
    },
    {
      title: "Bridge Construction - KPK Province",
      category: "Infrastructure",
      description:
        "Construction of reinforced concrete bridge spanning 200 meters over major river, connecting rural communities to urban centers.",
      status: "Completed",
      year: "2022",
      location: "KPK Province",
      image: "/5.png",
      features: [
        "200m Span Bridge",
        "Reinforced Concrete",
        "Foundation Work",
        "Safety Features",
      ],
      icon: Building2,
    },
    {
      title: "Water Treatment Facility - Karachi",
      category: "Water Management",
      description:
        "Modern water treatment plant with capacity to process 50 million gallons per day, serving industrial and residential areas.",
      status: "In Progress",
      year: "2024",
      location: "Karachi",
      image: "/6.png",
      features: [
        "50MGD Capacity",
        "Modern Technology",
        "Quality Control",
        "Environmental Compliance",
      ],
      icon: Droplet,
    },
  ];

  const filters = ["All", "Irrigation Infrastructure", "Water Management", "Infrastructure"];

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.category === activeFilter));
    }
  }, [activeFilter]);

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
  }, [filteredProjects]);

  const stats = [
    { value: "100+", label: "Projects Completed", icon: Award },
    { value: "30+", label: "Years Experience", icon: Calendar },
    { value: "50+", label: "Government Projects", icon: Building2 },
    { value: "95%", label: "Client Satisfaction", icon: TrendingUp },
  ];

  return (
    <div className="bg-white">
      <style jsx>{`
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
          transform: translateY(-12px);
        }
        
        .project-card-image {
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .project-card:hover .project-card-image {
          transform: scale(1.1);
        }
        
        .filter-btn {
          transition: all 0.3s ease;
        }
        
        .filter-btn.active {
          background: linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%);
          color: #1F2937;
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
          background: linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%);
        }
        
        .status-badge {
          backdrop-filter: blur(10px);
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
      `}</style>

      {/* HERO SECTION */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating absolute top-20 left-20 w-20 h-20 border-2 border-yellow-400 opacity-20 rounded-lg"></div>
          <div className="floating absolute top-40 right-40 w-16 h-16 border-2 border-yellow-400 opacity-30 rounded-full" style={{animationDelay: '2s'}}></div>
          <div className="floating absolute bottom-32 left-1/4 w-12 h-12 border-2 border-yellow-400 opacity-25" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="fade-in-up mb-6">
            <div className="inline-block px-4 py-2 bg-yellow-400 bg-opacity-10 border border-yellow-400 border-opacity-30 rounded-full mb-8">
              <span className="text-yellow-400 text-sm font-semibold tracking-wide">OUR PORTFOLIO</span>
            </div>
          </div>
          
          <h1 className="fade-in-up text-5xl md:text-7xl font-black text-white mb-6 leading-tight stagger-1">
            Our <span className="text-yellow-400">Projects</span>
          </h1>
          
          <p className="fade-in-up text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed stagger-2">
            Showcasing excellence through successful completion of diverse civil construction and infrastructure projects across Pakistan
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white opacity-60 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest">Explore</span>
            <ChevronRight className="rotate-90" size={20} />
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="fade-in-up text-center hover-lift" style={{animationDelay: `${i * 0.1}s`}}>
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-400 bg-opacity-10 mb-4">
                    <stat.icon className="text-yellow-400" size={28} strokeWidth={2} />
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER SECTION */}
      <section className="py-16 bg-white sticky top-0 z-40 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-3">
              <Filter className="text-gray-400" size={20} />
              <span className="text-gray-900 font-bold text-lg">Filter Projects</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {filters.map((filter, i) => (
                <button
                  key={i}
                  onClick={() => setActiveFilter(filter)}
                  className={`filter-btn px-6 py-3 rounded-full font-semibold text-sm border-2 ${
                    activeFilter === filter
                      ? 'active shadow-lg'
                      : 'border-gray-200 text-gray-700 hover:border-yellow-400 hover:text-yellow-400 bg-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {filteredProjects.map((project, i) => (
              <div
                key={i}
                className="fade-in-up project-card group"
                style={{animationDelay: `${i * 0.1}s`}}
              >
                <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover-lift">
                  {/* Image Section */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover project-card-image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>
                    
                    {/* Icon Badge */}
                    <div className="absolute top-6 left-6">
                      <div className="w-14 h-14 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <project.icon className="text-gray-900" size={28} strokeWidth={2.5} />
                      </div>
                    </div>
                    
                    {/* Status & Year */}
                    <div className="absolute top-6 right-6 flex flex-col gap-2">
                      <span className={`status-badge px-4 py-2 rounded-full text-xs font-bold ${
                        project.status === "Completed"
                          ? "bg-green-500 text-white"
                          : "bg-yellow-400 text-gray-900"
                      }`}>
                        {project.status}
                      </span>
                      <span className="status-badge bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold border border-white/30">
                        {project.year}
                      </span>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute bottom-6 left-6">
                      <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/30 rounded-full text-white text-sm font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8">
                    {/* Location */}
                    <div className="flex items-center gap-2 text-yellow-400 mb-4">
                      <MapPin size={18} strokeWidth={2} />
                      <span className="text-sm font-semibold">{project.location}</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-black text-gray-900 mb-4 leading-tight group-hover:text-yellow-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    {/* Features Grid */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Project Highlights</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {project.features.map((feature, fi) => (
                          <div key={fi} className="flex items-start gap-2">
                            <div className="flex-shrink-0 w-5 h-5 bg-yellow-400 bg-opacity-20 rounded-full flex items-center justify-center mt-0.5">
                              <CheckCircle className="text-yellow-400" size={14} strokeWidth={3} />
                            </div>
                            <span className="text-sm text-gray-700 font-medium leading-tight">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <button className="group/btn w-full py-4 bg-gray-50 hover:bg-yellow-400 text-gray-900 rounded-2xl font-bold flex items-center justify-center gap-2 hover:gap-3 transition-all duration-300">
                      <Eye size={20} strokeWidth={2.5} />
                      View Details
                      <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={18} strokeWidth={2.5} />
                    </button>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            ))}
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
              <span className="text-yellow-400 text-sm font-semibold tracking-wide">LET'S COLLABORATE</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Have a Project in Mind?
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how we can bring your construction project to life with our expertise and experience
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
             
              <Link
                to="/Contact"
                className="px-10 py-5 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-2xl"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;