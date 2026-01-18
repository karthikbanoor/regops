"use client";

import PageHeader from "@/components/layout/PageHeader";
import styles from "../service-page.module.css";
import { CheckCircle, Map, Route, FileCheck, Users, Replace, CalendarCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MarketAccessPage() {
  return (
    <main className={styles.main}>
      <PageHeader 
        title="Market Access & Expansion" 
        subtitle="Strategic regulatory route planning and submission support for global markets."
      />
      
      {/* Overview Section */}
      <section className={cn(styles.section, styles.sectionWhite)}>
        <div className={styles.narrowContainer}>
          <h2 className={styles.sectionTitle}>
            Global Expansion Strategy
          </h2>
          <p className={styles.textLarge}>
            Global medical device market access requires navigating regulatory systems that vary significantly in structure, requirements, and timelines. Expansion strategies must balance market potential against regulatory investment.
          </p>
          <div style={{ height: '3px', width: '80px', background: '#0066CC', margin: '2rem 0', borderRadius: '2px' }}></div>
          <p className={styles.text}>
            RegOps provides market access expertise across established and emerging device markets worldwide. We help you prioritize expansion targets, develop efficient registration strategies, and execute submissions through local regulatory pathways. Our approach minimizes redundant effort by leveraging existing regulatory documentation and approval references where permitted, while ensuring market-specific requirements are fully addressed.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className={cn(styles.section, styles.sectionGray)}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
             <h2 className={styles.sectionTitle}>Our Capabilities</h2>
             <p className={styles.text} style={{ maxWidth: '600px', margin: '0 auto' }}>
               Comprehensive support for entering new global markets.
             </p>
          </div>
          
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Map size={20} /></div>
                  Market Assessment
              </div>
              <p className={styles.cardText}>
                Strategic analysis of potential markets considering regulatory complexity, timelines, market size, and local requirements. We help you focus resources where they generate greatest return.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Route size={20} /></div>
                  Pathway Analysis
              </div>
              <p className={styles.cardText}>
                Detailed evaluation of registration requirements for target markets including submission formats, testing, and local representation. We map pathways and identify documentation needs.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><FileCheck size={20} /></div>
                  Dossier Development
              </div>
              <p className={styles.cardText}>
                Adaptation of existing regulatory documentation for international submissions, including Technical File conversions, form completion, and local language documentation.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Users size={20} /></div>
                  Partner Coordination
              </div>
              <p className={styles.cardText}>
                Management of relationships with local regulatory agents, Authorized Representatives, and in-market partners. We coordinate activities and ensure regulatory alignment.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Replace size={20} /></div>
                  Reference Strategy
              </div>
              <p className={styles.cardText}>
                Leveraging of FDA clearance, CE marking, and other reference approvals in markets with reliance pathways. We identify opportunities to accelerate registration.
              </p>
            </div>

             <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><CalendarCheck size={20} /></div>
                  Post-Registration
              </div>
              <p className={styles.cardText}>
                Ongoing support for maintaining registrations including renewals, annual filings, variation submissions, and vigilance. We ensure continued market access.
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
            We design registration approaches that leverage existing documentation, minimizing new work for each market entry.
          </p>

          <div className={styles.advantageGrid}>
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Global Network
               </h3>
               <p className={styles.text}>
                 We maintain relationships with consultants and local representatives across target markets, enabling effective execution.
               </p>
             </div>
             
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Efficient Strategies
               </h3>
               <p className={styles.text}>
                 We leverage existing documentation and approval references to minimize new work required for each market entry.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Realistic Planning
               </h3>
               <p className={styles.text}>
                 We provide accurate timeline and cost estimates, enabling informed business decisions about expansion priorities.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Ongoing Partnership
               </h3>
               <p className={styles.text}>
                 We support ongoing compliance, renewals, and expansion into additional markets as your business grows.
               </p>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
