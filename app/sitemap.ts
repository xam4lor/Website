import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Define the base URL of your website
    const url = 'https://mdherbecourt.dev';

    // Static roots of the sitemap statically defined
    const sitemap = [
        {
            url: url,
            priority: 1.0,
        }
    ];

    // Return the sitemap
    return sitemap;
}
