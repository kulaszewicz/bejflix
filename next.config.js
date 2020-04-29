const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  experimental: { jsconfigPaths: true },
  publicRuntimeConfig: {
    API_ENDPOINT: process.env.API_ENDPOINT,
  },
};

module.exports = withPlugins([optimizedImages], nextConfig);
