"use client";

import PageHeader from "@/components/layout/PageHeader";
import Services from "@/components/sections/Services"; // Reuse services component for now, or build specific
import styles from "@/app/page.module.css"; // Reuse main layout
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return await getPageMetadata("medical-devices");
}

export default function MedicalDevicesPage() {
  return (
    <main className={styles.main}>
      <PageHeader 
        title="Medical Devices" 
        subtitle="Accelerating market access for innovative medical technologies."
      />
      
      {/* For demonstration, we reuse the Services section or add specific content */}
      <Services />
    </main>
  );
}
