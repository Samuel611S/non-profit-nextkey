import type { AppProps } from 'next/app';
import "../app/globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Header />
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
} 