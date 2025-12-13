import { FiDollarSign, FiTrendingDown, FiUserX } from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
  {
    title: "Le problème des petits business",
    description:
      "Tu lances ton service à 19€ par mois pour attirer les clients. Mais entre les charges sociales, la compta et les impôts, tu réalises trop tard que tes prix ne couvrent pas tes coûts réels.",
    imageSrc: "/images/hero-chart.webp", // Image temporaire - remplacer par problem.jpg quand disponible
    bullets: [
      {
        title: "Charges invisibles",
        description:
          "URSSAF, comptable, assurances... Ces frais grignotent tes marges sans que tu t'en rendes compte.",
        icon: <FiDollarSign size={26} className="text-red-500" />,
      },
      {
        title: "Prix mal calculés",
        description:
          "Tu fixes tes tarifs au feeling, sans savoir si tu peux vivre de ton activité.",
        icon: <FiUserX size={26} className="text-red-500" />,
      },
      {
        title: "Business instable",
        description:
          "Sans visibilité sur tes vrais revenus, tu avances dans le brouillard et risques de tout perdre.",
        icon: <FiTrendingDown size={26} className="text-red-500" />,
      },
    ],
  },
];
