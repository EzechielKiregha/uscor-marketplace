export const PRODUCT_CATEGORIES = [
    {
      label: "Meubles & Arts",
      value: "meubles_salon" as const,
      featured: [
        {
          name: "Sélection du Moment",
          href: "/products",
          imageSrc: "/nav/art/Vibrant Art Gallery.jpg"
        },
        {
          name: "Canapé Confort",
          href: "/products",
          imageSrc: "/nav/salon/Vintage yellow sofa.jpg"
        },
        {
          name: "Table Basse Élégante",
          href: "/products",
          imageSrc: "/nav/salon/table basse elegante.jpg"
        }
      ]
    },
    {
      label: "Meubles de Bureau",
      value: "meubles_bureau" as const,
      featured: [
        {
          name: "Nouveautés",
          href: "/products",
          imageSrc: "/nav/bureau/Elegant Office Chair.jpg"
        },
        {
          name: "Chaise Ergonomique",
          href: "/products",
          imageSrc: "/nav/bureau/office.jpeg"
        },
        {
          name: "Bureau Moderne",
          href: "/products",
          imageSrc: "/nav/bureau/Minimalist Office Space.jpg"
        }
      ]
    },
    // {
    //   label: "Meubles de Chambre",
    //   value: "meubles_chambre" as const,
    //   featured: [
    //     {
    //       name: "Populaires",
    //       href: "/products",
    //       imageSrc: "/nav/chambre/bed.jpg"
    //     },
    //     {
    //       name: "Lit Confortable",
    //       href: "/products",
    //       imageSrc: "/nav/chambre/lit.jpg"
    //     },
    //     {
    //       name: "Armoire Spacieuse",
    //       href: "/products",
    //       imageSrc: "/nav/chambre/armoire.jpg"
    //     }
    //   ]
    // },
    {
        label: "Icons",
        value: "icons"as const,
        featured: [
          {
            name: "Plus favories",
            href: "/products",
            imageSrc: "/nav/icons/picks.jpg"
          },
          {
            name: "Nouveautes",
            href: "/products",
            imageSrc: "/nav/icons/new.jpg"
          },
          {
            name: "Meubles Plus Vendue",
            href: "/products",
            imageSrc: "/nav/icons/bestsellers.jpg"
          }
        ]
      }
  ];
  