"use client";
import { useState } from "react";
import OrganizationCard from "@/components/cards/OrganizaitonCard";
import { Button } from "@/components/ui/button";
import ChooseOrg from "@/components/cards/ChooseOrg";
import useUserAuth from "@/hooks/auth/useAuth";
import useProfile from "@/hooks/profile/useProfile";

const Home = () => {
  const { user } = useUserAuth();
  const { userProfile } = useProfile();
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col space-y-2">
          <h1 className="h2">Welcome back, {user?.firstName}</h1>
          <p className="p-ui">
            Choose your organization and access the dashboard
          </p>
        </div>

        <Button onClick={() => setOpenModal(!openModal)}>
          Create new organization
        </Button>
      </div>
      {!userProfile?.investor && !userProfile?.startup ? (
        <h2 className="text-[1.2rem text-gray text-center max-w-[600px] mt-[8rem] mx-auto">
          You need to create an organization to access the dashboard. Please
          create an organization to proceed.
        </h2>
      ) : (
        <div className="w-full grid grid-cols-3 gap-4 mt-8">
          {userProfile?.investor && (
            <OrganizationCard
              name={
                userProfile?.investor?.companyName || userProfile?.firstName
              }
              type={"Investor"}
            />
          )}
          {userProfile?.startup?.map((startup) => (
            <OrganizationCard
              key={startup.id}
              id={startup.id}
              name={startup?.companyName}
              type={"Startup"}
            />
          ))}
        </div>
      )}

      {openModal && <ChooseOrg />}
    </div>
  );
};

export default Home;
