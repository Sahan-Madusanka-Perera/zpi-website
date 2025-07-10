'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Network } from 'lucide-react';
import Image from 'next/image';

const companies = [
  {
    name: 'Illukkumbura',
    fullName: 'Illukkumbura Industrial Automation (PVT) Ltd',
    description: 'Specializing in industrial automation and control systems.',
    image: '/images/placeholder-illukkumbura.png',
    services: ['Industrial Automation', 'Control Systems', 'Process Optimization']
  },
  {
    name: 'Bianco',
    fullName: 'Bianco Electrical (PVT) Ltd',
    description: 'Leading provider of electrical solutions and maintenance.',
    image: '/images/placeholder-bianco.jpg',
    services: ['Electrical Solutions', 'Maintenance Services', 'Power Systems']
  },
  {
    name: 'Ceylektra',
    fullName: 'Ceylektra Power Solutions',
    description: 'Innovative power solutions and energy management.',
    image: '/images/placeholder-ceylektra.jpg',
    services: ['Power Solutions', 'Energy Management', 'Grid Systems']
  }
];

export function StrengthSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="strength" className="section-modern bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black relative overflow-hidden">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>
      
      {/* Enhanced Background Effects */}
      <motion.div
        className="absolute -top-40 -left-40 h-96 w-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 68, 68, 0.12) 0%, rgba(255, 68, 68, 0.04) 40%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          rotate: [0, 90, 180]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 68, 68, 0.08) 0%, rgba(255, 68, 68, 0.02) 40%, transparent 70%)',
          filter: 'blur(30px)',
        }}
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [180, 270, 360]
        }}
        transition={{ 
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="container-modern relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-red-500/20 mb-6"
          >
            <Network className="h-4 w-4 text-red-500" />
            <span className="text-body-sm font-semibold text-red-600 dark:text-red-400">Our Network</span>
          </motion.div>
          
          <h2 className="text-display-2 gradient-text-primary mb-6 text-balance">
            Our Group Companies
          </h2>
          <p className="text-body-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-pretty">
            Part of a strong network of specialized companies working together to provide comprehensive 
            technical solutions and services across multiple industries.
          </p>
        </motion.div>

        {/* Companies Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="modern-card overflow-hidden group cursor-pointer"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={company.image}
                  alt={company.fullName}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 transform transition-transform duration-300 group-hover:translate-y-0">
                  <h3 className="text-heading-3 font-bold text-white">{company.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-heading-2 gradient-text-primary mb-3 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">{company.fullName}</h3>
                <p className="text-body text-gray-600 dark:text-gray-300 mb-6 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">{company.description}</p>
                <ul className="space-y-3">
                  {company.services.map((service, serviceIndex) => (
                    <li 
                      key={service} 
                      className="flex items-center text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300"
                      style={{ 
                        transitionDelay: `${serviceIndex * 50}ms` 
                      }}
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0 group-hover:bg-red-600 transition-colors duration-300"></div>
                      <span className="text-body-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 