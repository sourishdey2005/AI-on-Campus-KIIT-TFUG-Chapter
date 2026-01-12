
import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, id, className = "" }) => {
  const shouldReduceMotion = useReducedMotion();

  // Define variants with the explicit 'Variants' type to ensure 'ease' array is correctly interpreted as a cubic-bezier tuple.
  const variants: Variants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1] 
      }
    }
  };

  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
    >
      {children}
    </motion.section>
  );
};

export default Section;
