import styles from "./page.module.css";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import WhyUs from "@/components/sections/WhyUs";
import CTA from "@/components/sections/CTA";
import { fetchAPI, getStrapiMedia } from "@/lib/strapi";

export async function generateMetadata() {
  const page = await fetchAPI("/pages", {
    filters: {
      slug: "home",
    },
    populate: {
      seo: {
        populate: "*",
      },
    },
  });

  if (!page || !page.data || page.data.length === 0) return {};

  const { seo } = page.data[0];
  if (!seo) return {};

  const url = seo.shareImage?.url;

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    openGraph: {
      images: url ? [getStrapiMedia(url)] : [],
    },
  };
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Services />
      <Industries />
      <WhyUs />
      <CTA />
    </main>
  );
}
