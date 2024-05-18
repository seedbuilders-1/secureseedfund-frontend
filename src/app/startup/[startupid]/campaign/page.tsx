import Campaign from "@/screens/campaign/Campaign";

export default function CampaignDashboard({
  params,
}: {
  params: { startupid: string };
}) {
  return <Campaign params={params} />;
}
