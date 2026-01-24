import qs from "qs";

export function getStrapiURL(path = "") {
    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://127.0.0.1:1337"
        }${path}`;
}

export function getStrapiMedia(url) {
    if (url == null) {
        return null;
    }
    if (url.startsWith("data:")) {
        return url;
    }
    if (url.startsWith("http") || url.startsWith("//")) {
        return url;
    }
    return `${getStrapiURL()}${url}`;
}

export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
    try {
        const mergedOptions = {
            headers: {
                "Content-Type": "application/json",
            },
            ...options,
        };

        const queryString = qs.stringify(urlParamsObject);
        const requestUrl = `${getStrapiURL(
            `/api${path}${queryString ? `?${queryString}` : ""}`
        )}`;

        // Trigger expected error if fetch fails (e.g., connection refused)
        try {
            const response = await fetch(requestUrl, mergedOptions);

            if (!response.ok) {
                if (response.status === 404) {
                    console.warn(`Strapi content not found at ${requestUrl} (404). Using fallback.`);
                    return null;
                }
                console.error(`Error fetching from Strapi at ${requestUrl}: ${response.status} ${response.statusText}`);
                return null;
            }

            const data = await response.json();
            return data;
        } catch (fetchError) {
            console.warn(`Strapi not reachable at ${requestUrl}. Using fallback content.`);
            return null;
        }

    } catch (error) {
        console.error("Fetch API Error:", error);
        return null;
    }
}
