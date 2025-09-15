import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, CheckCircle, Award, Users, Calendar } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">M/S HBAS & CO</h3>
                        <p className="text-gray-300 mb-4">
                            Leading civil construction contractor specializing in irrigation, water management, and infrastructure development projects.
                        </p>
                        <p className="text-sm text-gray-400">
                            Registered with Pakistan Engineering Council (PEC) as No Limit Construction Company
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                            {/* <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li> */}
                            <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
                            <li><Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link></li>
                            <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Phone size={16} className="text-blue-400" />
                                <div>
                                    <p className="text-gray-300">0300-9317148</p>
                                    <p className="text-gray-300">0333-3628812</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail size={16} className="text-blue-400" />
                                <p className="text-gray-300">hbas.and.co@gmail.com</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin size={16} className="text-blue-400 mt-1" />
                                <p className="text-gray-300">
                                    B # 21/C Ghospel Homes Near Soneri Book Land<br />
                                    Qasimabad, Hyderabad
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p className="text-gray-400">
                        © 2024 M/S HBAS & CO. All rights reserved. | Managing Director: Furqan Ali
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer