import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { fetchAPI, getStrapiMedia } from "@/lib/strapi";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export async function generateMetadata() {
  const global = await fetchAPI("/global", {
    populate: {
      defaultSeo: {
        populate: "*",
      },
    },
  });

  const fallback = {
    title: "RegOps Global | Regulatory Excellence",
    description: "Navigate Regulatory Complexity with Confidence. 1500+ Submissions, 100% Approval Rate.",
  };

  if (!global?.data) return fallback;

  const { defaultSeo, siteName } = global.data;
  const url = defaultSeo?.shareImage?.url;

  return {
    title: {
      template: `%s | ${siteName}`,
      default: defaultSeo?.metaTitle || siteName,
    },
    description: defaultSeo?.metaDescription,
    openGraph: {
      images: url ? [getStrapiMedia(url)] : [],
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className} suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
