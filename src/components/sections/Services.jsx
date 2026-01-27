"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, ShieldCheck, Globe, Stethoscope, Microscope, BookOpen } from "lucide-react";
import styles from "./Services.module.css";

const capabilities = [
  {
    title: "Regulatory Strategy",
    description: "Developing comprehensive regulatory pathways to ensure successful product approvals in global markets.",
    icon: Globe,
  },
  {
    title: "Submissions & Publishing",
    description: "End-to-end management of regulatory submissions including eCTD publishing and lifecycle management.",
    icon: FileText,
  },
  {
    title: "Quality Compliance", /* "Quality & Compliance" -> "Quality Compliance" if generic */
    description: "Implementing and auditing Quality Management Systems (QMS) to ensure compliance with cGMP and ISO standards.",
    icon: ShieldCheck,
  },
  {
    title: "Medical Writing", /* "Medical & Technical Writing" -> "Medical Writing" */
    description: "Creating clear, compliant clinical and regulatory documents including protocols, IBs, and CSRs.",
    icon: BookOpen,
  },
  {
    title: "Clinical Support", /* "Clinical Affairs" -> "Clinical Support" */
    description: "Providing regulatory oversight and support for clinical trials to ensure data integrity and patient safety.",
    icon: Stethoscope,
  },
  {
      title: "Labeling Services", /* "Labeling & UDI" -> "Labeling Services" */
      description: "Ensuring your product labeling and packaging meet all local and regional regulatory requirements.",
      icon: Microscope,
  }
];

export default function Services() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
            <span className={styles.sectionTag}>Capabilities</span>
            <h2 className={styles.title}>Comprehensive Solutions for <br />Life Sciences</h2>
             <p className={styles.subtitle}>
                End-to-end regulatory support designed to accelerate your product's journey to market.
            </p>
        </div>
        
        <div className={styles.grid}>
          {capabilities.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                  <item.icon size={26} strokeWidth={2} />
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
              {/* <a href="#" className={styles.cardLink}>
                Learn more <ArrowRight size={16} />
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
