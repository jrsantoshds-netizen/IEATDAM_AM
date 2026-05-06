import Link from 'next/link';
import { Menu, Bell } from 'lucide-react';
import Image from 'next/image';

export function TopBar() {
  return (
    <header className="bg-surface docked full-width top-0 shadow-sm z-50 border-b border-outline-variant sticky">
      <div className="flex justify-between items-center w-full px-gutter h-16 max-w-7xl mx-auto">
        <div className="flex items-center gap-sm">
          <Menu className="text-primary cursor-pointer w-6 h-6" />
          <h1 className="text-h3 font-h3 text-primary tracking-tight">IEADTAM</h1>
        </div>
        <div className="flex items-center gap-md">
          <div className="hidden md:flex gap-md items-center">
            <Link href="/" className="text-on-surface-variant hover:bg-surface-container-high transition-colors px-2 py-1 rounded cursor-pointer">Dashboard</Link>
            <Link href="/attendance" className="text-primary font-bold">Attendance</Link>
            <Link href="/reports" className="text-on-surface-variant hover:bg-surface-container-high transition-colors px-2 py-1 rounded cursor-pointer">Reports</Link>
          </div>
          <Bell className="text-on-surface-variant cursor-pointer w-5 h-5 hidden sm:block" />
          <div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant overflow-hidden flex items-center justify-center relative">
            <Image 
              src="https://picsum.photos/seed/profile/100/100" 
              alt="Profile" 
              fill 
              sizes="40px"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
