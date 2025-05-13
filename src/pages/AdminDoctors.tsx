import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Pencil, Trash2, Plus, Search, ArrowLeft } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { toast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import DoctorForm from '../components/DoctorForm';

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

const AdminDoctors: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  // جلب بيانات الأطباء من قاعدة البيانات
  const fetchDoctors = async () => {
    setLoading(true);
    try {
      const doctorsCollection = collection(db, 'doctors');
      const doctorsSnapshot = await getDocs(doctorsCollection);
      const doctorsList = doctorsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Doctor[];
      
      setDoctors(doctorsList);
    } catch (error) {
      console.error('Error fetching doctors:', error);
      toast({
        title: 'خطأ',
        description: 'حدث خطأ أثناء جلب بيانات الأطباء',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  // حذف طبيب
  const handleDeleteDoctor = async (id: string) => {
    if (window.confirm('هل أنت متأكد من حذف هذا الطبيب؟')) {
      try {
        await deleteDoc(doc(db, 'doctors', id));
        setDoctors(doctors.filter(doctor => doctor.id !== id));
        toast({
          title: 'تم الحذف',
          description: 'تم حذف الطبيب بنجاح',
        });
      } catch (error) {
        console.error('Error deleting doctor:', error);
        toast({
          title: 'خطأ',
          description: 'حدث خطأ أثناء حذف الطبيب',
          variant: 'destructive'
        });
      }
    }
  };

  // تصفية الأطباء حسب البحث
  const filteredDoctors = doctors.filter(doctor => 
    doctor.name.includes(searchQuery) || 
    doctor.specialization.includes(searchQuery)
  );

  return (
    <div className="min-h-screen bg-gray-50" style={{ direction: 'rtl' }}>
      {/* شريط التنقل العلوي */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/admin/dashboard" className="flex items-center text-gray-500 hover:text-gray-700">
              <ArrowLeft className="ml-1" size={20} />
              <span>العودة للوحة التحكم</span>
            </Link>
            <h1 className="text-2xl font-bold text-gray-800 mr-4">إدارة الأطباء</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <TabsList className="mb-4 md:mb-0">
              <TabsTrigger value="all">جميع الأطباء</TabsTrigger>
              <TabsTrigger value="active">النشطين</TabsTrigger>
            </TabsList>
            
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  placeholder="بحث عن طبيب..." 
                  className="pl-4 pr-10 w-full md:w-64" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-medical-primary hover:bg-medical-dark">
                    <Plus className="ml-2" size={16} />
                    إضافة طبيب جديد
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>إضافة طبيب جديد</DialogTitle>
                  </DialogHeader>
                  <DoctorForm 
                    onSuccess={() => {
                      setIsAddDialogOpen(false);
                      fetchDoctors();
                    }} 
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          <TabsContent value="all" className="mt-6">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-medical-primary"></div>
              </div>
            ) : filteredDoctors.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDoctors.map((doctor) => (
                  <Card key={doctor.id} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                    <div className="h-48 overflow-hidden bg-gray-100 relative">
                      <img 
                        src={doctor.image || '/images/default-doctor.jpg'} 
                        alt={doctor.name} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/images/default-doctor.jpg';
                        }}
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-medical-primary">{doctor.name}</h3>
                          <p className="text-gray-600">{doctor.title}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Dialog open={isEditDialogOpen && selectedDoctor?.id === doctor.id} 
                                  onOpenChange={(open) => {
                                    if (!open) setSelectedDoctor(null);
                                    setIsEditDialogOpen(open);
                                  }}>
                            <DialogTrigger asChild>
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="h-8 w-8" 
                                onClick={() => setSelectedDoctor(doctor)}
                              >
                                <Pencil size={16} />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[600px]">
                              <DialogHeader>
                                <DialogTitle>تعديل بيانات الطبيب</DialogTitle>
                              </DialogHeader>
                              {selectedDoctor && (
                                <DoctorForm 
                                  doctor={selectedDoctor} 
                                  onSuccess={() => {
                                    setIsEditDialogOpen(false);
                                    setSelectedDoctor(null);
                                    fetchDoctors();
                                  }} 
                                />
                              )}
                            </DialogContent>
                          </Dialog>
                          
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
                            onClick={() => handleDeleteDoctor(doctor.id)}
                          >
                            <Trash2 size={16} />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="font-semibold">التخصص:</span>
                          <span>{doctor.specialization}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">الخبرة:</span>
                          <span>{doctor.experience}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">سعر الكشف:</span>
                          <span>{typeof doctor.consultationPrice === 'number' ? 
                            `${doctor.consultationPrice} جنيه` : doctor.consultationPrice}</span>
                        </div>
                        {doctor.phoneNumber && (
                          <div className="flex justify-between">
                            <span className="font-semibold">رقم الهاتف:</span>
                            <span>{doctor.phoneNumber}</span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span className="font-semibold">القسم:</span>
                          <span>{doctor.specialty}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-500 mb-4">لا يوجد أطباء متاحين حالياً</p>
                <Button 
                  onClick={() => setIsAddDialogOpen(true)}
                  className="bg-medical-primary hover:bg-medical-dark"
                >
                  <Plus className="ml-2" size={16} />
                  إضافة طبيب جديد
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="active">
            {/* نفس محتوى التاب السابق مع فلترة للأطباء النشطين فقط */}
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-500">سيتم إضافة هذه الميزة قريباً</p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDoctors;
