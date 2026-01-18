"use client";

import PageHeader from "@/components/layout/PageHeader";
import styles from "../service-page.module.css";
import { CheckCircle, FileText, ListChecks, FileCog, ShieldAlert, Microscope, FileSearch, Layers, Scale, Repeat } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DeviceDescriptionPage() {
  return (
    <main className={styles.main}>
      <PageHeader 
        title="Technical File Preparation" 
        subtitle="Foundational regulatory documentation for EU market access and global compliance."
      />
      
      {/* Overview Section */}
      <section className={cn(styles.section, styles.sectionWhite)}>
        <div className={styles.narrowContainer}>
          <h2 className={styles.sectionTitle}>
            The Foundation of Compliance
          </h2>
          <p className={styles.textLarge}>
            The technical file (or technical documentation under MDR/IVDR) is the foundational regulatory document for medical devices marketed in the European Union and many other jurisdictions.
          </p>
          <div style={{ height: '3px', width: '80px', background: '#0066CC', margin: '2rem 0', borderRadius: '2px' }}></div>
          <p className={styles.text}>
            RegOps develops technical files that meet current regulatory expectations and support efficient Notified Body review. We structure documentation logically, ensure traceability between requirements and evidence, and present information at appropriate depth for device complexity. Our technical files serve not just as regulatory submissions but as living documents that support ongoing compliance throughout your device&apos;s lifecycle.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className={cn(styles.section, styles.sectionGray)}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
             <h2 className={styles.sectionTitle}>Our Capabilities</h2>
             <p className={styles.text} style={{ maxWidth: '600px', margin: '0 auto' }}>
               Comprehensive technical documentation services.
             </p>
          </div>
          
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><FileText size={20} /></div>
                  Device Description
              </div>
              <p className={styles.cardText}>
                Comprehensive documentation of device design, intended purpose, indications for use, user profiles, and use environments. We establish clear device identity scope that anchors all documentation.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><ListChecks size={20} /></div>
                  Essential Requirements
              </div>
              <p className={styles.cardText}>
                Systematic mapping of General Safety and Performance Requirements (MDR Annex I) to supporting evidence. We ensure every applicable requirement is addressed with traceable verification.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><FileCog size={20} /></div>
                  Design & Manufacturing
              </div>
              <p className={styles.cardText}>
                Complete documentation of design inputs, outputs, verification, validation, and manufacturing processes. We present design history appropriate to device classification and risk.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><ShieldAlert size={20} /></div>
                  Risk Management
              </div>
              <p className={styles.cardText}>
                ISO 14971-compliant risk management files including hazard identification, risk estimation, control measures, and residual risk evaluation supporting benefit-risk determination.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Microscope size={20} /></div>
                  Biocompatibility
              </div>
              <p className={styles.cardText}>
                Biological safety evaluation following ISO 10993, including material characterization, toxicological assessment, and testing rationale proportionate to patient contact.
              </p>
            </div>

             <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><FileSearch size={20} /></div>
                  Clinical Evaluation
              </div>
              <p className={styles.cardText}>
                Comprehensive clinical evaluation (CER) following MEDDEV 2.7/1 Rev 4 or MDR requirements. We develop CERs that satisfy Notified Body scrutiny and support benefit-risk conclusions.
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
            We avoid approaches based on outdated MDD-era practices, ensuring alignment with current Notified Body expectations.
          </p>

          <div className={styles.advantageGrid}>
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Regulatory Alignment
               </h3>
               <p className={styles.text}>
                 We develop documentation aligned with current MDR/IVDR requirements, MDCG guidance, and Notified Body expectations.
               </p>
             </div>
             
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Scalable Approach
               </h3>
               <p className={styles.text}>
                 Our documentation depth scales with device classification. We avoid under-documentation issues and over-documentation waste.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Lifecycle Foundation
               </h3>
               <p className={styles.text}>
                 We structure files to support ongoing maintenance, design changes, and post-market updates beyond initial certification.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Cross-Jurisdictional
               </h3>
               <p className={styles.text}>
                 We develop documentation that supports multiple regulatory submissions, maximizing value across target markets.
               </p>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
