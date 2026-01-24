

import PageHeader from "@/components/layout/PageHeader";
import styles from "../../service-page.module.css";
import { CheckCircle, BookOpen, FileCheck, FileSignature, Globe, AlertCircle, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return await getPageMetadata("pharmaceuticals-dossier-authoring-services");
}

export default function DossierPage() {
  return (
    <main className={styles.main}>
      <PageHeader 
        title="Dossier Authoring Services" 
        subtitle="Strategic narrative development for Modules 1-5 across global markets."
      />
      
      {/* Overview Section */}
      <section className={cn(styles.section, styles.sectionWhite)}>
        <div className={styles.narrowContainer}>
          <h2 className={styles.sectionTitle}>
            Strategic Regulatory Narratives
          </h2>
          <p className={styles.textLarge}>
            A well-authored regulatory dossier is the foundation of every successful submission. It&apos;s not merely a collection of documents—it&apos;s a strategic narrative that guides reviewers through your product&apos;s quality, safety, and efficacy profile.
          </p>
          <div style={{ height: '3px', width: '80px', background: '#0066CC', margin: '2rem 0', borderRadius: '2px' }}></div>
          <p className={styles.text}>
            RegOps brings together scientific writers, regulatory strategists, and subject matter experts who understand what health authorities need to see. We author dossiers that are complete, consistent, and constructed to facilitate efficient review. From initial planning through final QC, every module is crafted to support your regulatory objectives and prevent review delays.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className={cn(styles.section, styles.sectionGray)}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
             <h2 className={styles.sectionTitle}>Our Capabilities</h2>
             <p className={styles.text} style={{ maxWidth: '600px', margin: '0 auto' }}>
               Comprehensive authoring for all dossier modules.
             </p>
          </div>
          
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><BookOpen size={20} /></div>
                  Module 2 Summaries
              </div>
              <p className={styles.cardText}>
                Expert authoring of Quality, Nonclinical, and Clinical Overviews and Summaries (2.3 - 2.7). We synthesize complex data into clear, reviewable narratives.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><FileCheck size={20} /></div>
                  Module 3 CMC
              </div>
              <p className={styles.cardText}>
                Development of complete Module 3 content including drug substance/product specs, manufacturing descriptions, analytical procedures, and stability data presentation.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><FileSignature size={20} /></div>
                  Clinical Modules
              </div>
              <p className={styles.cardText}>
                Comprehensive support for Modules 4 & 5, including study reports and integrated summaries. We ensure scientific accuracy and regulatory alignment.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Globe size={20} /></div>
                  Regional Module 1
              </div>
              <p className={styles.cardText}>
                Market-specific administrative documentation including cover letters and application forms. We maintain templates aligned with FDA, EMA, and other HA requirements.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><AlertCircle size={20} /></div>
                  Gap Analysis
              </div>
              <p className={styles.cardText}>
                Critical review of existing dossier content to identify gaps or inconsistencies. We provide actionable recommendations and can execute remediation work.
              </p>
            </div>

             <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><MessageSquare size={20} /></div>
                  Response Authoring
              </div>
              <p className={styles.cardText}>
                Rapid authoring support for Information Requests and Complete Response Letters. We help you respond thoroughly and strategically within tight timelines.
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
            Our writers speak the language of your data and translate it effectively for regulatory audiences.
          </p>

          <div className={styles.advantageGrid}>
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Scientific Depth
               </h3>
               <p className={styles.text}>
                 Our writers hold advanced degrees in pharmacology and clinical sciences, ensuring accurate translation of technical data.
               </p>
             </div>
             
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Template Libraries
               </h3>
               <p className={styles.text}>
                 We maintain current, agency-aligned templates for every section, reducing development time and ensuring compliance.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Collaborative Workflow
               </h3>
               <p className={styles.text}>
                 We integrate seamlessly with your internal teams, maintaining transparent communication and tracking to keep projects on schedule.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Quality Assurance
               </h3>
               <p className={styles.text}>
                 Every deliverable undergoes multi-level review including scientific accuracy, regulatory alignment, and formatting polish.
               </p>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
