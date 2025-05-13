
import React from 'react';
import SpecialtyCard from './SpecialtyCard';
import { 
  Heart, Brain, Eye, Activity, Stethoscope, Hospital, Scissors, UserPlus, Sparkles, FlaskConical, Phone,
  Syringe, HeartPulse, Salad, LucideStethoscope, Ear, Baby, MonitorDot, BedDouble, Hotel
} from 'lucide-react';

const SpecialtiesSection: React.FC = () => {
  const specialties = [
    {
      title: 'الباطنة والجهاز الهضمي',
      description: 'تشخيص وعلاج أمراض الجهاز الهضمي والكبد بأحدث التقنيات الطبية',
      icon: <Stethoscope className="w-12 h-12" />,
      link: '/specialties/internal-medicine'
    },
    {
      title: 'القلب والأوعية الدموية',
      description: 'رعاية متكاملة لصحة القلب والوقاية من أمراض القلب والشرايين',
      icon: <Heart className="w-12 h-12" />,
      link: '/specialties/cardiology'
    },
    {
      title: 'الأشعة والتصوير',
      description: 'خدمات التشخيص والتصوير الشاملة لجميع الحالات المرضية بأحدث الأجهزة والتقنيات',
      icon: <Hospital className="w-12 h-12" />,
      link: '/specialties/radiology'
    },
    {
      title: 'المعامل',
      description: 'خدمات التحاليل الطبية الشاملة بأحدث الأجهزة والتقنيات',
      icon: <FlaskConical className="w-12 h-12" />,
      link: '/specialties/laboratory'
    },
    {
      title: 'الصدر',
      description: 'خدمات متكاملة لأمراض الصدر والجهاز التنفسي',
      icon: <LucideStethoscope className="w-12 h-12" />,
      link: '/specialties/chest'
    },
    {
      title: 'العمليات والجراحة',
      description: 'خدمات جراحية متكاملة تشمل جراحات السمنة والجراحة العامة وجراحة الأورام',
      icon: <Scissors className="w-12 h-12" />,
      link: '/specialties/surgery'
    },
    {
      title: 'علاج الإدمان وإعادة التأهيل',
      description: 'برامج متكاملة للعلاج من الإدمان وإعادة التأهيل النفسي والجسدي',
      icon: <Brain className="w-12 h-12" />,
      link: '/specialties/addiction'
    },
    {
      title: 'العيون',
      description: 'تشخيص وعلاج جميع أمراض العيون وعمليات تصحيح النظر',
      icon: <Eye className="w-12 h-12" />,
      link: '/specialties/ophthalmology'
    },
    {
      title: 'الأسنان',
      description: 'رعاية شاملة للأسنان من علاج وتجميل وزراعة بأحدث التقنيات',
      icon: <Syringe className="w-12 h-12" />,
      link: '/specialties/dentistry'
    },
    {
      title: 'الأمراض النفسية والتأهيل',
      description: 'خدمات متخصصة لعلاج الاضطرابات النفسية ومشاكل المراهقين والإدمان',
      icon: <UserPlus className="w-12 h-12" />,
      link: '/specialties/psychiatry'
    },
    {
      title: 'الجلدية',
      description: 'خدمات متخصصة لعلاج الأمراض الجلدية والعناية بالبشرة والشعر',
      icon: <Sparkles className="w-12 h-12" />,
      link: '/specialties/dermatology'
    },

    {
      title: 'الأنف والأذن',
      description: 'خدمات متكاملة لأمراض الأنف والأذن والحنجرة',
      icon: <Ear className="w-12 h-12" />,
      link: '/specialties/ent'
    },
    {
      title: 'الأطفال',
      description: 'خدمات متكاملة لرعاية وعلاج الأطفال',
      icon: <Baby className="w-12 h-12" />,
      link: '/specialties/pediatrics'
    },
    {
      title: 'العناية المركزة',
      description: 'خدمات العناية المركزة للحالات الحرجة',
      icon: <MonitorDot className="w-12 h-12" />,
      link: '/specialties/intensive-care',
      directCall: true
    },
    {
      title: 'الرعاية المتوسطة',
      description: 'خدمات الرعاية المتوسطة للحالات المستقرة',
      icon: <BedDouble className="w-12 h-12" />,
      link: '/specialties/intermediate-care'
    },
    {
      title: 'غرفة فندقية',
      description: 'غرف فندقية للإقامة ومتابعة الحالات',
      icon: <Hotel className="w-12 h-12" />,
      link: '/specialties/vip-room'
    },
    {
      title: 'الباطنة',
      description: 'خدمات متكاملة للأمراض الباطنية',
      icon: <Stethoscope className="w-12 h-12" />,
      link: '/specialties/internal-medicine'
    },
    {
      title: 'الكشف المنزلي',
      description: 'خدمة الكشف المنزلي للحالات الطارئة. متوفرة على مدار 24 ساعة',
      icon: <Phone className="w-12 h-12" />,
      link: '/specialties/home-visit',
      directCall: true
    }
  ];

  return (
    <section className="py-12 bg-gray-50" id="specialties">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl font-bold text-center mb-12">تخصصاتنا الطبية</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div key={index} 
                className="animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}>
              <SpecialtyCard
                title={specialty.title}
                description={specialty.description}
                icon={specialty.icon}
                link={specialty.link}

              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
