"use client";

import { motion } from "framer-motion";
import styles from "./Button.module.css";
import { cn } from "@/lib/utils";

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  className, 
  ...props 
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(styles.button, styles[variant], styles[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
