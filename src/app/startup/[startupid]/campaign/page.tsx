import Campaign from "../../components/Campaign";

export default function CampaignDashboard({
  params,
}: {
  params: { startupid: string };
}) {
  return <Campaign params={params} />;
}
