import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { db } from '@/lib/firebase';
import { collection, addDoc, doc, updateDoc, getDocs } from 'firebase/firestore';
import { toast } from '@/hooks/use-toast';

interface Specialty {
  id: string;
  title: string;
}

interface Doctor {
  id: string;
  name: string;
  title: string;
  specialization: string;
  experience: string;
  image: string;
  consultationPrice: number | string;
  phoneNumber?: string;
  specialty: string;
}

interface DoctorFormProps {
  doctor?: Doctor;
  onSuccess: () => void;
}

const DoctorForm: React.FC<DoctorFormProps> = ({ doctor, onSuccess }) => {
  const [specialties, setSpecialties] = useState<Specialty[]>([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    specialization: '',
    experience: '',
    image: '',
    consultationPrice: '',
    phoneNumber: '',
    specialty: ''
  });

  // جلب التخصصات من قاعدة البيانات
  useEffect(() => {
    const fetchSpecialties = async () => {
      try {
        const specialtiesCollection = collection(db, 'specialties');
        const specialtiesSnapshot = await getDocs(specialtiesCollection);
        const specialtiesList = specialtiesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Specialty[];
        
        setSpecialties(specialtiesList);
      } catch (error) {
        console.error('Error fetching specialties:', error);
      }
    };

    fetchSpecialties();
  }, []);

  // تعبئة البيانات في حالة التعديل
  useEffect(() => {
    if (doctor) {
      setFormData({
        name: doctor.name || '',
        title: doctor.title || '',
        specialization: doctor.specialization || '',
        experience: doctor.experience || '',
        image: doctor.image || '',
        consultationPrice: typeof doctor.consultationPrice === 'number' ? 
          doctor.consultationPrice.toString() : doctor.consultationPrice || '',
        phoneNumber: doctor.phoneNumber || '',
        specialty: doctor.specialty || ''
      });
    }
  }, [doctor]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const doctorData = {
        name: formData.name,
        title: formData.title,
        specialization: formData.specialization,
        experience: formData.experience,
        image: formData.image || '/images/default-doctor.jpg',
        consultationPrice: isNaN(Number(formData.consultationPrice)) ? 
          formData.consultationPrice : Number(formData.consultationPrice),
        phoneNumber: formData.phoneNumber,
        specialty: formData.specialty
      };

      if (doctor) {
        // تحديث طبيب موجود
        const doctorRef = doc(db, 'doctors', doctor.id);
        await updateDoc(doctorRef, doctorData);
        toast({
          title: 'تم التحديث',
          description: 'تم تحديث بيانات الطبيب بنجاح',
        });
      } else {
        // إضافة طبيب جديد
        await addDoc(collection(db, 'doctors'), doctorData);
        toast({
          title: 'تمت الإضافة',
          description: 'تم إضافة الطبيب بنجاح',
        });
      }

      onSuccess();
    } catch (error) {
      console.error('Error saving doctor:', error);
      toast({
        title: 'خطأ',
        description: 'حدث خطأ أثناء حفظ بيانات الطبيب',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">اسم الطبيب</Label>
          <Input 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="أدخل اسم الطبيب" 
            required 
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="title">اللقب</Label>
          <Input 
            id="title" 
            name="title" 
            value={formData.title} 
            onChange={handleChange} 
            placeholder="مثال: استشاري، أخصائي" 
            required 
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="specialization">التخصص الدقيق</Label>
          <Input 
            id="specialization" 
            name="specialization" 
            value={formData.specialization} 
            onChange={handleChange} 
            placeholder="مثال: جراحة العظام، أمراض القلب" 
            required 
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="specialty">القسم</Label>
          <Select 
            value={formData.specialty} 
            onValueChange={(value) => handleSelectChange('specialty', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="اختر القسم" />
            </SelectTrigger>
            <SelectContent>
              {specialties.length > 0 ? (
                specialties.map((specialty) => (
                  <SelectItem key={specialty.id} value={specialty.id}>
                    {specialty.title}
                  </SelectItem>
                ))
              ) : (
                <SelectItem value="default">لا توجد أقسام متاحة</SelectItem>
              )}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="experience">الخبرة</Label>
          <Input 
            id="experience" 
            name="experience" 
            value={formData.experience} 
            onChange={handleChange} 
            placeholder="مثال: 10 سنوات" 
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="consultationPrice">سعر الكشف</Label>
          <Input 
            id="consultationPrice" 
            name="consultationPrice" 
            value={formData.consultationPrice} 
            onChange={handleChange} 
            placeholder="أدخل سعر الكشف" 
            required 
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phoneNumber">رقم الهاتف</Label>
          <Input 
            id="phoneNumber" 
            name="phoneNumber" 
            value={formData.phoneNumber} 
            onChange={handleChange} 
            placeholder="أدخل رقم الهاتف (اختياري)" 
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="image">رابط الصورة</Label>
          <Input 
            id="image" 
            name="image" 
            value={formData.image} 
            onChange={handleChange} 
            placeholder="أدخل رابط صورة الطبيب" 
          />
        </div>
      </div>
      
      <div className="flex justify-end space-x-2 pt-4">
        <Button type="button" variant="outline" onClick={onSuccess}>
          إلغاء
        </Button>
        <Button type="submit" className="bg-medical-primary hover:bg-medical-dark" disabled={loading}>
          {loading ? 'جاري الحفظ...' : doctor ? 'تحديث' : 'إضافة'}
        </Button>
      </div>
    </form>
  );
};

export default DoctorForm;
