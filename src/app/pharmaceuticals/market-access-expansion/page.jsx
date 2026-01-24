"use client";

import PageHeader from "@/components/layout/PageHeader";
import styles from "../../service-page.module.css";
import { CheckCircle, MapPin, Flag, FileInput, Handshake, Globe2, AlertOctagon } from "lucide-react";
import { cn } from "@/lib/utils";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return await getPageMetadata("pharmaceuticals/market-access-expansion");
}

export default function MarketAccessPage() {
  return (
    <main className={styles.main}>
      <PageHeader 
        title="Market Access & Expansion" 
        subtitle="Strategic expansion into new global markets with optimized regulatory pathways."
      />
      
      {/* Overview Section */}
      <section className={cn(styles.section, styles.sectionWhite)}>
        <div className={styles.narrowContainer}>
          <h2 className={styles.sectionTitle}>
            Global Reach, Local Expertise
          </h2>
          <p className={styles.textLarge}>
            Global market access requires navigating diverse regulatory frameworks, each with unique requirements, timelines, and expectations. Expanding into new markets involves complex decisions: which markets to prioritize, how to sequence filings, and how to adapt dossiers.
          </p>
          <div style={{ height: '3px', width: '80px', background: '#0066CC', margin: '2rem 0', borderRadius: '2px' }}></div>
          <p className={styles.text}>
            RegOps provides market access expertise that helps you expand strategically. We understand regulatory pathways across established and emerging markets, and we help you develop filing strategies that balance speed, cost, and risk. Our approach ensures your products reach patients in new markets efficiently while maintaining regulatory compliance throughout your global footprint.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className={cn(styles.section, styles.sectionGray)}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
             <h2 className={styles.sectionTitle}>Our Capabilities</h2>
             <p className={styles.text} style={{ maxWidth: '600px', margin: '0 auto' }}>
               From market selection to post-registration compliance.
             </p>
          </div>
          
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><MapPin size={20} /></div>
                  Market Prioritization
              </div>
              <p className={styles.cardText}>
                 Strategic analysis of potential markets considering regulatory complexity, timelines, and potential. We help you focus expansion efforts where they generate value.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Flag size={20} /></div>
                  Registration Strategy
              </div>
              <p className={styles.cardText}>
                Development of market-specific registration strategies including pathway selection and work-sharing opportunities. We optimize filing approaches for each target.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><FileInput size={20} /></div>
                  Dossier Adaptation
              </div>
              <p className={styles.cardText}>
                 Modification of dossiers to meet regional requirements including Module 1 adaptations and translations. We ensure submissions meet local expectations.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Handshake size={20} /></div>
                  Local Coordination
              </div>
              <p className={styles.cardText}>
                Coordination with local regulatory partners, agents, and health authorities. We bridge communication gaps and ensure smooth interaction with stakeholders.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Globe2 size={20} /></div>
                  Recognition Pathways
              </div>
              <p className={styles.cardText}>
                 Leveraging of reference decisions (FDA, EMA) to accelerate registration in markets with reliance frameworks, speeding up your global rollout.
              </p>
            </div>

             <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><AlertOctagon size={20} /></div>
                  Local Compliance
              </div>
              <p className={styles.cardText}>
                Ongoing regulatory maintenance in registered markets including renewals and variations. We ensure continued market access after initial approval.
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
            We help you plan expansion with accurate expectations and strategic efficiency.
          </p>

          <div className={styles.advantageGrid}>
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Global Network
               </h3>
               <p className={styles.text}>
                 We maintain relationships with experts across target markets, enabling effective execution wherever you need to file.
               </p>
             </div>
             
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Strategic Efficiency
               </h3>
               <p className={styles.text}>
                 We design filing strategies that minimize redundant effort, leveraging reference approvals to speed up global access.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Market Knowledge
               </h3>
               <p className={styles.text}>
                 Our experience spans established markets (US, EU, JP) and emerging markets, allowing us to navigate diverse regulatory environments.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Realistic Planning
               </h3>
               <p className={styles.text}>
                 We set accurate timeline and resource expectations, helping you plan budgets and product launches with confidence.
               </p>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
