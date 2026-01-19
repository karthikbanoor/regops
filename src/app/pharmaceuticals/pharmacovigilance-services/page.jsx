"use client";

import PageHeader from "@/components/layout/PageHeader";
import styles from "../../service-page.module.css";
import { CheckCircle, Activity, FileSpreadsheet, Radio, Database, Archive, ShieldCheck, HeartPulse } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PVPage() {
  return (
    <main className={styles.main}>
      <PageHeader 
        title="Pharmacovigilance Services" 
        subtitle="End-to-end safety management from clinical development through post-marketing."
      />
      
      {/* Overview Section */}
      <section className={cn(styles.section, styles.sectionWhite)}>
        <div className={styles.narrowContainer}>
          <h2 className={styles.sectionTitle}>
            Patient Safety First
          </h2>
          <p className={styles.textLarge}>
            Pharmacovigilance obligations begin before first-in-human studies and continue throughout a product&apos;s commercial life. Health authorities impose increasingly stringent requirements for adverse event collection and safety surveillance. Compliance failures carry serious consequences.
          </p>
          <div style={{ height: '3px', width: '80px', background: '#0066CC', margin: '2rem 0', borderRadius: '2px' }}></div>
          <p className={styles.text}>
            RegOps delivers pharmacovigilance support scaled to your organization&apos;s needs. Whether you require full-service safety operations or targeted support for specific activities, we provide the expertise, processes, and systems to maintain compliant pharmacovigilance. Our focus is always on patient safety—identifying and communicating safety signals that enable informed prescribing decisions.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className={cn(styles.section, styles.sectionGray)}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
             <h2 className={styles.sectionTitle}>Our Capabilities</h2>
             <p className={styles.text} style={{ maxWidth: '600px', margin: '0 auto' }}>
               Comprehensive safety services for clinical and marketed products.
             </p>
          </div>
          
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Activity size={20} /></div>
                  Case Processing
              </div>
              <p className={styles.cardText}>
                End-to-end management of ICSRs including intake, coding, medical review, and QC. We process cases from clinical trials, post-marketing, and literature.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><FileSpreadsheet size={20} /></div>
                  Regulatory Reporting
              </div>
              <p className={styles.cardText}>
                Timely submission of expedited and periodic reports to global health authorities. We manage ICSRs, SUSARs, and PSURs/PBRERs submission.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Radio size={20} /></div>
                  Signal Management
              </div>
              <p className={styles.cardText}>
                Systematic signal detection activities including disproportionality analysis and medical review. We establish processes that identify issues early.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Database size={20} /></div>
                  Safety Database
              </div>
              <p className={styles.cardText}>
                 Configuration and maintenance of safety databases (Argus, ArisG). We ensure your database supports compliant operations and analysis.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Archive size={20} /></div>
                  Aggregate Reports
              </div>
              <p className={styles.cardText}>
                Authoring of PSURs, PBRERs, DSURs, and PADERs. We compile safety data, conduct benefit-risk assessments, and author compliant reports.
              </p>
            </div>

             <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><ShieldCheck size={20} /></div>
                  PV Audits
              </div>
              <p className={styles.cardText}>
                Assessment of PV systems against GVP requirements. We identify gaps, recommend remediation, and support inspection readiness activities.
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
            We look beyond compliance to ensure true patient safety surveillance.
          </p>

          <div className={styles.advantageGrid}>
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Safety Focus
               </h3>
               <p className={styles.text}>
                 We turn data into safety intelligence. Our medical expertise informs all case assessment and signal evaluation activities.
               </p>
             </div>
             
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Global Compliance
               </h3>
               <p className={styles.text}>
                 We maintain current knowledge of PV requirements across major markets and ensure your operations meet standards everywhere.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Scalable Solutions
               </h3>
               <p className={styles.text}>
                 From single-product support to enterprise PV, we scale our services to match your portfolio complexity and safety volume.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Tech Agnostic
               </h3>
               <p className={styles.text}>
                 We work within your existing safety database environment or can provide our own, supporting optimization as your needs evolve.
               </p>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
