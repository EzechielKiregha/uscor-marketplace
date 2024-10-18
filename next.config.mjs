/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [
            {
                hostname : 'localhost',
                pathname : '**',
                port : '3000',
                protocol : 'http'
            }
        ]
    },
    env: {
        STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
        // Ajoutez d'autres variables d'environnement si nécessaire
      },
};

export default nextConfig;
