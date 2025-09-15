import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import bgImage from "../assets/TIP_03.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Major Irrigation Canal System - Sindh Province",
      category: "Irrigation Infrastructure",
      description:
        "Construction of a 50km irrigation canal system serving over 10,000 acres of agricultural land, including main canals, distributaries, and water control structures.",
      status: "Completed",
      year: "2023",
      features: [
        "50km Main Canal",
        "15 Distributaries",
        "Water Control Gates",
        "Concrete Lining",
      ],
      image: "/1.png",
    },
    {
      title: "Small Dam Construction - Balochistan",
      category: "Water Management",
      description:
        "Development of small dam facility with 5 million cubic meter capacity for water storage and irrigation purposes in drought-prone areas.",
      status: "Completed",
      year: "2022",
      image: "/2.jpg",
      features: [
        "5M Cubic Meter Capacity",
        "Spillway Construction",
        "Embankment Work",
        "Instrumentation",
      ],
    },
    {
      title: "Urban Infrastructure Development - Hyderabad",
      category: "Infrastructure",
      description:
        "Comprehensive urban infrastructure project including road construction, drainage systems, and utility installations across multiple sectors.",
      status: "Completed",
      year: "2023",
      image: "/3.png",
      features: [
        "Road Networks",
        "Drainage Systems",
        "Utility Infrastructure",
        "Traffic Management",
      ],
    },
    {
      title: "Canal Lining Project - Punjab",
      category: "Water",
      description:
        "Extensive canal lining project covering 75km of irrigation canals to reduce water losses and improve irrigation efficiency.",
      status: "In Progress",
      year: "2024",
      image: "/4.png",
      features: [
        "75km Canal Lining",
        "Concrete Structures",
        "Water Conservation",
        "Efficiency Improvement",
      ],
    },
    {
      title: "Bridge Construction - KPK Province",
      category: "Infrastructure",
      description:
        "Construction of reinforced concrete bridge spanning 200 meters over major river, connecting rural communities to urban centers.",
      status: "Completed",
      year: "2022",
      image: "/5.png",
      features: [
        "200m Span Bridge",
        "Reinforced Concrete",
        "Foundation Work",
        "Safety Features",
      ],
    },
    {
      title: "Water Treatment Facility - Karachi",
      category: "Water Management",
      description:
        "Modern water treatment plant with capacity to process 50 million gallons per day, serving industrial and residential areas.",
      status: "In Progress",
      year: "2024",
      image: "/6.png",
      features: [
        "50MGD Capacity",
        "Modern Technology",
        "Quality Control",
        "Environmental Compliance",
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
            Our Projects
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto animate-on-scroll fade-up delay-200">
            Showcasing our expertise through successful completion of diverse
            civil construction and infrastructure projects across Pakistan.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: "100+", label: "Projects Completed" },
            { value: "30+", label: "Years Experience" },
            { value: "50+", label: "Government Projects" },
            { value: "95%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center bg-gray-900 p-8 rounded-lg text-white animate-on-scroll zoom-in"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className=" rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition transform duration-500 animate-on-scroll fade-up"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover animate-on-scroll fade-in"
              />
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium animate-on-scroll fade-in delay-100">
                    {p.category}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        p.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      } animate-on-scroll fade-in delay-200`}
                    >
                      {p.status}
                    </span>
                    <span className="text-gray-500 text-sm animate-on-scroll fade-in delay-300">
                      {p.year}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {p.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed animate-on-scroll fade-up delay-100">
                  {p.description}
                </p>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Project Highlights:
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {p.features.map((f, fi) => (
                    <div
                      key={fi}
                      className="flex items-center space-x-2 animate-on-scroll fade-left"
                      style={{ transitionDelay: `${(fi + 1) * 70}ms` }}
                    >
                      <CheckCircle className="text-green-600" size={14} />
                      <span className="text-gray-700 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center animate-on-scroll fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-gray-600 mb-8 animate-on-scroll fade-up delay-200">
            Let's discuss how we can bring your construction project to life
            with our expertise and experience.
          </p>
          <Link
            to="/contact"
            className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 hover:text-gray-900 transition"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
