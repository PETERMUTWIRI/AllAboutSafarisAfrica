'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send, Mail, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';
import { AnimatePresence } from 'framer-motion';

const playfair = Playfair_Display({ subsets: ['latin'] });

export function Newsletter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSuccess(true);
    setEmail('');
    
    // Reset after 4 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setIsSubmitting(false);
    }, 4000);
  };

  return (
    <section 
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      {/* Background with subtle parallax */}
      <div className="absolute inset-0">
        <Image
          src="/images/newsletter-bg.jpg" // Use a misty forest or starry sky
          alt="African night sky"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/60 to-neutral-900/80" />
      </div>

      {/* Floating particles (fireflies effect) */}
      <motion.div
        animate={{
          x: [0, 20, -20, 0],
          y: [0, -30, -10, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-1 h-1 bg-savanna-gold rounded-full"
      />
      <motion.div
        animate={{
          x: [0, -15, 15, 0],
          y: [0, -20, -40, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-40 right-20 w-1 h-1 bg-earth-ochre rounded-full"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            className="mx-auto mb-8 w-20 h-20 bg-savanna-gold rounded-full flex items-center justify-center"
          >
            <Mail className="w-10 h-10 text-neutral-900" />
          </motion.div>

          <motion.h5
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="text-savanna-gold text-sm font-semibold tracking-widest uppercase mb-4"
          >
            Exclusive Access
          </motion.h5>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className={`${playfair.className} text-5xl lg:text-6xl font-bold text-white mb-6`}
          >
            Join the Circle
            <span className="block text-savanna-gold">of Explorers</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9 }}
            className="text-neutral-300 text-lg leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            Get early access to limited expeditions, photography masterclasses, 
            and stories from the field that never make it to social media.
          </motion.p>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.1, type: "spring", stiffness: 80 }}
            onSubmit={handleSubmit}
            className="max-w-md mx-auto"
          >
            <div className="relative">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-full px-6 py-6 text-lg backdrop-blur-sm focus:border-savanna-gold transition-colors"
                required
              />
              
              <Button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="absolute right-2 top-2 rounded-full bg-savanna-gold hover:bg-earth-ochre text-neutral-900 font-bold px-6 py-4 transition-all duration-300"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-5 h-5" />
                  </motion.div>
                ) : isSuccess ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    ✓
                  </motion.div>
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </Button>
            </div>

            {/* Success message */}
            <AnimatePresence>
              {isSuccess && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-savanna-gold mt-4 font-semibold"
                >
                  Welcome to the circle. Check your inbox for a gift. 🎁
                </motion.p>
              )}
            </AnimatePresence>

            <p className="text-neutral-400 text-xs mt-4">
              We respect your privacy. Unsubscribe with one click.
            </p>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}