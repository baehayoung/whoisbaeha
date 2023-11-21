const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: isProd ? "/whoisbaeha" : "",
    output: "export",
    images: { unoptimized: true }
};

module.exports = nextConfig
