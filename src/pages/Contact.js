
import React, { useEffect } from 'react';
import { Phone, Mail, MapPin, CheckCircle, Award, Users } from 'lucide-react';
import bgImage from "../assets/TIP_04.png";

const Contact = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="pb-16 bg-white">
      {/* Hero Section */}
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="relative bg-cover bg-center w-full py-40 mb-20"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="animate-on-scroll fade-up text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="animate-on-scroll fade-up text-xl text-white max-w-3xl mx-auto delay-200">
            Ready to start your construction project? Get in touch with our team
            of experts for professional consultation and project planning.
          </p>
        </div>
      </div>

      {/* Contact Details + Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="animate-on-scroll fade-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
          <div className="space-y-8">
            {[
              {
                icon: <Phone className="text-white" size={24} />,
                title: "Phone Numbers",
                details: ["0300-9317148", "0333-3628812"],
                note: "Available 24/7 for project inquiries",
              },
              {
                icon: <Mail className="text-white" size={24} />,
                title: "Email Address",
                details: ["hbas.and.co@gmail.com"],
                note: "We'll respond within 24 hours",
              },
              {
                icon: <MapPin className="text-white" size={24} />,
                title: "Office Address",
                details: [
                  "B # 21/C Ghospel Homes Near Soneri Book Land",
                  "Qasimabad, Hyderabad, Sindh",
                  "Pakistan",
                ],
                note: "Office hours: 9:00 AM - 6:00 PM",
              },
            ].map((contact, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 animate-on-scroll fade-up"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-gray-900 p-3 rounded-full">
                  {contact.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {contact.title}
                  </h3>
                  {contact.details.map((detail, i) => (
                    <p key={i} className="text-gray-700">
                      {detail}
                    </p>
                  ))}
                  <p className="text-sm text-gray-500 mt-1">{contact.note}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CEO Contact */}
          <div className="mt-12 bg-gray-50 p-6 rounded-lg flex items-center space-x-4 animate-on-scroll zoom-in delay-400">
            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold">
              FA
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                Furqan Ali Soomro
              </h4>
              <p className="text-gray-900">Managing Director & CEO</p>
              <p className="text-sm text-gray-500">
                Available for major project discussions
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="animate-on-scroll fade-right">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Send us a Message
          </h2>
          <form className="space-y-6 bg-gray-50 p-8 rounded-lg shadow-md">
            
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            <input
              type="email"
              placeholder="Email Address *"
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <select className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500">
              <option>Select Project Type</option>
              <option>Irrigation Systems</option>
              <option>Water Management</option>
              <option>Infrastructure Development</option>
              <option>Canal Lining</option>
              <option>Government Project</option>
              <option>Other</option>
            </select>
            <textarea
              rows={5}
              placeholder="Describe your project requirements..."
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 hover:text-gray-900 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Extra Info Section */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {[
          {
            icon: <Award className="text-blue-600 mx-auto mb-4" size={48} />,
            title: "PEC Registered",
            description:
              "Officially registered with Pakistan Engineering Council",
          },
          {
            icon: <Users className="text-blue-600 mx-auto mb-4" size={48} />,
            title: "Expert Team",
            description:
              "Professional engineers and experts with decades of experience",
          },
          {
            icon: (
              <CheckCircle className="text-blue-600 mx-auto mb-4" size={48} />
            ),
            title: "Quality Assurance",
            description:
              "Committed to delivering highest quality standards on time",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="text-center bg-gray-50 p-6 rounded-lg shadow-md animate-on-scroll zoom-in"
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            {item.icon}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
