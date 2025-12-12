'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Eye, Heart, Share2, MapPin,Plus } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
interface GalleryImageProps {
  image: {
    id: number;
    src: string;
    title: string;
    category: string;
    description: string;
  };
  onOpen: (img: any) => void;
}

export function GalleryImage({ image, onOpen }: GalleryImageProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      layout
      layoutId={`gallery-item-${image.id}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl bg-neutral-800 border border-neutral-700 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={image.src}
          alt={image.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          placeholder="blur"
          blurDataURL="/images/placeholder.jpg"
        />
        
        {/* Gradient overlay on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/20 to-transparent"
        />
      </div>

      {/* Content overlay */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-x-0 bottom-0 p-6"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[var(--savanna-gold)] text-sm">
                <MapPin className="w-4 h-4" />
                <span>{image.category}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white group-hover:text-[var(--savanna-gold)] transition-colors">
                {image.title}
              </h3>
              
              <p className="text-neutral-300 text-sm leading-relaxed">
                {image.description}
              </p>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-neutral-700">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLiked(!isLiked);
                  }}
                  className={cn(
                    "flex items-center gap-2 text-sm transition-colors",
                    isLiked ? "text-red-500" : "text-neutral-400 hover:text-white"
                  )}
                >
                  <Heart className={cn("w-4 h-4", isLiked && "fill-current")} />
                  <span>{isLiked ? 'Liked' : 'Like'}</span>
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpen(image);
                  }}
                  className="flex items-center gap-2 text-[var(--savanna-gold)] hover:text-white transition-colors text-sm font-medium"
                >
                  <Eye className="w-4 h-4" />
                  View
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Plus icon - rotates on hover */}
      <motion.div
        className="absolute top-4 right-4 w-10 h-10 bg-[var(--savanna-gold)]/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        whileHover={{ rotate: 90 }}
      >
        <Plus className="w-5 h-5 text-[var(--savanna-gold)]" />
      </motion.div>
    </motion.div>
  );
}