
import PageHeader from "@/components/layout/PageHeader";
import styles from "@/app/contact/contact.module.css"; 
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return await getPageMetadata("privacy");
}

export default function PrivacyPage() {
  return (
    <main className={styles.main}>
      <PageHeader title="Privacy Policy" />
      <div className={styles.container}>
        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px' }}>
            <h2>Privacy Policy</h2>
            <p>Content to be added.</p>
        </div>
      </div>
    </main>
  );
}
