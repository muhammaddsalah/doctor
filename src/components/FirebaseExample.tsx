import React, { useEffect, useState } from 'react';
import { auth, db } from '../lib/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  // أضف المزيد من الحقول حسب احتياجك
}

const FirebaseExample: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(auth.currentUser);

  // مراقبة حالة المستخدم
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // جلب الأطباء من Firestore
  const fetchDoctors = async (specialtyFilter?: string) => {
    try {
      setLoading(true);
      const doctorsRef = collection(db, 'doctors');
      
      // إضافة فلتر إذا تم تحديد تخصص
      const doctorsQuery = specialtyFilter 
        ? query(doctorsRef, where('specialty', '==', specialtyFilter))
        : doctorsRef;

      const snapshot = await getDocs(doctorsQuery);
      const doctorsList: Doctor[] = [];
      
      snapshot.forEach((doc) => {
        doctorsList.push({
          id: doc.id,
          ...doc.data() as Omit<Doctor, 'id'>
        });
      });

      setDoctors(doctorsList);
      setError(null);
    } catch (err) {
      console.error('خطأ في جلب بيانات الأطباء:', err);
      setError('حدث خطأ أثناء جلب بيانات الأطباء');
    } finally {
      setLoading(false);
    }
  };

  // تسجيل الدخول
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // تم تسجيل الدخول بنجاح
    } catch (err) {
      console.error('خطأ في تسجيل الدخول:', err);
      setError('فشل تسجيل الدخول. تحقق من بريدك الإلكتروني وكلمة المرور.');
    }
  };

  // تسجيل الخروج
  const handleLogout = async () => {
    try {
      await signOut(auth);
      // تم تسجيل الخروج بنجاح
    } catch (err) {
      console.error('خطأ في تسجيل الخروج:', err);
    }
  };

  // جلب الأطباء عند تحميل المكون
  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">مثال على استخدام Firebase</h2>
      
      {/* نموذج تسجيل الدخول / تسجيل الخروج */}
      {user ? (
        <div className="mb-6">
          <p className="mb-2">مرحباً بك! أنت مسجل الدخول كـ: {user.email}</p>
          <button 
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            تسجيل الخروج
          </button>
        </div>
      ) : (
        <form onSubmit={handleLogin} className="mb-6">
          <div className="mb-4">
            <label className="block mb-1">البريد الإلكتروني:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 w-full rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">كلمة المرور:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 w-full rounded"
              required
            />
          </div>
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            تسجيل الدخول
          </button>
        </form>
      )}

      {/* عرض الأطباء */}
      <div>
        <h3 className="text-xl font-semibold mb-2">قائمة الأطباء</h3>
        <div className="mb-4">
          <button 
            onClick={() => fetchDoctors()}
            className="bg-gray-200 px-3 py-1 rounded mr-2 hover:bg-gray-300"
          >
            الكل
          </button>
          <button 
            onClick={() => fetchDoctors('جلدية')}
            className="bg-gray-200 px-3 py-1 rounded mr-2 hover:bg-gray-300"
          >
            جلدية
          </button>
          <button 
            onClick={() => fetchDoctors('باطنة')}
            className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
          >
            باطنة
          </button>
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        {loading ? (
          <p>جاري التحميل...</p>
        ) : doctors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="border p-4 rounded shadow">
                <h4 className="font-bold">{doctor.name}</h4>
                <p>التخصص: {doctor.specialty}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>لا يوجد أطباء للعرض</p>
        )}
      </div>
    </div>
  );
};

export default FirebaseExample;
