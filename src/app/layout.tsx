import localFont from "next/font/local";
import "./globals.css";
import Providers from "@/components/Providers";
import { Toaster } from "sonner";
import { constructMetadata } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LoadingProvider } from "./context/loadingContext";
import ClientWrapper from "./ClientWrapper";

export const metadata = constructMetadata()

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en" className="h-full">
      <LoadingProvider>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative font-sans h-full`}
      >
          <main className="relative flex flex-col min-h-screen">
            <ClientWrapper>
              <Providers>
                <Navbar/>
                  <div className="flex-grow flex-1 justify-center items-center">{children}</div>
                <Footer/>
              </Providers>
            </ClientWrapper>
          </main>

          <Toaster position='top-center' richColors />
        
      </body>
      </LoadingProvider>
    </html>
  );
}
