import DashboardOverview from "@/components/sections/startup/DashboardOverview";
import { Select, SelectTrigger } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const Dashboard = () => {
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-white text-[1.5rem] leading-[2rem] font-[400]">
          Dashboard
        </h1>

        <Select>
          <SelectTrigger className="w-fit">
            <div className="flex items-center space-x-2 mr-2">
              <Image
                src="/assets/icons/beats_world.svg"
                alt="Beats World Logo"
                width={30}
                height={30}
              />
              <span>Beats World</span>
            </div>
          </SelectTrigger>
        </Select>
      </div>
      <Tabs defaultValue="overview" className="mt-2">
        <TabsList className="bg-transparent space-x-4 mb-4">
          <TabsTrigger value="overview" variant="line">
            Overview
          </TabsTrigger>
          <TabsTrigger value="profile" variant="line">
            Profile
          </TabsTrigger>
          <TabsTrigger value="company-settings" variant="line">
            Company Settings
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <DashboardOverview />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
