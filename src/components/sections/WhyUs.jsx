"use client";

import Image from "next/image";
import Link from "next/link";
import teamImage from "@/assets/team-working.png";
import Button from "@/components/ui/Button";
import styles from "./WhyUs.module.css";
import { CheckCircle2 } from "lucide-react";

export default function WhyUs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Content */}
          <div className={styles.content}>
            <span className={styles.tag}>About RegOps</span>
            <h2 className={styles.title}>
              Your Strategic Partner in <br />
              <span className={styles.highlight}>Regulatory Success</span>
            </h2>
            <p className={styles.description}>
               At RegOps Global, we don't just act as consultants; we become your strategic partners. We understand that every company's journey is unique, which is why we tailor our approach to meet your specific needs.
            </p>
            
            <div className={styles.statsRow}>
                <div className={styles.statItem}>
                    <span className={styles.statValue}>100%</span>
                    <span className={styles.statLabel}>Approval Rate</span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.statValue}>25+</span>
                    <span className={styles.statLabel}>Global Markets</span>
                </div>
            </div>

            <Link href="/contact">
              <Button size="large" className={styles.cta}>Partner With Us</Button>
            </Link>
          </div>

          {/* Right Content - Clean Medical Look */}
          <div className={styles.imageWrapper}>
            <Image
                src={teamImage}
                alt="RegOps strategic partnership"
                width={800}
                height={700}
                className={styles.image}
                style={{ objectFit: "cover" }}
            />
            {/* Pill Badge Overlay */}
            <div className={styles.floatingBadge}>
                <CheckCircle2 size={24} className={styles.badgeIcon} />
                <div>
                    <span className={styles.badgeTitle}>Audit Ready</span>
                    <span className={styles.badgeText}>ISO 13485 Compliant</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
