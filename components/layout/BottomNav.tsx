import Link from 'next/link';
import { User, Users, ClipboardCheck, FileText } from 'lucide-react';

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-2 pb-safe bg-surface border-t border-outline-variant shadow-[0_-4px_12px_rgba(0,0,0,0.05)] md:hidden z-50 rounded-t-xl no-print">
      <Link href="/students/new" className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-container-low transition-colors">
        <User className="w-6 h-6" />
        <span className="text-caption font-caption">Students</span>
      </Link>
      <Link href="/classes/new" className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-container-low transition-colors">
        <Users className="w-6 h-6" />
        <span className="text-caption font-caption">Classes</span>
      </Link>
      <Link href="/attendance" className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1 scale-95 transition-transform duration-100">
        <ClipboardCheck className="w-6 h-6 fill-current" />
        <span className="text-caption font-caption">Attendance</span>
      </Link>
      <Link href="/reports/attendance" className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-container-low transition-colors">
        <FileText className="w-6 h-6" />
        <span className="text-caption font-caption">Reports</span>
      </Link>
    </nav>
  );
}
