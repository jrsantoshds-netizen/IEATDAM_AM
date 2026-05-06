import type { Metadata } from 'next';
import { Inter, Noto_Serif } from 'next/font/google';
import './globals.css';
import { Shell } from '@/components/layout/Shell';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-noto-serif',
});

export const metadata: Metadata = {
  title: 'IEADTAM - Escola Dominical',
  description: 'Sistema de gerenciamento da Escola Dominical',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${notoSerif.variable}`}>
      <body className="bg-background text-on-surface font-body-md min-h-screen flex flex-col antialiased">
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
