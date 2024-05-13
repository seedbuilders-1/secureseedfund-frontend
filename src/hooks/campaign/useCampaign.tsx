import { useCreateCampaignMutation, useGetCampaignQuery, useEditCampaignMutation, useGetCampaignByIdQuery } from "@/services/campaign";
import { CreateCampaignRequestType } from "@/services/campaign/typings";
import { useToast } from "@/components/ui/use-toast";




const useCampaign = (id?: string) => {
    const [createCampaigns, { isLoading: isCreatingCampaign, isSuccess: isCampaignCreated }] =
        useCreateCampaignMutation();
    const [editCampaigns, { isLoading: isEditingCampaign, isSuccess: CampaignEdited }] = useEditCampaignMutation()
    const { data: campaigns, isLoading: loadingCampaign } = useGetCampaignQuery()
    const { data: singleCampaign } = useGetCampaignByIdQuery(id)

    const { toast } = useToast();
    const createCampaign = async (
        values: CreateCampaignRequestType
    ) => {

        try {
            await createCampaigns(values).unwrap();
            toast({
                variant: "default",
                title: `campaign created successfully`,
            });
        } catch (err: any) {
            console.log({ err });
            toast({
                variant: "destructive",
                title: `${err?.data?.message || "Uh oh! Something went wrong."}`,
            });
        }
    };
    const editCampaign = async (
        id:string,
        values: CreateCampaignRequestType
    ) => {

        try {
            await editCampaigns({ id, payload: values }).unwrap();
            toast({
                variant: "default",
                title: `campaign edited successfully`,
            });
        } catch (err: any) {
            console.log({ err });
            toast({
                variant: "destructive",
                title: `${err?.data?.message || "Uh oh! Something went wrong."}`,
            });
        }
    };

    return {
        createCampaign,
        isCreatingCampaign,
        loadingCampaign,
        campaigns,
        isCampaignCreated,
        singleCampaign,
        editCampaign,
        CampaignEdited,
        isEditingCampaign
    }

}
export default useCampaign