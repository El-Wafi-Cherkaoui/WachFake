import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SubProfile from "@/components/SubProfile";
import NavBar from "./components/header/NavBar";
import Logo from "./components/header/Logo";
import { Tajawal } from 'next/font/google';
const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  weight: ['200','300','400','500','700','800','900'],
  display: 'swap',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "fake واش",
  description: "مبادرة غير ربحية أطلقها مطورو الويب المغاربة لبناء مجتمع رقمي واعٍ وموحد حول قضية مشتركة: مكافحة المحتوى البصري المولد أو المعدّل بواسطة الذكاء الاصطناعي. مهمتنا هي رفع مستوى الوعي وتزويد الناس بالمعرفة والأدوات اللازمة لاكتشاف المعلومات المضللة وحماية أنفسهم في العالم الرقمي.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${tajawal.className}`}
      >
        <header>
          <SubProfile/>
          <NavBar/>
          <Logo/>
        </header>
        <div className="mainBodyCont">
          {children}
        </div>
      </body>
    </html>
  );
}
