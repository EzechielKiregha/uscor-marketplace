import Stripe from 'stripe'
import dotenv from 'dotenv'
import path from 'path';


dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('Missing STRIPE_SECRET_KEY');
}

export const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY as string ?? '',
  {
    apiVersion:"2024-09-30.acacia",
    typescript: true,
  }
)