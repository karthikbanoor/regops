
import PageHeader from "@/components/layout/PageHeader";
import DomainServices from "@/components/sections/DomainServices";
import styles from "@/app/page.module.css"; 
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return await getPageMetadata("pharmaceuticals");
}

const services = [
  { name: "CMC Technical Writing", href: "/pharmaceuticals/cmc-technical-writing", description: "High-quality Chemistry, Manufacturing, and Controls documentation for Module 3." },
  { name: "Dossier Authoring Services", href: "/pharmaceuticals/dossier-authoring-services", description: "Comprehensive authoring of CTD/eCTD modules for NDA, ANDA, and MAA submissions." },
  { name: "eCTD Submission Services", href: "/pharmaceuticals/ectd-submission-services", description: "Technical compilation, validation, and publishing of electronic submissions." },
  { name: "Gap Analysis & Compliance", href: "/pharmaceuticals/gap-analysis-compliance", description: "Identifying critical gaps in your regulatory strategy or documentation." },
  { name: "GxP Audit Services", href: "/pharmaceuticals/gxp-audit-services", description: "Third-party auditing for GCC, GLP, and GMP compliance readiness." },
  { name: "Labeling & Artwork Services", href: "/pharmaceuticals/labeling-artwork-services", description: "Ensuring packaging and PILs meet regional regulatory standards including FDA and EMA." },
  { name: "Lifecycle Management Services", href: "/pharmaceuticals/lifecycle-management-services", description: "Managing post-approval variations, renewals, and annual reports." },
  { name: "Market Access & Expansion", href: "/pharmaceuticals/market-access-expansion", description: "Tailored strategies for entering emerging and established pharmaceutical markets." },
  { name: "Medical Writing Services", href: "/pharmaceuticals/medical-writing-services", description: "Clinical Study Reports (CSRs), Protocols, and Investigator Brochures (IBs)." },
  { name: "Pharmacovigilance Services", href: "/pharmaceuticals/pharmacovigilance-services", description: "PSURs, PADERs, and signal detection support for drug safety." },
  { name: "RA Consulting & Strategy", href: "/pharmaceuticals/ra-consulting-strategy", description: "Expert advisory for complex regulatory pathways and agency interactions." },
  { name: "Regulatory Intelligence Services", href: "/pharmaceuticals/regulatory-intelligence-services", description: "Keeping you ahead of the curve with latest guideline updates and policy changes." }
];

export default function PharmaceuticalsPage() {
  return (
    <main className={styles.main}>
      <PageHeader 
        title="Pharmaceuticals" 
        subtitle="Strategic regulatory solutions for drug development and lifecycle management."
      />
      
      <DomainServices 
        title="Pharma Regulatory Excellence"
        description="Our pharmaceutical services cover the entire product lifecycle. Whether you are developing a new chemical entity, a generic, or a biologic, our team ensures your regulatory strategy is robust, compliant, and optimized for speed to market."
        services={services}
      />
    </main>
  );
}
