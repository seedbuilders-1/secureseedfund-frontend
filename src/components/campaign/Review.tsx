import React from 'react'
import { MilestoneValidation } from '@/lib/validations/campaign';
import { StartupInfoValidation } from '@/lib/validations/campaign';
import { thousandFormatter } from '@/lib/helpers';
import { Button } from '../ui/button';
import useCampaign from '@/hooks/campaign/useCampaign';
import useProfile from '@/hooks/profile/useProfile';
import SuccessComponent from './SuccessComponent';

interface Props {
    startupDetail: StartupInfoValidation;
    milestoneDetail: MilestoneValidation;
    coverPhoto: string;
    selectFundingCampaign: string
    businessPlanUrl: string;
    id: string
}
const Review = ({ startupDetail, id, milestoneDetail, coverPhoto, businessPlanUrl, selectFundingCampaign }: Props) => {
    const { createCampaign, isCreatingCampaign, isEditingCampaign, editCampaign, isCampaignCreated, CampaignEdited } = useCampaign()

    const { userProfile } = useProfile()

    const handleCreateCampaign = () => {
        const payload = {
            startupId: userProfile && userProfile.startup[0].id,
            title: milestoneDetail.title,
            description: milestoneDetail.description,
            fundingGoal: parseInt(milestoneDetail.fundinggoal),
            campaignType: selectFundingCampaign,
            coverPhotoUrl: coverPhoto,
            startDate: milestoneDetail.startdate,
            endDate: milestoneDetail.enddate,
            companyType: startupDetail.companyType,
            cofounders: parseInt(startupDetail.cofounders),
            teamMembers: parseInt(startupDetail.teamMembers),
            about: startupDetail.about,
            milestones: milestoneDetail.milestones.map(({ targetAmount, ...milestone }) => ({
                targetAmount: parseInt(targetAmount),
                ...milestone
            })),
            businessPlanUrl
        }
        if (id) {
            editCampaign(id, payload)
        } else {
            createCampaign(payload)
        }
    }
    return (
        <>
            <div className="w-full  space-y-6">
                <h2 className="text-[#0F172A] text-[24px] font-medium">Preview and Submit</h2>
                <h3 className="text-[#747474] text-[16px] mt-3">double check the information added before submitting</h3>

                <div>
                    <h2 className="text-[#6C8C3C] text-[24px] font-normal mt-8">Cover Photo</h2>
                    <div className='border border-[#6C8C3C30] rounded-lg bg-[#F9F9FA] px-4 py-4'>
                        <img
                            src={coverPhoto}
                            alt={"cover"}
                            width={325}
                            height={183}
                            className="rounded-tl-md rounded-tr-md"
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-[#6C8C3C] text-[24px] font-normal mt-8">Campaign Info</h2>
                    <div className='border border-[#6C8C3C30] rounded-lg bg-[#F9F9FA] px-4 py-4'>
                        <h2 className="text-[#0F172A] text-[18px] font-medium rounded-lg">{milestoneDetail.title}</h2>
                        <h3 className="text-[#747474] text-[16px] mt-3">{milestoneDetail.description}</h3>

                        <div className='flex items-center gap-4'>
                            <h2 className="text-[#0F172A] text-[16px] font-medium rounded-lg">Funding Type:</h2>
                            <div className="border border-[#EAB80A] rounded-3xl text-[rgb(234,184,10)] mt-2 text-center bg-[#FFFAE8] h-[27px]px-3 py-2 w-[82px] text-[12px]">
                                <div className="flex justify-center items-center">
                                    {selectFundingCampaign}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div>
                    <h2 className="text-[#6C8C3C] text-[24px] font-normal mt-8">Startup Information</h2>
                    <div className='border border-[#6C8C3C30]  rounded-lg bg-[#F9F9FA] px-4 py-4 flex justify-between '>
                        <div>
                            <span className='text-[#747474] '>Company Type</span>
                            <h2 className="text-[#0F172A] text-[16px] font-medium rounded-lg">{startupDetail.companyType}</h2>
                        </div>
                        <div>
                            <span className='text-[#747474] '>No of Cofounders</span>
                            <h2 className="text-[#0F172A] text-[16px] font-medium rounded-lg">{startupDetail.cofounders}</h2>
                        </div>
                        <div>
                            <span className='text-[#747474] '>No of Teams</span>
                            <h2 className="text-[#0F172A] text-[16px] font-medium rounded-lg">{startupDetail.teamMembers}</h2>
                        </div>
                    </div>
                </div>


                <div>
                    <h2 className="text-[#6C8C3C] text-[24px] font-normal mt-8">Funding Goal</h2>
                    <div className='border border-[#6C8C3C30]  rounded-lg bg-[#F9F9FA] px-4 py-4 flex justify-between '>
                        <div>
                            <span className='text-[#747474] '>Funding Goal</span>
                            <h2 className="text-[#0F172A] text-[16px] font-medium rounded-lg">{`${thousandFormatter(parseInt(milestoneDetail.fundinggoal))}`}</h2>
                        </div>
                        <div>
                            <span className='text-[#747474] '>Start Date</span>
                            <h2 className="text-[#0F172A] text-[16px] font-medium rounded-lg">{milestoneDetail.startdate}</h2>
                        </div>
                        <div>
                            <span className='text-[#747474] '>End Date</span>
                            <h2 className="text-[#0F172A] text-[16px] font-medium rounded-lg">{milestoneDetail.enddate}</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-[#6C8C3C] text-[24px] font-normal mt-8">Milestones</h2>

                    <div className='border border-[#6C8C3C30]  rounded-lg bg-[#F9F9FA] px-4 py-4   '>
                        {milestoneDetail.milestones.map((milestone, index) => (
                            <div className='mt-4' key={index}>
                                <span className='text-[#0F172A] font-bold text-[24px]'> Milestone {index + 1}:</span>
                                <h2 className="text-[#0F172A] text-[16px] font-normal">{milestone.milestoneTitle}</h2>
                                <p className="text-[#0F172A] text-[16px] font-normal">{milestone.milestoneDescription}</p>
                                <p className="text-[#0F172A] text-[16px] font-normal">{`${thousandFormatter(parseInt(milestone.targetAmount))}`}</p>
                                <p className="text-[#0F172A] text-[16px] font-normal">{milestone.date}</p>
                            </div>
                        ))}
                    </div>

                </div>
                <Button onClick={() => handleCreateCampaign()} loading={isCreatingCampaign || isEditingCampaign} className="w-[30%] rounded-3xl bg-[#241A3F] mt-[4rem]">
                    Complete
                </Button>
            </div>
            {isCampaignCreated || CampaignEdited
                &&
                <SuccessComponent />}
        </>
    )
}

export default Review