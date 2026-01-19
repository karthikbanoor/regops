"use client";

import PageHeader from "@/components/layout/PageHeader";
import styles from "../../service-page.module.css";
import { CheckCircle, Route, Users, Search, FastForward, Globe, ClipboardCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export default function RAStrategyPage() {
  return (
    <main className={styles.main}>
      <PageHeader 
        title="RA Consulting & Strategy" 
        subtitle="Expert guidance to navigate complex global regulatory pathways."
      />
      
      {/* Overview Section */}
      <section className={cn(styles.section, styles.sectionWhite)}>
        <div className={styles.narrowContainer}>
          <h2 className={styles.sectionTitle}>
            Strategic Regulatory Partnerships
          </h2>
          <p className={styles.textLarge}>
            Successful drug development requires more than just following rules—it demands strategic foresight. Choosing the optimal regulatory pathway can shave months off development timelines and save millions in costs. Conversely, a misstep in early strategy can result in costly delays or clinical hold.
          </p>
          <div style={{ height: '3px', width: '80px', background: '#0066CC', margin: '2rem 0', borderRadius: '2px' }}></div>
          <p className={styles.text}>
            RegOps provides senior-level regulatory consulting that helps you navigate complexity. We partner with you to define regulatory strategy, prepare for health authority interactions, and assess program risks. Our consultants bring decades of experience across diverse therapeutic areas and regions, offering the insight you need to make confident development decisions.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className={cn(styles.section, styles.sectionGray)}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
             <h2 className={styles.sectionTitle}>Our Capabilities</h2>
             <p className={styles.text} style={{ maxWidth: '600px', margin: '0 auto' }}>
               Strategic support from early development to marketing authorization.
             </p>
          </div>
          
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Route size={20} /></div>
                  Strategy Development
              </div>
              <p className={styles.cardText}>
                 Definition of regulatory pathways, target product profiles, and submission plans. We help you align regulatory milestones with business objectives.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Users size={20} /></div>
                  HA Meetings
              </div>
              <p className={styles.cardText}>
                Preparation for and support during meetings with FDA, EMA, and other agencies. We help you craft briefing books and rehearse for successful interactions.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Search size={20} /></div>
                  Due Diligence
              </div>
              <p className={styles.cardText}>
                 Independent regulatory assessment of in-licensing or acquisition targets. We identify regulatory risks and value drivers in potential assets.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><FastForward size={20} /></div>
                  Expedited Pathways
              </div>
              <p className={styles.cardText}>
                Assessment of eligibility for Breakthrough Therapy, Fast Track, RMAT, PRIME, and other accelerated programs. We support designation requests.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Globe size={20} /></div>
                  Global Planning
              </div>
              <p className={styles.cardText}>
                Integrated global regulatory plans that coordinate development activities across US, EU, and other regions to optimize global approval timing.
              </p>
            </div>

             <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><ClipboardCheck size={20} /></div>
                  Program Reviews
              </div>
              <p className={styles.cardText}>
                Strategic review of ongoing development programs. We identify potential regulatory hurdles and recommend course corrections to ensure compliance.
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
            We bring agency insight and practical experience to your development team.
          </p>

          <div className={styles.advantageGrid}>
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Strategic Depth
               </h3>
               <p className={styles.text}>
                 We don&apos;t just quote regulations; we interpret them. We help you find creative, compliant solutions to complex challenges.
               </p>
             </div>
             
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Agency Insight
               </h3>
               <p className={styles.text}>
                 Our team includes former reviewers and industry veterans who understand how regulators think and what they need to approve a product.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Practical Focus
               </h3>
               <p className={styles.text}>
                 We focus on actionable advice. Our strategy documents are practical roadmaps, not academic exercises.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Therapeutic Breadth
               </h3>
               <p className={styles.text}>
                 Our experience covers a wide range of indications, from oncology and rare diseases to cardiovascular and CNS, bringing relevant case studies to your program.
               </p>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
