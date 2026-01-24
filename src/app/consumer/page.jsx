"use client";

import PageHeader from "@/components/layout/PageHeader";
import styles from "../service-page.module.css";
import { Sparkles, Utensils, FlaskConical, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return await getPageMetadata("consumer");
}

export default function ConsumerPage() {
  return (
    <main className={styles.main}>
      <PageHeader 
        title="Consumer Regulatory Services" 
        subtitle="Comprehensive regulatory and safety support for cosmetics, food, and chemical products."
      />
      
      {/* Cosmetics Section */}
      <section className={cn(styles.section, styles.sectionWhite)}>
        <div className={styles.narrowContainer}>
          <h2 className={styles.sectionTitle}>
             <span className={styles.iconWrapper} style={{ display: 'inline-flex', marginRight: '12px', verticalAlign: 'bottom' }}>
                <Sparkles size={28} />
             </span>
             Cosmetics Regulatory & Safety Services
          </h2>
          <p className={styles.textLarge}>
             Launching safe, compliant cosmetic products across global markets.
          </p>
          <div style={{ height: '3px', width: '80px', background: '#0066CC', margin: '2rem 0', borderRadius: '2px' }}></div>
          <p className={styles.text}>
            We provide comprehensive regulatory and safety support for cosmetic products across global markets. Our services cover ingredient and formulation assessment, cosmetic safety evaluations, product labeling and claims compliance, and regulatory submissions. We assist with CPSR preparation, product notification and registration, Responsible Person/Local Representation support, and ongoing regulatory intelligence to ensure compliant and efficient market entry. Our expertise enables brands to launch safe, compliant cosmetic products while meeting regional regulatory expectations.
          </p>
        </div>
      </section>

      {/* Food Section */}
      <section className={cn(styles.section, styles.sectionGray)}>
        <div className={styles.narrowContainer}>
          <h2 className={styles.sectionTitle}>
             <span className={styles.iconWrapper} style={{ display: 'inline-flex', marginRight: '12px', verticalAlign: 'bottom' }}>
                <Utensils size={28} />
             </span>
             Food & Food Supplements
          </h2>
          <p className={styles.textLarge}>
             End-to-end regulatory strategy and compliance management for food and nutraceuticals.
          </p>
          <div style={{ height: '3px', width: '80px', background: '#0066CC', margin: '2rem 0', borderRadius: '2px' }}></div>
          <p className={styles.text}>
            We support food, dietary supplement, and nutraceutical companies with end-to-end regulatory strategy and compliance management. Our capabilities include formulation review, product classification, labeling and claims assessment, regulatory submissions, and market access support across major global jurisdictions. We also assist with novel food/NDI evaluations, safety documentation, lifecycle management, and post-approval compliance, helping businesses navigate complex food regulations and accelerate go-to-market timelines.
          </p>
        </div>
      </section>

      {/* Chemicals Section */}
      <section className={cn(styles.section, styles.sectionWhite)}>
        <div className={styles.narrowContainer}>
          <h2 className={styles.sectionTitle}>
             <span className={styles.iconWrapper} style={{ display: 'inline-flex', marginRight: '12px', verticalAlign: 'bottom' }}>
                <FlaskConical size={28} />
             </span>
             Chemicals Safety & Regulatory Affairs
          </h2>
          <p className={styles.textLarge}>
            Specialized intelligence and compliance for consumer chemicals, biocides, and home care.
          </p>
          <div style={{ height: '3px', width: '80px', background: '#0066CC', margin: '2rem 0', borderRadius: '2px' }}></div>
          <p className={styles.text}>
            We deliver specialized regulatory intelligence services for consumer chemicals, biocides, detergents, and home care products. Our services span chemical toxicology and risk assessment, REACH and CLP compliance, (M)SDS development, regulatory notifications, and market access reports. We also support raw material compliance, packaging and food contact regulations, supply chain documentation, and sustainability initiatives, ensuring regulatory compliance throughout the product lifecycle.
          </p>
        </div>
      </section>
    </main>
  );
}
