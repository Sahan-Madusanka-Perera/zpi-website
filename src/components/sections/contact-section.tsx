'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, MapPin, Mail, Clock, MessageCircle, Send, ArrowRight } from 'lucide-react';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Phone,
      title: "Emergency Hotline",
      details: ["077 7 441 142", "24/7 Emergency Support"],
      gradient: "from-red-500 to-red-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@zeuspower.lk", "support@zeuspower.lk"],
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["Colombo, Sri Lanka", "Monday - Saturday: 8AM - 6PM"],
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Clock,
      title: "Service Hours",
      details: ["24/7 Emergency Response", "Regular Hours: 8AM - 6PM"],
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="contact" className="section-modern bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black relative overflow-hidden">
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
            <MessageCircle className="h-4 w-4 text-red-500" />
            <span className="text-body-sm font-semibold text-red-600 dark:text-red-400">Get In Touch</span>
          </motion.div>
          
          <h2 className="text-display-2 gradient-text-primary mb-6 text-balance">
            Ready to Get Started?
          </h2>
          <p className="text-body-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-pretty">
            Contact our expert team for emergency support, service inquiries, or to discuss 
            your technical requirements. We&apos;re here to help 24/7.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="modern-card p-6 text-center group hover:scale-105 transition-all duration-300"
            >
              <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${info.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <info.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-heading-3 gradient-text-primary mb-3">
                {info.title}
              </h3>
              <div className="space-y-1">
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-body-sm text-gray-600 dark:text-gray-400">
                    {detail}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Emergency Contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="modern-card p-8 lg:p-12 relative overflow-hidden">
              {/* Emergency Badge */}
              <div className="absolute top-6 right-6">
                <div className="px-3 py-1 rounded-full bg-red-500 text-white text-xs font-bold">
                  24/7 EMERGENCY
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-heading-1 gradient-text-primary">
                    Emergency Support
                  </h3>
                  <p className="text-body-sm text-gray-500 dark:text-gray-400">
                    Available 24/7 for critical situations
                  </p>
                </div>
              </div>

              <p className="text-body text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                When you&apos;re facing a critical system failure or emergency breakdown, 
                our expert technicians are just a phone call away. We provide rapid 
                response times to minimize your downtime.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                    <Clock className="h-4 w-4 text-green-500" />
                  </div>
                  <span className="text-body font-medium">Average response time: 30 minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Phone className="h-4 w-4 text-blue-500" />
                  </div>
                  <span className="text-body font-medium">Direct line to technical experts</span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <motion.a
                  href="tel:+94777441142"
                  className="btn-primary group text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Emergency Line</span>
                  <span className="font-bold">077 7 441 142</span>
                </motion.a>
                
                <motion.a
                  href="mailto:emergency@zeuspower.lk"
                  className="btn-secondary text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="h-5 w-5" />
                  <span>Email Emergency Team</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right - General Contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="modern-card p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-heading-1 gradient-text-primary">
                    General Inquiries
                  </h3>
                  <p className="text-body-sm text-gray-500 dark:text-gray-400">
                    Sales, support, and partnership opportunities
                  </p>
                </div>
              </div>

              <p className="text-body text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Looking to learn more about our services, schedule preventive maintenance, 
                or discuss a partnership? Our team is ready to help you find the right 
                solution for your needs.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                      Head Office
                    </h4>
                    <p className="text-body-sm text-gray-600 dark:text-gray-400">
                      Colombo, Sri Lanka<br />
                      Monday - Saturday: 8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                      Email Support
                    </h4>
                    <p className="text-body-sm text-gray-600 dark:text-gray-400">
                      info@zeuspower.lk<br />
                      support@zeuspower.lk
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <motion.a
                  href="mailto:info@zeuspower.lk"
                  className="btn-primary group text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="h-5 w-5" />
                  <span>Send Us a Message</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </motion.a>
                
                <motion.button
                  className="btn-secondary text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More About Us
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
