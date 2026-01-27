

import PageHeader from "@/components/layout/PageHeader";
import DomainServices from "@/components/sections/DomainServices";
import styles from "@/app/page.module.css";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return await getPageMetadata("medical-devices");
}

const services = [
  { name: "Gap Analysis & Transition Planning", href: "/medical-devices/gap-analysis-transition-planning", description: "Comprehensive assessment of your technical documentation against MDR/IVDR requirements." },
  { name: "510(k) Premarket Notifications", href: "/medical-devices/510(k)-premarket-notifications", description: "Expert preparation and submission of 510(k) applications to the US FDA." },
  { name: "Device Description & Specification", href: "/medical-devices/device-description-specification", description: "Detailed technical documentation ensuring alignment with GSPR and essential requirements." },
  { name: "Pre-Submission Meeting Support", href: "/medical-devices/pre-submission-meeting-support", description: "Strategic guidance and representation during FDA Q-Submission meetings." },
  { name: "PMCF Plan Development", href: "/medical-devices/pmcf-plan-development", description: "Post-Market Clinical Follow-up strategies to strictly monitor device safety and performance." },
  { name: "Change Impact Assessment", href: "/medical-devices/change-impact-assessment", description: "Evaluating the regulatory impact of design, manufacturing, or labeling changes." },
  { name: "PMS System Design", href: "/medical-devices/pms-system-design", description: "Robust Post-Market Surveillance systems compliant with EU MDR and FDA 21 CFR 820." },
  { name: "Market Assessment & Prioritization", href: "/medical-devices/market-assessment-prioritization", description: "Strategic regulatory intelligence to identify efficient market entry pathways." }
];

export default function MedicalDevicesPage() {
  return (
    <main className={styles.main}>
      <PageHeader 
        title="Medical Devices" 
        subtitle="Accelerating market access for innovative medical technologies."
      />
      
      <DomainServices 
        title="End-to-End Device Regulation"
        description="We help medical device manufacturers navigate the increasingly complex global regulatory landscape, from initial strategy to post-market compliance. Our expertise covers FDA 510(k), EU MDR/IVDR, and global market access."
        services={services}
      />
    </main>
  );
}
