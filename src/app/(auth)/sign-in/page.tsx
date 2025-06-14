'use client'

import { Icons } from '@/components/Icons'
import {
  Button,
  buttonVariants,
} from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

import {
  AuthCredentialsValidator,
  TAuthCredentialsValidator,
} from '@/lib/validators/account-credentials-validator'
import { trpc } from '@/trpc/client'
import { toast } from 'sonner'
import { useRouter, useSearchParams } from 'next/navigation'
import { useNavigation } from '@/hooks/useNavigation'

const Page = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const isSeller = searchParams.get('as') === 'seller'
  const origin = searchParams.get('origin')
  const nav = useNavigation()

  const continueAsSeller = () => {
    router.push('?as=seller')
  }

  const continueAsBuyer = () => {
    router.replace('/sign-in', undefined)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  })

  const { mutate: signIn, isLoading } =
    trpc.auth.signIn.useMutation({
      onSuccess: async () => {
        toast.success('vous etes connecte avec succes!')
        

        if (origin) {
          router.push(`/${origin}`)
          router.refresh()
          return
        }

        if (isSeller) {
          router.push('/tableau-du-vendeur')
          return
        }

        router.push('/')
        router.refresh()
      },
      onError: (err) => {
        if (err.data?.code === 'UNAUTHORIZED') {
          toast.error("Nom d'utilisateur ou mot de passe erronee!")
        } else {
          console.error('Sign-in error:', err);
          toast.error('Une erreur est survenue. Veuillez réessayer plus tard.');
        }
      },
    })

  const onSubmit = ({
    email,
    password,
  }: TAuthCredentialsValidator) => {
    signIn({ email, password })
  }

  return (
    <>
      <div className='container relative flex flex-col items-center justify-center lg:px-0'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          <div className='flex flex-col items-center space-y-2 text-center'>
            <Icons.logo className='h-14 w-auto' />
            <h1 className='text-2xl font-semibold tracking-tight'>
              Connexion {isSeller ? 'Vendeur' : ''}{' '}
            </h1>

            <Link
              className={buttonVariants({
                variant: 'link',
                className: 'gap-1.5',
              })}
              onClick={() => nav()}
              href='/sign-up'>
              Je n&apos;ai pas de compte?
              <ArrowRight className='h-4 w-4' />
            </Link>
          </div>

          <div className='grid gap-6'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='grid gap-2'>
                <div className='grid gap-1 py-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    {...register('email')}
                    className={cn({
                      'focus-visible:ring-red-500':
                        errors.email,
                    })}
                    placeholder='you@example.com'
                  />
                  {errors?.email && (
                    <p className='text-sm text-red-500'>
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className='grid gap-1 py-2'>
                  <Label htmlFor='password'>Mot de passe</Label>
                  <Input
                    {...register('password')}
                    type='password'
                    className={cn({
                      'focus-visible:ring-red-500':
                        errors.password,
                    })}
                    placeholder='Password'
                  />
                  {errors?.password && (
                    <p className='text-sm text-red-500'>
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <Button disabled={isLoading} className={buttonVariants({
                    className : 'bg-blue-600 hover:bg-blue-100 text-gray-50 hover:text-black'
                  })}>
                  {isLoading && (
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                  )}
                  Connexion
                </Button>
              </div>
            </form>

            <div className='relative'>
              <div
                aria-hidden='true'
                className='absolute inset-0 flex items-center'>
                <span className='w-full border-t' />
              </div>
              <div className='relative flex justify-center text-xs uppercase'>
                <span className='bg-background px-2 text-muted-foreground'>
                  ou
                </span>
              </div>
            </div>

            {isSeller ? (
              <Button
                onClick={continueAsBuyer}
                variant='secondary'
                
                disabled={isLoading}>
                Continue etant qu&apos;acheteur
              </Button>
            ) : (
              <Button
                onClick={continueAsSeller}
                variant='secondary'
                disabled={isLoading}>
                Continue etant que vendeur
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
