import { useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function BookForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    specialty: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // 1. حفظ البيانات في Firestore
      await addDoc(collection(db, "bookings"), {
        ...formData,
        createdAt: new Date(),
        status: 'جديد'
      });

      // 2. إرسال رسالة واتساب
      const message = `حجز جديد:\nالاسم: ${formData.name}\nالهاتف: ${formData.phone}\nالتاريخ: ${formData.date}\nالتخصص: ${formData.specialty}`;
      
      window.open(`https://wa.me/20123456789?text=${encodeURIComponent(message)}`);
      
      // إعادة تعيين النموذج
      setFormData({
        name: '',
        phone: '',
        date: '',
        specialty: ''
      });
      
      alert('تم إرسال الحجز بنجاح!');
    } catch (error) {
      console.error('Error saving booking:', error);
      alert('حدث خطأ أثناء حفظ الحجز');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rtl">
      <div>
        <Label htmlFor="name">الاسم بالكامل</Label>
        <Input 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
      </div>
      
      <div>
        <Label htmlFor="phone">رقم الهاتف</Label>
        <Input 
          id="phone" 
          name="phone" 
          type="tel" 
          value={formData.phone} 
          onChange={handleChange} 
          required
        />
      </div>
      
      <div>
        <Label htmlFor="date">تاريخ الحجز</Label>
        <Input 
          id="date" 
          name="date" 
          type="date" 
          value={formData.date} 
          onChange={handleChange} 
          required
        />
      </div>
      
      <div>
        <Label htmlFor="specialty">التخصص المطلوب</Label>
        <Input 
          id="specialty" 
          name="specialty" 
          value={formData.specialty} 
          onChange={handleChange} 
          required
        />
      </div>
      
      <Button type="submit" className="w-full">
        احجز الآن وإرسال البيانات للواتساب
      </Button>
    </form>
  );
}
