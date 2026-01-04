"use client";

import Image from "next/image";
import medicalHero from "@/assets/medical-hero.png";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import styles from "./Hero.module.css";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={styles.content}
          >
            <span className={styles.badge}>Regulatory Excellence Since 2010</span>
            
            <h1 className={styles.headline}>
              Navigate Regulatory <br />
              <span className={styles.highlight}>Complexity</span> with Confidence
            </h1>
            
            <p className={styles.subheadline}>
              We are a team of expert regulatory consultants dedicated to helping pharmaceutical and medical device companies navigate the complex landscape of global regulations.
            </p>
            
            <div className={styles.ctas}>
              <Button size="large" className={styles.primaryBtn}>
                Schedule a Consultation <ArrowRight size={18} />
              </Button>
              <Button size="large" variant="outline" className={styles.secondaryBtn}>
                Explore Our Services
              </Button>
            </div>

            <div className={styles.trustItems}>
                <div className={styles.trustItem}>
                    <CheckCircle2 size={20} className={styles.trustIcon} />
                    <span>1500+ Submissions</span>
                </div>
                 <div className={styles.trustItem}>
                    <CheckCircle2 size={20} className={styles.trustIcon} />
                    <span>100% Approval Rate</span>
                </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className={styles.imageWrapper}
          >
             <div className={styles.blob}></div>
SAME          </motion.div>
        </div>
      </div>
    </section>
  );
}
