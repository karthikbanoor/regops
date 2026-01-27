
import PageHeader from "@/components/layout/PageHeader";
import styles from "@/app/contact/contact.module.css"; 
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return await getPageMetadata("terms");
}

export default function TermsPage() {
  return (
    <main className={styles.main}>
      <PageHeader title="Terms of Service" />
      <div className={styles.container}>
        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px' }}>
            <h2>Terms of Service</h2>
            <p>Content to be added.</p>
        </div>
      </div>
    </main>
  );
}
