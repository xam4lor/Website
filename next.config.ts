import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
    assetPrefix: "/",
    serverExternalPackages: ["@react-pdf/renderer"],
    outputFileTracingIncludes: {
        "/cv.pdf": ["./scripts/cv/fonts/**", "./public/imgs/profil.jpg"],
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
                port: '',
                pathname: '/**',
            },
        ],
    }
};

export default nextConfig;
