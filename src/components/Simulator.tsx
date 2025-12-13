"use client";

import { useState } from "react";

const Simulator: React.FC = () => {
  const [customPrice, setCustomPrice] = useState<number>(19);
  const [customFees, setCustomFees] = useState<number>(3.2);
  const [customTaxes, setCustomTaxes] = useState<number>(6.8);
  const [customOther, setCustomOther] = useState<number>(0);

  const customNet = customPrice - customFees - customTaxes - customOther;

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
            <label className="block text-sm font-medium mb-1">
              Prix d&apos;abonnement (€)
            </label>
            <input
              type="number"
              value={customPrice}
              onChange={(e) => setCustomPrice(Number(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Frais de paiement (€)
            </label>
            <input
              type="number"
              value={customFees}
              onChange={(e) => setCustomFees(Number(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Taxes & impôts (€)
            </label>
            <input
              type="number"
              value={customTaxes}
              onChange={(e) => setCustomTaxes(Number(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Autres coûts (€)
            </label>
            <input
              type="number"
              value={customOther}
              onChange={(e) => setCustomOther(Number(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div className="mt-4 p-4 bg-white rounded border">
          <p className="text-lg">
            Revenu net estimé :{" "}
            <span className="font-bold text-green-600">
              {customNet.toFixed(2)}€
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Simulator;
