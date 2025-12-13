import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
  {
    title: "100%",
    icon: <BsBarChartFill size={34} className="text-blue-500" />,
    description: "Transparence sur chaque euro facturé. Plus de surprises.",
  },
  {
    title: "5 min",
    icon: <BsFillStarFill size={34} className="text-yellow-500" />,
    description: "Pour découvrir le vrai revenu de votre abonnement.",
  },
  {
    title: "0€",
    icon: <PiGlobeFill size={34} className="text-green-600" />,
    description: "Pour commencer. Version gratuite pour révéler votre réalité.",
  },
];
