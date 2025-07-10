'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Award, Users, Globe, Shield, Zap, ArrowRight, CheckCircle, Clock } from 'lucide-react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const industries = [
    { name: "Apparel Manufacturing", icon: Building2, color: "from-blue-500 to-blue-600" },
    { name: "Confectionary Manufacturing", icon: Award, color: "from-purple-500 to-purple-600" },
    { name: "FMCG Industries", icon: Users, color: "from-green-500 to-green-600" },
    { name: "Pharmaceutical Manufacturing", icon: Globe, color: "from-red-500 to-red-600" },
    { name: "Food and Beverages", icon: Shield, color: "from-yellow-500 to-yellow-600" },
    { name: "Commercial Buildings", icon: Zap, color: "from-indigo-500 to-indigo-600" }
  ];

  const stats = [
    { number: "24/7", label: "Emergency Response", icon: Clock },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "500+", label: "Projects Completed", icon: CheckCircle },
    { number: "50+", label: "Expert Technicians", icon: Users }
  ];

  return (
    <section id="about" className="section-modern bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
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
            <Building2 className="h-4 w-4 text-red-500" />
            <span className="text-body-sm font-semibold text-red-600 dark:text-red-400">About Our Company</span>
          </motion.div>
          
          <h2 className="text-display-2 gradient-text-primary mb-6 text-balance">
            Leading the Future of Industrial Services
          </h2>
          <p className="text-body-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-pretty">
            Zeus Power International (Pvt) Ltd is a subsidiary company of Illukkumbura Industrial 
            Automation (Pvt) Ltd, committed to providing the highest quality technical solutions 
            and emergency response services.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="modern-card p-6 text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-heading-1 gradient-text-primary mb-2">{stat.number}</div>
              <div className="text-body-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="modern-card p-8 lg:p-12">
              <h3 className="text-heading-1 gradient-text-primary mb-6">
                Our Commitment to Excellence
              </h3>
              <p className="text-body text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                We are part of a collection of companies prepared to provide the best quality and 
                technically sound solutions to our customers. Our services and products are accepted 
                both locally and internationally by an elite group of technically experienced 
                personnel across varying industries.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "24/7 Emergency Response Services",
                  "Certified Technical Specialists",
                  "International Quality Standards",
                  "Comprehensive Industry Coverage"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span className="text-body text-gray-700 dark:text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="btn-primary group"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Learn More About Our Services</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Industries */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="space-y-6">
              <h3 className="text-heading-2 gradient-text-primary mb-8">
                Industries We Serve
              </h3>
              
              <div className="grid gap-4">
                {industries.map((industry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="modern-card p-6 group hover:scale-[1.02] transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${industry.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <industry.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-body font-medium text-gray-800 dark:text-gray-200">
                        {industry.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
