'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Linkedin } from 'lucide-react';
import Image from 'next/image';

const teamMembers = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    image: "/images/team/placeholder-1.jpg",
    linkedin: "https://linkedin.com/in/johnsmith"
  },
  {
    name: "Sarah Johnson",
    role: "Technical Director",
    image: "/images/team/placeholder-2.jpg",
    linkedin: "https://linkedin.com/in/sarahjohnson"
  },
  {
    name: "Michael Chen",
    role: "Operations Manager",
    image: "/images/team/placeholder-3.jpg",
    linkedin: "https://linkedin.com/in/michaelchen"
  },
  {
    name: "Emily Davis",
    role: "Customer Relations",
    image: "/images/team/placeholder-4.jpg",
    linkedin: "https://linkedin.com/in/emilydavis"
  }
];

export default function TeamSection() {
  return (
    <section className="relative py-20 bg-stone-50 dark:bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 dark:opacity-20" />
      <motion.div
        className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-red-500/20 dark:bg-red-500/30 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-gradient mb-4">Our Team</h2>
          <p className="body-large text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Meet the dedicated professionals behind our success. Our team combines expertise with passion to deliver exceptional service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 p-6 shadow-sm">
                <div className="relative aspect-square mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="heading-3 text-gradient mb-2">{member.name}</h3>
                <p className="body-regular text-gray-700 dark:text-gray-300 mb-4">{member.role}</p>
                <motion.a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                >
                  <Button
                    variant="outline"
                    className="w-full relative overflow-hidden border-red-500/50 text-red-500 hover:bg-red-500/20 hover:text-red-600 group"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '0%' }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute inset-0 border-red-500/50 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        boxShadow: '0 0 20px rgba(255, 64, 64, 0.3)',
                      }}
                    />
                    <motion.span className="relative flex items-center justify-center">
                      <Linkedin className="mr-2 h-4 w-4" />
                      <span className="text-gradient">Connect on LinkedIn</span>
                    </motion.span>
                  </Button>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 