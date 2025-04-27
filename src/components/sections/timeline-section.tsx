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

const timeline = [
  {
    year: "1992",
    title: "Company Foundation",
    description: "Illukkumbura Industrial Automation (Pvt) Ltd. was incorporated to design and execute projects in Electrical Engineering, fire engineering and related services.",
    icon: <Building2 className="h-6 w-6 text-red-500" />
  },
  {
    year: "2004",
    title: "Quality Certification",
    description: "Illukkumbura Industrial Automation (Pvt) Ltd is certified as ISO 9001:2000 company and achieved an EM 1 Grade in CIDA ranking",
    icon: <Award className="h-6 w-6 text-red-500" />
  },
  {
    year: "2010",
    title: "Service Expansion",
    description: "Management of IIAL acknowledges the requirement of a dedicated team to provide Emergency Breakdown service and Preventive maintenance services.",
    icon: <Users className="h-6 w-6 text-red-500" />
  },
  {
    year: "2012",
    title: "International Service",
    description: "First overseas Preventive maintenance service is provided to a customer based in Bangladesh",
    icon: <Globe className="h-6 w-6 text-red-500" />
  },
  {
    year: "2015",
    title: "Dedicated Team Formation",
    description: "Dedicated team made available within IIAL as S.W.A.T – Special Works And Technology to attend to Emergency Breakdown and Preventive maintenance services",
    icon: <Shield className="h-6 w-6 text-red-500" />
  },
  {
    year: "2019",
    title: "ZPI Establishment",
    description: "Zeus Power International (pvt) Ltd is formed to provide the dedicated services in Emergency Breakdown and Preventive maintenance services.",
    icon: <Zap className="h-6 w-6 text-red-500" />
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
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return (
    <section ref={timelineRef} id="timeline" className="py-20 bg-stone-50 dark:bg-black relative overflow-hidden">
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
          style={{ opacity, scale }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-gradient mb-4">Our Journey</h2>
          <p className="body-large text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            A timeline of our growth and achievements in providing exceptional services
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
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              const itemRef = useRef<HTMLDivElement>(null);
              const { itemOpacity, itemX, itemScale } = useTimelineItemAnimation(itemRef, isEven);

              return (
                <motion.div
                  key={index}
                  ref={itemRef}
                  style={{ opacity: itemOpacity, x: itemX, scale: itemScale }}
                  className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-4 md:gap-8`}
                >
                  {/* Mobile Timeline - Year + Icon */}
                  <div className="flex md:hidden items-center justify-center space-x-4 w-full mb-4">
                    <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20">
                      {item.icon}
                    </div>
                    <div className="font-bold text-xl text-red-500">
                      {item.year}
                    </div>
                  </div>

                  {/* Year Circle - Desktop Only */}
                  <motion.div
                    style={{ opacity: itemOpacity, scale: itemScale }}
                    className={`hidden md:flex absolute ${isEven ? 'md:left-0' : 'md:right-0'} w-20 h-20 md:w-24 md:h-24 rounded-full bg-red-500/10 border-2 border-red-500/20 items-center justify-center z-10`}
                  >
                    <span className="text-red-500 font-bold text-xl">{item.year}</span>
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    style={{ opacity: itemOpacity, scale: itemScale }}
                    className={`w-full md:w-1/2 ${isEven ? 'md:ml-auto' : 'md:mr-auto'}`}
                  >
                    <div className="bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:border-red-500/50 transition-all duration-300 shadow-sm hover:shadow-md">
                      <motion.div
                        style={{ opacity: itemOpacity, scale: itemScale }}
                        className={`hidden md:flex ${isEven ? 'justify-end' : 'justify-start'} mb-4`}
                      >
                        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                          {item.icon}
                        </div>
                      </motion.div>
                      <motion.h3
                        style={{ opacity: itemOpacity, scale: itemScale }}
                        className="text-xl font-bold text-gray-900 dark:text-white mb-3"
                      >
                        {item.title}
                      </motion.h3>
                      <motion.p
                        style={{ opacity: itemOpacity, scale: itemScale }}
                        className="text-gray-700 dark:text-gray-300 sm:text-justify leading-relaxed"
                      >
                        {item.description}
                      </motion.p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
} 