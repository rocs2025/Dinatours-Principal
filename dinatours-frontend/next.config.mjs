// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/principal',
          permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;
  