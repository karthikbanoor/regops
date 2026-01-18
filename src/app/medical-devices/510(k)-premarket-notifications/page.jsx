"use client";

import PageHeader from "@/components/layout/PageHeader";
import styles from "../service-page.module.css";
import { CheckCircle, FileText, Activity, Layers, Shuffle, Globe, ClipboardList, Shield, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PremarketNotificationsPage() {
  return (
    <main className={styles.main}>
      <PageHeader 
        title="510(k) & Global Submissions" 
        subtitle="Expert FDA and international regulatory submission strategy and execution."
      />
      
      {/* Overview Section */}
      <section className={cn(styles.section, styles.sectionWhite)}>
        <div className={styles.narrowContainer}>
          <h2 className={styles.sectionTitle}>
            Navigating Market Authorization
          </h2>
          <p className={styles.textLarge}>
            The pathway to medical device market authorization varies significantly by device classification, intended use, and target market. In the United States, FDA offers multiple routes—510(k), De Novo, and PMA.
          </p>
          <div style={{ height: '3px', width: '80px', background: '#0066CC', margin: '2rem 0', borderRadius: '2px' }}></div>
          <p className={styles.text}>
            RegOps provides end-to-end submission support across FDA pathways and international markets. We help you select optimal regulatory strategies, develop compliant submission packages, and navigate agency interactions throughout the review process. Our submission specialists combine regulatory knowledge with technical understanding to ensure your submissions address agency expectations accurately.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className={cn(styles.section, styles.sectionGray)}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
             <h2 className={styles.sectionTitle}>Our Capabilities</h2>
             <p className={styles.text} style={{ maxWidth: '600px', margin: '0 auto' }}>
               Comprehensive support for FDA and global regulatory submissions.
             </p>
          </div>
          
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><FileText size={20} /></div>
                  510(k) Notifications
              </div>
              <p className={styles.cardText}>
                Complete 510(k) development including predicate selection strategy, substantial equivalence, performance testing protocols, and submission compilation for Traditional, Abbreviated, and Special 510(k)s.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Layers size={20} /></div>
                  De Novo Requests
              </div>
              <p className={styles.cardText}>
                Strategic support for novel devices without predicates. We help develop risk-based classification arguments, propose special controls, and prepare De Novo submissions for new device types.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Shield size={20} /></div>
                  PMA Applications
              </div>
              <p className={styles.cardText}>
                Comprehensive Class III support from pre-submission strategy through approval. We assist with clinical study design, manufacturing documentation, and managing the review of safety and effectiveness data.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Shuffle size={20} /></div>
                  Pre-Submission Support
              </div>
              <p className={styles.cardText}>
                Development of Pre-Sub requests to elicit meaningful FDA feedback on regulatory pathway, testing strategies, clarity on clinical data requirements before committing to a submission.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Globe size={20} /></div>
                  International Submissions
              </div>
              <p className={styles.cardText}>
                Regulatory submission support for Health Canada, TGA, ANVISA, PMDA, NMPA, and other global authorities. We adapt US submissions to meet specific international requirements.
              </p>
            </div>

             <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><ClipboardList size={20} /></div>
                  Lifecycle Management
              </div>
              <p className={styles.cardText}>
                Support for 510(k) modifications, PMA supplements (panel-track, 180-day, real-time, 30-day), annual reports, and design change documentation to maintain authorization.
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
            We've navigated hundreds of agency interactions and understand review dynamics across FDA divisions and international authorities.
          </p>

          <div className={styles.advantageGrid}>
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Pathway Optimization
               </h3>
               <p className={styles.text}>
                 We evaluate all pathways to recommend approaches balancing time-to-market, evidentiary burden, and long-term flexibility.
               </p>
             </div>
             
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Technical Integration
               </h3>
               <p className={styles.text}>
                 Our professionals work closely with engineering and clinical teams so submissions accurately reflect device design and performance.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Agency Relationships
               </h3>
               <p className={styles.text}>
                 We understand common deficiency themes and effective response strategies across various regulatory bodies.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Deficiency Prevention
               </h3>
               <p className={styles.text}>
                 Submissions are developed with the reviewer in mind, anticipating questions to facilitate efficient review and reduce RTA deficiencies.
               </p>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
