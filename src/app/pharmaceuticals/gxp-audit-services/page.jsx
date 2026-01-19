"use client";

import PageHeader from "@/components/layout/PageHeader";
import styles from "../../service-page.module.css";
import { CheckCircle, SearchCheck, UserCheck, TestTube2, AlertTriangle, Users, Building2, ClipboardCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AuditPage() {
  return (
    <main className={styles.main}>
      <PageHeader 
        title="GxP Audit Services" 
        subtitle="Independent compliance assessments across GMP, GCP, GLP, and GVP domains."
      />
      
      {/* Overview Section */}
      <section className={cn(styles.section, styles.sectionWhite)}>
        <div className={styles.narrowContainer}>
          <h2 className={styles.sectionTitle}>
            Readiness Under Scrutiny
          </h2>
          <p className={styles.textLarge}>
            Regulatory inspections and partner audits are defining moments. Findings can range from minor observations to warning letters. The companies that perform best under scrutiny are those that maintain robust internal audit programs—identifying and correcting issues before inspectors arrive.
          </p>
          <div style={{ height: '3px', width: '80px', background: '#0066CC', margin: '2rem 0', borderRadius: '2px' }}></div>
          <p className={styles.text}>
             RegOps auditors bring extensive GxP experience across manufacturing, clinical, laboratory, and pharmacovigilance operations. We conduct audits with the rigor and perspective of regulatory inspectors, identifying compliance gaps and improvement opportunities. Our audit approach is thorough but practical, focused on findings that matter and recommendations you can implement.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className={cn(styles.section, styles.sectionGray)}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
             <h2 className={styles.sectionTitle}>Our Capabilities</h2>
             <p className={styles.text} style={{ maxWidth: '600px', margin: '0 auto' }}>
               Comprehensive audit coverage spanning the entire GxP spectrum.
             </p>
          </div>
          
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Building2 size={20} /></div>
                  GMP Audits
              </div>
              <p className={styles.cardText}>
                Comprehensive audits of manufacturing, packaging, and quality system operations against current GMPs. We assess facilities, documentation, and personnel practices.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><UserCheck size={20} /></div>
                  GCP Audits
              </div>
              <p className={styles.cardText}>
                Audits of clinical trial operations including investigator sites and sponsor processes. We evaluate protocol compliance, data integrity, and subject safety.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><TestTube2 size={20} /></div>
                  GLP Audits
              </div>
              <p className={styles.cardText}>
                Assessment of nonclinical study facilities and processes against GLP requirements. We audit study conduct, QA activity, archive management, and facility operations.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><AlertTriangle size={20} /></div>
                  GVP Audits
              </div>
              <p className={styles.cardText}>
                Evaluation of pharmacovigilance systems against GVP requirements. We assess case processing, reporting, signal management, and safety governance.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Users size={20} /></div>
                  Supplier Audits
              </div>
              <p className={styles.cardText}>
                Qualification and ongoing audits of suppliers, CMOs, and vendors. We verify partner compliance and capability to support your quality requirements.
              </p>
            </div>

             <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><SearchCheck size={20} /></div>
                  Mock Inspections
              </div>
              <p className={styles.cardText}>
                Simulated regulatory inspections that prepare your organization for actual agency visits. We replicate inspection dynamics and coach your team on responses.
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
            We bring the inspector&apos;s perspective to help you build a audit-ready organization.
          </p>

          <div className={styles.advantageGrid}>
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Inspector Perspective
               </h3>
               <p className={styles.text}>
                 We identify the issues that would catch agency attention and prioritize finding based on regulatory risk, mirroring an actual inspection.
               </p>
             </div>
             
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Practical CAPA
               </h3>
               <p className={styles.text}>
                 Our audit reports include actionable CAPA recommendations that address root causes, not just symptoms.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Risk-Based Approach
               </h3>
               <p className={styles.text}>
                 We apply risk-based planning and execution, focusing effort on areas of greatest compliance and patient safety impact.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Program Development
               </h3>
               <p className={styles.text}>
                 Beyond individual audits, we help organizations build and mature internal audit programs that drive continuous improvement.
               </p>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
