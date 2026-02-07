"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import styles from "./about.module.css";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function AboutClient() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>

        {/* Hero Section */}
        <motion.section
          className={styles.hero}
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1 className={styles.title} variants={fadeInUp}>
            About RegOps
          </motion.h1>
          <motion.div className={styles.introContainer} variants={fadeInUp}>
            <p className={styles.leadParagraph}>
              RegOps is a global regulatory consulting firm partnering with
              pharmaceutical, medical device, and consumer health companies to
              navigate complex regulatory landscapes and accelerate market access
              worldwide.
            </p>
            <p className={styles.bodyParagraph}>
              We provide end-to-end regulatory services across the product
              lifecycle—from early-stage strategy and dossier preparation through
              submissions, approvals, and post-market compliance.
            </p>
            <p className={styles.bodyParagraph}>
              Our team brings over 50 years of combined experience across major
              regulatory frameworks, enabling clients to move confidently
              through the approval process in the USA, EMEA, APAC, and India.
            </p>

            <div className={styles.ctaWrapper}>
              <Link href="/contact">
                <Button size="large" className={styles.ctaButton}>
                  Connect for a free regulatory consultation <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.section>

        {/* Stats / Areas of Expertise */}
        <section className={styles.statsSection}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            RegOps By The Numbers
          </motion.h2>

          <motion.div
            className={styles.grid}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className={styles.card} variants={fadeInUp}>
              <h3 className={styles.cardTitle}>Pharmaceutical & Biotech</h3>
              <p className={styles.cardText}>
                Regulatory strategy, IND/NDA/ANDA submissions, CTD dossier compilation, variations and lifecycle management, labeling, and pharmacovigilance support.
              </p>
            </motion.div>

            <motion.div className={styles.card} variants={fadeInUp}>
              <h3 className={styles.cardTitle}>Medical Devices & Diagnostics</h3>
              <p className={styles.cardText}>
                510(k) and PMA submissions, CE marking under EU MDR/IVDR, technical file preparation, clinical evaluation reports, and post-market surveillance.
              </p>
            </motion.div>

            <motion.div className={styles.card} variants={fadeInUp}>
              <h3 className={styles.cardTitle}>Consumer Health & Cosmetics</h3>
              <p className={styles.cardText}>
                Product notifications, safety assessments, claims substantiation, and compliance with regional regulations including FDA OTC monographs, EU Cosmetics Regulation, and CDSCO requirements.
              </p>
            </motion.div>

            <motion.div className={`${styles.card} ${styles.highlightCard}`} variants={fadeInUp}>
              <h3 className={styles.cardTitle}>50+</h3>
              <p className={styles.cardText}>
                years of expertise and with a team of passionate and skilled global regulatory experts.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Our Approach */}
        <motion.section
          className={styles.contentSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={styles.contentRow}>
            <div className={styles.textColumn}>
              <h3 className={styles.h3}>Our Approach</h3>
            </div>
            <div className={styles.textColumn}>
              <p className={styles.paragraph}>
                Regulatory pathways are rarely straightforward. Agencies differ in expectations, timelines shift, and a single documentation gap can delay launches by months. We work as an extension of your team—anticipating hurdles, streamlining submissions, and maintaining direct dialogue with authorities when needed.
              </p>
              <p className={styles.paragraph}>
                Our clients range from emerging innovators bringing first-in-class therapies to market to established manufacturers expanding into new geographies. Regardless of scale, we apply the same rigor: meticulous preparation, clear communication, and accountability for outcomes.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Global Reach */}
        <motion.section
          className={styles.contentSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={styles.contentRow}>
            <div className={styles.textColumn}>
              <h3 className={styles.h3}>Global Reach, Local Expertise</h3>
            </div>
            <div className={styles.textColumn}>
              <p className={styles.paragraph}>
                Regulatory success demands more than translation—it requires understanding how each agency interprets guidelines, what triggers queries, and where flexibility exists.
              </p>
              <p className={styles.paragraph}>
                We maintain deep working knowledge of requirements across FDA, EMA, MHRA, TGA, Health Canada, PMDA, NMPA, CDSCO, and other national authorities, ensuring submissions are optimized for each market.
              </p>
            </div>
          </div>
        </motion.section>

      </div>
    </main>
  );
}
