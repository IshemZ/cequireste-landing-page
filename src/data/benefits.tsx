import { FiDollarSign, FiTrendingDown, FiUserX } from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
  {
    title: "Le problème invisible",
    description:
      "Tu vends ton SaaS 19€ par mois. Mais le prix affiché n'est jamais la réalité. Entre les coûts, les charges et les impôts, tu découvres trop tard combien vaut vraiment un client.",
    bullets: [
      {
        title: "Charges cachées",
        description: "Tu ne sais pas combien part en frais fixes et variables.",
        icon: <FiDollarSign size={26} />,
      },
      {
        title: "Coût client inconnu",
        description:
          "Le vrai coût d'acquisition et de rétention d'un client reste un mystère.",
        icon: <FiUserX size={26} />,
      },
      {
        title: "Revenus illusoires",
        description:
          "Le chiffre affiché te rassure, mais la réalité te surprend toujours.",
        icon: <FiTrendingDown size={26} />,
      },
    ],
    imageSrc: "/images/mockup-1.webp",
  },
];
