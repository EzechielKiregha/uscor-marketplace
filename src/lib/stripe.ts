import Stripe from 'stripe'
import dotenv from 'dotenv'
import path from 'path';


dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

export const stripe = new Stripe(
  // process.env.STRIPE_SECRET_KEY ?? 
  'sk_test_51PXD9yKDaCiPTckxe8CRKCZqI5zE557CB3oqLoayL7lmfrBEGf2f8j2Rk4c8aW9KwdX1WgHHCMEPiT2LmnZs01Ou00ZDrHwOwy' ,
  {
    apiVersion:"2024-09-30.acacia",
    typescript: true,
  }
)