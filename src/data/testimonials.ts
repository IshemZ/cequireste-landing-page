import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
  {
    name: "Marie Dupont",
    role: "Fondatrice SaaS",
    message: `Enfin je sais combien vaut vraiment un client. Plus de décisions sur des chiffres trompeurs. ${siteDetails.siteName} m'a permis de fixer des prix rentables dès le départ.`,
    avatar: "/images/testimonial-1.webp",
  },
  {
    name: "Pierre Martin",
    role: "Solopreneur",
    message: `J'arrête de piloter mon business à l'aveugle. Savoir le vrai revenu par abonnement change tout pour prendre les bonnes décisions.`,
    avatar: "/images/testimonial-2.webp",
  },
  {
    name: "Sophie Leroy",
    role: "CEO Startup",
    message: `${siteDetails.siteName} révèle la réalité économique. Entre coûts et impôts, je découvre enfin combien reste dans ma poche. Indispensable !`,
    avatar: "/images/testimonial-3.webp",
  },
];
