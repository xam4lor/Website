import RSS from 'rss';

export async function GET() {
    // Define the base URL of your website
    const url = 'https://www.mdherbecourt.dev';

    // Create the RSS main feed
    const feed = new RSS({
        title: 'Maxime Dherbécourt',
        description: 'Personal website of Maxime Dherbécourt.',
        site_url: url,
        feed_url: `${url}/feed.xml`,
        copyright: `${new Date().getFullYear()} Maxime Dherbécourt`,
        language: 'en',
        pubDate: new Date(),
    });

    // Combine and sort by date (newest first)
    // const posts = [...articles, ...simulations].sort((a, b) => b.date.getTime() - a.date.getTime());
    // posts.forEach(post => feed.item(post));

    // Return the RSS feed as XML
    return new Response(feed.xml({ indent: true }), {
        headers: {
            'Content-Type': 'application/atom+xml; charset=utf-8',
        },
    });
}
