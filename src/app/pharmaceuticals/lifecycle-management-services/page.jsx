

import PageHeader from "@/components/layout/PageHeader";
import styles from "../../service-page.module.css";
import { CheckCircle, RefreshCw, GitBranch, PlusCircle, ShieldCheck, FolderSync, CalendarCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return await getPageMetadata("pharmaceuticals/lifecycle-management-services");
}

export default function LifecyclePage() {
  return (
    <main className={styles.main}>
      <PageHeader 
        title="Lifecycle Management Services" 
        subtitle="Strategic maintenance of regulatory assets throughout the product commercial life."
      />
      
      {/* Overview Section */}
      <section className={cn(styles.section, styles.sectionWhite)}>
        <div className={styles.narrowContainer}>
          <h2 className={styles.sectionTitle}>
            Protecting Value, Ensuring Continuity
          </h2>
          <p className={styles.textLarge}>
            Regulatory approval marks the beginning, not the end, of a product&apos;s journey. Post-approval changes, manufacturing updates, and regulatory maintenance activities continue throughout commercial life. Each change carries regulatory implications that must be overseen effectively.
          </p>
          <div style={{ height: '3px', width: '80px', background: '#0066CC', margin: '2rem 0', borderRadius: '2px' }}></div>
          <p className={styles.text}>
            RegOps provides lifecycle management expertise that protects your regulatory assets and maximizes product value. We help you plan changes efficiently, select optimal regulatory pathways, maintain submission dossiers, and respond to evolving regulatory requirements. Our lifecycle approach considers both immediate needs and long-term strategic objectives for each product.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className={cn(styles.section, styles.sectionGray)}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
             <h2 className={styles.sectionTitle}>Our Capabilities</h2>
             <p className={styles.text} style={{ maxWidth: '600px', margin: '0 auto' }}>
               From routine maintenance to complex variations.
             </p>
          </div>
          
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><RefreshCw size={20} /></div>
                  Change Management
              </div>
              <p className={styles.cardText}>
                Strategic planning for post-approval changes. We assess change impact, determine regulatory pathways, and execute submissions efficiently.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><GitBranch size={20} /></div>
                  Variation Strategy
              </div>
              <p className={styles.cardText}>
                Classification and pathway assessment for changes under global frameworks. We advise on optimal filing strategies (CBE-30 vs PAS, Type IA/IB/II).
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><PlusCircle size={20} /></div>
                  Line Extensions
              </div>
              <p className={styles.cardText}>
                Regulatory strategy for new strengths, dosage forms, and indications. We help you expand your product&apos;s market potential within existing frameworks.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><ShieldCheck size={20} /></div>
                  License Maintenance
              </div>
              <p className={styles.cardText}>
                Ongoing maintenance of marketing authorizations including annual reports and renewals. We ensure your licenses remain active and current.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><FolderSync size={20} /></div>
                  Dossier Maintenance
              </div>
              <p className={styles.cardText}>
                Systematic updating of dossiers to reflect approved changes, maintain consistency across markets, and ensure readiness for future filings.
              </p>
            </div>

             <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><CalendarCheck size={20} /></div>
                  Commitments Tracking
              </div>
              <p className={styles.cardText}>
                Management of post-approval commitments and agency agreements. We track deadlines and coordinate fulfillment to ensure timely compliance.
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
            We help you make lifecycle decisions that support both immediate needs and long-term strategy.
          </p>

          <div className={styles.advantageGrid}>
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Strategic Perspective
               </h3>
               <p className={styles.text}>
                 We consider the lifecycle implications of every change, ensuring today&apos;s solution doesn&apos;t become tomorrow&apos;s problem.
               </p>
             </div>
             
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Efficiency Focus
               </h3>
               <p className={styles.text}>
                 We identify the least burdensome regulatory pathways for changes, reducing submission effort and timelines where possible.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Portfolio Approach
               </h3>
               <p className={styles.text}>
                 For multi-product portfolios, we coordinate lifecycle activities to optimize resources and maintain consistent regulatory practices.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Global Coordination
               </h3>
               <p className={styles.text}>
                 We manage changes across markets, ensuring consistency of approach and minimizing regulatory risk from regional variations.
               </p>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
