"use client";

import PageHeader from "@/components/layout/PageHeader";
import styles from "../../service-page.module.css";
import { CheckCircle, AlertTriangle, FilePenLine, RefreshCw, Archive, FileText, ClipboardList } from "lucide-react";
import { cn } from "@/lib/utils";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return await getPageMetadata("medical-devices/change-impact-assessment");
}

export default function ChangeAssessmentPage() {
  return (
    <main className={styles.main}>
      <PageHeader 
        title="Medical Device Lifecycle Management" 
        subtitle="Comprehensive change control and compliance maintenance for marketed devices."
      />
      
      {/* Overview Section */}
      <section className={cn(styles.section, styles.sectionWhite)}>
        <div className={styles.narrowContainer}>
          <h2 className={styles.sectionTitle}>
            Managing Ongoing Compliance
          </h2>
          <p className={styles.textLarge}>
            Medical device regulatory compliance is not a one-time achievement but an ongoing responsibility. Design modifications, manufacturing changes, and evolving regulatory requirements all create obligations to update documentation and notify regulators.
          </p>
          <div style={{ height: '3px', width: '80px', background: '#0066CC', margin: '2rem 0', borderRadius: '2px' }}></div>
          <p className={styles.text}>
            RegOps provides lifecycle management services that maintain your regulatory standing throughout your device&apos;s commercial life. We help you assess change significance, determine regulatory pathway implications, update technical documentation, and execute necessary submissions. Our lifecycle approach ensures that your regulatory investments are protected and your devices remain available to the patients and clinicians who depend on them.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className={cn(styles.section, styles.sectionGray)}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
             <h2 className={styles.sectionTitle}>Our Capabilities</h2>
             <p className={styles.text} style={{ maxWidth: '600px', margin: '0 auto' }}>
               Systematic change management and lifecycle support.
             </p>
          </div>
          
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><AlertTriangle size={20} /></div>
                  Change Assessment
              </div>
              <p className={styles.cardText}>
                Systematic evaluation of changes to determine regulatory significance under FDA, MDR/IVDR, and other frameworks. We classify changes and identify required notifications or submissions.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><ClipboardList size={20} /></div>
                  510(k) Modification
              </div>
              <p className={styles.cardText}>
                Application of FDA guidance to determine when device modifications require new 510(k) submissions. We help you establish procedures and document modification decisions defensibly.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><FilePenLine size={20} /></div>
                  Doc Updates
              </div>
              <p className={styles.cardText}>
                Ongoing maintenance of technical files and Design History Files to reflect accumulated changes. We ensure documentation remains current and ready for inspection.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><RefreshCw size={20} /></div>
                  Submission Updates
              </div>
              <p className={styles.cardText}>
                Preparation of change notifications, supplements, and amendments including FDA modifications and EU significant changes updates to maintain market authorizations.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><FileText size={20} /></div>
                  Cert Maintenance
              </div>
              <p className={styles.cardText}>
                Management of CE certificate renewals, FDA establishment registrations, and device listings. We track deadlines and ensure timely compliance to maintain market access.
              </p>
            </div>

             <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Archive size={20} /></div>
                  End-of-Life
              </div>
              <p className={styles.cardText}>
                Regulatory planning for product discontinuation including notification requirements and documentation retention. We help you exit markets compliantly.
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
            We establish procedures that enable consistent change evaluation and regulatory decision-making across your portfolio.
          </p>

          <div className={styles.advantageGrid}>
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Systematic Approach
               </h3>
               <p className={styles.text}>
                 We establish procedures and tools that enable consistent change evaluation and regulatory decision-making.
               </p>
             </div>
             
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Regulatory Currency
               </h3>
               <p className={styles.text}>
                 We maintain awareness of evolving regulatory expectations, ensuring your change assessments reflect current agency positions.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Documentation Discipline
               </h3>
               <p className={styles.text}>
                 We prioritize documentation practices that create clear audit trails, supporting regulatory inspections and compliance.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Portfolio Perspective
               </h3>
               <p className={styles.text}>
                 We coordinate lifecycle activities across products to ensure consistency and optimize regulatory resources.
               </p>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
