import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
  {
    question: `Qu'est-ce que ${siteDetails.siteName} ?`,
    answer: `${siteDetails.siteName} est l'outil indispensable pour les petits entrepreneurs qui veulent enfin comprendre leurs vrais revenus. Il révèle ce qui reste vraiment dans ta poche après tous les frais.`,
  },
  {
    question: "Comment ça fonctionne ?",
    answer:
      "Rentre le prix de ton service, ajoute tes charges (URSSAF, compta, etc.) et découvre instantanément ton revenu réel. Simple comme un tableur, mais précis comme un expert-comptable.",
  },
  {
    question: "Est-ce que c'est gratuit ?",
    answer:
      "Oui ! La version gratuite te permet de faire tous tes calculs et de comprendre tes coûts. Parfait pour les petits business qui démarrent.",
  },
  {
    question: "Pour qui est-ce fait ?",
    answer:
      "Pour toi si tu es freelance, solopreneur, créateur de contenu, coach ou tout petit business qui vend des services. Si tu factures des abonnements ou des prestations, c'est pour toi.",
  },
  {
    question: "Pourquoi pas un simple tableur ?",
    answer:
      "Les tableurs demandent de connaître la compta. Nous, on simplifie tout : tu rentres tes chiffres, on te donne la vérité. Pas besoin d'être expert !",
  },
];
