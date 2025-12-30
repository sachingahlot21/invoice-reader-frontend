"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // navbar bg after 50px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">SplitPay</Link>
        <div className="flex gap-4">
          <Link href="/login" className="px-4 py-2 rounded-lg bg-black text-white text-sm font-semibold">Login</Link>
          <Link href="/signup" className="px-4 py-2 rounded-lg border text-sm font-semibold">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
