import React from "react";

// Define types for the features and plans
export type Feature = {
  name: string;
};

export type Plan = {
  name: string;
  features: boolean[];
};

type PricingTableProps = {
  features: Feature[];
  plans: Plan[];
};

const PricingTable: React.FC<PricingTableProps> = ({ features, plans }) => {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="w-full overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="text-left p-4 border-b-2">Features</th>
              {plans.map((plan, index) => (
                <th key={index} className="p-4 text-center border-b-2">
                  {plan.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, featureIndex) => (
              <tr key={featureIndex}>
                <td className="p-4 border-b">{feature.name}</td>
                {plans.map((plan, planIndex) => (
                  <td key={planIndex} className="p-4 text-center border-b">
                    {plan.features[featureIndex] ? "✔️" : "❌"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingTable;
