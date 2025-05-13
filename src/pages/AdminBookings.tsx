import { query, collection, orderBy } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '@/lib/firebase';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { format } from 'date-fns';
import { arSA } from 'date-fns/locale';

export default function AdminBookings() {
  const [snapshot, loading, error] = useCollection(
    query(collection(db, "bookings"), orderBy("createdAt", "desc"))
  );

  if (loading) return <div>جاري التحميل...</div>;
  if (error) return <div>حدث خطأ: {error.message}</div>;

  return (
    <div className="container mx-auto py-8 rtl">
      <h1 className="text-2xl font-bold mb-6">لوحة التحكم - الحجوزات</h1>
      
      <Table>
        <TableCaption>قائمة بجميع الحجوزات الواردة</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>الاسم</TableHead>
            <TableHead>الهاتف</TableHead>
            <TableHead>التاريخ</TableHead>
            <TableHead>التخصص</TableHead>
            <TableHead>حالة الحجز</TableHead>
            <TableHead>تاريخ الإنشاء</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {snapshot?.docs.map(doc => {
            const data = doc.data();
            return (
              <TableRow key={doc.id}>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.phone}</TableCell>
                <TableCell>{data.date}</TableCell>
                <TableCell>{data.specialty}</TableCell>
                <TableCell>{data.status || 'جديد'}</TableCell>
                <TableCell>
                  {format(data.createdAt?.toDate(), 'yyyy/MM/dd HH:mm', { locale: arSA })}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
