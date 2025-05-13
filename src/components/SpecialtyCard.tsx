
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

interface SpecialtyCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  directCall?: boolean;
}

const SpecialtyCard: React.FC<SpecialtyCardProps> = ({ title, description, icon, link, directCall }) => {
  return (
    <div className="medical-card group p-6 flex flex-col h-full animate-fade-in">
      <div className="medical-icon mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-medical-dark">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <div className="mt-4 pt-4 border-t border-gray-200">
        {directCall ? (
          <a href="tel:+201000570375" className="w-full">
            <Button className="w-full bg-medical-primary text-white hover:bg-medical-dark">
              احجز الآن
            </Button>
          </a>
        ) : (
          <Link to={`/specialties/${link.split('/').pop()}`} className="w-full">
            <Button variant="outline" className="w-full border-medical-primary text-medical-primary hover:bg-medical-primary hover:text-white">
              المزيد من التفاصيل
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default SpecialtyCard;
