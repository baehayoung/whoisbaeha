const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'dist'
};

module.exports = nextConfig
