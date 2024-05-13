"use client"
import React, { useState, useEffect } from 'react'
import CampaignStepper from '@/components/cards/CampaignStepper'
import Milestone from '@/components/campaign/Milestone'
import StartCampaign from '@/components/campaign/StartCampaign'
import StartupInfo from '@/components/campaign/StartupInfo'
import UploadDocuments from '@/components/campaign/UploadDocuments'
import { MilestoneValidation } from '@/lib/validations/campaign'
import Review from '@/components/campaign/Review'
import { StartupInfoValidation } from '@/lib/validations/campaign'
import { useSearchParams } from 'next/navigation'
import useCampaign from '@/hooks/campaign/useCampaign'
import moment from "moment"


const Createcampaign = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectFundingCampaign, setSelectFundingCampaign] = useState<string>('')
  const [coverPhoto, setCoverPhoto] = useState<string>('')
  const [businessPlanUrl, setBuisnessPlanUrl] = useState<string>('')
  const [milestoneDetail, setMilestoneDetail] = useState<MilestoneValidation>({
    title: "",
    description: "",
    startdate: "",
    enddate: "",
    fundinggoal: "",
    milestones: [
      {
        date: "", milestoneDescription: "", milestoneTitle: "", targetAmount: ""
      }
    ]
  })
  const [startupDetail, setStartupDetail] = useState<StartupInfoValidation>({
    about: "",
    cofounders: "1",
    teamMembers: "",
    companyType: ""
  })

  const handleSelectFundingCampaign = (value: string) => {
    setSelectFundingCampaign(value)
  }
  const handleMilestone = (details: MilestoneValidation) => {
    setMilestoneDetail(details)
  }
  const handleStartupInfo = (details: StartupInfoValidation) => {
    setStartupDetail(details)
  }
  const handleNext = () => {
    setCurrentStep(currentStep + 1)
  }
  const searchParams = useSearchParams()
  const id = searchParams.get('id') ?? ''
  const { singleCampaign } = useCampaign(id)

  useEffect(() => {
    if (singleCampaign && id) {
      setSelectFundingCampaign(singleCampaign?.campaignType)
      setMilestoneDetail({
        title: singleCampaign?.title,
        description: singleCampaign?.description,
        startdate: moment(singleCampaign?.startDate).format("YYYY-MM-DD"),
        enddate: moment(singleCampaign?.endDate).format("YYYY-MM-DD"),
        fundinggoal: singleCampaign?.fundingGoal.toString(),
        milestones: singleCampaign?.milestones.map(({ targetAmount, date, ...milestone }) => ({
          targetAmount: targetAmount.toString(),
          date: moment(date).format("YYYY-MM-DD"),
          ...milestone
        })),
      })
      setStartupDetail({
        about: singleCampaign?.about,
        cofounders: singleCampaign?.cofounders.toString(),
        teamMembers: singleCampaign?.teamMmbers.toString(),
        companyType: singleCampaign?.companyType
      })
      setBuisnessPlanUrl(singleCampaign?.businessPlanUrl)
      setCoverPhoto(singleCampaign?.coverPhotoUrl)
    }
  }, [id, singleCampaign])


  return (

    <div className='w-full  h-full bg-white flex gap-[3rem]'>
      <CampaignStepper currentStep={currentStep} />
      <div className='w-[70%] max-w-[800px] py-[3rem]'>
        {currentStep === 1 &&
          <StartCampaign
            handleNext={handleNext}
            selectFundingCampaign={selectFundingCampaign}
            handleChange={handleSelectFundingCampaign}
          />}
        {currentStep === 2 &&
          <Milestone
            handleNext={handleNext}
            handleMilestone={handleMilestone}
            milestoneDetail={milestoneDetail}

          />}
        {currentStep === 3 &&
          <StartupInfo
            handleNext={handleNext}
            handleStartupInfo={handleStartupInfo}
            startupDetail={startupDetail}

          />}
        {currentStep === 4 &&
          <UploadDocuments
            businessPlanUrl={businessPlanUrl}
            coverPhoto={coverPhoto}
            setBuisnessPlanUrl={setBuisnessPlanUrl}
            setCoverPhoto={setCoverPhoto}
            handleNext={handleNext}

          />}
        {currentStep === 5 &&
          <Review
            startupDetail={startupDetail}
            milestoneDetail={milestoneDetail}
            coverPhoto={coverPhoto}
            businessPlanUrl={businessPlanUrl}
            id={id}
            selectFundingCampaign={selectFundingCampaign}
          />
        }
      </div>
    </div>
  )
}

export default Createcampaign