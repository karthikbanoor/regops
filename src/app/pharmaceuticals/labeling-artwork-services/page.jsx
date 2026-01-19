"use client";

import PageHeader from "@/components/layout/PageHeader";
import styles from "../../service-page.module.css";
import { CheckCircle, Tag, Globe, FileStack, Palette, FileSearch, RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LabelingPage() {
  return (
    <main className={styles.main}>
      <PageHeader 
        title="Labeling & Artwork Services" 
        subtitle="End-to-end labeling support: Content development, regional adaptation, and artwork management."
      />
      
      {/* Overview Section */}
      <section className={cn(styles.section, styles.sectionWhite)}>
        <div className={styles.narrowContainer}>
          <h2 className={styles.sectionTitle}>
            Clear Communication, Compliant Content
          </h2>
          <p className={styles.textLarge}>
            Pharmaceutical labeling carries significant regulatory and patient safety implications. Every word on your label, package insert, and carton must align with approved content, comply with regional requirements, and communicate essential information clearly.
          </p>
          <div style={{ height: '3px', width: '80px', background: '#0066CC', margin: '2rem 0', borderRadius: '2px' }}></div>
          <p className={styles.text}>
            RegOps provides end-to-end labeling support from initial content development through final artwork approval. We understand the complex interplay between approved labeling, regional adaptations, and practical production requirements. Our systematic approach minimizes errors, accelerates timelines, and ensures your products reach patients with compliant, accurate labeling.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className={cn(styles.section, styles.sectionGray)}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
             <h2 className={styles.sectionTitle}>Our Capabilities</h2>
             <p className={styles.text} style={{ maxWidth: '600px', margin: '0 auto' }}>
               From core data sheets to printed components.
             </p>
          </div>
          
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Tag size={20} /></div>
                  Core Labeling
              </div>
              <p className={styles.cardText}>
                Creation of Company Core Data Sheets (CCDS) that serve as the foundation for global harmonization. We establish consistent safety messaging across your portfolio.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Globe size={20} /></div>
                  Regional Adaptation
              </div>
              <p className={styles.cardText}>
                Adaptation of core labeling to meet market-specific requirements (USPI, SmPC). We address local language requirements and formatting specifications.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><FileStack size={20} /></div>
                  SPL Services
              </div>
              <p className={styles.cardText}>
                Development and submission of FDA Structured Product Labeling (SPL) files. We handle initial submissions and maintain SPL content throughout the lifecycle.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Palette size={20} /></div>
                  Artwork Management
              </div>
              <p className={styles.cardText}>
                Coordination of packaging artwork development for labels and cartons. We manage review workflows between regulatory, quality, and production teams.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><FileSearch size={20} /></div>
                  Compliance Review
              </div>
              <p className={styles.cardText}>
                Systematic comparison of proposed labeling against approved content and company standards. We identify discrepancies before they become issues.
              </p>
            </div>

             <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><RefreshCcw size={20} /></div>
                  Change Management
              </div>
              <p className={styles.cardText}>
                Management of label updates driven by safety signals or regulatory commitments. We assess change significance and coordinate global implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RegOps Advantage Section */}
      <section className={cn(styles.section, styles.sectionWhite)}>
        <div className={styles.narrowContainer}>
          <h2 className={styles.sectionTitle}>
            The RegOps Advantage
          </h2>
          <p className={styles.textLarge} style={{ marginBottom: '3rem' }}>
            Patient safety drives our labeling approach, ensuring critical information is clear and accurate.
          </p>

          <div className={styles.advantageGrid}>
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Global Perspective
               </h3>
               <p className={styles.text}>
                 We understand labeling requirements across major markets and advise on harmonization strategies that minimize regional variations.
               </p>
             </div>
             
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Process Efficiency
               </h3>
               <p className={styles.text}>
                 Our structured workflows and quality checkpoints catch issues early, reducing revision cycles and accelerating time to market.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Technology Integration
               </h3>
               <p className={styles.text}>
                 We work effectively with labeling management systems and artwork tools, expanding your capabilities without disrupting your tech stack.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Safety Focus
               </h3>
               <p className={styles.text}>
                 We ensure that critical safety information is prominently communicated and consistently maintained across all materials.
               </p>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
