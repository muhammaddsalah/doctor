
import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-medical-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">مركز الدكتور الطبي المتكامل ببنها</h3>
            <p className="text-gray-300">
              مركز طبي متكامل يقدم خدمات صحية متميزة بأيدي نخبة من الأطباء المتخصصين 
              لضمان أفضل رعاية طبية لمرضانا.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">تواصل معنا</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="mr-2" size={16} />
                <a href="tel:+201000570375" className="hover:text-medical-primary">+20 100 057 0375</a>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2" size={16} />
                <span>بنها - القليوبية</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">ساعات العمل</h3>
            <ul className="space-y-1">
              <li className="flex justify-between">
                <span>السبت - الخميس:</span>
                <span>9:00 - 21:00</span>
              </li>
              <li className="flex justify-between">
                <span>الجمعة:</span>
                <span>مغلق</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} مركز الدكتور الطبي المتكامل ببنها. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
