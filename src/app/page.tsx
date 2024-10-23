"use client"
import { Icons } from '@/components/Icons';
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ProductReel from '@/components/ProductReel';
import { Button, buttonVariants } from '@/components/ui/button';
import { useNavigation } from '@/hooks/useNavigation';
import { ArrowDownToLine, DollarSign, Paintbrush } from 'lucide-react';

const perks = [
  {
    name: 'Livraison Rapide',
    Icon: ArrowDownToLine,
    description: 'Recevez vos meubles rapidement et efficacement, directement à votre porte.'
  },
  {
    name: 'Prix Abordables',
    Icon: DollarSign,
    description: 'Nous offrons des meubles de haute qualité à des prix qui respectent votre budget.'
  },
  {
    name: 'Conceptions Personnalisées',
    Icon: Paintbrush,
    description: 'Personnalisez votre espace avec nos meubles sur mesure, adaptés à votre style.'
  }
];


export default function Home() {
  const nav = useNavigation()

  return (
    <>
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
        Transformez Votre Espace avec des{' '}
          <span className="text-blue-800">Meubles Intemporels</span>  
        </h1>
        <Icons.logo className='h-24 w-auto '/>
        <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
          Découvrez des meubles élégants et accessibles qui allient style et confort.
          Uscor-Marketplace vous aide à créer des espaces uniques et inspirants.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button onClick={() => nav('/products')} className={buttonVariants({
            className : 'bg-blue-800 hover:bg-blue-100 hover:text-black text-white'
          })}>Explorer</Button>
          <Button onClick={() => nav('/products?category=meubles_salon&sort=desc')} variant='ghost'>Nos Produits de haute Qualite &rarr;</Button>
        </div>
      </div>
      <ProductReel
        query={{
          sort:"desc",
          limit: 4
        }}
        href='/products'
        title='Tout neuf'
      />

    </MaxWidthWrapper>

    <section className="border-t border-gray-200 bg-gray-50">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {perks.map((perk) => (
            <div
              key={perk.name}
              className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="flex md:flex-shrink-0 justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon className='h-1/3 w-1/3'/>}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="font-medium text-base text-gray-900">{perk.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
    </>
  );
}
