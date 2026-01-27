
import PageHeader from "@/components/layout/PageHeader";
import DomainServices from "@/components/sections/DomainServices";
import styles from "@/app/page.module.css"; 
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return await getPageMetadata("startups");
}

const services = [
  { name: "Regulatory Roadmap", href: "#", description: "Defining the fastest and most cost-effective path to market for your MVP." },
  { name: "Pre-Submission (Q-Sub) Support", href: "#", description: "Engaging early with the FDA to de-risk your submission strategy." },
  { name: "Small Business Designation", href: "#", description: "Qualifying for reduced FDA user fees to preserve your runway." },
  { name: "Investor Due Diligence", href: "#", description: "Preparing regulatory assets that instill confidence in VCs and angels." },
  { name: "Fractional Regulatory Support", href: "#", description: "Access world-class expertise without the cost of a full-time hire." }
];

export default function StartupsPage() {
  return (
    <main className={styles.main}>
      <PageHeader 
        title="Startups & Emerging Companies" 
        subtitle="Agile regulatory strategies for high-growth innovators."
      />
      
      <DomainServices 
        title="From Concept to Clearance"
        description="We understand that startups operate under tight timelines and budgets. Our lean regulatory approach helps you hit critical milestones, secure funding, and avoid costly pivots."
        services={services}
      />
    </main>
  );
}
