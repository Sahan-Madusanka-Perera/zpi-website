'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Award, Users, Globe, Shield, Zap } from 'lucide-react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const industries = [
    { name: "Apparel Manufacturing", icon: <Building2 className="h-6 w-6" /> },
    { name: "Confectionary Manufacturing", icon: <Award className="h-6 w-6" /> },
    { name: "FMCG", icon: <Users className="h-6 w-6" /> },
    { name: "Pharmaceutical Manufacturing", icon: <Globe className="h-6 w-6" /> },
    { name: "Food and Beverages Manufacturing", icon: <Shield className="h-6 w-6" /> },
    { name: "Commercial and Residential Buildings", icon: <Zap className="h-6 w-6" /> }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-black relative overflow-hidden">
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
        {/* Introduction */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-gradient mb-4">About Us</h2>
          <p className="body-large text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Zeus Power International (pvt) Ltd is a Subsidiary company of Illukkumbura Industrial 
            Automation (pvt) Ltd. We handle all Emergency Breakdowns and Services in Electrical 
            Systems, Fire Detection/Protection and Air-Conditioning Systems.
          </p>
        </motion.div>

        {/* Company Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gray-50 dark:bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-white/10 shadow-sm">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="heading-3 text-gradient mb-6"
            >
              Our Commitment
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="body-regular text-gray-700 dark:text-gray-300 mb-8"
            >
              We are a part of a collection of companies prepared to provide the best quality and 
              technically sound solution to our customers. Our services and products are accepted 
              both locally and internationally. We are an elite group of technically experienced 
              personnel in varying industries such as:
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 64, 64, 0.05)' }}
                  className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-white/10 hover:border-red-500/50 transition-all duration-300"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1, ease: "backOut" }}
                    className="p-3 rounded-lg bg-red-500/10 border border-red-500/20"
                  >
                    {industry.icon}
                  </motion.div>
                  <span className="text-gray-700 dark:text-gray-300">{industry.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 