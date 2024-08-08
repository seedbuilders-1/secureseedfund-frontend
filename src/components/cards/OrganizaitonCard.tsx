"use client";

import Image from "next/image";
import BorderCard from "./BorderCard";
import { Badge } from "../ui/badge";
import { useRouter } from "next/navigation";

interface Props {
  name?: string;
  type?: string;
  id?: string;
}

const OrganizationCard = ({ name, type, id }: Props) => {
  const router = useRouter();
  return (
    <BorderCard
      btnText="Go to dashboard"
      onBtnClick={() => {
        router.push(`/startup/${id}/dashboard`);
      }}
    >
      <div className="flex flex-col items-center justify-center space-y-2 pb-20 pt-4">
        <div className="w-[3rem] h-[3rem] rounded-full overflow-hidden relative">
          <Image
            src="/assets/icons/beats_world.svg"
            alt="Beats World Logo"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-slate-700 font-medium">{name}</h2>
          <span className="text-slate-500 text-[.75rem]">{type}</span>
        </div>

        <Badge className="bg-amber-200 text-amber-900">Pro plan</Badge>
      </div>
    </BorderCard>
  );
};

export default OrganizationCard;
