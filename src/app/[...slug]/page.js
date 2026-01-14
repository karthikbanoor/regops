import { fetchAPI, getStrapiMedia } from "@/lib/strapi";
import BlockRenderer from "@/components/strapi/BlockRenderer";
import { notFound } from "next/navigation";

// Required for static export to know which pages to build
export async function generateStaticParams() {
    const pages = await fetchAPI("/pages", {
        fields: ["slug"],
        pagination: {
            pageSize: 100, // Use pageSize instead of limit
        },
        publicationState: 'live', // Explicitly request live content
    }, { cache: 'no-store' }); // Disable Next.js cache

    if (!pages || !pages.data) {
        return [];
    }

    return pages.data.map((page) => ({
        // Split the slug into an array for catch-all route
        slug: page.slug.split("/").filter(Boolean),
    })).filter(p => p.slug.length > 0 && p.slug[0] !== 'home' && p.slug[0] !== 'about');
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const pageSlug = slug.join("/");

    const page = await fetchAPI("/pages", {
        filters: {
            slug: pageSlug,
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

export default async function DynamicPage({ params }) {
    const { slug } = await params;
    const pageSlug = slug.join("/");

    const data = await fetchAPI("/pages", {
        filters: {
            slug: pageSlug,
        },
        populate: {
            blocks: {
                populate: "*",
            },
            seo: {
                populate: "*"
            }
        },
    });

    if (!data || !data.data || data.data.length === 0) {
        notFound();
    }

    const page = data.data[0];

    return (
        <main>
            {page.blocks.map((block, index) => (
                <BlockRenderer key={index} block={block} />
            ))}
        </main>
    );
}
