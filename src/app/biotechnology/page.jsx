
import PageHeader from "@/components/layout/PageHeader";
import DomainServices from "@/components/sections/DomainServices";
import styles from "@/app/page.module.css"; 
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return await getPageMetadata("biotechnology");
}

const services = [
  { name: "Regulatory Strategy for Biologics", href: "#", description: "Navigating complex pathways for novel biologics and ensuring alignment with CBER/CDER requirements." },
  { name: "Biosimilar Development", href: "#", description: "Strategic guidance for 351(k) pathways, including comparability studies and interchangeability." },
  { name: "Cell & Gene Therapy Support", href: "#", description: "Specialized support for ATMPs, including INTERACT meetings and RMAT designations." },
  { name: "IND & BLA Submissions", href: "#", description: "End-to-end management of Investigational New Drug and Biologics License Applications." },
  { name: "Orphan Drug Designations", href: "#", description: "Securing incentives and exclusivity for therapies targeting rare diseases." }
];

export default function BiotechnologyPage() {
  return (
    <main className={styles.main}>
      <PageHeader 
        title="Biotechnology" 
        subtitle="Accelerating breakthroughs in biologics and advanced therapies."
      />
      
      <DomainServices 
        title="Innovation meets Regulation"
        description="We partner with biotech pioneers to bring life-changing therapies to patients. From early-stage discovery to commercialization, we handle the unique regulatory challenges of complex biological products."
        services={services}
      />
    </main>
  );
}
