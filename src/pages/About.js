import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, CheckCircle, Award, Users, Calendar } from 'lucide-react';
import bgImage from "../assets/TIP_01.png";
const About = () => {
  return (
    <div className="pb-16 bg-white">
      <div style={{ backgroundImage: `url(${bgImage})` }} className='relative bg-cover bg-center w-full py-40 mb-20'>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative">
            <h1 className="relative text-4xl md:text-5xl font-bold text-white mb-6">About M/S HBAS & CO</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              A legacy of excellence in civil construction and infrastructure development spanning over three decades.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Story */}
        <section className="mb-16">
          <div className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Our company was founded in 1990 by Mr. Basheer Ahmed Soomro, who laid the foundation with a vision to contribute in the field of construction and development. Through his dedication, hard work, and professional commitment, the company earned recognition for delivering quality projects, especially in the irrigation and infrastructure sector.
              </p>
              <p className="mb-4">
                In continuation of his legacy, the company is now being led by Mr. Furqan Ali Soomro, who has expanded the scope of services and strengthened the company's reputation. Under his leadership, the company has undertaken major projects in irrigation, lining, small dams, and large-scale structures, ensuring timely delivery with quality and professionalism.
              </p>
              <p>
                Today, we are proudly registered with the Pakistan Engineering Council (PEC) as a No Limit Construction Company, reflecting our capacity to execute projects of any scale with excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our mission is to deliver sustainable and innovative engineering solutions in irrigation, water management, and infrastructure development. We are committed to excellence by combining technical expertise, innovation, and integrity to provide reliable, cost-effective, and high-quality services. With a focus on enhancing agricultural productivity and community well-being, we aim to contribute to national development while upholding the highest standards of safety and environmental responsibility.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Values</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-blue-600 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-900">Integrity</h3>
                  <p className="text-gray-600">Conducting business with honesty and transparency in all our dealings.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-blue-600 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-900">Excellence</h3>
                  <p className="text-gray-600">Striving for the highest quality standards in every project we undertake.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-blue-600 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-900">Innovation</h3>
                  <p className="text-gray-600">Embracing modern techniques and sustainable practices in construction.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-blue-600 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-900">Safety</h3>
                  <p className="text-gray-600">Maintaining the highest standards of safety in all our operations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Leadership</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">FA</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Furqan Ali Soomro</h3>
              <p className="text-xl text-blue-600 mb-4">Managing Director & CEO</p>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Leading the company with vision and expertise, Mr. Furqan Ali Soomro has expanded our capabilities and strengthened our position as a premier civil construction contractor. Under his leadership, we have successfully delivered numerous large-scale infrastructure projects while maintaining our commitment to quality and excellence.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

// export default About