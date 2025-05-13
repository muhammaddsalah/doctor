
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-3xl text-medical-primary font-bold">مركز الدكتور الطبي المتكامل ببنها</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-medical-primary px-3 py-2 text-md font-medium transition-colors duration-200">
              الرئيسية
            </Link>
            <Link to="/#specialties" onClick={(e) => { e.preventDefault(); scrollToSection('specialties'); }} className="text-gray-700 hover:text-medical-primary px-3 py-2 text-md font-medium transition-colors duration-200">
              التخصصات
            </Link>
            <Link to="/#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="text-gray-700 hover:text-medical-primary px-3 py-2 text-md font-medium transition-colors duration-200">
              الخدمات
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-medical-primary px-3 py-2 text-md font-medium transition-colors duration-200">
              عن المركز
            </Link>
            <a href="tel:+201000570375" className="ml-2">
              <Button className="bg-medical-primary hover:bg-medical-dark text-white">
                اتصل بنا
              </Button>
            </a>
            <a href="https://wa.me/201000570375" target="_blank" rel="noopener noreferrer" className="ml-2">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                واتساب
              </Button>
            </a>
          </div>
          
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-medical-primary">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-2">
            <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={toggleMenu}>
              الرئيسية
            </Link>
            <Link to="/#specialties" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={(e) => { e.preventDefault(); scrollToSection('specialties'); }}>
              التخصصات
            </Link>
            <Link to="/#services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
              الخدمات
            </Link>
            <Link to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={toggleMenu}>
              عن المركز
            </Link>
            <Link to="/admin" className="block px-4 py-2 text-sm bg-medical-primary text-white rounded mt-2" onClick={toggleMenu}>
              لوحة التحكم
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
