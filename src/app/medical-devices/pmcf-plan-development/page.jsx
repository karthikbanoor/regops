"use client";

import PageHeader from "@/components/layout/PageHeader";
import styles from "../../service-page.module.css";
import { CheckCircle, FileText, Search, BookOpen, Database, BarChart, GitMerge } from "lucide-react";
import { cn } from "@/lib/utils";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return await getPageMetadata("medical-devices/pmcf-plan-development");
}

export default function PMCFPage() {
  return (
    <main className={styles.main}>
      <PageHeader 
        title="Post-Market Clinical Follow-Up" 
        subtitle="Proactive clinical data collection strategies for MDR/IVDR compliance."
      />
      
      {/* Overview Section */}
      <section className={cn(styles.section, styles.sectionWhite)}>
        <div className={styles.narrowContainer}>
          <h2 className={styles.sectionTitle}>
            Continuous Clinical Evidence
          </h2>
          <p className={styles.textLarge}>
            Post-Market Clinical Follow-up (PMCF) is a continuous process that proactively collects and evaluates clinical data from devices in actual use. Under MDR and IVDR, PMCF is mandatory and must be planned, documented, and executed systematically.
          </p>
          <div style={{ height: '3px', width: '80px', background: '#0066CC', margin: '2rem 0', borderRadius: '2px' }}></div>
          <p className={styles.text}>
            RegOps provides comprehensive PMCF services from strategy development through execution and reporting. We design PMCF approaches proportionate to device risk that efficiently generate the clinical data regulators expect. Our PMCF strategies integrate with your post-market surveillance systems, ensuring clinical evidence collection complements vigilance activities and contributes to ongoing benefit-risk assessment. We help you transform PMCF from a compliance exercise into a source of clinical insights.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className={cn(styles.section, styles.sectionGray)}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
             <h2 className={styles.sectionTitle}>Our Capabilities</h2>
             <p className={styles.text} style={{ maxWidth: '600px', margin: '0 auto' }}>
               Full-cycle PMCF support from planning to reporting.
             </p>
          </div>
          
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><FileText size={20} /></div>
                  PMCF Plan Development
              </div>
              <p className={styles.cardText}>
                Creation of PMCF plans aligned with MEDDEV 2.12/2 and MDR Annex XIV Part B. We define objectives, methods, milestones, and acceptance criteria appropriate to your device.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Search size={20} /></div>
                  PMCF Study Design
              </div>
              <p className={styles.cardText}>
                Design of PMCF investigations including registries, surveys, and observational studies. We develop protocols that address clinical questions while remaining practical to execute.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><BookOpen size={20} /></div>
                  Literature Review
              </div>
              <p className={styles.cardText}>
                Systematic literature surveillance to identify published clinical evidence. We establish review protocols, conduct periodic searches, and appraise data for PMCF integration.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Database size={20} /></div>
                  Real-World Data
              </div>
              <p className={styles.cardText}>
                Implementation of real-world evidence collection mechanisms including patient registries and EHR analysis. We design data collection to support regulatory and commercial objectives.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><BarChart size={20} /></div>
                  Evaluation Reports
              </div>
              <p className={styles.cardText}>
                Authoring of PMCF evaluation reports that synthesize data, assess conformity to performance claims, and document conclusions regarding ongoing safety and performance.
              </p>
            </div>

             <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><GitMerge size={20} /></div>
                  PMCF-CER Integration
              </div>
              <p className={styles.cardText}>
                Alignment of PMCF activities with clinical evaluation requirements, ensuring PMCF outputs support periodic CER updates and Notified Body assessments.
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
            We design PMCF programs that generate clinically meaningful insights while satisfying strict regulatory requirements.
          </p>

          <div className={styles.advantageGrid}>
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Proportionate Design
               </h3>
               <p className={styles.text}>
                 We scale PMCF activities appropriately to device risk and evidence gaps, neither under-investing nor over-engineering.
               </p>
             </div>
             
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Practical Methods
               </h3>
               <p className={styles.text}>
                 We design data collection that works in clinical practice, considering site burden and patient engagement factors.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Regulatory Acceptance
               </h3>
               <p className={styles.text}>
                 Our PMCF plans and reports are developed with Notified Body expectations in mind, facilitating acceptance during assessment.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Clinical Value
               </h3>
               <p className={styles.text}>
                 Beyond compliance, we design programs that generate meaningful insights to support evidence-based claims and development.
               </p>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
