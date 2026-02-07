"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
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
          
          <div className={styles.ctaWrapper}>
            <Link href="/contact">
              <Button size="large" className={styles.ctaButton}>
                Connect for a free regulatory consultation <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
