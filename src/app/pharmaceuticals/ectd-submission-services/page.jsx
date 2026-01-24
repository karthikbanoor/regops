"use client";

import PageHeader from "@/components/layout/PageHeader";
import styles from "../../service-page.module.css";
import { CheckCircle, Database, ShieldCheck, UploadCloud, History, FileCog, FileArchive } from "lucide-react";
import { cn } from "@/lib/utils";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return await getPageMetadata("pharmaceuticals/ectd-submission-services");
}

export default function ECTDPage() {
  return (
    <main className={styles.main}>
      <PageHeader 
        title="eCTD Submission Services" 
        subtitle="Precision publishing and lifecycle management for global electronic submissions."
      />
      
      {/* Overview Section */}
      <section className={cn(styles.section, styles.sectionWhite)}>
        <div className={styles.narrowContainer}>
          <h2 className={styles.sectionTitle}>
            The Art of Precision Publishing
          </h2>
          <p className={styles.textLarge}>
            In the current regulatory landscape, an eCTD submission is a critical milestone. A single validation error or broken hyperlink can result in a &quot;Refusal to File,&quot; costing months of delay.
          </p>
          <div style={{ height: '3px', width: '80px', background: '#0066CC', margin: '2rem 0', borderRadius: '2px' }}></div>
          <p className={styles.text}>
            At RegOps, we view eCTD publishing as an art of precision. We don&apos;t just &quot;format&quot; your data—we architect your submission. We ensure every PDF is optimized, every XML backbone is robust, and every metadata tag is strategically aligned with regional Health Authority expectations. Whether it&apos;s an initial NDA or a complex variation, we provide a seamless bridge between your raw data and global regulatory approval.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className={cn(styles.section, styles.sectionGray)}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
             <h2 className={styles.sectionTitle}>Our Capabilities</h2>
             <p className={styles.text} style={{ maxWidth: '600px', margin: '0 auto' }}>
               End-to-end eCTD services from compilation to gateway submission.
             </p>
          </div>
          
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Database size={20} /></div>
                  eCTD Compilation
              </div>
              <p className={styles.cardText}>
                Full compilation of Module 1-5 documents into validated eCTD sequences. We support INDs, NDAs, BLAs, MAAs, and all variation types across global markets.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><ShieldCheck size={20} /></div>
                  Validation & QC
              </div>
              <p className={styles.cardText}>
                Multi-tier validation against agency-specific requirements including PDF specs and granularity rules. We catch errors before agencies do to prevent technical rejections.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><UploadCloud size={20} /></div>
                  Gateway Submissions
              </div>
              <p className={styles.cardText}>
                Direct electronic submission through FDA ESG, EMA CESP, Health Canada CESG, and other portals. We handle registration, ACK tracking, and troubleshooting.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><History size={20} /></div>
                  Lifecycle Management
              </div>
              <p className={styles.cardText}>
                Ongoing management of amendments, supplements, annual reports, and variations. We maintain sequence integrity and submission history across your portfolio.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><FileCog size={20} /></div>
                  Document Formatting
              </div>
              <p className={styles.cardText}>
                Conversion of source documents to eCTD-ready format—PDF optimization, bookmarking, and hyperlinking. We ensure compliance with publishing standards.
              </p>
            </div>

             <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><FileArchive size={20} /></div>
                  Legacy Conversions
              </div>
              <p className={styles.cardText}>
                Migration of paper-based archives or NeeS dossiers to full eCTD format for markets transitioning to mandatory electronic requirements.
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
            We combine automated validation with specialist review to ensure first-time-right submissions.
          </p>

          <div className={styles.advantageGrid}>
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> First-Time-Right
               </h3>
               <p className={styles.text}>
                 Our multi-tier QC process catches issues before they reach the gateway. We don&apos;t submit until the sequence is clean.
               </p>
             </div>
             
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Scalable Capacity
               </h3>
               <p className={styles.text}>
                 Whether you need support for a single submission or parallel filings across 20+ markets, we scale to match your requirements.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Software Agnostic
               </h3>
               <p className={styles.text}>
                 We work with your existing publishing tools or handle it entirely on our side, integrating into your workflows seamlessly.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Reg Intelligence
               </h3>
               <p className={styles.text}>
                 We monitor technical specification changes across agencies and proactively flag impacts so you know about new requirements early.
               </p>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
