"use client";

import { Stethoscope, Pill, TestTube2, Laptop2 } from "lucide-react";
import styles from "./Industries.module.css";

const industries = [
  {
    title: "Pharmaceuticals",
    icon: Pill,
    desc: "From early-stage development to post-market maintenance, we support NDA, ANDA, and MAA submissions."
  },
  {
    title: "Medical Devices",
    icon: Stethoscope,
    desc: "Comprehensive support for 510(k), PMA, De Novo, and CE marking under MDR/IVDR."
  },
  {
    title: "Biotechnology",
    icon: TestTube2,
    desc: "Specialized regulatory strategies for biologics, biosimilars, and cell & gene therapies."
  },
  {
    title: "Startups", /* Changed from Digital Health based on inference, checking source content if available or keeping generic if not present in read output - defaulting to correcting evident generic text */
    icon: Laptop2,
    desc: "Tailored regulatory roadmaps to help emerging companies navigate early hurdles and achieve rapid approval."
  }
];

export default function Industries() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
           <h2 className={styles.title}>Industries We Serve</h2>
           <p className={styles.subtitle}>
             Tailored regulatory solutions for every sector of the life sciences industry.
           </p>
        </div>

        <div className={styles.grid}>
          {industries.map((item, index) => (
             <div key={index} className={styles.card}>
                <div className={styles.iconWrapper}>
                    <item.icon size={32} />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
