'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Camera, Maximize2 } from 'lucide-react';
import Image from 'next/image';

// Gallery images data
const galleryImages = [
  {
    id: 1,
    src: "/images/service1.jpg",
    alt: "Electrical Systems Maintenance",
    category: "Electrical",
    title: "Advanced Electrical Systems",
    description: "Professional maintenance and installation of electrical infrastructure"
  },
  {
    id: 2,
    src: "/images/service2.jpg",
    alt: "Power Infrastructure",
    category: "Electrical",
    title: "Power Infrastructure",
    description: "Comprehensive power distribution and management solutions"
  },
  {
    id: 3,
    src: "/images/service3.jpg",
    alt: "Emergency Response",
    category: "Emergency",
    title: "24/7 Emergency Response",
    description: "Rapid response for critical system failures and emergencies"
  },
  {
    id: 4,
    src: "/images/service4.jpg",
    alt: "System Analysis",
    category: "Analysis",
    title: "System Analysis & Testing",
    description: "Thorough analysis and testing of all system components"
  },
  {
    id: 5,
    src: "/images/service5.jpg",
    alt: "Fire Protection Systems",
    category: "Fire Safety",
    title: "Fire Protection Systems",
    description: "Advanced fire detection and suppression systems"
  },
  {
    id: 6,
    src: "/images/service6.jpg",
    alt: "Safety Detection",
    category: "Fire Safety",
    title: "Safety Detection",
    description: "Cutting-edge safety monitoring and alert systems"
  },
  {
    id: 7,
    src: "/images/service7.jpg",
    alt: "Fire System Maintenance",
    category: "Fire Safety",
    title: "Fire System Maintenance",
    description: "Regular maintenance and testing of fire safety equipment"
  },
  {
    id: 8,
    src: "/images/service8.jpg",
    alt: "Air Conditioning Service",
    category: "HVAC",
    title: "HVAC Solutions",
    description: "Complete air conditioning and climate control services"
  },
  {
    id: 9,
    src: "/images/service9.jpg",
    alt: "Climate Control Systems",
    category: "HVAC",
    title: "Climate Control",
    description: "Precision climate control for optimal comfort"
  },
  {
    id: 10,
    src: "/images/service10.jpg",
    alt: "HVAC Maintenance",
    category: "HVAC",
    title: "HVAC Maintenance",
    description: "Professional maintenance for peak system performance"
  },
  {
    id: 11,
    src: "/images/service11.jpg",
    alt: "Cooling Solutions",
    category: "HVAC",
    title: "Advanced Cooling",
    description: "Innovative cooling solutions for all environments"
  }
];

export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!selectedImage && !isTransitioning) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
          setIsTransitioning(false);
        }, 300);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [selectedImage, isTransitioning]);

  // Navigate to next image with smooth transition
  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
      setIsTransitioning(false);
    }, 300);
  };

  // Navigate to previous image
  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
      setIsTransitioning(false);
    }, 300);
  };

  // Get next 2 images for the right side stack
  const getNextImages = () => {
    const nextImages = [];
    for (let i = 1; i <= 2; i++) {
      const index = (currentIndex + i) % galleryImages.length;
      nextImages.push({ ...galleryImages[index], stackIndex: i - 1 });
    }
    return nextImages;
  };

  const currentImage = galleryImages[currentIndex];
  const nextImages = getNextImages();

  return (
    <section id="gallery" className="section-modern bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 2px, transparent 0)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      {/* Animated Background Orb */}
      <motion.div
        className="absolute -top-40 -right-40 h-96 w-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 68, 68, 0.1) 0%, rgba(255, 68, 68, 0.05) 40%, transparent 70%)',
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

      <div className="container-modern relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-red-500/20 mb-6"
          >
            <Camera className="h-4 w-4 text-red-500" />
            <span className="text-body-sm font-semibold text-red-600 dark:text-red-400">Project Gallery</span>
          </motion.div>
          
          <h2 className="text-display-2 gradient-text-primary mb-6 text-balance">
            Our Work in Action
          </h2>
          <p className="text-body-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-pretty">
            Explore our comprehensive portfolio of electrical systems, fire protection, and HVAC solutions. 
            Each project represents our commitment to excellence and technical expertise.
          </p>
        </motion.div>

        {/* Dribbble-Style Carousel */}
        <div className="relative mb-16">
          <div className="flex items-center gap-8 max-w-6xl mx-auto">
            {/* Left Side - Current Image (Large) */}
            <div className="flex-1">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.6
                }}
                className="relative aspect-[4/3.2] rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
                onClick={() => setSelectedImage(currentImage)}
              >
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  quality={95}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                
                {/* Image Info Overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-6 left-6 right-6 text-white"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-red-500/90 rounded-full text-xs font-medium">
                      {currentImage.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{currentImage.title}</h3>
                  <p className="text-white/90 text-xs leading-relaxed">{currentImage.description}</p>
                </motion.div>
                
                {/* Expand Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <Maximize2 className="h-5 w-5" />
                </motion.div>
              </motion.div>
            </div>

            {/* Right Side - Stacked Next Images */}
            <div className="w-80 flex flex-col gap-4">
              {nextImages.map((image, index) => (
                <motion.div
                  key={`${image.id}-${currentIndex}`}
                  initial={{ opacity: 0, x: 50, scale: 0.9 }}
                  animate={{ 
                    opacity: 1 - (index * 0.15), 
                    x: 0, 
                    scale: 1 - (index * 0.05),
                    y: index * -10
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    delay: index * 0.1
                  }}
                  className="relative aspect-[2/1.2] rounded-xl overflow-hidden shadow-lg cursor-pointer group"
                  style={{
                    zIndex: 10 - index,
                  }}
                  onClick={() => {
                    setCurrentIndex((currentIndex + index + 1) % galleryImages.length);
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  
                  {/* Smooth Morphing Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-red-500/20"
                  />
                  
                  {/* Image Title */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-medium">
                        {image.category}
                      </span>
                    </div>
                    <h4 className="text-xs font-semibold truncate">{image.title}</h4>
                  </div>
                  
                  {/* Hover Effect */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    className="absolute top-2 right-2 w-6 h-6 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
                  >
                    <ChevronRight className="h-3 w-3" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-40">
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors disabled:opacity-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
          
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-40">
            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors disabled:opacity-50"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center gap-2 mb-8">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              disabled={isTransitioning}
              className={`w-3 h-3 rounded-full transition-all duration-300 disabled:opacity-50 ${
                index === currentIndex
                  ? 'bg-red-500 scale-125'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-red-300 dark:hover:bg-red-400'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 rounded-2xl glass-card">
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text-primary">500+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</div>
            </div>
            <div className="w-px h-12 bg-gray-200 dark:bg-gray-700" />
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text-primary">15+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-gray-200 dark:bg-gray-700" />
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text-primary">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain rounded-lg"
              quality={100}
            />
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            
            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 bg-red-500/80 rounded-full text-xs font-medium">
                  {selectedImage.category}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-1">{selectedImage.title}</h3>
              <p className="text-sm text-white/90">{selectedImage.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
