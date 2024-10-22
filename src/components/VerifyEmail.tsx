'use client'

import { trpc } from '@/trpc/client'
import { Loader2, XCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { useNavigation } from '@/hooks/useNavigation'

interface VerifyEmailProps {
  token: string
}

const VerifyEmail = ({ token }: VerifyEmailProps) => {
  const { data, isLoading, isError } =
    trpc.auth.verifyEmail.useQuery({
      token,
    })
  const nav = useNavigation()

  if (isError) {
    return (
      <div className='flex flex-col items-center gap-2'>
        <XCircle className='h-8 w-8 text-red-600' />
        <h3 className='font-semibold text-xl'>
          Il y&apos;a eu un problem
        </h3>
        <p className='text-muted-foreground text-sm'>
          Ce code n&apos;est pas valide, ou peut etre il a expire
          reessayer encore.
        </p>
      </div>
    )
  }

  if (data?.success) {
    return (
      <div className='flex h-full flex-col items-center justify-center'>
        <div className='relative mb-4 h-60 w-60 text-muted-foreground'>
          <Image
            src='/email-for-testing-test-email-accounts.svg'
            fill
            alt='the email was sent'
          />
        </div>

        <h3 className='font-semibold text-2xl'>
          Vamooos!!! Verification avec succes 
        </h3>
        <p className='text-muted-foreground text-center mt-1'>
          Merci de verifier votre email.
        </p>
        <Link
          onClick={() => nav()}
          className={buttonVariants({ className: 'mt-4' })}
          href='/sign-in'>
            Connexion
        </Link>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className='flex flex-col items-center gap-2'>
        <Loader2 className='animate-spin h-8 w-8 text-zinc-300' />
        <h3 className='font-semibold text-xl'>
          encours de verification...
        </h3>
        <p className='text-muted-foreground text-sm'>
          Ceci ne prendra qu&apos;un moment.
        </p>
      </div>
    )
  }
}

export default VerifyEmail
