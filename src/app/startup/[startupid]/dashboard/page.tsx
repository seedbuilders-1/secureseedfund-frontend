import Dashboard from "@/screens/startup/Dashboard";

export default function StartupDashboard({
  params,
}: {
  params: { startupid: string };
}) {
  return <Dashboard params={params} />;
}
