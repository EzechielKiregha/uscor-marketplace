/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        domains:[
            'localhost',
            'uscor-marketplace.up.railway.app'
        ]
    },
    env: {
        STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
      },
};

export default nextConfig;
