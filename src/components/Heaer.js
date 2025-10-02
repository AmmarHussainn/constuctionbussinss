import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, CheckCircle, Award, Users, Calendar } from 'lucide-react';

// Header Component
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const location = useLocation();

    const navigation = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Team', path: '/team' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <header className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <Link to="/" className="flex items-center space-x-4">
                        <div className=" text-white rounded-full">
                            {/* <span className="font-bold text-xl">H&C</span> */}
                            <img className='md:w-18 w-14' src='./logo.jpeg' />

                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-900">M/S HBAS & CO</h1>
                            <p className="text-sm text-gray-600">Civil Construction Contractor</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`text-gray-700 hover:text-gray-900 px-3 py-2  text-sm font-medium transition-colors ${location.pathname === item.path ? 'text-gray-900 border-b-2 border-gray-900' : ''
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden pb-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium ${location.pathname === item.path ? 'text-blue-600 bg-blue-50' : ''
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
};


export default Header
