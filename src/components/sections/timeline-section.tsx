'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Award, Users, Globe, Shield, Zap } from 'lucide-react';

// Custom hook for timeline item animations
function useTimelineItemAnimation(itemRef: React.RefObject<HTMLDivElement | null>, isEven: boolean) {
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"]
  });

  const itemOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const itemX = useTransform(scrollYProgress, [0, 1], [isEven ? -50 : 50, 0]);
  const itemScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);

  return { itemOpacity, itemX, itemScale };
}

// Timeline Item Component
interface TimelineItemProps {
  item: {
    year: string;
    title: string;
    description: string;
    icon: React.ReactNode;
  };
  index: number;
}

function TimelineItem({ item, index }: TimelineItemProps) {
  const isEven = index % 2 === 0;
  const itemRef = useRef<HTMLDivElement>(null);
  const { itemOpacity, itemX, itemScale } = useTimelineItemAnimation(itemRef, isEven);

  return (
    <motion.div
      ref={itemRef}
      style={{ opacity: itemOpacity, x: itemX, scale: itemScale }}
      className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-4 md:gap-8`}
    >
      {/* Mobile Timeline - Year + Icon */}
      <div className="flex md:hidden items-center justify-center space-x-4 w-full mb-4">
        <div className="p-3 rounded-lg bg-white dark:bg-gray-800 border border-red-500/20 shadow-md">
          <div className="text-red-500 [&>svg]:text-red-500">
            {item.icon}
          </div>
        </div>
        <div className="font-bold text-xl text-red-500">
          {item.year}
        </div>
      </div>

      {/* Year Circle - Desktop Only */}
      <motion.div
        style={{ opacity: itemOpacity, scale: itemScale }}
        className={`hidden md:flex absolute ${isEven ? 'md:left-0' : 'md:right-0'} w-20 h-20 md:w-24 md:h-24 rounded-full bg-white dark:bg-gray-900 border-2 border-red-500/30 items-center justify-center z-10 shadow-xl`}
      >
        <span className="text-red-500 font-bold text-xl">{item.year}</span>
      </motion.div>

      {/* Content Card */}
      <motion.div
        style={{ opacity: itemOpacity, scale: itemScale }}
        className={`w-full md:w-1/2 ${isEven ? 'md:ml-auto' : 'md:mr-auto'}`}
      >
        <div className="modern-card p-6 group-hover:scale-[1.02] transition-all duration-300 bg-white dark:bg-gray-900 border border-gray-200/50 dark:border-gray-700/50">
          <motion.div
            style={{ opacity: itemOpacity, scale: itemScale }}
            className={`hidden md:flex ${isEven ? 'justify-end' : 'justify-start'} mb-4`}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center shadow-lg">
              <div className="text-white [&>svg]:text-white">
                {item.icon}
              </div>
            </div>
          </motion.div>
          <motion.h3
            style={{ opacity: itemOpacity, scale: itemScale }}
            className="text-heading-3 gradient-text-primary mb-3"
          >
            {item.title}
          </motion.h3>
          <motion.p
            style={{ opacity: itemOpacity, scale: itemScale }}
            className="text-body text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            {item.description}
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}

const timeline = [
  {
    year: "1992",
    title: "Company Foundation",
    description: "Illukkumbura Industrial Automation (Pvt) Ltd. was incorporated to design and execute projects in Electrical Engineering, fire engineering and related services.",
    icon: <Building2 className="h-6 w-6" />
  },
  {
    year: "2004",
    title: "Quality Certification",
    description: "Illukkumbura Industrial Automation (Pvt) Ltd is certified as ISO 9001:2000 company and achieved an EM 4 Grade in CIDA ranking",
    icon: <Award className="h-6 w-6" />
  },
  {
    year: "2010",
    title: "Service Expansion",
    description: "Management of IIAL acknowledges the requirement of a dedicated team to provide Emergency Breakdown service and Preventive maintenance services.",
    icon: <Users className="h-6 w-6" />
  },
  {
    year: "2012",
    title: "International Service",
    description: "First overseas Preventive maintenance service is provided to a customer based in Bangladesh",
    icon: <Globe className="h-6 w-6" />
  },
  {
    year: "2015",
    title: "Dedicated Team Formation",
    description: "Dedicated team made available within IIAL as S.W.A.T – Special Works And Technology to attend to Emergency Breakdown and Preventive maintenance services",
    icon: <Shield className="h-6 w-6" />
  },
  {
    year: "2019",
    title: "ZPI Establishment",
    description: "Zeus Power International (pvt) Ltd is formed to provide the dedicated services in Emergency Breakdown and Preventive maintenance services.",
    icon: <Zap className="h-6 w-6" />
  }
];

export function TimelineSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <section ref={timelineRef} id="timeline" className="section-modern bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black relative overflow-hidden">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      {/* Enhanced Background Effects */}
      <motion.div
        className="absolute -top-40 -right-40 h-96 w-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 68, 68, 0.15) 0%, rgba(255, 68, 68, 0.05) 40%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 68, 68, 0.1) 0%, rgba(255, 68, 68, 0.03) 40%, transparent 70%)',
          filter: 'blur(30px)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          rotate: [360, 180, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="container-modern relative z-10">
        <motion.div
          style={{ opacity, scale }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-red-500/20 mb-6"
          >
            <Building2 className="h-4 w-4 text-red-500" />
            <span className="text-body-sm font-semibold text-red-600 dark:text-red-400">Our Journey</span>
          </motion.div>

          <h2 className="text-display-2 gradient-text-primary mb-6 text-balance">
            Three Decades of Excellence
          </h2>
          <p className="text-body-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-pretty">
            From our founding in 1992 to becoming a leading technical services provider,
            discover the milestones that have shaped Zeus Power International&apos;s commitment to excellence.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line - Hide on mobile */}
          <motion.div
            style={{ opacity }}
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-red-500/30 via-red-500/50 to-red-500/30 hidden md:block"
          />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-24">
            {timeline.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 