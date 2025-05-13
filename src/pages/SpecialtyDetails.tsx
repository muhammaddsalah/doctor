import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { specialtiesData } from '../data/specialtiesData';

const SpecialtyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const specialty = specialtiesData.find(s => s.id === id)
  
  if (!specialty) {
    return (
      <div className="min-h-screen flex flex-col pt-16" style={{ direction: 'rtl' }}>
        <main className="flex-grow">
          <Navbar />

          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4">التخصص غير موجود</h1>
            <p>عذراً، لم يتم العثور على التخصص المطلوب.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col" style={{ direction: 'rtl' }}>
      <main className="flex-grow">
        <Navbar />

        <div className="relative h-[400px] mb-12 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: `url(${specialty?.coverImage || '/images/default-cover.jpg'})`,
              filter: 'brightness(0.6)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{specialty?.title}</h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl leading-relaxed">
              {specialty?.description}
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">أطباؤنا المتخصصون</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {specialty.doctors.map((doctor, index) => (
              <Card key={index} className="overflow-hidden animate-fade-in hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="h-64 overflow-hidden">
                  <img 
                    src={doctor.image || '/images/default-doctor.jpg'} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/default-doctor.jpg';
                    }}
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-medical-primary">{doctor.name}</h3>
                  <p className="text-gray-600">{typeof doctor.consultationPrice === 'number' ? `${doctor.consultationPrice} جنيه` : doctor.consultationPrice}</p>
                  <div className="border-t border-gray-200 pt-3">
                    <p className="text-sm mb-2">
                      <span className="font-semibold">التخصص: </span>
                      {doctor.specialization}
                    </p>
                    <p className="text-sm mb-2">
                      <span className="font-semibold">الخبرة: </span>
                      {doctor.experience}
                    </p>
                    <div className="text-lg font-bold text-primary">
                      {doctor.phoneNumber ? (
                        <a
                          href={`tel:${doctor.phoneNumber}`}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
                        >
                          <Phone className="w-5 h-5" />
                          {doctor.consultationPrice}
                        </a>
                      ) : (
                        <span>{doctor.consultationPrice} ج.م</span>
                      )}
                    </div>
                    <Button
                      className="bg-medical-primary hover:bg-medical-dark text-white w-full"
                      onClick={() => {
                        const message = `*حجز موعد جديد*\n\n` +
                          `القسم: ${specialty.title}\n` +
                          `الطبيب: ${doctor.name}\n` +
                          `سعر الكشف: 600 ج.م\n\n` +
                          `الخدمات المتاحة:\n` +
                          specialty.services.map(service => `- ${service.title}`).join('\n');

                        const whatsappUrl = `https://wa.me/201000570375?text=${encodeURIComponent(message)}`;
                        window.open(whatsappUrl, '_blank');
                      }}
                    >
                      احجز الآن
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <h2 className="text-2xl font-bold mb-6">خدماتنا في {specialty.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {specialty.services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md animate-fade-in overflow-hidden flex flex-col md:flex-row"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3 border-r-4 border-medical-primary">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SpecialtyDetails;
