"use client";
import { useState } from "react";
import OrganizationCard from "@/components/cards/OrganizaitonCard";
import { Button } from "@/components/ui/button";
import ChooseOrg from "@/components/cards/ChooseOrg";
import useUserAuth from "@/hooks/auth/useAuth";

const Home = () => {
  const { user } = useUserAuth();
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
      <div className="w-full grid grid-cols-3 gap-4 mt-8">
        <OrganizationCard />
        <OrganizationCard />
      </div>
      {openModal && <ChooseOrg />}
    </div>
  );
};

export default Home;
