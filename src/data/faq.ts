import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
  {
    question: `Qu'est-ce que ${siteDetails.siteName} ?`,
    answer: `${siteDetails.siteName} est un révélateur de réalité économique pour solopreneurs et SaaS founders. Il décompose chaque euro facturé pour montrer exactement ce qui reste dans votre poche.`,
  },
  {
    question: "Comment ça fonctionne ?",
    answer:
      "Entrez le prix de votre abonnement, vos coûts, charges et impôts. Nous calculons automatiquement le revenu réel par client.",
  },
  {
    question: "Est-ce que c'est gratuit ?",
    answer:
      "Oui, la version de base est gratuite pour découvrir votre réalité économique. Des options premium pour analyses avancées.",
  },
  {
    question: "Pour qui est-ce fait ?",
    answer:
      "Pour tous les créateurs de SaaS, solopreneurs et auto-entrepreneurs qui veulent des prix rentables et une visibilité claire sur leurs revenus.",
  },
  {
    question: "Pourquoi pas un simple tableur ?",
    answer:
      "Parce que les tableurs demandent des connaissances fiscales et comptables. Nous simplifions tout pour que vous ayez la réponse en quelques clics.",
  },
];
