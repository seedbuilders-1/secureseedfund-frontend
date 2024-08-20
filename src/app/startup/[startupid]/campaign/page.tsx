// import Campaign from "@/app/startup/[startupid]/campaign/createcampaign/components/Campaign";

import Campaign from "./createcampaign/components/Campaign";

export default function CampaignDashboard({
  params,
}: {
  params: { startupid: string };
}) {
  return <Campaign params={params} />;
}
