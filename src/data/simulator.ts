export interface ISimulatorScenario {
  name: string;
  description: string;
  price: number;
  paymentFees: number; // Frais de paiement (ex. Stripe)
  taxes: number; // TVA, impôts
  otherCosts: number; // Autres coûts
  netRevenue: number; // Calculé automatiquement
}

export const simulatorScenarios: ISimulatorScenario[] = [
  {
    name: "Abonnement Standard 19€",
    description: "Scénario classique pour un SaaS à 19€/mois.",
    price: 19,
    paymentFees: 3.2,
    taxes: 6.8,
    otherCosts: 0,
    netRevenue: 9, // 19 - 3.2 - 6.8
  },
  {
    name: "Abonnement Premium 49€",
    description: "Pour un service haut de gamme avec plus de fonctionnalités.",
    price: 49,
    paymentFees: 8.33,
    taxes: 17.5,
    otherCosts: 5, // Coûts supplémentaires (hébergement, etc.)
    netRevenue: 17.17, // 49 - 8.33 - 17.5 - 5
  },
  {
    name: "Abonnement Basique 9€",
    description: "Offre d'entrée pour attirer les clients.",
    price: 9,
    paymentFees: 1.53,
    taxes: 3.24,
    otherCosts: 0,
    netRevenue: 4.23, // 9 - 1.53 - 3.24
  },
];
