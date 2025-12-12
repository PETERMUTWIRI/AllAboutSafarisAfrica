'use client';

import { motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import { BlogCard } from './BlogCard';
import { Newsletter } from './Newsletter';
import { BackToTop } from './BackToTop';
import { BlogPost } from '@/types/blog';

const playfair = Playfair_Display({ subsets: ['latin'] });

interface BlogContentProps {
  posts: BlogPost[];
}

export function BlogContent({ posts }: BlogContentProps) {
  return (
    <>
      <section className="py-32 bg-gradient-to-b from-neutral-900 to-neutral-800">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h5 className="text-[var(--savanna-gold)] text-sm font-semibold tracking-widest uppercase mb-4">
              Stories from the Field
            </h5>
            <h2 className={`${playfair.className} text-5xl lg:text-7xl font-bold text-white leading-tight`}>
              Popular Travel
              <span className="block text-[var(--savanna-gold)]">Blogs</span>
            </h2>
            <p className="text-neutral-300 text-lg mt-6 max-w-2xl mx-auto">
              From insider tips to unforgettable experiences, our stories are your ultimate travel inspiration.
            </p>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 0.8, 
                  ease: "easeOut" 
                }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
      <BackToTop />
    </>
  );
}