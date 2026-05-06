import { TopBar } from './TopBar';
import { BottomNav } from './BottomNav';

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopBar />
      <div className="flex-grow flex flex-col justify-between">
        {children}
      </div>
      <BottomNav />
    </>
  );
}
