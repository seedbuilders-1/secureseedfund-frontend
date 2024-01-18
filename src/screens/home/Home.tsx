import OrganizationCard from "@/components/cards/OrganizaitonCard";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col space-y-2">
          <h1 className="h2">Welcome back, Victor</h1>
          <p className="p-ui">
            Choose your organization and access the dashboard
          </p>
        </div>

        <Button>Create new organization</Button>
      </div>
      <div className="w-full grid grid-cols-3 gap-4 mt-8">
        <OrganizationCard />
        <OrganizationCard />
      </div>
    </div>
  );
};

export default Home;
