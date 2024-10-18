import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";


const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative font-sans h-full`}
      >
        <main className="relative flex flex-col min-h-screen">
          <Providers>
            <Navbar/>
              <div className="flex-grow flex justify-center items-center">{children}</div>
            <Footer />
          </Providers>
        </main>

        <Toaster position='top-center' richColors />
      </body>
    </html>
  );
}