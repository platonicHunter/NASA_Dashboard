import type { Metadata } from 'next';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'NASA Space Apps Telemetry Dashboard',
  description: 'Real-time NASA Space & Earth Telemetry Analytics Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-slate-950 text-slate-100 antialiased font-sans">
        <div className="flex min-h-screen">
          {/* Persistent Sidebar */}
          <Sidebar />

          {/* Main Area (Header + Dynamic Page + Footer) */}
          <div className="flex-1 flex flex-col min-w-0 bg-slate-900/40">
            {/* Top Header */}
            <Header />

            {/* Dynamic Page Content */}
            <main className="flex-1 p-6 md:p-8 overflow-y-auto">
              {children}
            </main>

            {/* Bottom Footer */}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}