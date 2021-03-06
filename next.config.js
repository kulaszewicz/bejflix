const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  experimental: { jsconfigPaths: true },
  publicRuntimeConfig: {
    API_ENDPOINT: process.env.API_ENDPOINT,
    MOVIES_API_ENDPOINT:
      process.env.MOVIES_API_ENDPOINT ||
      'https://us-central1-bejflix.cloudfunctions.net/api',
  },
};

module.exports = withPlugins([optimizedImages], nextConfig);
