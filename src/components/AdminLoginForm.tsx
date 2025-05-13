
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Lock, User } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { auth } from '@/lib/firebase';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  sendEmailVerification 
} from 'firebase/auth';

const AdminLoginForm: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // التحقق من أن الحقول ممتلئة
      if (!username || !password) {
        throw new Error('الرجاء ملء جميع الحقول');
      }

      // محاولة تسجيل الدخول باستخدام Firebase
      const userCredential = await signInWithEmailAndPassword(auth, username, password);
      const user = userCredential.user;

      // التحقق من أن المستخدم مسجّل
      if (!user) {
        throw new Error('فشل تسجيل الدخول. تحقق من بياناتك');
      }

      // التحقق من أن المستخدم هو المدير
      if (user.email !== 'admin@sehaty.com') {
        throw new Error('هذه الصفحة مخصصة للمدير فقط');
      }
      
      // إظهار رسالة نجاح
      toast({
        title: "تم تسجيل الدخول بنجاح",
        description: "جاري تحويلك إلى لوحة التحكم...",
      });
      
      // التوجيه إلى لوحة التحكم مع الحفاظ على الحالة السابقة
      navigate('/admin/dashboard', { state: { from: location } });
    } catch (error: any) {
      // إظهار رسالة الخطأ
      toast({
        title: "خطأ في تسجيل الدخول",
        description: error.message,
        variant: "destructive"
      });
      // التوجيه إلى الصفحة الرئيسية في حالة الفشل
      navigate('/');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-medical-dark">لوحة تحكم المدير</h2>
        <p className="text-gray-600">الرجاء تسجيل الدخول للوصول إلى لوحة التحكم</p>
      </div>
      
      <form className="space-y-6" onSubmit={handleLogin}>
        <div className="space-y-2">
          <Label htmlFor="username">اسم المستخدم</Label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <User size={18} />
            </div>
            <Input 
              id="username" 
              placeholder="أدخل اسم المستخدم" 
              className="pl-10 text-right" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password">كلمة المرور</Label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <Lock size={18} />
            </div>
            <Input 
              id="password" 
              type="password" 
              placeholder="أدخل كلمة المرور" 
              className="pl-10 text-right" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-medical-primary hover:bg-medical-dark"
          disabled={isLoading}
        >
          {isLoading ? 'جاري التحقق...' : 'تسجيل الدخول كمسؤول'}
        </Button>
       </form>
      
      <div className="mt-4 text-center">
        <a href="#" className="text-sm text-medical-primary hover:underline">
          نسيت كلمة المرور؟
        </a>
      </div>
    </div>
  );
};

export default AdminLoginForm;
