module.exports = {

  experimental: {
    headers() {
      return [
        {
          source: "/.well-known/apple-app-site-association",
          headers: [{ key: "content-type", value: "application/json" }]
        }
      ];
    }
  },

  images: {
    domains: ['assets.vercel.com'],
    formats: ['image/avif', 'image/webp'],
    loader: 'akamai',
    path: '/',
  },
  
}
