
import React, { useEffect } from "react";
import {
  CheckCircle,
  Award,
  Users,
  Calendar,
  // other icons if needed
} from "lucide-react";

import bgVideo from "../assets/loop.mp4";

const bgImage =
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2070&q=80";
const bgImage1 =
  "./1.png";
const bgImage2 =
  "./3.png";
const bgImage4 =
  "./2.jpg";
const bgImage3 =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80";

const ceoImage =
  "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=800&q=80";
const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden bg-white text-gray-800">
      {/* ========== HERO ========== */}
      <section className="relative min-h-[84vh] flex items-center justify-center text-center bg-gray-50 overflow-hidden">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={bgVideo} // import bgVideo from "../assets/bg.mp4";
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay (to dim the video) */}
        <div className="absolute inset-0 bg-black/80 z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-4xl px-6">
          <h1 className="animate-on-scroll fade-up text-4xl md:text-8xl font-bold text-white mb-4">
            M/S <span className="gradient-text">HBAS & CO</span>
          </h1>
          <p className="animate-on-scroll fade-up text-lg text-gray-100 mb-3">
            Excellence in Civil Construction & Infrastructure Development
          </p>
          <p className="animate-on-scroll fade-up text-base text-gray-200 max-w-3xl mx-auto mb-8">
            Leading civil contractor specializing in irrigation systems, water
            management, and large-scale infrastructure projects across Pakistan.
          </p>
          <div className="animate-on-scroll zoom-in flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/projects"
              className="bg-gray-900 text-white border border-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 hover:text-gray-900 transition"
            >
              View Our Projects
            </a>
            <a
              href="/contact"
              className="border border-gray-200 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-50 hover:text-gray-900 transition"
            >
              Get Quote
            </a>
          </div>
        </div>
      </section>


      {/* <section className="relative min-h-[84vh] flex items-center justify-center text-center bg-gray-50">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})`, opacity: 0.16 }}
        />
        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="animate-on-scroll fade-up text-4xl md:text-8xl font-bold text-gray-900 mb-4">
            M/S <span className="gradient-text">HBAS & CO</span>
          </h1>
          <p className="animate-on-scroll fade-up text-lg text-gray-700 mb-3">
            Excellence in Civil Construction & Infrastructure Development
          </p>
          <p className="animate-on-scroll fade-up text-base text-gray-600 max-w-3xl mx-auto mb-8">
            Leading civil contractor specializing in irrigation systems, water
            management, and large-scale infrastructure projects across Pakistan.
          </p>
          <div className="animate-on-scroll zoom-in flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/projects"
              className="bg-gray-900 text-white border border-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 hover:text-gray-900 transition"
            >
              View Our Projects
            </a>

            <a
              href="/contact"
              className="border border-gray-900 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
            >
              Get Quote
            </a>

          </div>
        </div>
      </section> */}

      {/* ========== FEATURES ========== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="animate-on-scroll fade-up text-3xl md:text-5xl font-bold text-gray-900 mb-3">
              Why Choose <span className="gradient-text">HBAS & CO</span>?
            </h2>
            <p className="animate-on-scroll fade-up text-gray-600 max-w-2xl mx-auto">
              Over 30 years of experience delivering quality construction
              projects with excellence and professionalism.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: CheckCircle,
                title: "Quality Assurance",
                desc: "Highest standards of quality in every project.",
              },
              {
                icon: Award,
                title: "PEC Registered",
                desc: "Officially recognized as a No Limit Construction Company.",
              },
              {
                icon: Users,
                title: "Expert Team",
                desc: "Professional engineers with deep expertise.",
              },
              {
                icon: Calendar,
                title: "Timely Delivery",
                desc: "Projects delivered on time with precision.",
              },
            ].map((it, idx) => (
              <div
                key={idx}
                className="animate-on-scroll zoom-in bg-gray-50 p-6 rounded-lg shadow-sm text-center"
              >
                <div className="w-14 h-14 mx-auto mb-3 bg-gray-900 text-white flex items-center justify-center rounded-full">
                  <it.icon size={20} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{it.title}</h3>
                <p className="text-gray-600 text-sm">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="animate-on-scroll fade-up text-3xl md:text-5xl font-bold text-gray-900">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="animate-on-scroll fade-up text-gray-600 max-w-2xl mx-auto">
              Comprehensive construction solutions for government and private
              sector projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: bgImage1, title: "Irrigation Systems" },
              { img: bgImage2, title: "Water Management" },
              { img: bgImage3, title: "Infrastructure Development" },
            ].map((s, i) => (
              <div
                key={i}
                className="animate-on-scroll zoom-in group relative overflow-hidden rounded-lg shadow-md"
              >
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${s.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <a
                    href="/services"
                    className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-50 hover:text-gray-900 transition">
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROJECTS ========== */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(180deg,#0d6efd08,#0d6efd12)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="animate-on-scroll fade-up text-3xl md:text-5xl font-bold text-gray-900">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="animate-on-scroll fade-up text-gray-600 max-w-2xl mx-auto">
              A selection of recent projects highlighting our capabilities and
              scale.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: bgImage2, title: "Major Irrigation Canal System", desc: "Comprehensive urban infrastructure project including road construction, drainage systems, and utility installations across multiple sectors." },
              { img: bgImage1, title: "Canal Lining Project", desc: "Extensive canal lining project covering 75km of irrigation canals to reduce water losses and improve irrigation efficiency." },
              { img: bgImage4, title: "Bridge Construction", desc: "Construction of reinforced concrete bridge spanning 200 meters over major river, connecting rural communities to urban centers." },
            ].map((img, i) => (
              <div
                key={i}
                className="animate-on-scroll fade-up rounded-lg overflow-hidden shadow-lg"
              >
                <div
                  className="h-56 bg-cover bg-center"
                  style={{ backgroundImage: `url(${img.img})` }}
                />
                <div className="p-4 bg-white">
                  <h4 className="font-semibold text-gray-900">
                    {img.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {img.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="animate-on-scroll fade-up text-3xl md:text-5xl font-bold text-gray-900">
            What Clients Say
          </h3>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                text: "Delivered on time and within budget. Impressive engineering.",
                name: "Govt. Dept.",
              },
              {
                text: "Professional team and great communication throughout the project.",
                name: "Private Client",
              },
              {
                text: "High quality and safety standards — highly recommended.",
                name: "Agriculture Board",
              },
            ].map((t, i) => (
              <blockquote
                key={i}
                className="animate-on-scroll zoom-in p-6 bg-white rounded-lg shadow-sm"
              >
                <p className="text-gray-700 mb-4">“{t.text}”</p>
                <footer className="text-sm text-gray-500">— {t.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ========== STORY ========== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="animate-on-scroll fade-left glass-effect p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Story</span>
            </h2>
            <p className="text-gray-700 mb-2">
              Our company was founded in 1990 by Mr. Basheer Ahmed Soomro, who
              laid the foundation with a vision to contribute in the field of
              construction and development. Through his dedication, hard work,
              and professional commitment, the company earned recognition for
              delivering quality projects, especially in the irrigation and
              infrastructure sector.
            </p>
            <p className="text-gray-700">
              In continuation of his legacy, the company is now being led by Mr.
              Furqan Ali Soomro, who has expanded the scope of services and
              strengthened the company's reputation. Under his leadership, the
              company has undertaken major projects in irrigation, lining, small
              dams, and large-scale structures, ensuring timely delivery with
              quality and professionalism. Today, led by Mr. Furqan Ali Soomro,
              the company has expanded into major projects including dams,
              canal lining and large infrastructure works.
            </p>
          </div>
        </div>
      </section>

      {/* ========== MISSION & VALUES ========== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="animate-on-scroll fade-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Our <span className="gradient-text">Mission</span>
            </h3>
            <div className="glass-effect py-4 rounded">
              <p className="text-gray-700">
                Deliver sustainable and innovative engineering solutions in
                irrigation, water management and infrastructure development.
              </p>
            </div>
          </div>
          <div className="animate-on-scroll fade-right">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Core <span className="gradient-text">Values</span>
            </h3>
            <div className="space-y-3">
              {[
                ["Integrity", "Honesty and transparency in all dealings."],
                ["Excellence", "Highest quality standards."],
                ["Innovation", "Modern techniques & sustainability."],
                ["Safety", "Top safety standards across operations."],
              ].map(([t, d], i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="bg-gray-900 text-white p-2 rounded">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t}</h4>
                    <p className="text-gray-600 text-sm">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== LEADERSHIP ========== */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="animate-on-scroll fade-up text-3xl md:text-5xl font-bold text-gray-900 text-center mb-8">
            <span className="gradient-text">Leadership</span>
          </h3>
          <div className="animate-on-scroll zoom-in glass-effect p-6 rounded-lg  grid grid-cols-1 md:grid-cols-3 gap-4 items-center py-4">
            <div className="flex justify-center">
              <img
                src={"./avatar.jpeg"}
                alt="Furqan Ali Soomro - CEO"
                className="w-56 h-56 object-cover  shadow"
              />
            </div>
            <div className="md:col-span-2">
              <h4 className="text-4xl font-bold text-gray-900">
                Furqan Ali Soomro
              </h4>
              <p className="text-blue-700 font-medium mb-3">
                Managing Director & CEO
              </p>
              <p className="text-gray-700 mt-6">
                Leading HBAS & CO with vision and expertise, Furqan Ali Soomro
                has expanded the company’s capabilities and delivered numerous
                large-scale infrastructure projects while maintaining a
                commitment to quality and professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONTACT CTA ========== */}
      <section
        className="py-12"
        style={{ background: "linear-gradient(180deg,#0d6efd12,#0d6efd06)" }}
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="animate-on-scroll fade-up text-2xl font-bold text-gray-900">
              Ready to discuss your project?
            </h4>
            <p className="animate-on-scroll fade-up text-gray-700">
              Contact us to get a detailed quote and timeline from our expert
              team.
            </p>
          </div>
          <div className="animate-on-scroll zoom-in">
            <a
              href="#contact"
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-50 hover:text-gray-900 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


