// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['seedbuilders-uploader.s3.us-east-1.amazonaws.com'],
  },
    webpack: (config) => {
    config.resolve.alias.canvas = false;
    
    return config;
  }
}

module.exports = nextConfig;
