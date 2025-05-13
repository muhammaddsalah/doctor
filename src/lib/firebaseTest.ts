import { db, auth, analytics } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

// اختبار الاتصال بـ Firestore
export const testFirestoreConnection = async () => {
  try {
    // محاولة الوصول إلى مجموعة من Firestore للتأكد من أن الاتصال يعمل
    const testCollection = collection(db, 'test');
    const snapshot = await getDocs(testCollection);
    console.log('تم الاتصال بـ Firestore بنجاح!');
    return true;
  } catch (error) {
    console.error('خطأ في الاتصال بـ Firestore:', error);
    return false;
  }
};

// اختبار حالة المصادقة
export const checkAuthStatus = () => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log('المستخدم مسجل الدخول:', user.uid);
    } else {
      console.log('لا يوجد مستخدم مسجل الدخول');
    }
  });
};

// تأكيد تهيئة Analytics
export const checkAnalyticsInitialization = () => {
  if (analytics) {
    console.log('تم تهيئة Analytics بنجاح!');
    return true;
  } else {
    console.log('فشل في تهيئة Analytics');
    return false;
  }
};
