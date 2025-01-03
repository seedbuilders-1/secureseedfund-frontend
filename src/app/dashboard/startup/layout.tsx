import { ReactNode } from "react";
import RestrictedRoute from "@/route-helpers/RestrictedRoute";

const StartupDashboard = ({ children }: { children: ReactNode }) => {
  return (
    <RestrictedRoute allowedUserTypes={["startup"]}>{children}</RestrictedRoute>
  );
};

export default StartupDashboard;
