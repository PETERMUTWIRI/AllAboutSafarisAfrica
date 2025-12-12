'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ThumbsUp, MessageCircle, ArrowRight, User } from 'lucide-react';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  likes: string;
  comments: string;
  image: string;
  slug: string;
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <motion.article
      whileHover={{ 
        y: -12,
        rotateX: 2,
        boxShadow: "0 25px 70px rgba(86, 125, 70, 0.3)"
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl bg-neutral-800 border border-neutral-700 cursor-pointer"
    >
      {/* Image with overlay */}
      <div className="relative h-80 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/20 to-transparent"
        />

        {/* Blog icon that appears */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[var(--savanna-gold)] rounded-full flex items-center justify-center"
        >
          <Link href={`/blog/${post.slug}`}>
            <ArrowRight className="w-7 h-7 text-neutral-900" />
          </Link>
        </motion.div>

        {/* Meta info - slides up */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="absolute bottom-0 left-0 right-0 bg-neutral-900/80 backdrop-blur-sm border-t border-neutral-700"
        >
          <div className="flex justify-between items-center px-6 py-3 text-sm">
            <div className="flex items-center gap-2 text-[var(--savanna-gold)]">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1 text-neutral-300 hover:text-[var(--savanna-gold)] transition-colors">
                <ThumbsUp className="w-4 h-4" /> {post.likes}
              </span>
              <span className="flex items-center gap-1 text-neutral-300 hover:text-[var(--savanna-gold)] transition-colors">
                <MessageCircle className="w-4 h-4" /> {post.comments}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-8 space-y-4">
        {/* Author */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 text-neutral-400 text-sm group-hover:text-[var(--savanna-gold)] transition-colors"
        >
          <User className="w-4 h-4" />
          <span>By {post.author}</span>
        </motion.div>

        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`${playfair.className} text-2xl font-bold text-white group-hover:text-[var(--savanna-gold)] transition-colors`}
        >
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </motion.h3>

        {/* Excerpt */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-neutral-400 leading-relaxed line-clamp-3"
        >
          {post.excerpt}
        </motion.p>

        {/* Read More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="pt-4"
        >
          <Link href={`/blog/${post.slug}`}>
            <motion.button
              whileHover={{ x: 8 }}
              className="group/button flex items-center gap-2 text-[var(--savanna-gold)] font-semibold"
            >
              Read Full Story
              <ArrowRight className="w-4 h-4 transition-transform group-hover/button:translate-x-2" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.article>
  );
}