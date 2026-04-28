import type { MetadataRoute } from 'next'

const url = 'https://mdherbecourt.dev';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: url,                        priority: 1.0, changeFrequency: 'monthly' },
        { url: `${url}/publications`,      priority: 0.8, changeFrequency: 'monthly' },
        { url: `${url}/projects`,          priority: 0.8, changeFrequency: 'monthly' },
    ];
}
