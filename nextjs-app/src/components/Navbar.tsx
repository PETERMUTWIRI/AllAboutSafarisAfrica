'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronRight, Phone, Mail, MessageCircle, UserPlus, LogIn } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';

const playfair = Playfair_Display({ subsets: ['latin'] });

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/packages', label: 'Packages' },
  { href: '/blog', label: 'Blog' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setNavHidden(true);
      } else {
        setNavHidden(false);
      }

      setScrolled(currentScrollY > 50);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ Use explicit colors instead of CSS variables
  const primaryGreen = 'bg-green-800';
  const secondaryBrown = 'bg-amber-700';
  const accentGold = 'text-yellow-400';
  const accentGoldBg = 'bg-yellow-400';
  const accentGoldBorder = 'border-yellow-400';

  return (
    <>
      {/* TOP ROW - Logo + Contact (Hides on scroll down) */}
      <AnimatePresence>
        {!navHidden && (
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`hidden lg:block fixed top-0 left-0 right-0 z-50 ${primaryGreen}`}
          >
            <div className="container mx-auto px-4 py-3">
              <div className="flex justify-between items-center">
                {/* Left: Logo + Contact */}
                <div className="flex items-center gap-8">
                  <Link href="/" className="flex items-center gap-4 group">
                    {/* Logo Circle - EXPLICIT SIZE */}
                    <div className="w-14 h-14 rounded-full border-2 border-white/30 shadow-lg overflow-hidden group-hover:border-yellow-400 transition-all duration-300">
                      <Image
                        src="/images/safaris-logo.jpeg"
                        alt="All About Safaris Africa"
                        width={56}
                        height={56}
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        priority
                      />
                    </div>
                    <div>
                      <h1 className={`${playfair.className} text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors`}>
                        All About Safaris Africa
                      </h1>
                      <p className="text-white/70 text-sm">Premium Safari Experiences</p>
                    </div>
                  </Link>

                  {/* Contact Info - VISIBLE */}
                  <div className="flex items-center gap-6 text-white/80">
                    <a href="tel:+254700064857" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">+254-700-064-857</span>
                    </a>
                    <a href="mailto:allaboutsafarisafrica@gmail.com" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">allaboutsafarisafrica@gmail.com</span>
                    </a>
                  </div>
                </div>

                {/* Right: Empty for spacing */}
                <div className="w-24" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BOTTOM ROW - Navigation (Always visible, slim on scroll) */}
      <div className={`fixed left-0 right-0 z-40 transition-all duration-500 bg-neutral-900/95 backdrop-blur-xl`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Navigation Links */}
            <div className="flex items-center gap-6">
              {/* Desktop Links */}
              <div className="hidden lg:flex items-center gap-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative group text-white font-medium transition-colors hover:text-yellow-400 ${
                      pathname === item.href ? "text-yellow-400" : ""
                    }`}
                  >
                    <span className="relative py-2">
                      {item.label}
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-yellow-400 transition-all duration-300 ${
                        pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                      }`} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-6">
              {/* WhatsApp Icon - YELLOW */}
              <Link
                href="https://wa.me/254700064857"
                target="_blank"
                className="text-yellow-400 hover:text-yellow-500 transition-colors"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </Link>

              {/* Login/Signup */}
              <div className="hidden md:flex items-center gap-4">
                <Link href="#" className="text-white hover:text-yellow-400 transition-colors text-sm font-medium">
                  <LogIn className="w-4 h-4 inline mr-1" />
                  Login
                </Link>
                <Link href="#" className="text-white hover:text-yellow-400 transition-colors text-sm font-medium">
                  <UserPlus className="w-4 h-4 inline mr-1" />
                  Sign Up
                </Link>
              </div>

              {/* Book Now Button - YELLOW */}
              <Button className="hidden md:flex bg-yellow-400 hover:bg-orange-500 text-neutral-900 font-bold rounded-full px-6 py-2 text-sm transition-all duration-300 hover:scale-105 shadow-lg">
                Book Now
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-16 lg:h-20" /> 
    </>
  );
}