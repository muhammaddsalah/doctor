
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  FilePen, 
  Calendar, 
  ChartBar, 
  Bell, 
  Search, 
  Percent, 
  Mail, 
  Shield, 
  Database 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AdminDashboard: React.FC = () => {
  // بيانات وهمية للإحصائيات
  const stats = [
    { title: 'زيارات اليوم', value: '152', change: '+12%' },
    { title: 'إجمالي المواعيد', value: '84', change: '+4%' },
    { title: 'الأقسام الأكثر زيارة', value: 'الأسنان', change: '' },
    { title: 'رسائل جديدة', value: '23', change: 'غير مقروءة' },
  ];

  const dashboardItems = [
    { icon: <LayoutDashboard size={24} />, title: 'لوحة المعلومات', link: '/admin/dashboard', color: 'bg-blue-100' },
    { icon: <Users size={24} />, title: 'إدارة الأطباء', link: '/admin/doctors', color: 'bg-green-100' },
    { icon: <FilePen size={24} />, title: 'إدارة الخدمات', link: '/admin/services', color: 'bg-purple-100' },
    { icon: <Calendar size={24} />, title: 'المواعيد', link: '/admin/appointments', color: 'bg-yellow-100' },
    { icon: <ChartBar size={24} />, title: 'الإحصائيات', link: '/admin/statistics', color: 'bg-red-100' },
    { icon: <Bell size={24} />, title: 'إشعارات النظام', link: '/admin/notifications', color: 'bg-indigo-100' },
    { icon: <Search size={24} />, title: 'إدارة البحث', link: '/admin/search', color: 'bg-pink-100' },
    { icon: <Percent size={24} />, title: 'العروض والخصومات', link: '/admin/offers', color: 'bg-orange-100' },
    { icon: <Mail size={24} />, title: 'النشرة البريدية', link: '/admin/newsletter', color: 'bg-teal-100' },
    { icon: <Shield size={24} />, title: 'الأمان والصلاحيات', link: '/admin/security', color: 'bg-cyan-100' },
    { icon: <Database size={24} />, title: 'قاعدة البيانات', link: '/admin/database', color: 'bg-rose-100' },
  ];

  return (
    <div className="min-h-screen bg-gray-50" style={{ direction: 'rtl' }}>
      {/* شريط التنقل العلوي */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-800 ms-2">لوحة تحكم المدير</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">مرحباً، مدير النظام</span>
            <Link to="/">
              <Button variant="outline" size="sm">العودة للموقع</Button>
            </Link>
            <Link to="/">
              <Button variant="ghost" size="sm">تسجيل الخروج</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* ملخص الإحصائيات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <Card key={i}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">{stat.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* عناصر لوحة التحكم */}
        <h2 className="text-xl font-semibold mb-4">أقسام الإدارة</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dashboardItems.map((item, i) => (
            <Link to={item.link} key={i}>
              <div className={`${item.color} rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200 flex flex-col items-center text-center`}>
                <div className="mb-3">{item.icon}</div>
                <h3 className="font-medium">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
        
        {/* تنبيهات النظام - قسم جديد */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">التنبيهات الأخيرة</h2>
          <Card>
            <CardContent className="p-6">
              <ul className="space-y-4">
                <li className="flex items-center gap-3 pb-3 border-b">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Calendar size={16} className="text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium">تم إضافة 12 موعد جديد</p>
                    <p className="text-sm text-gray-600">اليوم، 10:30 صباحاً</p>
                  </div>
                </li>
                <li className="flex items-center gap-3 pb-3 border-b">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Users size={16} className="text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium">تم تعديل بيانات الدكتور أحمد محمد</p>
                    <p className="text-sm text-gray-600">البارحة، 2:45 مساءً</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <Bell size={16} className="text-yellow-500" />
                  </div>
                  <div>
                    <p className="font-medium">تحديث جديد للنظام متاح</p>
                    <p className="text-sm text-gray-600">21 مايو، 9:15 صباحاً</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
