

import PageHeader from "@/components/layout/PageHeader";
import styles from "../../service-page.module.css";
import { CheckCircle, FilePen, BookText, FileText, ClipboardList, BookOpen, UserCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return await getPageMetadata("pharmaceuticals-medical-writing-services");
}

export default function MedicalWritingPage() {
  return (
    <main className={styles.main}>
      <PageHeader 
        title="Medical Writing Services" 
        subtitle="Clear, accurate clinical and regulatory documentation throughout development."
      />
      
      {/* Overview Section */}
      <section className={cn(styles.section, styles.sectionWhite)}>
        <div className={styles.narrowContainer}>
          <h2 className={styles.sectionTitle}>
            Documentation that Delivers
          </h2>
          <p className={styles.textLarge}>
            Effective medical writing is essential throughout the drug development lifecycle. From clinical study reports that support regulatory submissions to scientific publications that establish your product&apos;s place in medical practice, clear and accurate documentation directly impacts success.
          </p>
          <div style={{ height: '3px', width: '80px', background: '#0066CC', margin: '2rem 0', borderRadius: '2px' }}></div>
          <p className={styles.text}>
            RegOps medical writers combine scientific training with regulatory awareness and communication expertise. We understand that every document serves a purpose—whether informing regulatory decisions, guiding clinical practice, or advancing scientific knowledge. Our writing is accurate, appropriately detailed, and crafted to achieve your communication objectives while meeting stringent regulatory standards.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className={cn(styles.section, styles.sectionGray)}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
             <h2 className={styles.sectionTitle}>Our Capabilities</h2>
             <p className={styles.text} style={{ maxWidth: '600px', margin: '0 auto' }}>
               From protocols to publications.
             </p>
          </div>
          
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><FileText size={20} /></div>
                  Clinical Study Reports
              </div>
              <p className={styles.cardText}>
                Complete CSR authoring compliant with ICH E3. We develop full reports and synopses that accurately present study design and results for regulatory review.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><ClipboardList size={20} /></div>
                  Study Protocols
              </div>
              <p className={styles.cardText}>
                Development of clear protocols that meet regulatory requirements and support operational execution. We ensure protocols are scientifically sound and feasible.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><BookText size={20} /></div>
                  Investigator Brochures
              </div>
              <p className={styles.cardText}>
                 Authoring and maintenance of IBs that compile relevant information for investigators. We ensure content supports informed consent and safe study conduct.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><FilePen size={20} /></div>
                  Submission Docs
              </div>
              <p className={styles.cardText}>
                Authoring support for briefing documents, clinical overviews (2.5), and summaries (2.7) that present your clinical program clearly to health authorities.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><BookOpen size={20} /></div>
                  Publications
              </div>
              <p className={styles.cardText}>
                Development of manuscripts, abstracts, and posters for peer-reviewed publication. We ensure scientific accuracy and compliance with guidelines.
              </p>
            </div>

             <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><UserCheck size={20} /></div>
                  Informed Consent
              </div>
              <p className={styles.cardText}>
                Plain-language ICF development that meets regulatory requirements and supports meaningful participant understanding of procedures and risks.
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
            We combine therapeutic expertise with regulatory awareness to deliver high-quality documentation.
          </p>

          <div className={styles.advantageGrid}>
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Therapeutic Expertise
               </h3>
               <p className={styles.text}>
                 Our writers have backgrounds in relevant therapeutic areas and can engage substantively with clinical and scientific content.
               </p>
             </div>
             
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Regulatory Awareness
               </h3>
               <p className={styles.text}>
                 We write with the reviewer in mind, anticipating questions and ensuring documents address likely concerns proactively.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Timeline Focus
               </h3>
               <p className={styles.text}>
                 We understand the pace of clinical development. We deliver quality work within the timelines your program requires.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Collaborative
               </h3>
               <p className={styles.text}>
                 We work closely with clinical teams and statisticians to ensure our writing accurately reflects the data and your interpretation.
               </p>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
