
import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { AlertTriangle } from 'lucide-react';

const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100" style={{ direction: 'rtl' }}>
      <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md w-full">
        <div className="flex justify-center mb-4">
          <AlertTriangle className="text-medical-primary w-16 h-16" />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-medical-dark">404</h1>
        <p className="text-xl text-gray-600 mb-6">عفواً! الصفحة غير موجودة</p>
        <p className="text-gray-500 mb-8">
          الصفحة التي تبحث عنها قد تكون محذوفة أو غير متوفرة حالياً
        </p>
        <Link to="/">
          <Button className="bg-medical-primary hover:bg-medical-dark">
            العودة إلى الصفحة الرئيسية
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
