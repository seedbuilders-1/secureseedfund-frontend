"use client";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { CiCircleCheck } from "react-icons/ci";
import { IoIosRadioButtonOff } from "react-icons/io";
import EntityInformationForm from "../forms/auth/EntityInformationForm";
import { EntityInformationValidation } from "@/lib/validations/onboarding";
import UploadLogo from "../cards/UploadLogo";
import { FileWithPath } from "react-dropzone";
interface Props {
  selectedValue: string;
  setSelectedValue: (x: string) => void;
  handleChange: (x: string) => void;
  handleEntityInformation: (x: EntityInformationValidation) => void;
  logoFile: FileWithPath | null;
  entityInformationValues:EntityInformationValidation;
  handleLogoUpload: (x: FileWithPath[]) => void;
}

const EntityInformation = ({
  selectedValue,
  handleChange,
  handleEntityInformation,
  entityInformationValues,
  logoFile,
  handleLogoUpload,
}: Props) => {
  return (
    <div>
      <h2 className="text-primaryMain mt-4">Need help?</h2>

      <div className="flex flex-col justify-center">
        <h2 className="font-medium text-[24px] text-slate-900 mt-6">
          Entity Information
        </h2>
        <p className="text-slate-900 mt-3">How will you be investing?</p>

        <div className="mt-4">
          <RadioGroup.Root value={selectedValue} onValueChange={handleChange}>
            <div className="flex gap-4">
              <RadioGroup.Item value="individual">
                <div
                  className={`w-[260px] relative px-8 py-4 border-[2px] rounded-md cursor-pointer ${
                    selectedValue === "individual"
                      ? "border-primaryMain"
                      : "border-slate-300"
                  }`}
                >
                  <div className="absolute left-[21px] bottom-[28px]">
                    {selectedValue === "individual" ? (
                      <CiCircleCheck
                        className="text-primaryMain "
                        style={{ fontWeight: "bold" }}
                      />
                    ) : (
                      <IoIosRadioButtonOff className="text-slate-300" />
                    )}
                  </div>
                  <div>
                    <h2 className="text-slate-700 text-[16px] ">
                      Individual investor
                    </h2>
                    <p className="text-slate-500  text-[14px]">
                      I will be investing as myself
                    </p>
                  </div>
                </div>
              </RadioGroup.Item>
              <RadioGroup.Item value="institutional">
                <div
                  className={`w-[260px] relative px-8 py-4 border-[2px] rounded-md cursor-pointer ${
                    selectedValue === "institutional"
                      ? "border-primaryMain"
                      : "border-slate-300"
                  }`}
                >
                  <div className="absolute left-[21px] bottom-[28px]">
                    {selectedValue === "institutional" ? (
                      <CiCircleCheck
                        className="text-primaryMain "
                        style={{ fontWeight: "bold" }}
                      />
                    ) : (
                      <IoIosRadioButtonOff className="text-slate-300" />
                    )}
                  </div>
                  <div>
                    <h2 className="text-slate-700 text-[16px] ">
                      Institutional Investor
                    </h2>
                    <p className="text-slate-500  text-[14px]">
                      I control an investment firm
                    </p>
                  </div>
                </div>
              </RadioGroup.Item>
            </div>
          </RadioGroup.Root>
        </div>
        <div>
          {selectedValue === "institutional" && (
            <UploadLogo file={logoFile} handleLogoUpload={handleLogoUpload} />
          )}
        </div>
        <div className="mt-8">
          <EntityInformationForm
            selectedOption={selectedValue}
            handleEntityInformation={handleEntityInformation}
            logo={logoFile}
            entityInformationValues={entityInformationValues}
          />
        </div>
      </div>
    </div>
  );
};

export default EntityInformation;
