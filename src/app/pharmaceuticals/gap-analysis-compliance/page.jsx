"use client";

import PageHeader from "@/components/layout/PageHeader";
import styles from "../../service-page.module.css";
import { CheckCircle, Map, Search, ClipboardList, PenTool, Wrench, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

export default function GapAnalysisPage() {
  return (
    <main className={styles.main}>
      <PageHeader 
        title="Gap Analysis & Compliance" 
        subtitle="Systematic assessment and remediation to ensure regulatory standing."
      />
      
      {/* Overview Section */}
      <section className={cn(styles.section, styles.sectionWhite)}>
        <div className={styles.narrowContainer}>
          <h2 className={styles.sectionTitle}>
            Proactive Compliance Assurance
          </h2>
          <p className={styles.textLarge}>
            Regulatory compliance isn&apos;t static. Requirements evolve, organizational practices drift, and gaps emerge. Unidentified gaps create risk—risk of inspection findings, submission delays, or product quality issues.
          </p>
          <div style={{ height: '3px', width: '80px', background: '#0066CC', margin: '2rem 0', borderRadius: '2px' }}></div>
          <p className={styles.text}>
            RegOps conducts systematic gap analyses that compare your current state against applicable requirements, guidance expectations, and industry best practices. We document gaps clearly, assess their significance, and provide prioritized remediation recommendations. Our assessments give you a clear picture of where you stand and a practical roadmap for achieving and maintaining compliance.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className={cn(styles.section, styles.sectionGray)}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
             <h2 className={styles.sectionTitle}>Our Capabilities</h2>
             <p className={styles.text} style={{ maxWidth: '600px', margin: '0 auto' }}>
               From assessment to remediation implementation.
             </p>
          </div>
          
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Map size={20} /></div>
                  Requirements Mapping
              </div>
              <p className={styles.cardText}>
                Comprehensive identification of applicable regulatory requirements across your operations and markets. We map current regulations and guidance relevant to your business.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Search size={20} /></div>
                  Status Assessment
              </div>
              <p className={styles.cardText}>
                Thorough evaluation of existing processes, documentation, and systems against mapped requirements. We gather evidence through document review and interviews.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><ClipboardList size={20} /></div>
                  Gap Identification
              </div>
              <p className={styles.cardText}>
                Systematic comparison of current state against requirements. We analyze gap significance considering regulatory risk, operational impact, and remediation complexity.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><PenTool size={20} /></div>
                  Remediation Planning
              </div>
              <p className={styles.cardText}>
                Development of prioritized remediation plans with specific actions, timelines, and resource requirements. We create practical roadmaps that account for constraints.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Wrench size={20} /></div>
                  Implementation Support
              </div>
              <p className={styles.cardText}>
                Hands-on support for gap remediation including procedure development, process redesign, and training. We help you close gaps effectively, not just identify them.
              </p>
            </div>

             <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Activity size={20} /></div>
                  Compliance Monitoring
              </div>
              <p className={styles.cardText}>
                Ongoing compliance monitoring programs that track regulatory changes and assess organizational adherence, identifying emerging gaps before they create problems.
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
            We focus on substantive compliance gaps rather than generating lengthy findings lists of marginal significance.
          </p>

          <div className={styles.advantageGrid}>
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Regulatory Depth
               </h3>
               <p className={styles.text}>
                 We maintain current knowledge of global requirements and accurately map applicable obligations to your specific operations.
               </p>
             </div>
             
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Practical Assessment
               </h3>
               <p className={styles.text}>
                 Our gap analyses are thorough but efficient. We focus on real risks and actionable findings.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Prioritized Plan
               </h3>
               <p className={styles.text}>
                 We risk-rank gaps and prioritize remediation recommendations, helping you allocate resources where they matter most.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Implementation Focus
               </h3>
               <p className={styles.text}>
                 Our goal is closed gaps, not just identified gaps. We structure our findings to facilitate effective remediation.
               </p>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
