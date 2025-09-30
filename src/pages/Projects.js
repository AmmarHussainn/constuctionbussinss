import React, { useEffect, useState } from "react";
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
  DollarSign,
  Users,
  Clock,
  Briefcase,
  Target,
  FileText
} from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      serialNo: "01",
      title: "Construction of Link Road from Mehran Hotel to Allah Dino Chandio Pump",
      category: "Infrastructure",
      client: "Irrigation Department, Government of Sindh",
      cost: "Rs. 41,300,000/-",
      duration: "2010-2011",
      location: "Sindh",
      status: "Completed",
      icon: Building2,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      serialNo: "02",
      title: "Widening of Ferozabad Road",
      category: "Infrastructure",
      client: "Provincial Highway Sukkur, Government of Sindh",
      cost: "Rs. 17,000,000/-",
      duration: "2011-2012",
      location: "Sukkur, Sindh",
      status: "Completed",
      icon: Building2,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      serialNo: "03",
      title: "Construction of Link Road from Mehran Hotel to Khairpur Road Bridge",
      category: "Infrastructure",
      client: "Provincial Highway Sukkur, Government of Sindh",
      cost: "Rs. 65,000,000/-",
      duration: "2011-2012",
      location: "Sukkur, Sindh",
      status: "Completed",
      icon: Building2,
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 4,
      serialNo: "04",
      title: "Re-Sectioning, Lining & C/W of Taluka Minor",
      category: "Water Management",
      client: "Irrigation Department, Government of Sindh",
      cost: "Rs. 102,000,000/-",
      duration: "2012-2013",
      location: "Sindh",
      status: "Completed",
      icon: Droplet,
      gradient: "from-teal-500 to-green-500"
    },
    {
      id: 5,
      serialNo: "05",
      title: "Lining of Pangrio Branch Canals (RD 10000 to 17000)",
      category: "Irrigation Infrastructure",
      client: "Irrigation Department, Government of Sindh",
      cost: "Rs. 85,130,000/-",
      duration: "2013-2014",
      location: "Pangrio, Sindh",
      status: "Completed",
      icon: Droplet,
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      id: 6,
      serialNo: "06",
      title: "Lining of Pangrio Branch Canals (RD 17000 to 24000)",
      category: "Irrigation Infrastructure",
      client: "Irrigation Department, Government of Sindh",
      cost: "Rs. 86,300,000/-",
      duration: "2013-2014",
      location: "Pangrio, Sindh",
      status: "Completed",
      icon: Droplet,
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      id: 7,
      serialNo: "07",
      title: "C/W of Bhagat Dodo Pump",
      category: "Water Management",
      client: "Irrigation Department, Government of Sindh",
      cost: "Rs. 33,580,000/-",
      duration: "2014-2015",
      location: "Sindh",
      status: "Completed",
      icon: Layers,
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      id: 8,
      serialNo: "08",
      title: "Improvement in Canal Lining (Akram Wah + Jamrao Branch)",
      category: "Irrigation Infrastructure",
      client: "Irrigation Department, Government of Sindh",
      cost: "Rs. 116,290,000/-",
      duration: "2019-2020",
      location: "Sindh",
      status: "Completed",
      icon: Droplet,
      gradient: "from-violet-500 to-purple-500"
    },
    {
      id: 9,
      serialNo: "09",
      title: "Improvement of Canal Lining (Akram Wah RD 10000 to 19000)",
      category: "Irrigation Infrastructure",
      client: "Irrigation Department, Government of Sindh",
      cost: "Rs. 104,140,000/-",
      duration: "2018-2019",
      location: "Sindh",
      status: "Completed",
      icon: Droplet,
      gradient: "from-pink-500 to-rose-500"
    },
    {
      id: 10,
      serialNo: "10",
      title: "Improvement in Canal Lining (Akram Wah + Jamrao Branch + Rohri Canal)",
      category: "Irrigation Infrastructure",
      client: "Irrigation Department, Government of Sindh",
      cost: "Rs. 111,000,000/-",
      duration: "2019-2020",
      location: "Sindh",
      status: "Completed",
      icon: Droplet,
      gradient: "from-amber-500 to-orange-500"
    },
    {
      id: 11,
      serialNo: "11",
      title: "Lining Improvement (Akram Wah RD 0 to 10000)",
      category: "Irrigation Infrastructure",
      client: "Irrigation Department, Government of Sindh",
      cost: "Rs. 113,430,000/-",
      duration: "2019-2020",
      location: "Sindh",
      status: "Completed",
      icon: Droplet,
      gradient: "from-lime-500 to-green-500"
    },
    {
      id: 12,
      serialNo: "12",
      title: "Lining Improvement (Akram Wah + Rohri Canal)",
      category: "Irrigation Infrastructure",
      client: "Irrigation Department, Government of Sindh",
      cost: "Rs. 103,280,000/-",
      duration: "2020-2021",
      location: "Sindh",
      status: "Completed",
      icon: Droplet,
      gradient: "from-sky-500 to-blue-500"
    },
  ];

  const filters = ["All", "Infrastructure", "Water Management", "Irrigation Infrastructure"];

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

  // Calculate total project value
  const totalValue = projects.reduce((sum, p) => {
    const value = parseInt(p.cost.replace(/[^0-9]/g, ''));
    return sum + value;
  }, 0);

  const stats = [
    { value: "12", label: "Major Projects", icon: Award },
    { value: `Rs. ${(totalValue / 100000000).toFixed(1)}B`, label: "Total Value", icon: DollarSign },
    { value: "2", label: "Key Clients", icon: Briefcase },
    { value: "100%", label: "Success Rate", icon: TrendingUp },
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
          transform: translateY(-8px);
        }
        
        .filter-btn {
          transition: all 0.3s ease;
        }
        
        .filter-btn.active {
          background: linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%);
          color: #1F2937;
          box-shadow: 0 4px 15px rgba(251, 191, 36, 0.4);
        }
        
        .section-padding {
          padding: 120px 0;
        }
        
        @media (max-width: 768px) {
          .section-padding {
            padding: 80px 0;
          }
        }
        
        .hero-gradient {
          background: linear-gradient(135deg, #1F2937 0%, #374151 50%, #1F2937 100%);
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
        
        .project-number {
          font-size: 120px;
          font-weight: 900;
          line-height: 1;
          opacity: 0.05;
          position: absolute;
          top: -20px;
          right: 20px;
        }
        
        .gradient-border {
          position: relative;
        }
        
        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(135deg, #FBBF24, #F59E0B);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .gradient-border:hover::before {
          opacity: 1;
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden hero-gradient">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(251, 191, 36, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 191, 36, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating absolute top-20 left-20 w-20 h-20 border-2 border-yellow-400 opacity-20 rounded-lg"></div>
          <div className="floating absolute top-40 right-40 w-16 h-16 border-2 border-yellow-400 opacity-30 rounded-full" style={{animationDelay: '2s'}}></div>
          <div className="floating absolute bottom-32 left-1/4 w-12 h-12 border-2 border-yellow-400 opacity-25" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="fade-in-up mb-6">
            <div className="inline-block px-4 py-2 bg-yellow-400 bg-opacity-10 border border-yellow-400 border-opacity-30 rounded-full mb-8">
              <span className="text-yellow-400 text-sm font-semibold tracking-wide">GENERAL EXPERIENCE</span>
            </div>
          </div>
          
          <h1 className="fade-in-up text-5xl md:text-7xl font-black text-white mb-6 leading-tight stagger-1">
            Project <span className="text-yellow-400">Portfolio</span>
          </h1>
          
          <p className="fade-in-up text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed stagger-2">
            M/S HBAS & CO - Comprehensive showcase of successfully completed government projects across Sindh Province
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white opacity-60 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest">Scroll Down</span>
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
                  <div className="text-3xl md:text-4xl font-black text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER SECTION */}
      <section className="py-16 bg-white sticky top-0 z-40 border-b border-gray-100 shadow-sm backdrop-blur-lg bg-white bg-opacity-95">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-3">
              <Filter className="text-gray-400" size={20} />
              <span className="text-gray-900 font-bold text-lg">Filter by Category</span>
              <span className="px-3 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold">
                {filteredProjects.length}
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {filters.map((filter, i) => (
                <button
                  key={i}
                  onClick={() => setActiveFilter(filter)}
                  className={`filter-btn px-6 py-3 rounded-full font-semibold text-sm border-2 ${
                    activeFilter === filter
                      ? 'active'
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

      {/* PROJECTS LIST */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-6">
            {filteredProjects.map((project, i) => (
              <div
                key={project.id}
                className="fade-in-up group"
                style={{animationDelay: `${i * 0.05}s`}}
              >
                <div className="relative gradient-border bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover-lift">
                  {/* Large background number */}
                  <div className={`project-number bg-gradient-to-br ${project.gradient} bg-clip-text text-transparent`}>
                    {project.serialNo}
                  </div>
                  
                  <div className="relative z-10 p-8">
                    <div className="grid md:grid-cols-12 gap-6 items-center">
                      {/* Serial Number & Icon */}
                      <div className="md:col-span-2 flex md:flex-col items-center gap-4">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                          <project.icon className="text-white" size={36} strokeWidth={2.5} />
                        </div>
                        <div className="text-center">
                          <div className="text-4xl font-black text-gray-900">{project.serialNo}</div>
                          <div className="text-xs text-gray-500 font-semibold mt-1">Project</div>
                        </div>
                      </div>
                      
                      {/* Project Details */}
                      <div className="md:col-span-6">
                        <div className="mb-3">
                          <span className="inline-block px-3 py-1 bg-yellow-400 bg-opacity-10 text-yellow-600 rounded-full text-xs font-bold mb-3">
                            {project.category}
                          </span>
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-4 leading-tight group-hover:text-yellow-400 transition-colors">
                          {project.title}
                        </h3>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 text-gray-600">
                            <Briefcase size={16} className="text-gray-400" />
                            <span className="text-sm font-medium">{project.client}</span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-600">
                            <MapPin size={16} className="text-gray-400" />
                            <span className="text-sm font-medium">{project.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Financial & Timeline Info */}
                      <div className="md:col-span-4 space-y-4">
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                              <DollarSign className="text-green-600" size={20} strokeWidth={2.5} />
                            </div>
                            <div>
                              <div className="text-xs text-gray-500 font-medium">Project Value</div>
                              <div className="text-lg font-black text-gray-900">{project.cost}</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3 pt-3 border-t border-gray-200">
                            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                              <Calendar className="text-blue-600" size={20} strokeWidth={2.5} />
                            </div>
                            <div>
                              <div className="text-xs text-gray-500 font-medium">Duration</div>
                              <div className="text-base font-bold text-gray-900">{project.duration}</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-center gap-2 px-4 py-3 bg-green-50 border border-green-200 rounded-xl">
                          <CheckCircle className="text-green-600" size={20} strokeWidth={2.5} />
                          <span className="text-green-700 font-bold text-sm">{project.status}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className={`h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT SUMMARY */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Project <span className="text-yellow-400">Summary</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive overview of our expertise across multiple sectors
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Infrastructure */}
            <div className="fade-in-up bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <Building2 className="text-white" size={32} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Infrastructure</h3>
              <div className="text-4xl font-black text-gray-900 mb-2">
                {projects.filter(p => p.category === "Infrastructure").length}
              </div>
              <p className="text-gray-600 mb-4">Major Projects</p>
              <div className="text-sm text-gray-500">
                Road construction, widening, and link road development projects
              </div>
            </div>
            
            {/* Water Management */}
            <div className="fade-in-up bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover-lift stagger-1">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl flex items-center justify-center mb-6">
                <Layers className="text-white" size={32} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Water Management</h3>
              <div className="text-4xl font-black text-gray-900 mb-2">
                {projects.filter(p => p.category === "Water Management").length}
              </div>
              <p className="text-gray-600 mb-4">Major Projects</p>
              <div className="text-sm text-gray-500">
                Pump construction, re-sectioning, and civil works
              </div>
            </div>
            
            {/* Irrigation */}
            <div className="fade-in-up bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover-lift stagger-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <Droplet className="text-white" size={32} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Irrigation Infrastructure</h3>
              <div className="text-4xl font-black text-gray-900 mb-2">
                {projects.filter(p => p.category === "Irrigation Infrastructure").length}
              </div>
              <p className="text-gray-600 mb-4">Major Projects</p>
              <div className="text-sm text-gray-500">
                Canal lining, improvement, and irrigation system development
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
              <span className="text-yellow-400 text-sm font-semibold tracking-wide">GET IN TOUCH</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Ready to Start Your Project?
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              With a proven track record of Rs. {(totalValue / 100000000).toFixed(1)}B+ in successfully completed government projects, we're ready to deliver excellence for your next infrastructure initiative
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group px-10 py-5 bg-yellow-400 text-gray-900 rounded-full font-bold text-lg hover:bg-yellow-500 transition-all duration-300 flex items-center justify-center gap-3 hover:gap-4 shadow-2xl hover:shadow-yellow-400/50">
                Contact Us Today
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
              </button>
              <button className="px-10 py-5 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-2xl flex items-center justify-center gap-2">
                <FileText size={22} />
                Download Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;