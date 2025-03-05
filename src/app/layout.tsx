"use client";
import React, { useState } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Dashboard from "@/components/Dashboard";
import { FiMenu } from "react-icons/fi"; // Import Hamburger Icon

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="h-screen flex">
          {/* LEFT SECTION */}
          <div className="hidden md:flex flex-col w-[14%] md:w-[12%] lg:w-[16%] xl:w-[14%] p-4">
            {/* WeHR Logo - Positioned at Top Left */}
            <Link href="/" className="mb-4 flex md:justify-start lg:justify-start">
              <span className="font-bold text-2xl">WeHR</span>
            </Link>
            <Menu />
          </div>


          {/* HAMBURGER ICON FOR SMALL SCREENS */}
          <div className="md:hidden fixed top-4 left-4 z-50">
            <button onClick={() => setMenuOpen(true)} className="p-2 bg-white shadow-md rounded-full">
              <FiMenu size={28} className="text-gray-700" />
            </button>
          </div>


          {/* SLIDING MENU OVERLAY (Only visible when menu is open) */}
          {menuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setMenuOpen(false)}>
              <div className="w-64 bg-white h-full p-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
                <button className="text-xl mb-4" onClick={() => setMenuOpen(false)}>✖</button>
                <Menu />
              </div>
            </div>
          )}

          {/* RIGHT SECTION */}
          <div className="w-full md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col overflow-x-hidden">
            <Navbar />
            <Dashboard />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
