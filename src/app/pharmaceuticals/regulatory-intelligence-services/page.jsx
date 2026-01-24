"use client";

import PageHeader from "@/components/layout/PageHeader";
import styles from "../../service-page.module.css";
import { CheckCircle, Radar, TrendingUp, BarChart3, FileText, Lightbulb, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return await getPageMetadata("pharmaceuticals/regulatory-intelligence-services");
}

export default function RegIntelPage() {
  return (
    <main className={styles.main}>
      <PageHeader 
        title="Regulatory Intelligence Services" 
        subtitle="Proactive monitoring and analysis of the evolving global regulatory landscape."
      />
      
      {/* Overview Section */}
      <section className={cn(styles.section, styles.sectionWhite)}>
        <div className={styles.narrowContainer}>
          <h2 className={styles.sectionTitle}>
            Knowledge is Competitive Advantage
          </h2>
          <p className={styles.textLarge}>
             The global regulatory environment evolves constantly. New guidance, amended legislation, and changing agency practices create both risks and opportunities. Organizations that monitor these changes systematically gain competitive advantage; those that react after the fact face compliance challenges.
          </p>
          <div style={{ height: '3px', width: '80px', background: '#0066CC', margin: '2rem 0', borderRadius: '2px' }}></div>
          <p className={styles.text}>
            RegOps provides structured regulatory intelligence that keeps your organization informed and prepared. We go beyond simple monitoring to deliver analysis, interpretation, and strategic recommendations. Our intelligence supports regulatory strategy, submission planning, and ongoing compliance across your product portfolio and target markets.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className={cn(styles.section, styles.sectionGray)}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
             <h2 className={styles.sectionTitle}>Our Capabilities</h2>
             <p className={styles.text} style={{ maxWidth: '600px', margin: '0 auto' }}>
               From horizon scanning to targeted research.
             </p>
          </div>
          
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Radar size={20} /></div>
                  Horizon Scanning
              </div>
              <p className={styles.cardText}>
                Systematic monitoring of regulatory developments across target markets. We track draft guidance, legislation, and agency communications from FDA, EMA, ICH.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><TrendingUp size={20} /></div>
                  Impact Assessment
              </div>
              <p className={styles.cardText}>
                 Analysis of regulatory changes to determine relevance to your products. We prioritize developments that require action and filter noise.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><BarChart3 size={20} /></div>
                  Competitor Intel
              </div>
              <p className={styles.cardText}>
                Monitoring of competitor regulatory activities including approvals, advisory committees, and labeling changes to inform your strategy.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><FileText size={20} /></div>
                  Intel Reporting
              </div>
              <p className={styles.cardText}>
                 Regular delivery of curated intelligence through customized reports and alerts. We format information to integrate with your decision-making.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Lightbulb size={20} /></div>
                  Strategic Interpretation
              </div>
              <p className={styles.cardText}>
                Expert analysis of trends and agency priorities. We help you anticipate where the regulatory environment is heading and position programs accordingly.
              </p>
            </div>

             <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Search size={20} /></div>
                  Ad Hoc Research
              </div>
              <p className={styles.cardText}>
                Targeted research on specific regulatory questions or pathways. We investigate precedents and compile guidance to answer your queries.
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
            We provide actionable intelligence, not just information dumps.
          </p>

          <div className={styles.advantageGrid}>
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Global Coverage
               </h3>
               <p className={styles.text}>
                 We monitor regulatory developments across major markets, providing consolidated intelligence regardless of your geographic footprint.
               </p>
             </div>
             
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Subject Depth
               </h3>
               <p className={styles.text}>
                 Our analysts have regulatory operations backgrounds. We understand the actual implications of changes because we&apos;ve done the work.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Actionable Output
               </h3>
               <p className={styles.text}>
                 Our intelligence products include clear recommendations. We tell you what developments mean for you and what actions to consider.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Flexible Delivery
               </h3>
               <p className={styles.text}>
                 We customize intelligence delivery to your needs—scheduled reports, real-time alerts, or ad-hoc support.
               </p>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
