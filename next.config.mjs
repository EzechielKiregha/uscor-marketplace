/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        domains:[
            'localhost',
            // 'uscor-marketplace.up.railway.app',
            'uscor-market.giize.com'
        ]
    },
    env: {
        STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
      },
};

export default nextConfig;
