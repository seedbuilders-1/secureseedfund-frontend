"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import * as RadioGroup from "@radix-ui/react-radio-group";
import useProfile from "@/hooks/profile/useProfile";
import useOnboarding from "@/hooks/onboarding/useOnboarding";

interface Option {
  id: string;
  label: string;
  defaultSelected?: boolean;
}

interface Question {
  id: string;
  title: string;
  options: Option[];
}

const InvestmentQuestioniare = () => {
  const ListOfQuestioniare: Question[] = [
    {
      id: "1",
      title: "What’s your investment experience?",
      options: [
        { id: "1", label: "None" },
        { id: "2", label: "Limited", defaultSelected: true },
        { id: "3", label: "Good" },
        { id: "4", label: "Experience" },
      ],
    },
    {
      id: "2",
      title: "How long do you plan to invest your money?",
      options: [
        { id: "1", label: "Less than 4 years" },
        { id: "2", label: "4 - 7 years", defaultSelected: true },
        { id: "3", label: "7+ years" },
      ],
    },
    {
      id: "3",
      title: "What’s your goal?",
      options: [
        { id: "1", label: "Growth", defaultSelected: true },
        { id: "2", label: "Speculation" },
        { id: "3", label: "Income" },
        { id: "4", label: "Capital Preservation" },
        { id: "5", label: "Other" },
      ],
    },
    {
      id: "4",
      title: "Preferred investment Type",
      options: [
        { id: "1", label: "Debit Financing" },
        { id: "2", label: "Equity", defaultSelected: true },
        { id: "3", label: "Grant" },
        { id: "4", label: "Partnership" },
      ],
    },
    {
      id: "5",
      title: "Sectors of interest(select all that apply)",
      options: [
        { id: "1", label: "Agriculture", defaultSelected: true },
        { id: "2", label: "Construction" },
        { id: "3", label: "Cryptocurrency" },
        { id: "4", label: "E-commerce" },
        { id: "5", label: "Fintech" },
        { id: "6", label: "Health" },
        { id: "7", label: "Others" },
      ],
    },
    {
      id: "6",
      title: "How important is liquidity of interest?",
      options: [
        { id: "1", label: "Very important", defaultSelected: true },
        { id: "2", label: "Somewhat important" },
        { id: "3", label: "Not important" },
      ],
    },
  ];

  const [questionaire, setQuestioniare] = useState<{ [key: string]: string }>(
    {}
  );
  const [checkboxState, setCheckboxState] = useState<{
    [key: string]: boolean;
  }>({});
  useEffect(() => {
    const defaultQuestionaire: { [key: string]: string } = {};
    const defaultCheckboxState: { [key: string]: boolean } = {};
    ListOfQuestioniare.forEach((question) => {
      const defaultOption = question.options.find(
        (option) => option.defaultSelected
      );
      if (defaultOption) {
        defaultQuestionaire[question.id] = defaultOption.label;
        if (question.id === "5") {
          question.options.forEach((option) => {
            defaultCheckboxState[option.label] = !!option.defaultSelected;
          });
        }
      }
    });
    setQuestioniare(defaultQuestionaire);
    setCheckboxState(defaultCheckboxState);
  }, []);

  const handleChange = (questionId: string, value: string) => {
    setQuestioniare((prevQuestioniare) => ({
      ...prevQuestioniare,
      [questionId]: prevQuestioniare[questionId] === value ? "" : value,
    }));
  };
  const handleCheckboxChange = (questionId: string, optionLabel: string) => {
    setCheckboxState((prevState) => ({
      ...prevState,
      [optionLabel]: !prevState[optionLabel],
    }));
  };

  const {
    handleNext,
    AddInvestorQuestioniare,
    isLoadingQuestioniare,
    hasAddedQuestioniare,
  } = useOnboarding();
  const selectedSectors = Object.keys(checkboxState).filter(
    (label) => checkboxState[label]
  );

  const { userProfile } = useProfile();

  const onAddInvestorQuestioniare = () => {
    AddInvestorQuestioniare({
      investorId: userProfile?.investor?.id || "",
      payload: {
        investmentExperience: questionaire[1],
        investmentDuration: questionaire[2],
        investmentGoal: questionaire[3],
        investmentType: questionaire[4],
        sectorsOfInterest: selectedSectors,
        liquidityImportance: questionaire[6],
      },
    });
  };
  useEffect(() => {
    if (hasAddedQuestioniare) {
      return handleNext();
    }
  }, [hasAddedQuestioniare]);

  return (
    <>
      <div className="w-full">
        <h2 className="text-primaryMain mt-4">Need help?</h2>

        <div className="flex flex-col justify-center  ml-5">
          <div>
            <h2 className="font-medium text-[24px] text-slate-900 mt-6">
              Investment Questionaire
            </h2>
            <div>
              <div className="w-full">
                {ListOfQuestioniare.map((question) => (
                  <>
                    <p className="text-slate-700 text-[15px] mt-7">
                      {question.title}
                    </p>
                    <div className="flex flex-wrap gap-4 mt-1 w-full">
                      {question.id === "5"
                        ? question.options.map((option) => (
                            <>
                              <div
                                className={`border rounded-2xl py-1 px-3 cursor-pointer ${
                                  checkboxState[option.label]
                                    ? "border-primaryMain bg-emerald-300"
                                    : "border-slate-400"
                                }`}
                                onClick={() =>
                                  handleCheckboxChange(
                                    question.id,
                                    option.label
                                  )
                                }
                              >
                                <p
                                  className={`text-[14px] ${
                                    checkboxState[option.label]
                                      ? "text-emerald-950"
                                      : "text-slate-500"
                                  }`}
                                >
                                  {option.label}
                                </p>
                              </div>
                            </>
                          ))
                        : question.options.map((option) => (
                            <>
                              <RadioGroup.Root
                                key={option.id}
                                value={questionaire[question.id]}
                                onValueChange={(value) =>
                                  handleChange(question.id, value)
                                }
                              >
                                <RadioGroup.Item value={option.label}>
                                  <div
                                    className={`border rounded-2xl py-1 px-3 ${
                                      questionaire[question.id] === option.label
                                        ? "border-primaryMain bg-emerald-300"
                                        : "border-slate-400"
                                    }`}
                                  >
                                    <p
                                      className={`text-[14px] ${
                                        questionaire[question.id] ===
                                        option.label
                                          ? "text-emerald-950"
                                          : "text-slate-500"
                                      }`}
                                    >
                                      {option.label}
                                    </p>
                                  </div>
                                </RadioGroup.Item>
                              </RadioGroup.Root>
                            </>
                          ))}
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>

          <Button
            onClick={() => onAddInvestorQuestioniare()}
            loading={isLoadingQuestioniare}
            className="w-full rounded-md h-[40px] mt-8"
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default InvestmentQuestioniare;
