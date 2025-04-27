'use client';

import { motion } from 'framer-motion';
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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  },
  hover: {
    y: -10,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

export function StrengthSection() {
  return (
    <section id="strength" className="py-20 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="heading-2 text-red-600 dark:text-red-500 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Group Companies
          </motion.h2>
          <motion.p 
            className="body-large text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Part of a strong network of specialized companies working together to provide comprehensive solutions.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              variants={itemVariants}
              whileHover="hover"
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300 border border-transparent hover:border-red-400"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="h-full w-full"
                >
                  <Image
                    src={company.image}
                    alt={company.fullName}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <motion.div 
                  className="absolute bottom-4 left-4 right-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <h3 className="text-xl font-bold text-white">{company.name}</h3>
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="heading-3 text-gray-900 dark:text-white mb-2">{company.fullName}</h3>
                <p className="body-regular text-gray-600 dark:text-gray-300 mb-4">{company.description}</p>
                <motion.ul 
                  className="space-y-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  {company.services.map((service) => (
                    <motion.li 
                      key={service} 
                      className="flex items-center text-gray-700 dark:text-gray-200"
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 }
                      }}
                    >
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      {service}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 