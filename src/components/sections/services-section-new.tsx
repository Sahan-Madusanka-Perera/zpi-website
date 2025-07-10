'use client';

import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Flame, Snowflake, ArrowRight, CheckCircle, Settings, Shield, Clock } from 'lucide-react';
import { ServiceModal } from '../ui/service-modal';

const services = [
  {
    title: "Electrical Systems",
    subtitle: "Power & Infrastructure",
    description: "Comprehensive electrical infrastructure support and emergency response services to minimize manufacturing downtime and ensure continuous operations.",
    details: [
      "Emergency Breakdown Services: Provide technical support to minimize down-time in production and minimize blackout time.",
      "Infrared thermography: With the use of specialized thermal imaging equipment, electrical systems can be inspected while under load and energized.",
      "Electrical preventive maintenance: Regular inspection and service of equipment to detect potential problems.",
      "Electrical System Analysis: Inspect and gather data of the electrical system with correct analyzing equipment."
    ],
    icon: <Zap className="h-8 w-8 text-red-500" />,
    iconComponent: Zap,
    gradient: "from-blue-500 to-blue-600",
    features: ["24/7 Emergency Response", "Preventive Maintenance", "System Analysis", "Infrared Thermography"]
  },
  {
    title: "Fire Protection",
    subtitle: "Safety & Detection",
    description: "Professional fire protection and detection system maintenance to ensure optimal functionality and comprehensive safety coverage.",
    details: [
      "Regular maintenance and inspection of fire protection systems",
      "System cleaning, adjustment, and lubrication",
      "Wear parts replacement and defect elimination",
      "System evaluation and risk assessment",
      "Professional recommendations for system improvements"
    ],
    icon: <Flame className="h-8 w-8 text-red-500" />,
    iconComponent: Flame,
    gradient: "from-red-500 to-red-600",
    features: ["System Maintenance", "Risk Assessment", "Component Replacement", "Safety Compliance"]
  },
  {
    title: "Air Conditioning",
    subtitle: "Climate Control",
    description: "Comprehensive air conditioning services including breakdown support, preventive maintenance, and optimization for maximum efficiency.",
    details: [
      "Emergency breakdown services for thermal comfort environment",
      "Preventive maintenance services",
      "Annual maintenance programs",
      "System optimization and efficiency improvements",
      "Professional technical support and advice"
    ],
    icon: <Snowflake className="h-8 w-8 text-red-500" />,
    iconComponent: Snowflake,
    gradient: "from-cyan-500 to-cyan-600",
    features: ["Emergency Repairs", "Preventive Care", "Efficiency Optimization", "Expert Support"]
  }
];

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-modern bg-gradient-to-br from-white to-gray-50 dark:from-black dark:to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, currentColor 1px, transparent 1px), linear-gradient(-45deg, currentColor 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

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
            <Settings className="h-4 w-4 text-red-500" />
            <span className="text-body-sm font-semibold text-red-600 dark:text-red-400">Our Premium Services</span>
          </motion.div>
          
          <h2 className="text-display-2 gradient-text-primary mb-6 text-balance">
            Expert Technical Solutions for Every Industry
          </h2>
          <p className="text-body-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-pretty">
            Dedicated to providing comprehensive technical support and emergency response services 
            to minimize manufacturing downtime and ensure continuous operations across all industries.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedService(index)}
            >
              <div className="modern-card p-8 h-full group-hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
                {/* Service Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.iconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-sm" />
                </div>

                {/* Service Content */}
                <div className="mb-6">
                  <div className="text-body-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">
                    {service.subtitle}
                  </div>
                  <h3 className="text-heading-2 gradient-text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-body text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Service Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-body-sm text-gray-600 dark:text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <div className="flex items-center text-red-500 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-body-sm">Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="modern-card p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                <Settings className="h-6 w-6 text-white" />
              </div>
            </div>
            
            <h3 className="text-heading-1 gradient-text-primary mb-4">
              Need Emergency Support?
            </h3>
            <p className="text-body-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Our expert technicians are available 24/7 to handle any emergency breakdown 
              and get your systems back online with minimal downtime.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                className="btn-primary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Contact Emergency Support</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
              
              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn About Our Company
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Service Modal */}
      {selectedService !== null && (
        <ServiceModal
          isOpen={true}
          onClose={() => setSelectedService(null)}
          service={{
            title: services[selectedService].title,
            description: services[selectedService].description,
            details: services[selectedService].details,
            icon: services[selectedService].icon
          }}
        />
      )}
    </section>
  );
}
