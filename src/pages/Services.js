// import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
// import { Phone, Mail, MapPin, Menu, X, CheckCircle, Award, Users, Calendar } from 'lucide-react';
// import bgImage from "../assets/TIP_02.png";

// const Services = () => {
//   const services = [
//     {
//       title: "Irrigation Systems Development",
//       description: "Complete design and construction of irrigation infrastructure including canals, water channels, distribution networks, and modern irrigation systems to enhance agricultural productivity.",
//       features: ["Canal Construction", "Water Distribution Systems", "Drip Irrigation", "Sprinkler Systems", "Drainage Solutions"]
//     },
//     {
//       title: "Water Management Solutions",
//       description: "Comprehensive water management projects including dams, reservoirs, water treatment facilities, and flood control systems to ensure sustainable water resource utilization.",
//       features: ["Dam Construction", "Reservoir Development", "Flood Control", "Water Treatment Plants", "Pumping Stations"]
//     },
//     {
//       title: "Infrastructure Development",
//       description: "Large-scale infrastructure projects encompassing roads, bridges, culverts, and civil structures that form the backbone of modern development.",
//       features: ["Road Construction", "Bridge Building", "Culvert Installation", "Civil Structures", "Urban Infrastructure"]
//     },
//     {
//       title: "Lining & Waterproofing",
//       description: "Specialized services in canal lining, water channel protection, and waterproofing solutions to prevent water loss and ensure structural integrity.",
//       features: ["Canal Lining", "Concrete Lining", "Waterproof Membranes", "Structural Protection", "Seepage Control"]
//     },
//     {
//       title: "Government Contracting",
//       description: "Trusted partner for government projects with proven track record in delivering public sector infrastructure projects on time and within budget.",
//       features: ["Public Sector Projects", "Government Tenders", "Compliance Management", "Quality Assurance", "Timely Delivery"]
//     },
//     {
//       title: "Project Management",
//       description: "End-to-end project management services ensuring efficient execution, quality control, and timely completion of construction projects of all scales.",
//       features: ["Project Planning", "Quality Control", "Resource Management", "Timeline Management", "Risk Assessment"]
//     }
//   ];

//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: '0px',
//       threshold: 0.1,
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate');
//           observer.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);

//     const elements = document.querySelectorAll('.animate-on-scroll');
//     elements.forEach((el) => observer.observe(el));

//     return () => {
//       elements.forEach((el) => observer.unobserve(el));
//     };
//   }, []);

//   return (
//     <div className="pb-16 bg-white">
//       <div style={{ backgroundImage: `url(${bgImage})` }} className="relative bg-cover bg-center w-full py-40 mb-20">
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 relative animate-on-scroll animate-fade-in-up">
//             <h1 className="relative text-4xl md:text-5xl font-bold text-white mb-6 transform transition-transform duration-500 hover:scale-105">
//               Our Services
//             </h1>
//             <p className="text-xl text-white max-w-3xl mx-auto animate-on-scroll animate-fade-in delay-200">
//               Comprehensive civil construction and infrastructure development services tailored to meet the diverse needs of our clients.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow transform hover:scale-105 duration-300 animate-on-scroll animate-slide-up"
//               style={{ animationDelay: `${index * 100}ms` }}
//             >
//               <h3 className="text-2xl font-bold text-gray-900 mb-4 transform transition-transform duration-500 hover:scale-105">
//                 {service.title}
//               </h3>
//               <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
//               <div className="space-y-2">
//                 <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
//                 <ul className="space-y-2">
//                   {service.features.map((feature, featureIndex) => (
//                     <li
//                       key={featureIndex}
//                       className="flex items-center space-x-3 animate-on-scroll animate-slide-up"
//                       style={{ animationDelay: `${(featureIndex + 1) * 50}ms` }}
//                     >
//                       <CheckCircle className="text-blue-600 flex-shrink-0 transform transition-transform duration-300 hover:scale-110" size={16} />
//                       <span className="text-gray-700">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div className="mt-16 bg-blue-600 text-white p-8 rounded-lg text-center animate-on-scroll animate-fade-in">
//           <h2 className="text-3xl font-bold mb-4 transform transition-transform duration-500 hover:scale-105">
//             Ready to Start Your Project?
//           </h2>
//           <p className="text-xl text-blue-100 mb-6 animate-on-scroll animate-fade-in delay-200">
//             Contact us today to discuss your construction and infrastructure development needs.
//           </p>
//           <Link
//             to="/contact"
//             className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block transform hover:scale-105 duration-300"
//           >
//             Get Free Consultation
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;




import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import bgImage from "../assets/TIP_02.png";

const Services = () => {
  const services = [
    {
      title: "Irrigation Systems Development",
      description:
        "Complete design and construction of irrigation infrastructure including canals, water channels, distribution networks, and modern irrigation systems to enhance agricultural productivity.",
      features: [
        "Canal Construction",
        "Water Distribution Systems",
        "Drip Irrigation",
        "Sprinkler Systems",
        "Drainage Solutions",
      ],
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
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pb-16 bg-white">
      {/* Hero */}
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="relative bg-cover bg-center w-full py-40 mb-20"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-on-scroll fade-up">
            Our Services
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto animate-on-scroll fade-up delay-200">
            Comprehensive civil construction and infrastructure development
            services tailored to meet the diverse needs of our clients.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-gray-50 p-8 rounded-xl shadow-md transition-transform duration-500 animate-on-scroll fade-up"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((f, fi) => (
                  <li
                    key={fi}
                    className="flex items-center space-x-3 animate-on-scroll fade-left"
                    style={{ transitionDelay: `${(fi + 1) * 70}ms` }}
                  >
                    <CheckCircle className="text-blue-600" size={18} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-900 text-white p-10 rounded-lg animate-on-scroll zoom-in">
            <h3 className="text-4xl font-bold">25+</h3>
            <p className="mt-2">Years of Experience</p>
          </div>
          <div className="bg-gray-900 p-10 text-white rounded-lg animate-on-scroll zoom-in delay-200">
            <h3 className="text-4xl font-bold text-white">100+</h3>
            <p className="mt-2">Completed Projects</p>
          </div>
          <div className="bg-gray-900 text-white p-10 rounded-lg animate-on-scroll zoom-in delay-400">
            <h3 className="text-4xl font-bold ">50+</h3>
            <p className="mt-2">Happy Clients</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 bg-gray-900 text-white p-12 rounded-xl text-center animate-on-scroll fade-up">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-blue-100 mb-6">
            Contact us today to discuss your construction and infrastructure
            development needs.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition inline-block"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
