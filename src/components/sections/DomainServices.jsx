
"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import styles from "./DomainServices.module.css";
import { motion } from "framer-motion";

export default function DomainServices({ title, description, services }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={styles.title}
            >
                {title}
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={styles.description}
            >
                {description}
            </motion.p>
        </div>

        <div className={styles.grid}>
            {services.map((service, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 + 0.2 }}
                    className={styles.card}
                >
                    <div className={styles.iconWrapper}>
                        <CheckCircle2 size={28} />
                    </div>
                    <h3 className={styles.cardTitle}>{service.name}</h3>
                    <p className={styles.cardDesc}>{service.description || "Comprehensive regulatory support tailored to your needs."}</p>
                    {service.href && service.href !== '#' && (
                        <Link href={service.href} className={styles.cardLink}>
                            Learn more <ArrowRight size={16} />
                        </Link>
                    )}
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
