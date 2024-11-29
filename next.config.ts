/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
        unoptimized: true // Nécessaire pour les exportations statiques si vous utilisez next/image.
    }
};

module.exports = nextConfig;
