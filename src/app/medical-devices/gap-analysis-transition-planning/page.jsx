"use client";

import PageHeader from "@/components/layout/PageHeader";
import styles from "../../service-page.module.css";
import { CheckCircle, Sliders, FileText, ClipboardCheck, BarChart2, Globe, Scale, Activity, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return await getPageMetadata("medical-devices/gap-analysis-transition-planning");
}

export default function GapAnalysisPage() {
  return (
    <main className={styles.main}>
      <PageHeader 
        title="MDR/IVDR Consulting" 
        subtitle="Strategic guidance for EU regulatory transformation."
      />
      
      {/* Overview Section */}
      <section className={cn(styles.section, styles.sectionWhite)}>
        <div className={styles.narrowContainer}>
          <h2 className={styles.sectionTitle}>
            Navigating the Regulatory Shift
          </h2>
          <p className={styles.textLarge}>
            The transition from the Medical Device Directives (MDD/AIMDD/IVDD) to the Medical Device Regulation (EU 2017/745) and In Vitro Diagnostic Regulation (EU 2017/746) represents the most significant regulatory change in decades.
          </p>
          <div style={{ height: '3px', width: '80px', background: '#0066CC', margin: '2rem 0', borderRadius: '2px' }}></div>
          <p className={styles.text}>
            RegOps provides strategic MDR/IVDR consulting to help you navigate this complex landscape. We assess your compliance status, develop practical transition roadmaps, and support implementation. Our consultants prioritize efforts to help you allocate resources effectively and maintain market access throughout the transition.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className={cn(styles.section, styles.sectionGray)}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
             <h2 className={styles.sectionTitle}>Our Capabilities</h2>
             <p className={styles.text} style={{ maxWidth: '600px', margin: '0 auto' }}>
               Comprehensive support across the entire regulatory lifecycle.
             </p>
          </div>
          
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Sliders size={20} /></div>
                  Gap Analysis
              </div>
              <p className={styles.cardText}>
                Comprehensive assessment of technical documentation and quality systems against MDR/IVDR. We identify gaps, quantify remediation effort, and develop prioritized transition plans.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Scale size={20} /></div>
                  Regulatory Pathway
              </div>
              <p className={styles.cardText}>
                Determination of device classification under MDR/IVDR key rules. We advise on conformity assessment routes, combination products, and Notified Body involvement.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Activity size={20} /></div>
                  Clinical Strategy
              </div>
              <p className={styles.cardText}>
                Development of clinical evaluation strategies to satisfy enhanced requirements. We help establish clinical plans, equivalence justifications, and PMS/PMCF strategies.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><BarChart2 size={20} /></div>
                  UDI & EUDAMED
              </div>
              <p className={styles.cardText}>
                Implementation support for Unique Device Identification and EUDAMED registration. We guide UDI assignment, labeling updates, and database submissions.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Globe size={20} /></div>
                  Economic Operators
              </div>
              <p className={styles.cardText}>
                Advisory on responsibilities for manufacturers, importers, and distributors. We help establish compliant supply chain arrangements and ensure regulatory understanding.
              </p>
            </div>

             <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><ClipboardCheck size={20} /></div>
                  Notified Body Liason
              </div>
              <p className={styles.cardText}>
                Support for interactions including application preparation, submission, and audit prep. We help present your regulatory case effectively for efficient certification.
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
            Our consultants have supported manufacturers across the device spectrum—from Class I accessories to Class III implantables. We understand both the requirements and the practical challenges.
          </p>

          <div className={styles.advantageGrid}>
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Regulatory Depth
               </h3>
               <p className={styles.text}>
                 We maintain current knowledge of MDR/IVDR requirements, MDCG guidance, and Notified Body practices.
               </p>
             </div>
             
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Practical Focus
               </h3>
               <p className={styles.text}>
                 We develop achievable transition strategies that balance regulatory ideals with implementation realities.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Cross-Functional Expertise
               </h3>
               <p className={styles.text}>
                 Compliance touches quality, clinical, and operations. We understand these interdependencies.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Legacy Device Experience
               </h3>
               <p className={styles.text}>
                 Expertise in transitioning legacy portfolios with long market histories but limited documentation.
               </p>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
