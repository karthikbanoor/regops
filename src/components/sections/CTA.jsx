"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import styles from "./CTA.module.css";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Ready to partner with RegOps?
          </h2>
          <p className={styles.subtitle}>
             Contact us today to discuss your regulatory needs.
          </p>
          
          <div className={styles.ctas}>
            <Link href="/contact">
              <Button size="large" className={styles.primaryBtn}>
                Contact Us <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
