import DashboardOverview from "@/components/sections/startup/DashboardOverview";

const Dashboard = ({ params }: { params: { startupid: string } }) => {
  return (
    <div className="w-full mt-8">
      <DashboardOverview params={params} />
    </div>
  );
};

export default Dashboard;
