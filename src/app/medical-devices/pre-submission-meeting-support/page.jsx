"use client";

import PageHeader from "@/components/layout/PageHeader";
import styles from "../../service-page.module.css";
import { CheckCircle, Users, MessageSquare, FileText, Gavel, Scale, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return await getPageMetadata("medical-devices/pre-submission-meeting-support");
}

export default function PreSubmissionPage() {
  return (
    <main className={styles.main}>
      <PageHeader 
        title="Health Authority Interactions" 
        subtitle="Advisory support for FDA Q-Submissions, Pre-Subs, and European Competent Authority consultations."
      />
      
      {/* Overview Section */}
      <section className={cn(styles.section, styles.sectionWhite)}>
        <div className={styles.narrowContainer}>
          <h2 className={styles.sectionTitle}>
            Strategic Regulatory Engagement
          </h2>
          <p className={styles.textLarge}>
            Direct engagement with health authorities can significantly impact regulatory success. Pre-submission meetings provide opportunities to clarify expectations and address potential concerns before they become review deficiencies.
          </p>
          <div style={{ height: '3px', width: '80px', background: '#0066CC', margin: '2rem 0', borderRadius: '2px' }}></div>
          <p className={styles.text}>
            RegOps brings extensive experience in health authority engagement to every interaction. We help you prepare communications that elicit useful agency feedback, structure meetings that address your key questions, and respond to agency inquiries in ways that resolve concerns efficiently. Our approach ensures that every interaction advances your regulatory objectives while building constructive relationships with the agencies that authorize your devices.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className={cn(styles.section, styles.sectionGray)}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
             <h2 className={styles.sectionTitle}>Our Capabilities</h2>
             <p className={styles.text} style={{ maxWidth: '600px', margin: '0 auto' }}>
               Expert support for all types of agency interactions.
             </p>
          </div>
          
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Users size={20} /></div>
                  Pre-Submission Support
              </div>
              <p className={styles.cardText}>
                End-to-end support for FDA Q-Submissions and EMA scientific advice. We develop meeting requests, prepare briefing documents, formulate targeted questions, and coach teams for discussions.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><MessageSquare size={20} /></div>
                  Regulatory Strategy
              </div>
              <p className={styles.cardText}>
                Preparation for early-stage health authority consultations on development programs, regulatory pathways, and clinical study design. We help you maximize value from these interactions.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><FileText size={20} /></div>
                  Response Management
              </div>
              <p className={styles.cardText}>
                Development of responses to FDA Additional Information requests and Notified Body questions. We craft responses that thoroughly address concerns while protecting your position.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Gavel size={20} /></div>
                  Advisory Committee
              </div>
              <p className={styles.cardText}>
                Support for FDA Advisory Committee meetings including briefing document development, presentation preparation, and anticipated question analysis for public advisory settings.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Scale size={20} /></div>
                  Appeal & Dispute
              </div>
              <p className={styles.cardText}>
                Support for formal dispute resolution mechanisms when initial regulatory decisions require challenge. We help you present scientific and regulatory arguments effectively.
              </p>
            </div>

             <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Globe size={20} /></div>
                  Authority Liaison
              </div>
              <p className={styles.cardText}>
                Support for interactions with EU Competent Authorities and Notified Bodies including audit preparation and response. We facilitate productive dialogue within the European regulatory system.
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
            We approach every interaction with clear objectives and thorough preparation to elicit the specific feedback you need.
          </p>

          <div className={styles.advantageGrid}>
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Strategic Preparation
               </h3>
               <p className={styles.text}>
                 We craft meeting requests, briefing documents, and presentations specifically designed to drive productive discussions.
               </p>
             </div>
             
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Agency Insight
               </h3>
               <p className={styles.text}>
                 Our experience provides perspective on how agencies approach reviews and what concerns they prioritize.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Communication Excellence
               </h3>
               <p className={styles.text}>
                 We craft clear, concise regulatory communications that address agency questions directly without unnecessary complexity.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Relationship Management
               </h3>
               <p className={styles.text}>
                 We help you build constructive ongoing relationships with regulatory contacts, establishing trust for future submissions.
               </p>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
