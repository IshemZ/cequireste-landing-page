import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
  {
    name: "Marie Dupont",
    role: "Créatrice de contenu freelance",
    message: `Enfin je comprends mes vrais revenus ! Avant, je fixais mes prix au hasard. Maintenant je sais exactement ce qui rentre dans ma poche après toutes les charges.`,
  },
  {
    name: "Pierre Martin",
    role: "Développeur indépendant",
    message: `Comme solopreneur, je travaillais dans le brouillard. ${siteDetails.siteName} m'a ouvert les yeux sur mes coûts réels et m'a permis de doubler mes tarifs en toute sérénité.`,
  },
  {
    name: "Sophie Leroy",
    role: "Coach business en ligne",
    message: `Pour mon petit business, chaque euro compte. ${siteDetails.siteName} m'a aidée à voir clair dans mes finances et à construire un modèle viable.`,
  },
];
