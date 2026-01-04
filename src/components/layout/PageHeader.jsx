"use client";

import { motion } from "framer-motion";
import styles from "./PageHeader.module.css";

export default function PageHeader({ title, subtitle }) {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
        >
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </motion.div>
      </div>
    </div>
  );
}
