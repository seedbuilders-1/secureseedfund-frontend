import {
  api,
  CampaignsControllerCreateApiArg,
  CampaignsControllerFindOneApiArg,
  CreateCampaignDto,
} from "@/generated/service/campaign";
import { useToast } from "@/components/ui/use-toast";
const useCampaign = (
  campaignId?: CampaignsControllerFindOneApiArg,
  userid?: string
) => {
  const { data: campaigns, isLoading: loadingCampaigns } =
    api.useCampaignsControllerFindAllQuery({
      page: 1,
      limit: 10,
      userId: userid as string,
      keyword: "",
      campaignId: "",
      campaignType: "",
    });

  const { data: singleCampaign, isLoading: loadingSingleCampaign } =
    api.useCampaignsControllerFindOneQuery(
      campaignId as CampaignsControllerFindOneApiArg
    );
  const [
    createCampaignStart,
    { isLoading: createCampaignLoading, isSuccess: createdCampaign },
  ] = api.useCampaignsControllerCreateMutation();

  const { toast } = useToast();

  const createCampaign = async (values: CampaignsControllerCreateApiArg) => {
    try {
      await createCampaignStart(values).unwrap();
      toast({
        className:
          "top-0 right-0 flex fixed text-white  bg-green-600 md:max-w-[420px] md:top-4 md:right-4",
        title: "Campaign created ",
        variant: "default",
      });
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: err?.data?.message || "Uh oh! Something went wrong.",
      });
    }
  };

  return {
    campaigns,
    loadingCampaigns,
    singleCampaign,
    loadingSingleCampaign,
    createCampaign,
    createCampaignLoading,
    createdCampaign,
  };
};

export default useCampaign;
