'use client'
// import type { Metadata } from "next";
import "./globals.css";
import { useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [currentPage, setCurrentPage] = useState('home');
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-100 text-black">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="max-w-4xl mx-auto px-4 py-6 flex-grow">
        {children}
      </main>
      <Footer />
    </body>
    </html>
  );
}
