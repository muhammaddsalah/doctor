
import React from 'react';
import { 
  CheckCircle, 
  Clock 
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  const features = [
    'تشخيص دقيق بواسطة أطباء متخصصين',
    'معدات طبية متطورة',
    'عيادات متخصصة في مختلف المجالات',
    'رعاية متكاملة ومتابعة مستمرة',
    'تنسيق بين التخصصات المختلفة',
    'مواعيد مرنة ونظام حجز إلكتروني'
  ];

  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
                alt="خدمات طبية" 
                className="rounded-lg shadow-xl animate-fade-in"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center">
                  <Clock className="text-medical-primary mr-2" />
                  <div>
                    <p className="font-bold">ساعات العمل</p>
                    <p className="text-sm text-gray-600">السبت - الخميس: 9:00 - 21:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 text-right">
            <h2 className="text-3xl font-bold mb-6 text-medical-dark">خدماتنا المتميزة</h2>
            <p className="text-gray-600 mb-6">
              نقدم في مركز الدكتور مجموعة شاملة من الخدمات الطبية المتميزة التي تلبي احتياجات مرضانا.
              يتميز المركز بتوفير أحدث التقنيات الطبية وفريق من الأطباء المتخصصين لضمان تقديم أفضل رعاية صحية.
            </p>
            
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center animate-fade-in" style={{ animationDelay: `${index * 0.1 + 0.5}s` }}>
                  <CheckCircle className="text-medical-accent ml-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
