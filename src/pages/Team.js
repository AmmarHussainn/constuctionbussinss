import React, { useEffect } from "react";
import { 
  Mail, 
  Phone, 
  Linkedin,
  Award,
  Users,
  Briefcase,
  Target,
  Shield
} from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Rashid Ali",
      position: "General Manager",
      image: "./Rashid.png",
     
    },
    {
      name: "Shahid Hussain",
      position: "Project manager",
      image: "./shahidhussain.png",
      
    },
    {
      name: "Farooq Ali",
      position: "Project engineer",
      image: "./FarooqAli.png",
    
    },
    {
      name: "Ahmed Mujtaba",
      position: "Site Engineer",
      image: "./AhmedMujtaba.png",
    },
    {
      name: "Furqan Ali",
      position: "HSE Engineer",
      image: "./FurqanAli.png",
     
    }
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
        
        .team-image {
          transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .team-card:hover .team-image {
          transform: scale(1.1);
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
          background: linear-gradient(135deg, #1F2937 0%, #111827 100%);
        }
        
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        
        .contact-icon {
          transition: all 0.3s ease;
        }
        
        .contact-icon:hover {
          transform: scale(1.1);
          background: #FBBF24;
        }
        
        .contact-icon:hover svg {
          color: #1F2937;
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden hero-gradient">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(251, 191, 36, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 191, 36, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="fade-in-up mb-6">
            <div className="inline-block px-4 py-2 bg-yellow-400 bg-opacity-10 border border-yellow-400 border-opacity-30 rounded-full mb-8">
              <span className="text-yellow-400 text-sm font-semibold tracking-wide">OUR TEAM</span>
            </div>
          </div>
          
          <h1 className="fade-in-up text-5xl md:text-7xl font-black text-white mb-6 leading-tight stagger-1">
            Meet Our <span className="text-yellow-400">Team</span>
          </h1>
          
          <p className="fade-in-up text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed stagger-2">
            Experienced professionals dedicated to delivering excellence in every project we undertake
          </p>
        </div>
      </section>

      

      {/* TEAM MEMBERS SECTION */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
           
            <h2 className="fade-in-up text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Expert Professionals
            </h2>
            <p className="fade-in-up text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our team combines decades of experience with innovative approaches to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className={`fade-in-up team-card stagger-${i + 1}`}
              >
                <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover-lift">
                  {/* Image Section */}
                  <div className="relative h-96 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover "
                    />
                    <div className="absolute inset-0"></div>
                    
                    {/* Position Badge */}
                   

                  
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    <h3 className="text-2xl font-black text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-yellow-400 font-semibold text-base mb-4">
                      {member.position}
                    </p>
                    
                    <div className="h-1 w-16 bg-yellow-400 mb-4"></div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.specialization}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              What Drives <span className="text-yellow-400">Our Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our core values guide every decision and action we take
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Integrity", desc: "Honesty in all dealings" },
              { icon: Target, title: "Excellence", desc: "Highest quality standards" },
              { icon: Users, title: "Collaboration", desc: "Teamwork and unity" },
              { icon: Award, title: "Innovation", desc: "Modern solutions" }
            ].map((value, i) => (
              <div key={i} className="fade-in-up text-center" style={{animationDelay: `${i * 0.1}s`}}>
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover-lift">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-400 mb-6">
                    <value.icon className="text-gray-900" size={28} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,_#FBBF24_0%,_transparent_50%)]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,_#F59E0B_0%,_transparent_50%)]"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="fade-in-up">
            <div className="inline-block px-4 py-2 bg-yellow-400 bg-opacity-10 border border-yellow-400 border-opacity-30 rounded-full mb-8">
              <span className="text-yellow-400 text-sm font-semibold tracking-wide">JOIN US</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Want to Work With Us?
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              We're always looking for talented professionals to join our growing team
            </p>
            
            <button className="px-10 py-5 bg-yellow-400 text-gray-900 rounded-full font-bold text-lg hover:bg-yellow-500 transition-all duration-300 shadow-2xl">
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;