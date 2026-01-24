"use client";

import PageHeader from "@/components/layout/PageHeader";
import styles from "../../service-page.module.css";
import { CheckCircle, ShieldCheck, TrendingUp, AlertTriangle, FileBarChart, AlertOctagon, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return await getPageMetadata("medical-devices/pms-system-design");
}

export default function PMSPage() {
  return (
    <main className={styles.main}>
      <PageHeader 
        title="Post-Market Surveillance" 
        subtitle="Comprehensive PMS systems compliant with MDR, IVDR, and global regulations."
      />
      
      {/* Overview Section */}
      <section className={cn(styles.section, styles.sectionWhite)}>
        <div className={styles.narrowContainer}>
          <h2 className={styles.sectionTitle}>
            Vigilance & Active Surveillance
          </h2>
          <p className={styles.textLarge}>
            Post-Market Surveillance (PMS) encompasses the systematic collection, analysis, and action on information about device performance after market release. Regulatory frameworks mandate PMS systems proportionate to device risk.
          </p>
          <div style={{ height: '3px', width: '80px', background: '#0066CC', margin: '2rem 0', borderRadius: '2px' }}></div>
          <p className={styles.text}>
            RegOps develops and supports PMS systems that meet regulatory expectations while generating actionable insights. We help you establish data collection processes, trend analysis methodologies, and escalation procedures that ensure safety signals are identified and addressed appropriately. Our PMS approach integrates vigilance reporting, complaint handling, clinical evidence collection, and quality system feedback into a coherent surveillance framework.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className={cn(styles.section, styles.sectionGray)}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
             <h2 className={styles.sectionTitle}>Our Capabilities</h2>
             <p className={styles.text} style={{ maxWidth: '600px', margin: '0 auto' }}>
               Robust surveillance systems for safety and compliance.
             </p>
          </div>
          
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Settings size={20} /></div>
                  PMS System Design
              </div>
              <p className={styles.cardText}>
                Development of post-market surveillance systems compliant with MDR, FDA, and international standards. We design processes, data sources, and analysis methods.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><ShieldCheck size={20} /></div>
                  Complaint Integration
              </div>
              <p className={styles.cardText}>
                Alignment of complaint handling with PMS requirements, ensuring feedback is systematically captured, investigated, trended, and integrated into post-market assessment.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><TrendingUp size={20} /></div>
                  Trend Analysis
              </div>
              <p className={styles.cardText}>
                Implementation of trending methodologies to identify statistically significant increases in events. We establish analysis frequencies and escalation thresholds appropriate to risk.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><AlertTriangle size={20} /></div>
                  Vigilance Reporting
              </div>
              <p className={styles.cardText}>
                Support for adverse event reporting including FDA MDRs and EU vigilance reports. We ensure reportable events are identified, assessed, and reported within required timeframes.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><FileBarChart size={20} /></div>
                  PMS Reports & PSURs
              </div>
              <p className={styles.cardText}>
                Authoring of Periodic Safety Update Reports (PSURs) and PMS Reports. We compile data, assess safety and performance, and document conclusions for regulatory review.
              </p>
            </div>

             <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><AlertOctagon size={20} /></div>
                  Field Actions
              </div>
              <p className={styles.cardText}>
                Support for Field Safety Corrective Actions (FSCA) planning and execution. We assist with health hazard evaluation, notification development, and authority communication.
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
            We calibrate surveillance to detect meaningful signals while filtering noise, ensuring safety information receives appropriate attention.
          </p>

          <div className={styles.advantageGrid}>
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Risk-Based Design
               </h3>
               <p className={styles.text}>
                 We design systems proportionate to device risk and volume, avoiding under-surveillance and over-engineering.
               </p>
             </div>
             
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Operational Integration
               </h3>
               <p className={styles.text}>
                 Our designs integrate with existing quality systems and clinical data collection rather than creating parallel systems.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Regulatory Compliance
               </h3>
               <p className={styles.text}>
                 We ensure systems satisfy MDR/IVDR and FDA requirements with documentation that demonstrates compliance during audits.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Signal Sensitivity
               </h3>
               <p className={styles.text}>
                 We calibrate surveillance to detect meaningful signals without overwhelming your organization with noise.
               </p>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
