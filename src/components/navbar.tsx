"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/context/theme-context';
import { useNavbar } from '@/context/navbar-context';
import { Sun, Moon, PhoneCall, Menu, X } from 'lucide-react';

interface AnimatedHamburgerProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

const AnimatedHamburger: React.FC<AnimatedHamburgerProps> = ({ isOpen, toggleOpen }) => {
  return (
    <button 
      onClick={toggleOpen}
      className="flex flex-col justify-center items-center w-8 h-8 relative overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="close"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <X className="h-6 w-6" />
          </motion.div>
        ) : (
          <motion.div
            key="open"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Menu className="h-6 w-6" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, isTransitioning } = useTheme();
  const { isNavbarVisible } = useNavbar();
  
  const navigationItems = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isScrolled = scrollY > 20;
      
      setScrolled(isScrolled);
    };

    handleScroll(); // Check initial scroll position
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const sectionId = href.substring(1);
      const section = document.getElementById(sectionId);
      if (section) {
        const offsetTop = section.offsetTop - 80; // Account for navbar height
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isNavbarVisible ? 0 : -100 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'glass-nav shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="container-modern">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <Link href="/" className="flex items-center gap-3 group">
                <motion.div 
                  className="relative w-48 h-12"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="logo-container w-full h-full hover-glow">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <motion.div
                        className="absolute inset-0"
                        animate={{ 
                          opacity: 1,
                          scale: 1
                        }}
                        transition={{ 
                          duration: 0.4, 
                          ease: "easeInOut"
                        }}
                      >
                        <Image
                          src={theme === 'light' ? '/images/logo_for_light.png' : '/images/logo.png'}
                          alt="Zeus Power International Logo"
                          fill
                          className="object-contain"
                          priority
                        />
                      </motion.div>
                      
                      <div className="logo-fallback absolute inset-0 flex items-center justify-center">
                        <div className="flex items-center space-x-2">
                          <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-end"
                          >
                            <span className="text-3xl text-gray-800 dark:text-white font-light tracking-wider">ZEUS</span>
                            <span className="text-2xl gradient-text-primary font-black tracking-tight">POWER</span>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:flex items-center gap-2"
            >
              {navigationItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  onClick={() => handleNavClick(item.href)}
                  className="relative px-4 py-2 text-body font-medium text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200 group"
                >
                  <span className="relative z-10">{item.name}</span>
                  <motion.div
                    className="absolute inset-0 bg-red-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    layoutId="navbar-hover"
                  />
                </motion.button>
              ))}
            </motion.div>

            {/* Right Side Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-3"
            >
              {/* Emergency Button */}
              <motion.a
                href="tel:+94777441142"
                className="hidden md:flex items-center gap-2 btn-primary px-4 py-2 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <PhoneCall className="h-4 w-4" />
                <span className="font-semibold">Emergency</span>
              </motion.a>

              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                disabled={isTransitioning}
                className={`p-2 rounded-lg glass-card border-gray-200/50 dark:border-gray-700/50 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors duration-200 ${
                  isTransitioning ? 'opacity-75 cursor-not-allowed' : ''
                }`}
                whileHover={!isTransitioning ? { scale: 1.05 } : {}}
                whileTap={!isTransitioning ? { scale: 0.98 } : {}}
                aria-label="Toggle theme"
              >
                <div className="relative w-5 h-5 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    {isTransitioning ? (
                      <motion.div
                        key="transitioning"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="w-4 h-4 rounded-full border-2 border-gray-300 border-t-red-500 animate-spin" />
                      </motion.div>
                    ) : theme === 'dark' ? (
                      <motion.div
                        key="sun"
                        initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                        exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <Sun className="h-5 w-5 text-yellow-500" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="moon"
                        initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                        exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <motion.div
                  className="p-2 rounded-lg glass-card border-gray-200/50 dark:border-gray-700/50 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors duration-200 text-gray-700 dark:text-gray-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <AnimatedHamburger 
                    isOpen={mobileMenuOpen} 
                    toggleOpen={() => setMobileMenuOpen(!mobileMenuOpen)} 
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-80 glass-nav border-l border-gray-200/20 dark:border-gray-700/20 z-50 lg:hidden"
            >
              <div className="p-6">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
                      <span className="text-white font-bold">Z</span>
                    </div>
                    <div>
                      <h2 className="text-heading-3 gradient-text-primary font-bold">Zeus Power</h2>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Emergency Services</p>
                    </div>
                  </div>
                </div>

                {/* Mobile Navigation */}
                <nav className="space-y-2 mb-8">
                  {navigationItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      onClick={() => handleNavClick(item.href)}
                      className="w-full flex items-center px-4 py-3 text-left text-body font-medium text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-500/5 rounded-lg transition-all duration-200"
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </nav>

                {/* Mobile Emergency Button */}
                <motion.a
                  href="tel:+94777441142"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="btn-primary w-full justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <PhoneCall className="h-5 w-5" />
                  <span>Emergency Hotline</span>
                  <span className="font-bold">077 7 441 142</span>
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navbar */}
      <div className="h-20" />
    </>
  );
}
