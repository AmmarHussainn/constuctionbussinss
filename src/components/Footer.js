import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Award,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  ArrowRight,
  Building2,
  Shield,
  ChevronRight
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    'Irrigation Systems',
    'Water Management',
    'Infrastructure Development',
    'Canal Lining',
    'Government Projects'
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        .footer-link {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .footer-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background: linear-gradient(90deg, #FBBF24, #F59E0B);
          transition: width 0.3s ease;
        }
        
        .footer-link:hover::after {
          width: 100%;
        }
        
        .footer-link:hover {
          color: #FBBF24;
          transform: translateX(4px);
        }
        
        .social-icon {
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          transform: translateY(-4px) scale(1.1);
          background: linear-gradient(135deg, #FBBF24, #F59E0B);
        }
        
        .badge-shine {
          position: relative;
          overflow: hidden;
        }
        
        .badge-shine::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s ease;
        }
        
        .badge-shine:hover::before {
          left: 100%;
        }
      `}</style>

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,_#FBBF24_0%,_transparent_70%)]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[radial-gradient(circle,_#F59E0B_0%,_transparent_70%)]"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-xl">
                <Building2 className="text-gray-900" size={24} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black text-white">HBAS & CO</h3>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Leading civil construction contractor specializing in irrigation, water management, and infrastructure development projects across Pakistan.
            </p>
            
            {/* PEC Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-3 bg-white bg-opacity-5 backdrop-blur-sm border border-yellow-400 border-opacity-30 rounded-2xl badge-shine">
              <Shield className="text-yellow-400" size={20} strokeWidth={2.5} />
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">PEC Registered</p>
                <p className="text-sm font-bold text-white">No Limit Company</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-black text-white mb-6 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="footer-link flex items-center gap-2 text-gray-300 hover:text-yellow-400 group"
                  >
                    <ChevronRight className="text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" size={16} strokeWidth={2.5} />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-black text-white mb-6 uppercase tracking-wide">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-300 group cursor-pointer hover:text-yellow-400 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2 flex-shrink-0"></div>
                  <span className="text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-black text-white mb-6 uppercase tracking-wide">Get in Touch</h4>
            <div className="space-y-4">
              
              {/* Phone */}
              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-yellow-400 bg-opacity-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-20 transition-all">
                  <Phone className="text-yellow-400" size={18} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Phone</p>
                  <a href="tel:0300-9317148" className="text-white hover:text-yellow-400 transition-colors font-semibold block">0300-9317148</a>
                  <a href="tel:0333-3628812" className="text-white hover:text-yellow-400 transition-colors font-semibold block">0333-3628812</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-yellow-400 bg-opacity-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-20 transition-all">
                  <Mail className="text-yellow-400" size={18} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Email</p>
                  <a href="mailto:hbas.and.co@gmail.com" className="text-white hover:text-yellow-400 transition-colors font-semibold break-all">
                    hbas.and.co@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-yellow-400 bg-opacity-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-20 transition-all">
                  <MapPin className="text-yellow-400" size={18} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Office</p>
                  <p className="text-white text-sm leading-relaxed">
                    B # 21/C Ghospel Homes<br />
                    Near Soneri Book Land<br />
                    Qasimabad, Hyderabad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

       
       
       
      </div>

     
    </footer>
  );
};

export default Footer;