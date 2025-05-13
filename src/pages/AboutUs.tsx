
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Building, Shield, Award, Users } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ direction: 'rtl' }}>
      <main className="flex-grow">
        <Navbar />

        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center text-medical-primary">عن مركز الدكتور الطبي</h1>
          
          <div className="mb-12">
            <img 
              src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="مركز الدكتور الطبي" 
              className="w-full h-80 object-cover rounded-lg shadow-lg mb-8"
            />
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg mb-6">
                تأسس مركز الدكتور الطبي في عام 2010 بهدف تقديم خدمات طبية متكاملة ذات جودة عالية للمرضى في جميع أنحاء المنطقة. 
                يضم المركز نخبة من أمهر الأطباء والاستشاريين في مختلف التخصصات الطبية، ويحرص على توفير أحدث التقنيات والمعدات الطبية 
                لتقديم رعاية صحية متميزة تلبي احتياجات جميع الفئات العمرية.
              </p>
              <p className="text-lg mb-6">
                يتميز المركز بموقعه المركزي وسهولة الوصول إليه، كما يوفر مواقف سيارات مجانية للمراجعين. 
                تم تصميم المركز وفق أعلى المعايير العالمية لتوفير بيئة مريحة وهادئة للمرضى والمراجعين، 
                مع الالتزام التام بمعايير الخصوصية والنظافة.
              </p>
              <p className="text-lg">
                نؤمن في مركز الدكتور الطبي بأن صحة المريض هي أولويتنا الأولى، لذلك نحرص على تقديم خدمات تشخيصية وعلاجية دقيقة 
                وشاملة، مع متابعة مستمرة لحالة المرضى لضمان تحسن حالتهم الصحية وتقديم الدعم اللازم لهم.
              </p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-8 text-center">قيمنا ومميزاتنا</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 space-x-reverse animate-fade-in">
              <div className="bg-medical-primary p-3 rounded-full">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">الجودة والاعتمادية</h3>
                <p className="text-gray-600">نلتزم بأعلى معايير الجودة في جميع خدماتنا الطبية، ونحرص على الحصول على الاعتمادات المحلية والدولية التي تؤكد التزامنا بمعايير الرعاية الصحية العالمية.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 space-x-reverse animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="bg-medical-primary p-3 rounded-full">
                <Building className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">مرافق حديثة متكاملة</h3>
                <p className="text-gray-600">يضم المركز أحدث التجهيزات والمعدات الطبية، مع غرف عمليات متطورة، ومختبرات تحليل مجهزة بأحدث الأجهزة، ووحدات أشعة متكاملة.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 space-x-reverse animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="bg-medical-primary p-3 rounded-full">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">كادر طبي متميز</h3>
                <p className="text-gray-600">نفخر بفريقنا الطبي المكون من نخبة من الأطباء والاستشاريين الحاصلين على شهادات عليا من أفضل الجامعات العالمية، مع خبرات واسعة في مجالاتهم.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 space-x-reverse animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="bg-medical-primary p-3 rounded-full">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">تجربة مريض متميزة</h3>
                <p className="text-gray-600">نحرص على تقديم تجربة متميزة للمرضى من خلال سهولة حجز المواعيد، وتقليل أوقات الانتظار، وتوفير خدمات المتابعة بعد العلاج.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
