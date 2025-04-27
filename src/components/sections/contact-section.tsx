'use client';

import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-black relative overflow-hidden">
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

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-gradient mb-4">Contact Us</h2>
          <p className="body-large text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Get in touch with our team for any inquiries or support
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Information Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 dark:bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-white/10 hover:border-red-500/50 transition-all duration-300 shadow-sm"
          >
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                  <MapPin className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Address</h3>
                  <p className="text-gray-700 dark:text-gray-300">No. 123, Main Street, Colombo, Sri Lanka</p>
                </div>
              </div>

              {/* Hotline */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                  <Phone className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Hotline</h3>
                  <p className="text-gray-700 dark:text-gray-300">+94 11 234 5678</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                  <Mail className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Email</h3>
                  <p className="text-gray-700 dark:text-gray-300">info@zeuspower.com</p>
                </div>
              </div>

              {/* Support Hours */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                  <Clock className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">24/7 Support</h3>
                  <p className="text-gray-700 dark:text-gray-300">Emergency support available round the clock</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Emergency Support Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 dark:bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-white/10 hover:border-red-500/50 transition-all duration-300 shadow-sm"
          >
            <div className="h-full flex flex-col justify-center items-center text-center">
              <div className="p-6 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
                <Phone className="h-12 w-12 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Emergency Support</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8">Immediate assistance for critical situations</p>
              <motion.a
                href="tel:+94112345678"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium transition-all duration-300 rounded-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#ff4040] via-[#ff6b6b] to-[#ff8585] group-hover:from-[#ff8585] group-hover:via-[#ff6b6b] group-hover:to-[#ff4040] transition-all duration-500" />
                <span className="absolute inset-0.5 rounded-md bg-white dark:bg-black group-hover:bg-transparent transition-all duration-300" />
                <span className="relative z-10 text-red-600 dark:text-red-500 group-hover:text-white transition-colors duration-300" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  Call Now
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 