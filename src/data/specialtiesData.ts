
export interface Doctor {
  name: string;
  title: string;
  specialization: string;
  experience: string;
  image: string;
  consultationPrice: number | string;
  phoneNumber?: string;
}

export interface Service {
  title: string;
  description: string;
  image: string;
  price?: number;
}

export interface Equipment {
  name: string;
  image: string;
}

export interface Specialty {
  id: string;
  title: string;
  description: string;
  additionalInfo?: string;
  coverImage: string;
  doctors: Doctor[];
  services: Service[];
  equipments?: Equipment[];
}

export const specialtiesData: Specialty[] = [
  {
    id: "laboratory",
    title: "التحاليل الطبية",
    description: "معامل داخل بنها - خدمات التحاليل الطبية الشاملة بأحدث الأجهزة والتقنيات وبأسعار مناسبة",
    coverImage: "/images/specialties/laboratory-cover.jpg",
    doctors: [
      {
        name: "معامل بنها",
        title: "معمل تحاليل طبية",
        specialization: "جميع أنواع التحاليل الطبية",
        experience: "خبرة أكثر من 15 عام",
        image: "/images/doctors/default-profile.jpg",
        consultationPrice: "تختلف حسب نوع التحليل"
      }
    ],
    services: [
      {
        title: "اطمئن على نفسك",
        description: "باقة فحوصات شاملة تتضمن تحاليل وظائف الكبد والكلى وصورة الدم الكاملة والسكر التراكمي",
        image: "/images/services/default-service.jpg",
        price: 750
      },
      {
        title: "تحليل فيتامين د",
        description: "قياس مستوى فيتامين د في الدم بدقة عالية",
        image: "/images/services/default-service.jpg",
        price: 350
      },
      {
        title: "تحاليل الدم الشاملة",
        description: "صورة دم كاملة، فصائل الدم، معدل الترسيب",
        image: "/images/services/default-service.jpg"
      },
      {
        title: "وظائف الكبد والكلى",
        description: "تحاليل شاملة لوظائف الكبد والكلى",
        image: "/images/services/default-service.jpg"
      },
      {
        title: "تحاليل الغدد الصماء",
        description: "تحاليل الغدة الدرقية والهرمونات",
        image: "/images/services/default-service.jpg"
      }
    ],
    equipments: [
      {
        name: "جهاز تحليل الدم الآلي",
        image: "/images/equipment/default-equipment.jpg"
      },
      {
        name: "جهاز قياس الهرمونات",
        image: "/images/equipment/default-equipment.jpg"
      },
      {
        name: "جهاز تحليل الكيمياء الحيوية",
        image: "/images/equipment/default-equipment.jpg"
      }
    ]
  },

  {
    id: "surgery",
    title: "العمليات والجراحة",
    description: "يقدم قسم العمليات والجراحة في مركز الدكتور الطبي خدمات جراحية متكاملة تشمل جراحات السمنة والجراحة العامة وجراحة الأورام. يضم القسم أحدث التقنيات والمعدات الجراحية مع فريق طبي متخصص لضمان أفضل النتائج للمرضى.",
    coverImage: "/images/specialties/surgery-cover.jpg",
    doctors: [
      {
        name: "عمليات تكميم المعدة",
        title: "جراحات السمنة",
        specialization: "تكميم المعدة وجراحات السمنة",
        experience: "",
        image: "/images/doctors/surgery-doctor1.jpg",
        consultationPrice: "بالحجز"
      },
      {
        name: "الجراحة العامة والأورام",
        title: "جراحة عامة وأورام",
        specialization: "جراحة عامة وجراحة الأورام",
        experience: "",
        image: "/images/doctors/surgery-doctor2.jpg",
        consultationPrice: 250
      }
    ],
    services: [
      {
        title: "جراحات السمنة",
        description: "عمليات تكميم المعدة وتحويل المسار بأحدث التقنيات الجراحية",
        image: "/images/services/surgery-service1.jpg"
      },
      {
        title: "الجراحة العامة",
        description: "جراحات البطن والمناظير والجراحات الصغرى",
        image: "https://images.unsplash.com/photo-1579684453377-48ec05c6b30a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "جراحة الأورام",
        description: "استئصال الأورام الحميدة والخبيثة مع المتابعة الدقيقة",
        image: "https://images.unsplash.com/photo-1583912267550-d44c9c34c33d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "جراحة المناظير",
        description: "جراحات بالمنظار للمرارة والزائدة الدودية وغيرها",
        image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "الجراحات التجميلية",
        description: "جراحات تجميلية وترميمية متنوعة",
        image: "https://images.unsplash.com/photo-1516549655023-42676d4d5757?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ],
    equipments: [
      {
        name: "أجهزة المناظير الجراحية",
        image: "/images/equipment/surgery-equipment1.jpg"
      },
      {
        name: "معدات جراحة السمنة",
        image: "/images/equipment/surgery-equipment2.jpg"
      },
      {
        name: "أجهزة التخدير المتطورة",
        image: "https://images.unsplash.com/photo-1579684453377-48ec05c6b30a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: "internal-medicine",
    title: "الباطنة والجهاز الهضمي",
    description: "يقدم قسم الباطنة والجهاز الهضمي في مركز الدكتور الطبي خدمات تشخيصية وعلاجية متكاملة لمختلف أمراض الجهاز الهضمي والكبد. يضم القسم نخبة من الأطباء المتخصصين والاستشاريين ذوي الخبرة الواسعة في تشخيص وعلاج أمراض المعدة والأمعاء والكبد والبنكرياس.",
    additionalInfo: "يتميز القسم بتوفير أحدث التقنيات التشخيصية مثل المناظير الحديثة للجهاز الهضمي العلوي والسفلي، وأجهزة الموجات فوق الصوتية المتطورة، وتقنيات مسح الكبد المرن لتشخيص تليف الكبد بدون الحاجة إلى أخذ عينات.",
    coverImage: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    doctors: [
      {
        name: "استشاري الباطنة",
        title: "استشاري الباطنة",
        specialization: "الباطنة والجهاز الهضمي",
        experience: "15 سنة",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        consultationPrice: 600
      },
    ],
    services: [
      {
        title: "الكشف والتشخيص",
        description: "خدمات الكشف والتشخيص لأمراض الجهاز الهضمي",
        image: "https://images.unsplash.com/photo-1581595219315-a187dd41f9f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        price: 600
      },
      {
        title: "مناظير الجهاز الهضمي",
        description: "خدمات المناظير التشخيصية والعلاجية",
        image: "https://images.unsplash.com/photo-1581595219315-a187dd41f9f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        price: 800
      }
    ],
    description: "يقدم قسم الباطنة والجهاز الهضمي في مركز الدكتور الطبي خدمات تشخيصية وعلاجية متكاملة لمختلف أمراض الجهاز الهضمي والكبد. يضم القسم نخبة من الأطباء المتخصصين والاستشاريين ذوي الخبرة الواسعة في تشخيص وعلاج أمراض المعدة والأمعاء والكبد والبنكرياس.",
    additionalInfo: "يتميز القسم بتوفير أحدث التقنيات التشخيصية مثل المناظير الحديثة للجهاز الهضمي العلوي والسفلي، وأجهزة الموجات فوق الصوتية المتطورة، وتقنيات مسح الكبد المرن لتشخيص تليف الكبد بدون الحاجة إلى أخذ عينات.",
    coverImage: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    doctors: [
      {
        name: "د. محمد السيد عيد",
        title: "استشاري",
        specialization: "قلب وباطنة",
        experience: "",
        image: "/images/doctors/default-profile.jpg",
        consultationPrice: 350
      },
      {
        name: "استشاري الباطنة",
        title: "استشاري الباطنة",
        specialization: "الباطنة والجهاز الهضمي",
        experience: "15 سنة",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        consultationPrice: 600
      },
      {
        name: "د. مختار عبد العاطي شحاته",
        title: "استشاري الباطنه والكبد والجهاز الهضمي",
        specialization: "أمراض الباطنه والكبد والجهاز الهضمي",
        experience: "25 عاماً",
        image: "https://scontent.faly8-2.fna.fbcdn.net/v/t39.30808-6/308803388_529341755862277_510435964617149519_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=D9ggfBcWHpIQ7kNvwEb9Il9&_nc_oc=AdkuicOyCRDTtpzHIX-lsDgStx6rauD7X5mYnSgbaMNQecjZZaYHm2LVXslTR-L6U2E&_nc_zt=23&_nc_ht=scontent.faly8-2.fna&_nc_gid=I6Y7FfnGdcXlRx4fMXZvvA&oh=00_AfIhWpDbEp3rASPrSgMO8CqERmWgwTgCCFX1KU9CKszA3Q&oe=6827CD81",
        consultationPrice: 350
      }
    ],
    services: [
      {
        title: "تشخيص وعلاج أمراض المعدة",
        description: "تشخيص وعلاج قرحة المعدة، الارتجاع المريئي، والتهابات المعدة المختلفة",
        image: "https://images.unsplash.com/photo-1612776572997-76cc42e058c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "تشخيص وعلاج أمراض القولون",
        description: "علاج القولون العصبي، التهابات القولون، والقولون التقرحي",
        image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "تشخيص وعلاج أمراض الكبد",
        description: "علاج التهاب الكبد الفيروسي، تليف الكبد، والدهون في الكبد",
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "مناظير الجهاز الهضمي",
        description: "إجراء مناظير المعدة والقولون التشخيصية والعلاجية بأحدث التقنيات",
        image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "الموجات فوق الصوتية للبطن",
        description: "فحص البطن بالموجات فوق الصوتية لتشخيص أمراض الكبد والمرارة والبنكرياس.",
        image: "https://images.unsplash.com/photo-1579684453377-48ec05c6b30a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ],
    equipments: [
      {
        name: "جهاز منظار الجهاز الهضمي المرن",
        image: "https://images.unsplash.com/photo-1583912086096-8c60d75a53f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "جهاز فيبروسكان لقياس تليف الكبد",
        image: "https://images.unsplash.com/photo-1581595219315-a187dd41f9f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "جهاز الموجات فوق الصوتية المتطور",
        image: "https://images.unsplash.com/photo-1579154341097-e4e9a8517583?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: "cardiology",
    title: "القلب والأوعية الدموية",
    description: "يقدم قسم القلب والأوعية الدموية في مركز الدكتور الطبي خدمات تشخيصية وعلاجية متقدمة لأمراض القلب والشرايين. يضم القسم نخبة من استشاريي وأخصائيي أمراض القلب ذوي الخبرة الواسعة في تشخيص وعلاج مختلف أمراض القلب والأوعية الدموية.",
    coverImage: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    doctors: [
      {
        name: "عيادة القلب والقسطرة",
        title: "عيادة القلب والقسطرة",
        specialization: "قسطرة القلب التشخيصية والعلاجية",
        experience: "",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        consultationPrice: 300
      }
    ],
    services: [
      {
        title: "تشخيص وعلاج أمراض الشريان التاجي",
        description: "تشخيص مبكر لأمراض القلب التاجية وتقديم العلاجات الدوائية المناسبة وتحديد الحالات التي تحتاج إلى قسطرة.",
        image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "تشخيص وعلاج ارتفاع ضغط الدم",
        description: "تقييم شامل لحالات ارتفاع ضغط الدم وتقديم خطط علاجية متكاملة للسيطرة عليه ومنع مضاعفاته.",
        image: "https://images.unsplash.com/photo-1576671081803-5dcb9836dc61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "مراقبة نظم القلب واضطراباتها",
        description: "تشخيص وعلاج اضطرابات نظم القلب باستخدام أجهزة مراقبة القلب المتقدمة.",
        image: "https://images.unsplash.com/photo-1543333995-a78aea2eee50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "تخطيط صدى القلب",
        description: "إجراء فحوصات صدى القلب لتقييم وظائف القلب وصماماته وحركة عضلة القلب.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "addiction",
    title: "علاج الإدمان وإعادة التأهيل",
    description: "يقدم قسم علاج الإدمان وإعادة التأهيل في مركز الدكتور الطبي برامج علاجية شاملة للتعافي من الإدمان بمختلف أنواعه. تعتمد برامجنا العلاجية على أحدث الأساليب العلمية ونهج متكامل يراعي الجوانب النفسية والاجتماعية والجسدية للمرضى.",
    coverImage: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    doctors: [
      {
        name: "علاج الإدمان",
        title: "علاج الإدمان وإعادة التأهيل",
        specialization: "علاج الإدمان والتأهيل",
        experience: "",
        image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        consultationPrice: 350
      }
    ],
    services: [
      {
        title: "برنامج التخلص من السموم",
        description: "برنامج متكامل للتخلص من السموم تحت إشراف طبي متخصص لضمان انسحاب آمن ومريح من المواد المسببة للإدمان.",
        image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "العلاج النفسي الفردي والجماعي",
        description: "جلسات علاج نفسي فردية وجماعية لفهم الأسباب الكامنة وراء الإدمان وتطوير استراتيجيات للتعامل مع الضغوط والرغبة في العودة للإدمان.",
        image: "https://images.unsplash.com/photo-1573497161079-f3fd25cc6b90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "برامج إعادة التأهيل الاجتماعي",
        description: "برامج مصممة لمساعدة المتعافين على الاندماج مجدداً في المجتمع وبناء مهارات حياتية جديدة.",
        image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "المتابعة والدعم بعد العلاج",
        description: "برامج متابعة مستمرة ودعم للمتعافين بعد إتمام البرنامج العلاجي لمنع الانتكاسة والحفاظ على التعافي.",
        image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "ophthalmology",
    title: "العيون",
    description: "يقدم قسم العيون في مركز الدكتور الطبي رعاية شاملة لصحة العيون وعلاج مختلف اضطرابات الإبصار والأمراض العينية. يضم القسم نخبة من استشاريي وأخصائيي طب وجراحة العيون المتمرسين في استخدام أحدث التقنيات التشخيصية والعلاجية.",
    coverImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    doctors: [
      {
        name: "طب العيون",
        title: "طب وجراحة العيون",
        specialization: "جراحات الشبكية والليزك",
        experience: "",
        image: "https://images.unsplash.com/photo-1577758231548-8d25881210b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        consultationPrice: 250
      }
    ],
    services: [
      {
        title: "فحوصات النظر الشاملة",
        description: "فحوصات شاملة للعين والنظر باستخدام أحدث التقنيات لتشخيص مشاكل الإبصار وأمراض العين المختلفة.",
        image: "https://images.unsplash.com/photo-1579684453377-48ec05c6b30a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "فحص شامل للعين",
        description: "فحص دقيق وشامل لصحة العين باستخدام أحدث الأجهزة الطبية",
        image: "https://images.unsplash.com/photo-1579684453377-48ec05c6b30a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "علاج أمراض العيون",
        description: "علاج مختلف أمراض العيون مثل المياه البيضاء والزرقاء والشبكية",
        image: "https://images.unsplash.com/photo-1576670392954-38b664e2f5e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "جراحات العيون",
        description: "إجراء مختلف العمليات الجراحية للعين مثل الليزك والمياه البيضاء",
        image: "https://images.unsplash.com/photo-1584467541268-b040f83be3fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "نظارات وعدسات طبية",
        description: "توفير وتركيب النظارات والعدسات الطبية بمختلف المقاسات",
        image: "https://images.unsplash.com/photo-1577744168855-0391d2ed2b3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      }
    ],
    equipments: [
      {
        name: "جهاز قياس طبوغرافية القرنية",
        image: "https://images.unsplash.com/photo-1579154341097-e4e9a8517583?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: "dentistry",
    title: "الأسنان",
    description: "يقدم قسم الأسنان في مركز الدكتور الطبي مجموعة شاملة من خدمات طب الأسنان العلاجية والتجميلية والوقائية. يضم القسم فريقاً متميزاً من أطباء الأسنان في مختلف التخصصات الدقيقة مع أحدث التجهيزات والتقنيات.",
    coverImage: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    doctors: [
      {
        name: "طب الأسنان والتركيب",
        title: "طب وجراحة الفم والأسنان",
        specialization: "طب وجراحة الأسنان",
        experience: "",
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        consultationPrice: "بالحجز"
      }
    ],
    services: [
      {
        title: "تقويم الأسنان",
        description: "تصحيح تموضع الأسنان وعلاج مشاكل الإطباق باستخدام أحدث تقنيات التقويم.",
        image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "زراعة الأسنان",
        description: "زراعة الأسنان المفقودة باستخدام أحدث التقنيات وأفضل أنواع الزرعات السنية.",
        image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "علاج العصب",
        description: "علاج التهابات العصب وإنقاذ الأسنان المتضررة باستخدام تقنيات حديثة وغير مؤلمة.",
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "تجميل الأسنان",
        description: "تحسين مظهر الابتسامة من خلال تبييض الأسنان وتركيب الفينير والتيجان التجميلية.",
        image: "https://images.unsplash.com/photo-1581585105565-c57a35eec5cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "علاج أمراض اللثة",
        description: "علاج التهابات اللثة وأمراض دواعم الأسنان باستخدام أحدث التقنيات.",
        image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ],
    equipments: [
      {
        name: "كرسي أسنان رقمي متطور",
        image: "https://images.unsplash.com/photo-1609840112990-4265448268d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "جهاز الأشعة البانورامية الرقمي",
        image: "https://images.unsplash.com/photo-1581595219315-a187dd41f9f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "جهاز تبييض الأسنان المتطور",
        image: "https://images.unsplash.com/photo-1580281658223-9b93f18ae9ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: "radiology",
    title: "الأشعة والتصوير",
    description: "يقدم قسم الأشعة والتصوير في مركز الدكتور الطبي خدمات التشخيص والتصوير الشاملة لجميع الحالات المرضية. يضم القسم أحدث الأجهزة والتقنيات للتشخيص الدقيق والسريع.",
    coverImage: "https://images.unsplash.com/photo-1516549655023-42676d4d5757?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    doctors: [
      {
        name: "الشمول الطبي في الأشعة",
        title: "الأشعة والتصوير الطبي",
        specialization: "الأشعة التشخيصية والتصوير الطبي",
        experience: "",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        consultationPrice: "بالحجز"
      }
    ],
    services: [
      {
        title: "الأشعة المقطعية",
        description: "تصوير مقطعي محوسب عالي الدقة للتشخيص الدقيق للأمراض المختلفة",
        image: "https://images.unsplash.com/photo-1516549655023-42676d4d5757?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "الرنين المغناطيسي",
        description: "تصوير بالرنين المغناطيسي للكشف عن الأمراض والإصابات في مختلف أجزاء الجسم",
        image: "https://images.unsplash.com/photo-1583912267550-d44c9c34c33d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "الأشعة السينية الرقمية",
        description: "تصوير رقمي عالي الجودة للعظام والصدر والبطن",
        image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "الموجات فوق الصوتية",
        description: "فحص بالموجات فوق الصوتية للبطن والحوض والثدي والقلب",
        image: "https://images.unsplash.com/photo-1579684453377-48ec05c6b30a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "تصوير الثدي",
        description: "ماموجرام رقمي للكشف المبكر عن سرطان الثدي",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ],
    equipments: [
      {
        name: "جهاز الرنين المغناطيسي 3 تسلا",
        image: "https://images.unsplash.com/photo-1516549655023-42676d4d5757?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "جهاز الأشعة المقطعية متعدد الشرائح",
        image: "https://images.unsplash.com/photo-1581595219315-a187dd41f9f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "جهاز الموجات فوق الصوتية رباعي الأبعاد",
        image: "https://images.unsplash.com/photo-1579154341097-e4e9a8517583?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: "psychiatry",
    title: "الأمراض النفسية والتأهيل",
    description: "يقدم قسم الأمراض النفسية والتأهيل خدمات متخصصة لعلاج الاضطرابات النفسية ومشاكل المراهقين والإدمان. يضم القسم فريقاً متخصصاً لتقديم الدعم النفسي والعلاج المناسب.",
    coverImage: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    doctors: [
      {
        name: "عيادات النفسية ومشاكل المراهقين والإدمان",
        title: "الطب النفسي والتأهيل",
        specialization: "الأمراض النفسية ومشاكل المراهقين وعلاج الإدمان",
        experience: "",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        consultationPrice: 250
      }
    ],
    services: [
      {
        title: "علاج الاضطرابات النفسية",
        description: "تشخيص وعلاج الاكتئاب والقلق واضطرابات النوم وغيرها",
        image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "علاج مشاكل المراهقين",
        description: "دعم وعلاج مشاكل المراهقة والسلوك والتحصيل الدراسي",
        image: "https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "علاج الإدمان",
        description: "برامج متخصصة لعلاج الإدمان وإعادة التأهيل",
        image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "العلاج النفسي الفردي",
        description: "جلسات علاج نفسي فردية للتعامل مع المشكلات النفسية",
        image: "https://images.unsplash.com/photo-1573497161079-f3fd25cc6b90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "العلاج النفسي الجماعي",
        description: "جلسات علاج جماعية لتبادل الخبرات والدعم المتبادل",
        image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ],
    equipments: [
      {
        name: "غرف العلاج النفسي المجهزة",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "أجهزة العلاج بالاسترخاء",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "قاعات العلاج الجماعي",
        image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: "dermatology",
    title: "الجلدية",
    description: "يقدم قسم الجلدية خدمات متخصصة لعلاج الأمراض الجلدية والعناية بالبشرة والشعر. يضم القسم أحدث التقنيات والأجهزة للعلاج والتجميل.",
    coverImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    doctors: [
      {
        name: "عيادات الجلدية",
        title: "الأمراض الجلدية والتجميل",
        specialization: "الأمراض الجلدية والتجميل والليزر",
        experience: "",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        consultationPrice: 200
      }
    ],
    services: [
      {
        title: "علاج الأمراض الجلدية",
        description: "تشخيص وعلاج جميع الأمراض الجلدية وحب الشباب والصدفية",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "علاج مشاكل البشرة",
        description: "علاج مشاكل البشرة وتوحيد لونها وعلاج الندبات",
        image: "https://images.unsplash.com/photo-1612532275214-e4ca76d0e4c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "علاج تساقط الشعر",
        description: "علاج مشاكل تساقط الشعر والصلع وتعزيز نمو الشعر",
        image: "https://images.unsplash.com/photo-1626954079979-ec4f5096c938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "علاجات التجميل بالليزر",
        description: "إزالة الشعر وعلاج الندبات وتجديد البشرة بالليزر",
        image: "https://images.unsplash.com/photo-1628191139360-4083564d03fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "الحقن التجميلية",
        description: "حقن البوتوكس والفيلر للتجميل ونضارة البشرة",
        image: "https://images.unsplash.com/photo-1598963040325-c44a1b280678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ],
    equipments: [
      {
        name: "أجهزة الليزر المتطورة",
        image: "https://images.unsplash.com/photo-1628191139360-4083564d03fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "أجهزة فحص البشرة",
        image: "https://images.unsplash.com/photo-1612532275214-e4ca76d0e4c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "أجهزة علاج الشعر",
        image: "https://images.unsplash.com/photo-1626954079979-ec4f5096c938?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: "laboratory",
    title: "المعامل",
    description: "يقدم قسم المعامل خدمات التحاليل الطبية الشاملة بأحدث الأجهزة والتقنيات وبأيدي فريق متخصص من الخبراء.",
    coverImage: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    doctors: [
      {
        name: "معامل آدم وحواء لجميع التحاليل الطبيه",
        title: "التحاليل الطبية",
        specialization: "معامل داخل بنها",
        experience: "",
        image: "https://pub-59434cafdb904dc18b277fa8300c487e.r2.dev/elshamel/elshamel1739306892334.jpeg",
        consultationPrice: "بالحجز"
      }
    ],
    services: [
      {
        title: "اتطمن على نفسك",
        description: "مجموعة شاملة من التحاليل الطبية للاطمئنان على صحتك العامة",
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        price: 750
      },
      {
        title: "تحليل فيتامين د",
        description: "قياس مستوى فيتامين د في الدم",
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        price: 350
      },
      {
        title: "تحاليل الدم الشاملة",
        description: "فحص شامل لجميع مكونات الدم ووظائف الجسم",
        image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "تحاليل الغدد الصماء",
        description: "فحص هرمونات الغدد الدرقية والنخامية وغيرها",
        image: "https://images.unsplash.com/photo-1579154204845-5d7f8d4dc785?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "تحاليل الفيروسات",
        description: "فحص الفيروسات والأجسام المضادة",
        image: "https://images.unsplash.com/photo-1584118624012-df056829fbd0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ],
    equipments: [
      {
        name: "أجهزة تحليل الدم المتطورة",
        image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "أجهزة الطرد المركزي",
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "أجهزة التحليل الكيميائي",
        image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: "diabetes",
    title: "السكر",
    description: "يقدم قسم السكر خدمات متكاملة لتشخيص وعلاج ومتابعة مرضى السكر",
    additionalInfo: "يوفر القسم أحدث التقنيات لمراقبة مستوى السكر وتقديم العلاج المناسب",
    coverImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    doctors: [
      {
        name: "استشاري السكر",
        title: "استشاري السكر",
        specialization: "السكر والغدد الصماء",
        experience: "15 سنة",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        consultationPrice: 600
      }
    ],
    services: [
      {
        title: "الكشف والمتابعة",
        description: "خدمات الكشف والمتابعة لمرضى السكر",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: "hypertension",
    title: "الضغط",
    description: "يقدم قسم الضغط خدمات متكاملة لتشخيص وعلاج ومتابعة مرضى الضغط",
    additionalInfo: "يوفر القسم أحدث التقنيات لمراقبة ضغط الدم وتقديم العلاج المناسب",
    coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    doctors: [
      {
        name: "استشاري الضغط",
        title: "استشاري الضغط",
        specialization: "الضغط وأمراض القلب",
        experience: "15 سنة",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        consultationPrice: 600
      }
    ],
    services: [
      {
        title: "الكشف والمتابعة",
        description: "خدمات الكشف والمتابعة لمرضى الضغط",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: "nutrition",
    title: "الحميات",
    description: "يقدم قسم الحميات خدمات متكاملة للتغذية الصحية وإدارة الوزن",
    additionalInfo: "يوفر القسم برامج تغذية مخصصة وخطط حمية متكاملة",
    coverImage: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    doctors: [
      {
        name: "استشاري الحميات",
        title: "استشاري الحميات",
        specialization: "التغذية والحميات",
        experience: "15 سنة",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        consultationPrice: 600
      }
    ],
    services: [
      {
        title: "الكشف والمتابعة",
        description: "خدمات الكشف والمتابعة للحميات",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: "chest",
    title: "الصدر",
    description: "خدمات متكاملة لأمراض الصدر والجهاز التنفسي",
    coverImage: "https://images.unsplash.com/photo-1584555613497-91a5d0d1533c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    doctors: [
      {
        name: "استشاري الصدر",
        title: "استشاري الصدر",
        specialization: "الصدر والجهاز التنفسي",
        experience: "15 سنة",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        consultationPrice: "احجز الآن",
        phoneNumber: "+20 100 057 0375"
      }
    ],
    services: []
  },
  {
    id: "ent",
    title: "الأنف والأذن والحنجرة",
    description: "خدمات متكاملة لأمراض الأنف والأذن والحنجرة",
    coverImage: "https://images.unsplash.com/photo-1589279003513-467d320f47eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    doctors: [
      {
        name: "استشاري الأنف والأذن",
        title: "استشاري الأنف والأذن",
        specialization: "الأنف والأذن والحنجرة",
        experience: "15 سنة",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        consultationPrice: "احجز الآن",
        phoneNumber: "+20 100 057 0375"
      }
    ],
    services: []
  },
  {
    id: "pediatrics",
    title: "الأطفال",
    description: "خدمات متكاملة لرعاية وعلاج الأطفال",
    coverImage: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    doctors: [
      {
        name: "استشاري الأطفال",
        title: "استشاري الأطفال",
        specialization: "طب الأطفال",
        experience: "15 سنة",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        consultationPrice: "احجز الآن",
        phoneNumber: "+20 100 057 0375"
      }
    ],
    services: []
  },
  {
    id: "intensive-care",
    title: "العناية المركزة",
    description: "خدمات العناية المركزة للحالات الحرجة",
    coverImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    doctors: [
      {
        name: "العناية المركزة",
        title: "العناية المركزة",
        specialization: "العناية المركزة",
        experience: "متوفر 24 ساعة",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        consultationPrice: "احجز الآن",
        phoneNumber: "+20 100 057 0375"
      }
    ],
    services: []
  },
  {
    id: "intermediate-care",
    title: "الرعاية المتوسطة",
    description: "خدمات الرعاية المتوسطة للحالات المستقرة",
    coverImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    doctors: [
      {
        name: "الرعاية المتوسطة",
        title: "الرعاية المتوسطة",
        specialization: "الرعاية المتوسطة",
        experience: "متوفر 24 ساعة",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        consultationPrice: "احجز الآن",
        phoneNumber: "+20 100 057 0375"
      }
    ],
    services: []
  },
  {
    id: "vip-room",
    title: "غرفة فندقية",
    description: "غرف فندقية للإقامة ومتابعة الحالات",
    coverImage: "https://images.unsplash.com/photo-1631049035182-249067d7618e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    doctors: [
      {
        name: "غرفة فندقية",
        title: "غرفة فندقية",
        specialization: "إقامة فندقية",
        experience: "متوفر 24 ساعة",
        image: "https://images.unsplash.com/photo-1631049035182-249067d7618e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        consultationPrice: "احجز الآن",
        phoneNumber: "+20 100 057 0375"
      }
    ],
    services: []
  },
  {
    id: "internal-medicine",
    title: "الباطنة",
    description: "خدمات متكاملة للأمراض الباطنية",
    coverImage: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    doctors: [
      {
        name: "استشاري الباطنة",
        title: "استشاري الباطنة",
        specialization: "الباطنة",
        experience: "15 سنة",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        consultationPrice: "احجز الآن",
        phoneNumber: "+20 100 057 0375"
      }
    ],
    services: []
  },
  {
    id: "home-visit",
    title: "الكشف المنزلي",
    description: "خدمة الكشف المنزلي للحالات الطارئة. متوفرة على مدار 24 ساعة.",
    coverImage: "https://images.unsplash.com/photo-1612277635895-b2cb4c87a3ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    doctors: [
      {
        name: "طوارئ منزلي",
        title: "الكشف المنزلي",
        specialization: "طوارئ 24 ساعة",
        experience: "",
        image: "https://images.unsplash.com/photo-1612277635895-b2cb4c87a3ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        phoneNumber: "+20 100 057 0375",
        consultationPrice: "احجز الآن"
      }
    ],
    services: [
      {
        title: "الكشف المنزلي للطوارئ",
        description: "خدمة الكشف المنزلي للحالات الطارئة متوفرة على مدار 24 ساعة",
        image: "https://images.unsplash.com/photo-1612277635895-b2cb4c87a3ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ],
    equipments: [
      {
        name: "حقيبة الطوارئ الطبية",
        image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "أجهزة الفحص المحمولة",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      }
    ]
  }
];
