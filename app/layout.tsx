import type { Metadata } from "next";
import { Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared/header";

const monserat = Montserrat_Alternates({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "Back Pizza | Main",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={monserat.className}>
          <main className="min-h-screen">
            <Header/>
          {children}
          </main>
        </body>
    </html>
  );
}
