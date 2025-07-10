'use client';

import { motion, useInView } from 'framer-motion';
import { Button } from '../ui/button';
import { Linkedin, Users, Award, Target } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="section-modern bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black relative overflow-hidden">
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
            <Users className="h-4 w-4 text-red-500" />
            <span className="text-body-sm font-semibold text-red-600 dark:text-red-400">Our Team</span>
          </motion.div>
          
          <h2 className="text-display-2 gradient-text-primary mb-6 text-balance">
            Meet the Experts Behind Zeus Power
          </h2>
          <p className="text-body-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-pretty">
            Our dedicated team of professionals brings decades of combined experience in electrical systems, 
            fire protection, and technical support to ensure your operations run smoothly.
          </p>
        </motion.div>

        {/* Team Photos Showcase */}
        <div className="flex flex-col gap-12 mb-20 max-w-5xl mx-auto">
          {/* First Team Photo - Taller Portrait Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group"
          >
            <div className="modern-card p-4 group-hover:scale-[1.02] transition-all duration-500">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image
                  src="/images/team.jpg"
                  alt="Zeus Power International Team"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-8 left-8 right-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-heading-1 font-bold mb-4">Our Professional Team</h3>
                  <p className="text-body-xl">Dedicated experts ready to serve you with unmatched technical expertise</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Second Team Photo - Smaller Landscape */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative group max-w-3xl mx-auto w-full"
          >
            <div className="modern-card p-2 group-hover:scale-[1.02] transition-all duration-500">
              <div className="relative aspect-[21/9] overflow-hidden rounded-xl">
                <Image
                  src="/images/team_pose_2.jpg"
                  alt="Zeus Power International Team Photo"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-heading-3 font-bold mb-2">United in Excellence</h3>
                  <p className="text-body-sm">Committed to your success and operational excellence</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-heading-2 gradient-text-primary mb-2">50+</h3>
            <p className="text-body text-gray-600 dark:text-gray-300">Expert Technicians</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-heading-2 gradient-text-primary mb-2">15+</h3>
            <p className="text-body text-gray-600 dark:text-gray-300">Years Experience</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-heading-2 gradient-text-primary mb-2">24/7</h3>
            <p className="text-body text-gray-600 dark:text-gray-300">Emergency Support</p>
          </div>
        </motion.div>

        {/* Team Members Grid Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mb-16"
        >
          <h3 className="text-heading-1 gradient-text-primary mb-4">
            Leadership Team
          </h3>
          <p className="text-body-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Connect with our experienced leaders who guide Zeus Power International's mission 
            to deliver exceptional technical services and emergency support.
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="group"
            >
              <div className="modern-card p-6 text-center group-hover:scale-[1.02] transition-all duration-300">
                <div className="relative aspect-square mb-6 overflow-hidden rounded-xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <h3 className="text-heading-3 gradient-text-primary mb-2">
                  {member.name}
                </h3>
                <p className="text-body text-gray-600 dark:text-gray-300 mb-4">
                  {member.role}
                </p>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:border-red-500 group-hover:text-red-500 transition-colors duration-300"
                  onClick={() => window.open(member.linkedin, '_blank')}
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  Connect
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}