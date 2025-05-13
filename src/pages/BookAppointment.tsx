
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useToast } from '../hooks/use-toast';

interface AppointmentFormData {
  name: string;
  phone: string;

  specialty: string;
  date: string;
  message: string;
}

const BookAppointment: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<AppointmentFormData>();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const location = useLocation();
  
  const specialties = [
    { value: "internal-medicine", label: "الباطنة والجهاز الهضمي", price: 250 },
    { value: "cardiology", label: "القلب والأوعية الدموية", price: 300 },
    { value: "addiction", label: "علاج الإدمان وإعادة التأهيل", price: 350 },
    { value: "ophthalmology", label: "العيون", price: 200 },
    { value: "dentistry", label: "الأسنان", price: 180 },
    { value: "radiology", label: "الأشعة والتصوير", price: 400 }
  ];
  
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("");
  const [appointmentPrice, setAppointmentPrice] = useState<number>(0);
  
  useEffect(() => {
    // Check URL parameters for specialty
    const searchParams = new URLSearchParams(location.search);
    const specialtyParam = searchParams.get('specialty');
    
    if (specialtyParam) {
      setValue('specialty', specialtyParam);
      setSelectedSpecialty(specialtyParam);
      
      const specialty = specialties.find(s => s.value === specialtyParam);
      if (specialty) {
        setAppointmentPrice(specialty.price);
      }
    }
  }, [location, setValue, specialties]);
  
  const handleSpecialtyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedSpecialty(value);
    
    const specialty = specialties.find(s => s.value === value);
    if (specialty) {
      setAppointmentPrice(specialty.price);
    } else {
      setAppointmentPrice(0);
    }
  };
  
  const onSubmit = async (data: AppointmentFormData) => {
    setIsSubmitting(true);
    
    // تجهيز نص الرسالة للواتساب
    const specialty = specialties.find(s => s.value === data.specialty);
    const message = `*حجز موعد جديد*\n\n` +
      `الاسم: ${data.name}\n` +
      `رقم الهاتف: ${data.phone}\n` +

      `القسم: ${specialty?.label || data.specialty}\n` +
      `التاريخ المطلوب: ${data.date}\n` +
      `ملاحظات: ${data.message}\n` +
      `سعر الكشف: ${appointmentPrice} ج.م`;

    // إنشاء رابط الواتساب
    const whatsappUrl = `https://wa.me/201000570375?text=${encodeURIComponent(message)}`;
    
    // فتح الواتساب
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "تم إرسال طلب الحجز",
      description: "سيتم فتح الواتساب للتواصل مع الطبيب",
    });
    
    reset();
    setIsSubmitting(false);
  };
  
  return (
    <div className="min-h-screen flex flex-col pt-16" style={{ direction: 'rtl' }}>
      <main className="flex-grow">
        <Navbar />

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold mb-4 text-medical-primary">حجز موعد جديد</h1>
              <p className="text-lg text-gray-600">يرجى ملء النموذج أدناه لحجز موعد مع أحد أطبائنا المتخصصين</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">الاسم الكامل *</label>
                    <input
                      id="name"
                      type="text"
                      className={`w-full px-4 py-3 border rounded-md focus:ring-1 focus:ring-medical-primary ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="أدخل اسمك الكامل"
                      {...register("name", { required: "الاسم مطلوب" })}
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">رقم الهاتف *</label>
                    <input
                      id="phone"
                      type="tel"
                      className={`w-full px-4 py-3 border rounded-md focus:ring-1 focus:ring-medical-primary ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="أدخل رقم هاتفك"
                      {...register("phone", { required: "رقم الهاتف مطلوب" })}
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
                  </div>
                </div>
                

                
                <div className="form-group">
                  <label htmlFor="specialty" className="block text-gray-700 font-medium mb-2">التخصص المطلوب *</label>
                  <select
                    id="specialty"
                    className={`w-full px-4 py-3 border rounded-md focus:ring-1 focus:ring-medical-primary ${errors.specialty ? 'border-red-500' : 'border-gray-300'}`}
                    {...register("specialty", { required: "يرجى اختيار التخصص" })}
                    onChange={handleSpecialtyChange}
                    value={selectedSpecialty}
                    disabled={selectedSpecialty !== ""}
                  >
                    <option value="">اختر التخصص</option>
                    {specialties.map((specialty) => (
                      <option key={specialty.value} value={specialty.value}>
                        {specialty.label}
                      </option>
                    ))}
                  </select>
                  {errors.specialty && <p className="mt-1 text-sm text-red-500">{errors.specialty.message}</p>}
                </div>
                
                {appointmentPrice > 0 && (
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="font-bold text-lg">سعر الكشف: <span className="text-medical-primary">{appointmentPrice} ريال</span></p>
                  </div>
                )}
                
                <div className="form-group">
                  <label htmlFor="date" className="block text-gray-700 font-medium mb-2">التاريخ المفضل *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="date"
                      type="date"
                      className={`w-full px-4 py-3 border rounded-md focus:ring-1 focus:ring-medical-primary pr-10 ${errors.date ? 'border-red-500' : 'border-gray-300'}`}
                      {...register("date", { required: "يرجى اختيار تاريخ" })}
                    />
                  </div>
                  {errors.date && <p className="mt-1 text-sm text-red-500">{errors.date.message}</p>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">الأعراض أو ملاحظات إضافية</label>
                  <textarea
                    id="message"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-medical-primary h-32"
                    placeholder="اكتب تفاصيل حالتك أو أي ملاحظات إضافية"
                    {...register("message")}
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <Button 
                    type="submit" 
                    className="bg-medical-primary hover:bg-medical-dark text-white px-8 py-3 text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'جاري الحجز...' : 'تأكيد حجز الموعد'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookAppointment;
