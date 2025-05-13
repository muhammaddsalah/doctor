
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-medical-primary to-medical-dark text-white pb-20 min-h-[70vh] flex items-center">
      <div 
        className="absolute inset-0 opacity-20" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-10 text-right">
        <div className="max-w-2xl ml-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            مركز الدكتور الطبي المتكامل
          </h1>
          <p className="text-xl mb-8 text-gray-200 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            نقدم أفضل الخدمات الطبية مع نخبة من الأطباء المتخصصين في مختلف المجالات للعناية بصحتكم
          </p>
          <div className="flex flex-wrap gap-4 justify-end animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/admin">
              <Button size="lg" className="bg-white text-medical-primary hover:bg-gray-100 hover:text-medical-dark">
                لوحة التحكم
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                عن المركز
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
