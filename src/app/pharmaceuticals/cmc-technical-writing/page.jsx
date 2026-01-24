

import PageHeader from "@/components/layout/PageHeader";
import styles from "../../service-page.module.css";
import { CheckCircle, FileText, FlaskConical, Microscope, FileJson, Layers, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return await getPageMetadata("pharmaceuticals-cmc-technical-writing");
}

export default function CMCPage() {
  return (
    <main className={styles.main}>
      <PageHeader 
        title="CMC Technical Writing" 
        subtitle="Expert authoring of Module 3 documentation for drug substance and drug product."
      />
      
      {/* Overview Section */}
      <section className={cn(styles.section, styles.sectionWhite)}>
        <div className={styles.narrowContainer}>
          <h2 className={styles.sectionTitle}>
            The Backbone of Drug Applications
          </h2>
          <p className={styles.textLarge}>
            CMC documentation forms the backbone of any drug application. Health authorities scrutinize Module 3 content to ensure your product can be manufactured consistently, meets quality specifications, and will remain stable throughout its shelf life.
          </p>
          <div style={{ height: '3px', width: '80px', background: '#0066CC', margin: '2rem 0', borderRadius: '2px' }}></div>
          <p className={styles.text}>
            RegOps CMC writers combine deep pharmaceutical science knowledge with regulatory writing expertise. We understand the technical details—synthesis routes, analytical methods, process parameters—and we know how to present them in ways that satisfy regulatory reviewers. Our documentation supports your manufacturing reality while meeting the documentation standards that health authorities expect.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className={cn(styles.section, styles.sectionGray)}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
             <h2 className={styles.sectionTitle}>Our Capabilities</h2>
             <p className={styles.text} style={{ maxWidth: '600px', margin: '0 auto' }}>
               Comprehensive CMC documentation support.
             </p>
          </div>
          
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><FlaskConical size={20} /></div>
                  Drug Substance (3.2.S)
              </div>
              <p className={styles.cardText}>
                Complete authoring of drug substance sections including manufacture, characterization, control, and stability. We document synthesis and quality attributes comprehensively.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Layers size={20} /></div>
                  Drug Product (3.2.P)
              </div>
              <p className={styles.cardText}>
                End-to-end drug product documentation covering composition, pharmaceutical development, manufacture, control of excipients, container closure, and stability data.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><Microscope size={20} /></div>
                  Analytical Methods
              </div>
              <p className={styles.cardText}>
                Clear descriptions of analytical procedures for identity, assay, and impurities. We ensure methods are described with sufficient detail for regulatory review and technology transfer.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><FileText size={20} /></div>
                  Process Validation
              </div>
              <p className={styles.cardText}>
                Manufacturing process narratives describing unit operations, critical parameters, and validation protocols. We balance completeness with protection of proprietary information.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><FileJson size={20} /></div>
                  Stability Protocols
              </div>
              <p className={styles.cardText}>
                Authoring of stability protocols, reports, and shelf-life justifications aligned with ICH guidelines. We present data in formats that support proposed storage conditions.
              </p>
            </div>

             <div className={styles.card}>
              <div className={styles.cardTitle}>
                  <div className={styles.iconWrapper}><RefreshCw size={20} /></div>
                  Change Documentation
              </div>
              <p className={styles.cardText}>
                Technical documentation supporting manufacturing changes, site transfers, and scale-up. We author comparability protocols demonstrating equivalence across change scenarios.
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
            We combine scientific fluency with regulatory expertise to create robust CMC sections.
          </p>

          <div className={styles.advantageGrid}>
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Cross-Functional Fluency
               </h3>
               <p className={styles.text}>
                 We communicate effectively with scientists and engineers, enabling accurate documentation of complex technical content.
               </p>
             </div>
             
             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Lifecycle Perspective
               </h3>
               <p className={styles.text}>
                 We author documentation with future submissions in mind, establishing a foundation that supports post-approval changes.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Modality Experience
               </h3>
               <p className={styles.text}>
                 Our experience spans small molecules, biologics, and advanced therapies. We understand modality-specific expectations.
               </p>
             </div>

             <div className={styles.advantageItem}>
               <h3 className={styles.advantageTitle}>
                 <CheckCircle size={24} color="#0066CC" fill="#EBF8FF" /> Regulatory Alignment
               </h3>
               <p className={styles.text}>
                 We stay current with evolving CMC guidance from FDA, EMA, and ICH, ensuring your documentation reflects current expectations.
               </p>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
