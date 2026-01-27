
import PageHeader from "@/components/layout/PageHeader";
import styles from "@/app/contact/contact.module.css"; // Reuse basic layout styles
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return await getPageMetadata("blog");
}

export default function BlogPage() {
  return (
    <main className={styles.main}>
      <PageHeader 
        title="Blog & Insights" 
        subtitle="Latest updates and regulatory insights."
      />
      <div className={styles.container}>
        <p>Coming Soon...</p>
      </div>
    </main>
  );
}
