import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

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
                        <div className="text-white rounded-full">
                            <img className='md:w-18 w-14' src='./logo.jpeg' alt="HBAS & CO Logo" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-900">M/S HBAS & CO</h1>
                            <p className="text-sm text-gray-600">Civil Construction Contractor</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors ${
                                    location.pathname === item.path ? 'text-gray-900 border-b-2 border-gray-900' : ''
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        
                        {/* CTA Button */}
                        <Link
                            to="/subcontractor"
                            className="group px-6 py-3 bg-yellow-400 text-gray-900 rounded-full font-bold text-sm hover:bg-yellow-500 transition-all duration-300 flex items-center justify-center gap-2 hover:gap-3 shadow-lg hover:shadow-yellow-400/50"
                        >
                            Register as Sub Contractor
                            <ArrowRight className="transition-all" size={18} strokeWidth={2.5} />
                        </Link>
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 rounded-md text-gray-700 hover:text-gray-900"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="lg:hidden pb-4 space-y-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block px-4 py-3 text-gray-700 hover:text-gray-900 font-medium rounded-lg transition-colors ${
                                    location.pathname === item.path ? 'text-gray-900 bg-gray-100' : ''
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        
                        {/* Mobile CTA Button */}
                        <Link
                            to="/subcontractor"
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-yellow-400 text-gray-900 rounded-full font-bold text-sm hover:bg-yellow-500 transition-all duration-300 shadow-lg mt-4"
                        >
                            Register as Sub Contractor
                            <ArrowRight size={18} strokeWidth={2.5} />
                        </Link>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;