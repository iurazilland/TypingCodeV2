import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/styles/globals.css';
import { LanguageProvider } from '@/lib/LanguageContext';

export const metadata: Metadata = {
  title: 'TypingCode V2 | 차세대 인터랙티브 코딩 타자 & 샌드박스',
  description: 'Python (CPython), C언어 (GCC), 모던 웹 (HTML/CSS/JS)을 실제 샌드박스 런타임에서 한 줄씩 실습하는 타이핑 SaaS 플랫폼',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <LanguageProvider>
          <Navbar />
          <main style={{ paddingTop: '70px' }}>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
