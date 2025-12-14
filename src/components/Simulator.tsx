"use client";

import { useState, useEffect } from "react";

const Simulator: React.FC = () => {
  const [customPrice, setCustomPrice] = useState<number>(19);
  const [customFees, setCustomFees] = useState<number>(3.2);
  const [customTaxes, setCustomTaxes] = useState<number>(6.8);
  const [customOther, setCustomOther] = useState<number>(0);
  const [isCalculating, setIsCalculating] = useState(false);

  const customNet = customPrice - customFees - customTaxes - customOther;

  useEffect(() => {
    setIsCalculating(true);
    const timer = setTimeout(() => setIsCalculating(false), 300);
    return () => clearTimeout(timer);
  });

  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-center mb-6">
        Calcule tes vrais revenus
      </h3>
      <p className="text-center mb-8 text-gray-600">
        Rentre tes chiffres et découvre ce qui reste vraiment dans ta poche.
      </p>

      {/* Calculateur personnalisé */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Calculateur Personnalisé</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="price-input"
              className="block text-sm font-medium mb-1"
            >
              Prix d&apos;abonnement (€)
            </label>
            <input
              id="price-input"
              type="number"
              value={customPrice}
              onChange={(e) =>
                setCustomPrice(Math.max(0, Number(e.target.value)))
              }
              className="w-full p-2 border rounded focus:ring-2 focus:ring-primary focus:border-transparent"
              min="0"
              step="0.01"
              aria-describedby="price-help"
              placeholder="Ex: 19.00"
            />
            <p id="price-help" className="text-xs text-gray-500 mt-1">
              Le prix que tu annonces à tes clients
            </p>
          </div>
          <div>
            <label
              htmlFor="fees-input"
              className="block text-sm font-medium mb-1"
            >
              Frais de paiement (€)
            </label>
            <input
              id="fees-input"
              type="number"
              value={customFees}
              onChange={(e) =>
                setCustomFees(Math.max(0, Number(e.target.value)))
              }
              className="w-full p-2 border rounded focus:ring-2 focus:ring-primary focus:border-transparent"
              min="0"
              step="0.01"
              aria-describedby="fees-help"
              placeholder="Ex: 3.20"
            />
            <p id="fees-help" className="text-xs text-gray-500 mt-1">
              Frais Stripe, PayPal, etc.
            </p>
          </div>
          <div>
            <label
              htmlFor="taxes-input"
              className="block text-sm font-medium mb-1"
            >
              Taxes & impôts (€)
            </label>
            <input
              id="taxes-input"
              type="number"
              value={customTaxes}
              onChange={(e) =>
                setCustomTaxes(Math.max(0, Number(e.target.value)))
              }
              className="w-full p-2 border rounded focus:ring-2 focus:ring-primary focus:border-transparent"
              min="0"
              step="0.01"
              aria-describedby="taxes-help"
              placeholder="Ex: 6.80"
            />
            <p id="taxes-help" className="text-xs text-gray-500 mt-1">
              TVA, impôts sur le revenu
            </p>
          </div>
          <div>
            <label
              htmlFor="other-input"
              className="block text-sm font-medium mb-1"
            >
              Autres coûts (€)
            </label>
            <input
              id="other-input"
              type="number"
              value={customOther}
              onChange={(e) =>
                setCustomOther(Math.max(0, Number(e.target.value)))
              }
              className="w-full p-2 border rounded focus:ring-2 focus:ring-primary focus:border-transparent"
              min="0"
              step="0.01"
              aria-describedby="other-help"
              placeholder="Ex: 2.00"
            />
            <p id="other-help" className="text-xs text-gray-500 mt-1">
              Compta, assurances, outils
            </p>
          </div>
        </div>
        <div className="mt-4 p-4 bg-white rounded border shadow-sm transition-all duration-300 hover:shadow-md">
          <p className="text-lg">
            Revenu net estimé :{" "}
            {isCalculating ? (
              <span className="font-bold text-gray-500 animate-pulse">
                Calcul en cours...
              </span>
            ) : (
              <span
                className={`font-bold transition-colors duration-300 ${
                  customNet >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {customNet.toFixed(2)}€
              </span>
            )}
          </p>
          {!isCalculating && customNet < 0 && (
            <p className="text-sm text-red-600 mt-1 animate-pulse">
              ⚠️ Attention : tes prix ne couvrent pas tes coûts !
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Simulator;
