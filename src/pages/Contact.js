import React, { useEffect, useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle, 
  Award,
  Users,
  Clock,
  MessageSquare,
  Sparkles,
  ArrowRight,
  User,
  Building2
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    projectType: '',
    projectDetails: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in-up').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    
    if (!formData.name || !formData.email) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://voice-unitech.onrender.com/api/projects/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          projectType: '',
          projectDetails: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      primary: "0300-9317148",
      secondary: "0333-3628812",
      note: "Available 24/7 for project inquiries"
    },
    {
      icon: Mail,
      title: "Email Address",
      primary: "hbas.and.co@gmail.com",
      secondary: null,
      note: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Office Location",
      primary: "B # 21/C Ghospel Homes",
      secondary: "Near Soneri Book Land, Qasimabad",
      tertiary: "Hyderabad, Sindh, Pakistan",
      note: "Office hours: 9:00 AM - 6:00 PM"
    }
  ];

  const features = [
    {
      icon: Award,
      title: "PEC Registered",
      description: "Officially registered with Pakistan Engineering Council"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Professional engineers with decades of experience"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Committed to delivering highest quality standards"
    }
  ];

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
        
        .floating {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        .gradient-border {
          position: relative;
          background: white;
          border-radius: 24px;
        }
        
        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 24px;
          padding: 2px;
          background: linear-gradient(135deg, #FBBF24, #F59E0B, #FBBF24);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        
        .gradient-border:hover::before {
          opacity: 1;
        }
        
        .input-field {
          transition: all 0.3s ease;
        }
        
        .input-field:focus {
          transform: translateY(-2px);
        }
        
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        
        .pulse-glow {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .8; }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,_#FBBF24_0%,_transparent_50%)]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_50%,_#F59E0B_0%,_transparent_50%)]"></div>
        </div>

        {/* Floating Elements */}
        {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating absolute top-20 left-20 w-24 h-24 border-2 border-yellow-400 opacity-20 rounded-2xl"></div>
          <div className="floating absolute top-40 right-40 w-20 h-20 border-2 border-yellow-400 opacity-30 rounded-full" style={{animationDelay: '2s'}}></div>
          <div className="floating absolute bottom-32 left-1/3 w-16 h-16 border-2 border-yellow-400 opacity-25 rounded-lg" style={{animationDelay: '4s'}}></div>
        </div> */}

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="fade-in-up mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 bg-opacity-10 border border-yellow-400 border-opacity-30 rounded-full mb-8">
              <Sparkles className="text-yellow-400" size={16} />
              <span className="text-yellow-400 text-sm font-semibold tracking-wide">GET IN TOUCH</span>
            </div>
          </div>
          
          <h1 className="fade-in-up text-5xl md:text-7xl font-black text-white mb-6 leading-tight stagger-1">
            Let's Build Something
            <br />
            <span className="text-yellow-400">Extraordinary Together</span>
          </h1>
          
          <p className="fade-in-up text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed stagger-2">
            Ready to transform your vision into reality? Our expert team is here to bring your construction project to life with precision and excellence
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            
            {/* LEFT SIDE - Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 bg-opacity-10 rounded-full mb-6">
                  <MessageSquare className="text-yellow-400" size={16} />
                  <span className="text-yellow-400 text-sm font-semibold">CONTACT INFORMATION</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                  We're Here to Help
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Have questions about your project? Our team is ready to provide expert guidance and support
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="fade-in-up gradient-border hover-lift bg-white p-6 rounded-3xl shadow-lg border border-gray-100"
                    style={{animationDelay: `${index * 0.15}s`}}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <info.icon className="text-gray-900" size={24} strokeWidth={2.5} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                        <p className="text-gray-700 font-semibold">{info.primary}</p>
                        {info.secondary && <p className="text-gray-700">{info.secondary}</p>}
                        {info.tertiary && <p className="text-gray-700">{info.tertiary}</p>}
                        <p className="text-sm text-gray-500 mt-2">{info.note}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            
      
            </div>

            {/* RIGHT SIDE - Contact Form */}
            <div className="lg:col-span-3">
              <div className="fade-in-up gradient-border bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 stagger-2">
                <div className="mb-8">
                  <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
                    Start Your Project
                  </h3>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="input-field w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-10 outline-none transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="input-field w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-10 outline-none transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="+92-300-1234567"
                        className="input-field w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-10 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                      Project Type
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none z-10" size={20} />
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="input-field w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-10 outline-none transition-all appearance-none bg-white cursor-pointer"
                      >
                        <option value="">Select Project Type</option>
                        <option value="Irrigation Systems">Irrigation Systems</option>
                        <option value="Water Management">Water Management</option>
                        <option value="Infrastructure Development">Infrastructure Development</option>
                        <option value="Canal Lining">Canal Lining</option>
                        <option value="Government Project">Government Project</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                 {/* Project Details - Changed to Input Field */}
<div>
  <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
    Project Details
  </label>
  <div className="relative">
    <input
      type="text"
      name="projectDetails"
      value={formData.projectDetails}
      onChange={handleChange}
      placeholder="Brief description of your project requirements..."
      className="input-field w-full pl-4 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-10 outline-none transition-all"
    />
  </div>
</div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-3 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={22} strokeWidth={2.5} />
                        Send Message
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} strokeWidth={2.5} />
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="flex items-center gap-3 p-4 bg-green-50 border-2 border-green-200 rounded-2xl">
                      <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                      <p className="text-green-800 font-semibold">Message sent successfully! We'll get back to you soon.</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="flex items-center gap-3 p-4 bg-red-50 border-2 border-red-200 rounded-2xl">
                      <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white font-bold flex-shrink-0">!</div>
                      <p className="text-red-800 font-semibold">
                        {!formData.name || !formData.email 
                          ? "Please fill in all required fields (Name and Email)." 
                          : "Something went wrong. Please try again."
                        }
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 bg-opacity-10 rounded-full mb-6">
              <Award className="text-yellow-400" size={16} />
              <span className="text-yellow-400 text-sm font-semibold tracking-wide">WHY CHOOSE US</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Excellence in Every Project
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="fade-in-up gradient-border hover-lift bg-white p-8 rounded-3xl shadow-lg text-center border border-gray-100"
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl mb-6 shadow-lg">
                  <feature.icon className="text-gray-900" size={32} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;