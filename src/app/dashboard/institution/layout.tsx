import { ReactNode } from "react";
import RestrictedRoute from "@/route-helpers/RestrictedRoute";

const InvestorDashboard = ({ children }: { children: ReactNode }) => {
  return (
    <RestrictedRoute allowedUserTypes={["institution"]}>
      {children}
    </RestrictedRoute>
  );
};

export default InvestorDashboard;
