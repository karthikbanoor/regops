import { fetchAPI, getStrapiMedia } from "@/lib/strapi";

export async function getPageMetadata(slug) {
    const page = await fetchAPI("/pages", {
        filters: {
            slug: slug,
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
