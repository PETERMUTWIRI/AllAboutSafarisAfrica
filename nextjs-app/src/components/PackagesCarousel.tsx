'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { PackageCard } from './PackageCard';
import { Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';

const playfair = Playfair_Display({ subsets: ['latin'] });

const packages = [
  {
    id: 1,
    title: "Maasai Mara",
    duration: "12 days",
    price: "$3100.00",
    originalImage: "packages-1.jpg",  // ✅ EXACT LEGACY NAME
    locations: "Maasai Mara/Mount kenya/Amboseli/Nakuru/Nairobi",
    description: "Embark on breathtaking 12-day adventure through Maasai Mara, Nakuru, Amboseli, and Mount Kenya for $3,100, experiencing spectacular wildlife,culture.",
    days: "12 Day Package",
    category: "Premium Safari"
  },
  {
    id: 2,
    title: "Lake Nakuru",
    duration: "2 days",
    price: "$449.00",
    originalImage: "packages-2.jpeg",  // ✅ EXACT LEGACY NAME (note .jpeg)
    locations: "Lake Nakuru/Lake Bogoria",
    description: "Enjoy a 2-day adventure to Lake Nakuru and Lake Bogoria for $449, featuring flamingos, wildlife, hot springs, guided drives, and comfortable accommodations.",
    days: "2 Day Package",
    category: "Short Escape"
  },
  {
    id: 3,
    title: "Amboseli",
    duration: "5 days",
    price: "$1150.00",
    originalImage: "packages-3.jpg",  // ✅ EXACT LEGACY NAME
    locations: "Amboseli/Tsavo East/West",
    description: "Experience a 5-day safari to Amboseli, Tsavo East, and West for $1,150, featuring stunning wildlife, scenic views, guided drives, and cozy lodges.",
    days: "5 Days Package",
    category: "Classic Safari"
  },
  {
    id: 4,
    title: "Nairobi City",
    duration: "3 days",
    price: "$649.00",
    originalImage: "Packages-n.jpg",  // ✅ EXACT LEGACY NAME (capital P)
    locations: "Nairobi City",
    description: "Discover Nairobi on a 3-day city tour for $649, featuring wildlife parks, cultural sites, guided tours, vibrant markets, and comfortable accommodations.",
    days: "Nairobi Tour",
    category: "Urban Adventure"
  }
];

export function PackagesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slide = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const nextIndex = prev + newDirection;
      if (nextIndex < 0) return packages.length - 1;
      if (nextIndex >= packages.length) return 0;
      return nextIndex;
    });
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="py-32 bg-gradient-to-b from-neutral-900 to-neutral-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h5 className="text-[var(--savanna-gold)] text-sm font-semibold tracking-widest uppercase mb-4">
            Curated Adventures
          </h5>
          <h2 className={`${playfair.className} text-5xl lg:text-6xl font-bold text-white`}>
            Hot
            <span className="block text-[var(--savanna-gold)]">Packages</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0"
              >
                <PackageCard 
                  {...packages[currentIndex]} 
                  index={0}
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Placeholder to maintain height */}
            <div className="invisible">
              <PackageCard {...packages[0]} index={0} />
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={() => slide(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-14 h-14 bg-neutral-800/80 border border-neutral-700 rounded-full flex items-center justify-center text-white hover:bg-[var(--savanna-gold)] hover:text-neutral-900 transition-all backdrop-blur-sm"
            aria-label="Previous package"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => slide(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-14 h-14 bg-neutral-800/80 border border-neutral-700 rounded-full flex items-center justify-center text-white hover:bg-[var(--savanna-gold)] hover:text-neutral-900 transition-all backdrop-blur-sm"
            aria-label="Next package"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {packages.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors",
                  i === currentIndex ? "bg-[var(--savanna-gold)]" : "bg-neutral-600 hover:bg-neutral-500"
                )}
              />
            ))}
          </div>
        </div>

        {/* All Packages Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-24"
        >
          <h3 className={`${playfair.className} text-3xl font-bold text-center text-white mb-12`}>
            All Our Packages
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <PackageCard key={pkg.id} {...pkg} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}