import React, { useEffect, useState, useRef } from "react";
import {
  CheckCircle,
  Award,
  Users,
  Calendar,
  ArrowRight,
  Play,
  Pause,
  TrendingUp,
  Shield,
  Target,
  Zap,
  Box,
  Layers,
  Globe,
  Star,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const bgVideo = "./loop.mp4";
const bgImage1 = "./1.png";
const bgImage2 = "./3.png";
const bgImage4 = "./2.jpg";
const bgImage3 = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const stats = [
    { number: "30+", label: "Years Experience", icon: Calendar },
    { number: "500+", label: "Projects Completed", icon: CheckCircle },
    { number: "50+", label: "Expert Team", icon: Users },
    { number: "98%", label: "Client Satisfaction", icon: Award },
  ];

  const services = [
    {
      icon: Layers,
      title: "Irrigation Systems",
      desc: "Advanced irrigation infrastructure designed for maximum water efficiency and agricultural productivity enhancement.",
      img: bgImage1,
      features: ["Canal Construction", "Drainage Systems", "Water Distribution"]
    },
    {
      icon: Globe,
      title: "Water Management",
      desc: "Comprehensive water management solutions including canals, reservoirs, and distribution systems.",
      img: bgImage2,
      features: ["Reservoir Development", "Canal Lining", "Flow Control"]
    },
    {
      icon: Box,
      title: "Infrastructure Development",
      desc: "Large-scale infrastructure projects including bridges, roads, and comprehensive urban development.",
      img: bgImage3,
      features: ["Bridge Construction", "Road Development", "Urban Planning"]
    },
  ];

  const coreValues = [
    {
      icon: Shield,
      title: "Integrity",
      desc: "Honesty and transparency in all our business dealings and partnerships."
    },
    {
      icon: Target,
      title: "Excellence",
      desc: "Maintaining the highest quality standards in every project we undertake."
    },
    {
      icon: Zap,
      title: "Innovation",
      desc: "Embracing modern techniques and sustainable construction practices."
    },
    {
      icon: CheckCircle,
      title: "Safety",
      desc: "Implementing comprehensive safety standards across all operations."
    },
  ];

  return (
    <div className="bg-white text-gray-900 overflow-hidden">
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
        
        .glass-morphism {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
        }
        
        .hover-scale {
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .hover-scale:hover {
          transform: scale(1.05);
        }
        
        .hover-lift {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-12px);
        }
        
        .gradient-border {
          position: relative;
          background: white;
        }
        
        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(135deg, #FBBF24, #F59E0B, #FBBF24);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .gradient-border:hover::before {
          opacity: 1;
        }
        
        .accent-line {
          position: relative;
          padding-left: 20px;
        }
        
        .accent-line::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 100%;
          background: linear-gradient(to bottom, #FBBF24, #F59E0B);
          border-radius: 2px;
        }
        
        .parallax-slow {
          transform: translateY(${scrollY * 0.5}px);
        }
        
        .parallax-fast {
          transform: translateY(${scrollY * -0.3}px);
        }
        
        .section-padding {
          padding: 120px 0;
        }
        
        @media (max-width: 768px) {
          .section-padding {
            padding: 80px 0;
          }
        }
        
        .video-overlay {
          background: linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.5) 100%);
        }
        
        .number-gradient {
          background: linear-gradient(135deg, #1F2937 0%, #374151 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .feature-icon {
          background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%);
        }
        
        .leadership-image {
          position: relative;
          overflow: hidden;
        }
        
        .leadership-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(245, 158, 11, 0.1) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .leadership-image:hover::after {
          opacity: 1;
        }
        
        .animated-border {
          position: relative;
        }
        
        .animated-border::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(to right, #FBBF24, #F59E0B);
          transition: width 0.4s ease;
        }
        
        .animated-border:hover::after {
          width: 100%;
        }
        
        .project-card-overlay {
          background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.9) 100%);
        }
        
        .floating-element {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        
        <div className="absolute inset-0 video-overlay" />
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-element absolute top-20 left-20 w-20 h-20 border-2 border-yellow-400 opacity-20 rounded-lg"></div>
          <div className="floating-element absolute top-40 right-40 w-16 h-16 border-2 border-yellow-400 opacity-30 rounded-full stagger-2"></div>
          <div className="floating-element absolute bottom-32 left-1/4 w-12 h-12 border-2 border-yellow-400 opacity-25 stagger-3"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="fade-in-up mb-6">
            <div className="inline-block px-4 py-2 bg-yellow-400 bg-opacity-10 border border-yellow-400 border-opacity-30 rounded-full mb-8">
              <span className="text-yellow-400 text-sm font-semibold tracking-wide">EXCELLENCE IN CIVIL CONSTRUCTION</span>
            </div>
          </div>
          
          <h1 className="fade-in-up text-5xl md:text-8xl font-black text-white mb-6 leading-tight tracking-tight stagger-1">
            M/S <span className="text-yellow-400">HBAS & CO</span>
          </h1>
          
          <p className="fade-in-up text-xl md:text-3xl text-gray-100 mb-6 font-light stagger-2 max-w-4xl mx-auto">
            Building Pakistan's Future Infrastructure
          </p>
          
          <p className="fade-in-up text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed stagger-3">
            Leading civil contractor specializing in irrigation systems, water management, and large-scale infrastructure projects across Pakistan
          </p>
          
          <div className="fade-in-up flex flex-col sm:flex-row gap-6 justify-center stagger-4">
            <Link 
            to="/projects"
            className="group px-10 py-5 bg-yellow-400 text-gray-900 rounded-full font-bold text-lg hover:bg-yellow-500 transition-all duration-300 flex items-center justify-center gap-3 hover:gap-4 shadow-2xl hover:shadow-yellow-400/50">
              View Our Projects 
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
            </Link>
            <Link 
            to="/contact"
            className="px-10 py-5 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-2xl">
              Contact Us
            </Link>
          </div>
        </div>

       
      </section>

      {/* STATS SECTION */}
      <section className="py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="fade-in-up text-center" style={{animationDelay: `${i * 0.1}s`}}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-400 bg-opacity-10 mb-4">
                  <stat.icon className="text-yellow-400" size={28} strokeWidth={2} />
                </div>
                <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="fade-in-up inline-block px-4 py-2 bg-gray-50 rounded-full mb-6">
              <span className="text-yellow-400 text-sm font-bold tracking-widest">OUR LEADERSHIP</span>
            </div>
            <h2 className="fade-in-up text-4xl md:text-6xl font-black text-gray-900 mb-6 stagger-1">
              Visionary Leaders
            </h2>
            <p className="fade-in-up text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed stagger-2">
              Experienced professionals driving innovation and excellence in the construction industry
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { name: "Furqan Ahmed Soomro", position: "Principal Partner  and Managing Director", image: "./Furqan_Ahmed.png" },
              { name: "Adnan Ali Soomro", position: "Associate Partner", image: "./AdnanAli.png" },
              // { name: "Muhammad Rashid", position: "General Manager", image: "./Rashid.png" }
            ].map((leader, i) => (
              <div key={i} className="fade-in-up" style={{animationDelay: `${i * 0.15}s`}}>
                <div className="group relative">
                  <div className="leadership-image  aspect-square rounded-3xl overflow-hidden mb-6 hover-lift shadow-2xl">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-center  transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {leader.name}
                    </h3>
                    <p className="text-yellow-400 font-semibold text-base md:text-lg">
                      {leader.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="section-padding bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-yellow-400 to-transparent opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="fade-in-up">
              <div className="inline-block px-4 py-2 bg-white rounded-full mb-6 shadow-md">
                <span className="text-yellow-400 text-sm font-bold tracking-widest">SINCE 1990</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mb-8"></div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Founded in 1990 by <strong className="text-gray-900">Mr. Basheer Ahmed Soomro</strong>, 
                  our company was built on a vision to contribute meaningfully to Pakistan's construction 
                  and development sector.
                </p>
                <p className="text-lg">
                  Through unwavering dedication, hard work, and professional commitment, we earned 
                  recognition for delivering quality projects, especially in irrigation and infrastructure.
                </p>
              </div>
            </div>
            
            <div className="fade-in-up stagger-2">
              <div className="glass-morphism p-10 rounded-3xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Legacy Continues</h3>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    Today, experienced professionals carry forward his legacy, expanding our services 
                    and strengthening our reputation across Pakistan.
                  </p>
                  <p>
                    Under dynamic leadership, we've undertaken major projects in irrigation, canal lining, 
                    small dams, and large-scale structures, ensuring timely delivery with uncompromising 
                    quality and professionalism.
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex-1 h-2 bg-yellow-400 rounded-full"></div>
                  <Star className="text-yellow-400" size={24} fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
  {/* Decorative background elements */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-1/4 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-5"></div>
    <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-5"></div>
  </div>
  
  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <div className="grid lg:grid-cols-5 gap-12 items-start">
      {/* Mission - Takes 2 columns */}
      <div className="lg:col-span-2 fade-in-up">
        <div className="sticky top-24">
          <div className="inline-block px-4 py-2 bg-white shadow-sm rounded-full mb-6 border border-gray-100">
            <span className="text-yellow-400 text-sm font-bold tracking-widest">OUR MISSION</span>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Mission Statement
          </h3>
          
          <div className="relative">
            {/* Decorative line */}
            <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-400 rounded-full"></div>
            
            <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-yellow-400">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center">
                  <Target className="text-gray-900" size={24} strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Deliver sustainable and innovative engineering solutions in irrigation, water management, 
                    and infrastructure development that contribute to Pakistan's growth and prosperity.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3 text-yellow-400">
                  <TrendingUp size={22} strokeWidth={2.5} />
                  <span className="font-bold text-gray-900">Building for Tomorrow</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full opacity-60"></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full opacity-30"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats mini cards */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all">
              <div className="text-3xl font-black text-gray-900 mb-1">30+</div>
              <div className="text-sm text-gray-600 font-medium">Years Legacy</div>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all">
              <div className="text-3xl font-black text-gray-900 mb-1">500+</div>
              <div className="text-sm text-gray-600 font-medium">Projects Done</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Core Values - Takes 3 columns */}
      <div className="lg:col-span-3 fade-in-up stagger-2">
        <div className="inline-block px-4 py-2 bg-white shadow-sm rounded-full mb-6 border border-gray-100">
          <span className="text-yellow-400 text-sm font-bold tracking-widest">CORE VALUES</span>
        </div>
        
        <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
          What Drives Us
        </h3>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {coreValues.map((value, i) => (
            <div 
              key={i} 
              className="group relative bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400"
              style={{animationDelay: `${i * 0.1}s`}}
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400 opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <value.icon className="text-gray-900" size={28} strokeWidth={2.5} />
                </div>
                {/* Number badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-black">
                  {(i + 1).toString().padStart(2, '0')}
                </div>
              </div>
              
              {/* Content */}
              <div>
                <h4 className="font-black text-2xl text-gray-900 mb-3 group-hover:text-yellow-400 transition-colors">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {value.desc}
                </p>
                
                {/* Progress bar decoration */}
                <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
       
      </div>
    </div>
  </div>
</section>

      {/* SERVICES */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-30"></div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-32 h-32 border border-gray-100 rounded-full"></div>
          <div className="absolute bottom-40 left-10 w-24 h-24 border border-gray-100 rounded-lg"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="fade-in-up inline-block px-4 py-2 bg-gray-50 rounded-full mb-6">
              <span className="text-yellow-400 text-sm font-bold tracking-widest">WHAT WE DO</span>
            </div>
            <h2 className="fade-in-up text-4xl md:text-6xl font-black text-gray-900 mb-6 stagger-1">
              Our Services
            </h2>
            <p className="fade-in-up text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed stagger-2">
              Comprehensive construction solutions for government and private sector projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="fade-in-up group" style={{animationDelay: `${i * 0.15}s`}}>
                <div className="relative h-full bg-white border border-gray-100 rounded-3xl overflow-hidden hover-lift shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Image section */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.img} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>
                    
                    {/* Icon overlay */}
                    <div className="absolute top-6 left-6">
                      <div className="w-14 h-14 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <service.icon className="text-gray-900" size={28} strokeWidth={2.5} />
                      </div>
                    </div>
                    
                    {/* Number badge */}
                    <div className="absolute bottom-6 right-6">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                        <span className="text-white font-black text-xl">{(i + 1).toString().padStart(2, '0')}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content section */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-400 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    
                    {/* Features list */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                          <div className="flex-shrink-0 w-5 h-5 bg-yellow-400 bg-opacity-20 rounded-full flex items-center justify-center">
                            <CheckCircle className="text-yellow-400" size={14} strokeWidth={3} />
                          </div>
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <Link
                    to="/services"
                    className="group/btn w-full py-4 bg-gray-50 hover:bg-yellow-400 text-gray-900 rounded-2xl font-bold flex items-center justify-center gap-2 hover:gap-3 transition-all duration-300">
                      Explore Service
                      <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={18} strokeWidth={2.5} />
                    </Link>
                  </div>
                  
                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="fade-in-up inline-block px-4 py-2 bg-gray-50 rounded-full mb-6">
              <span className="text-yellow-400 text-sm font-bold tracking-widest">PORTFOLIO</span>
            </div>
            <h2 className="fade-in-up text-4xl md:text-6xl font-black text-gray-900 mb-6 stagger-1">
              Featured Projects
            </h2>
            <p className="fade-in-up text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed stagger-2">
              Showcasing excellence through completed infrastructure and development initiatives
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                img: bgImage2, 
                title: "Major Irrigation Canal System", 
                desc: "Comprehensive irrigation infrastructure spanning agricultural regions",
                category: "Irrigation"
              },
              { 
                img: bgImage1, 
                title: "Canal Lining Project", 
                desc: "75km canal lining improving irrigation efficiency significantly",
                category: "Water Management"
              },
              { 
                img: bgImage4, 
                title: "Bridge Construction", 
                desc: "200m reinforced concrete bridge connecting communities",
                category: "Infrastructure"
              },
            ].map((project, i) => (
              <div key={i} className="fade-in-up group" style={{animationDelay: `${i * 0.15}s`}}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-lift">
                  <div className="aspect-[4/5] relative">
                    <img 
                      src={project.img} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 project-card-overlay"></div>
                    
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-yellow-400 text-gray-900 text-xs font-bold rounded-full">
                        {project.category}
                      </span>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h4 className="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {project.desc}
                      </p>
                      <button className="flex items-center gap-2 text-yellow-400 font-semibold hover:gap-3 transition-all">
                        View Details <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
    
    </div>
  );
};

export default Home;