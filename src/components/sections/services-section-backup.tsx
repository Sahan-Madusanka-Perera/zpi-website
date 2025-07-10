'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Flame, Snowflake } from 'lucide-react';
import { ServiceModal } from '../ui/service-modal';
import { BackgroundAccents } from '../ui/background-accents';

const services = [
  {
    title: "Electrical System",
    description: "Comprehensive electrical infrastructure support and emergency response services to minimize manufacturing downtime and blackouts.",
    details: [
      "Emergency Breakdown Services: Provide technical support to minimize down-time in production and minimize blackout time.",
      "Infrared thermography: With the use of specialized thermal imaging equipment, electrical systems can be inspected while under load and energized.",
      "Electrical preventive maintenance: Regular inspection and service of equipment to detect potential problems.",
      "Electrical System Analysis: Inspect and gather data of the electrical system with correct analyzing equipment."
    ],
    icon: <Zap className="h-8 w-8 text-red-500" />
  },
  {
    title: "Fire Protection",
    description: "Professional fire protection and detection system maintenance to ensure optimal functionality and safety.",
    details: [
      "Regular maintenance and inspection of fire protection systems",
      "System cleaning, adjustment, and lubrication",
      "Wear parts replacement and defect elimination",
      "System evaluation and risk assessment",
      "Professional recommendations for system improvements"
    ],
    icon: <Flame className="h-8 w-8 text-red-500" />
  },
  {
    title: "Air Conditioning",
    description: "Comprehensive air conditioning services including breakdown support, preventive maintenance, and annual maintenance.",
    details: [
      "Emergency breakdown services for thermal comfort environment",
      "Preventive maintenance services",
      "Annual maintenance programs",
      "System optimization and efficiency improvements",
      "Professional technical support and advice"
    ],
    icon: <Snowflake className="h-8 w-8 text-red-500" />
  }
];

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <BackgroundAccents variant="vibrant" orbCount={5}>
      <section id="services" className="py-20 bg-white dark:bg-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <motion.div
          className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-red-500/20 blur-3xl"
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
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 text-gradient mb-4">Our Premium Services</h2>
            <p className="body-large text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Dedicated to providing technical support and emergency response to minimize manufacturing downtime and ensure continuous operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedService(index)}
                className="group cursor-pointer"
              >
                <div className="relative bg-gray-50 dark:bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-white/10 hover:border-red-500/50 transition-all duration-300 h-full shadow-sm hover:shadow-md">
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="heading-3 text-gradient mb-4">{service.title}</h3>
                  <p className="body-regular text-gray-700 dark:text-gray-300 mb-6">{service.description}</p>
                  <div className="flex items-center text-red-500 group-hover:translate-x-1 transition-transform duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Service Modal */}
        {selectedService !== null && (
          <ServiceModal
            isOpen={true}
            onClose={() => setSelectedService(null)}
            service={services[selectedService]}
          />
        )}
      </section>
    </BackgroundAccents>
  );
} 