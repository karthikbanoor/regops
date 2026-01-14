import { fetchAPI, getStrapiMedia } from "@/lib/strapi";
import AboutClient from "./AboutClient";

export async function generateMetadata() {
  const page = await fetchAPI("/pages", {
    filters: {
      slug: "about",
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

export default function About() {
  return <AboutClient />;
}
