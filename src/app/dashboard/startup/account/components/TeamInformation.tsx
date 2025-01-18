"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../../components/ui/form";
import { Input } from "../../../../../components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Button } from "../../../../../components/ui/button";
import {
  TeamInformationSchema,
  TeamInformationValidation,
} from "@/lib/validations/account";
import UploadComponent from "./UploadComponent";
import MobileStepper from "../../components/MobileStepper";
import { useToast } from "@/components/ui/use-toast";
import useAccount from "../hooks/useAccount";
import { FileWithPath } from "react-dropzone";
import useUserAuth from "@/hooks/auth/useAuth";

interface Props {
  handleNext: () => void;
  handleBack: () => void;
}

const TeamInformation = ({ handleNext, handleBack }: Props) => {
  const form = useForm<TeamInformationValidation>({
    resolver: zodResolver(TeamInformationSchema),
  });
  const { user } = useUserAuth();
  const creatorId = user?.userId as string;
  const { toast } = useToast();
  const [cofounderImage, setCofounderImage] = useState<FileWithPath | null>(
    null
  );
  const [previewProfile, setPreview] = useState("");
  const {
    createTeamInformation,
    createdTeamInfo,
    isCreatingTeamInformation,
    accountInformation,
  } = useAccount(creatorId);
  const onSubmit = (values: TeamInformationValidation) => {
    const createTeamDto = new FormData();
    createTeamDto.append("team_cofounder_title", values.titleofcofounder);
    createTeamDto.append(
      "team_cofounder_firstName",
      values.firstnameofcofounder
    );
    createTeamDto.append("team_cofounder_lastName", values.lastnameofcofounder);
    createTeamDto.append("team_cofounder_email", values.emailofcofounder);
    createTeamDto.append(
      "team_cofounder_education",
      values.educationofcofounder
    );
    createTeamDto.append("team_cofounder_phone", values.phonenumberofcofounder);
    createTeamDto.append(
      "team_cofounder_experience",
      values.experienceofcofounder
    );
    createTeamDto.append("team_details", values.teammembers);
    createTeamDto.append("team_primary_base", values.executiveprimarilybased);
    createTeamDto.append(
      "team_cofounder_linkdln",
      values.linkedinprofileofcofounder
    );
    createTeamDto.append("team_members", values.numberofteammembers);
    if (cofounderImage) {
      createTeamDto.append(
        "team_cofounder_profileImage",
        cofounderImage as File
      );
    }
    const payload = {
      creatorId,
      createTeamDto: createTeamDto as any,
    };
    createTeamInformation(payload);
  };

  useEffect(() => {
    if (createdTeamInfo) {
      handleNext();
    }
  }, [createdTeamInfo]);
  useEffect(() => {
    if (accountInformation?.teamInformation?.id) {
      form.setValue(
        "titleofcofounder",
        accountInformation.teamInformation.team_cofounder_title || ""
      );
      form.setValue(
        "firstnameofcofounder",
        accountInformation.teamInformation.team_cofounder_firstName || ""
      );
      form.setValue(
        "lastnameofcofounder",
        accountInformation.teamInformation.team_cofounder_lastName || ""
      );
      form.setValue(
        "emailofcofounder",
        accountInformation.teamInformation.team_cofounder_email || ""
      );
      form.setValue(
        "educationofcofounder",
        accountInformation.teamInformation.team_cofounder_education || ""
      );
      form.setValue(
        "phonenumberofcofounder",
        accountInformation.teamInformation.team_cofounder_phone || ""
      );
      form.setValue(
        "experienceofcofounder",
        accountInformation.teamInformation.team_cofounder_experience || ""
      );
      form.setValue(
        "teammembers",
        accountInformation.teamInformation.team_details || ""
      );
      form.setValue(
        "executiveprimarilybased",
        accountInformation.teamInformation.team_primary_base || ""
      );
      form.setValue(
        "numberofteammembers",
        accountInformation.teamInformation.team_members.toString() || ""
      );
      form.setValue(
        "linkedinprofileofcofounder",
        accountInformation.teamInformation.team_cofounder_linkdln || ""
      );
      setPreview(
        accountInformation.teamInformation.team_cofounder_profileImage
      );
    }
  }, [accountInformation]);
  const handleUpload = async (acceptedFiles: FileWithPath[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    const validImageTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (!validImageTypes.includes(file.type)) {
      toast({
        variant: "destructive",
        title: "Invalid file type. Please upload an image (jpg, jpeg, png).",
      });
      return;
    }

    const uploadLimit = file.size / 1024 / 1024 < 2.5;
    if (!uploadLimit) {
      toast({
        variant: "destructive",
        title: "File must not exceed 2.5MB",
      });
      return;
    }
    setCofounderImage(file);
  };

  return (
    <div className="w-full px-6">
      <h2 className="text-[#0F172A] text-[24px] font-medium text-center lg:text-left">
        Team Information
      </h2>

      <MobileStepper numberOfSteps={7} currentStep={3} />

      <div className="mt-8 border border-solid border-[#D8D8E2] rounded-2xl p-5 lg:p-12">
        <div className="mb-3">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="md:w-[700px] sm:w-[500px]"
            >
              <FormField
                control={form.control}
                name="titleofcofounder"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-">
                    <FormLabel>Title of Co-founder:</FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                        placeholder="Provide a title"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="firstnameofcofounder"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>First Name of Co-founder:</FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                        placeholder="Provide your First Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastnameofcofounder"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>Last Name of Co-founder:</FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                        placeholder="Provide your Last Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="emailofcofounder"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>Email Address of Co-founder</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                        placeholder="Eg; keneeneh@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="educationofcofounder"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>Education of Co-founder:</FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px] h-[80px]"
                        placeholder="Talk about your education history"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col md:flex-row md:justify-between w-full md:space-x-12">
                <FormField
                  control={form.control}
                  name="linkedinprofileofcofounder"
                  render={({ field }) => (
                    <FormItem className="py-2 w-full lg:w-[50%]">
                      <FormLabel>LikendIn Profile of Co-founder</FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px] w-[100%]"
                          placeholder="Provide a LinkedIn Profile"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phonenumberofcofounder"
                  render={({ field }) => (
                    <FormItem className="py-2 w-full lg:w-[50%]">
                      <FormLabel>Phone Number of Co-founder</FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px] w-[100%]"
                          type="number"
                          placeholder="Enter a Phone Number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="experienceofcofounder"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>Experience of Co-founder</FormLabel>
                    <FormControl>
                      <Input
                        type="textarea"
                        className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px] h-[80px]"
                        placeholder="Provide an expereince"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="numberofteammembers"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>Number of Team Memebers</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                        placeholder="Number of Team Memebrs"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="teammembers"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>
                      Names, roles and titles of team members:
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px] h-[80px]"
                        placeholder="Provide an expereince"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="executiveprimarilybased"
                render={({ field }) => (
                  <FormItem className="col-span-2 py-2">
                    <FormLabel>
                      Where is the executive team primarily based
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px]"
                        placeholder="Provide an expereince"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormLabel>Upload Cofounder Profile Image</FormLabel>

              <UploadComponent
                file={cofounderImage}
                handleUpload={handleUpload}
                fileType="financialStatment"
                previewUrl={previewProfile}
                maxSize={5 * 1024 * 1024}
                label="Upload Co Founder Image (image only)"
              />
              <br />
              <br className="lg:hidden" />
              <div className="flex">
                <Button
                  className="w-full md:w-[30%] rounded-3xl mt-8
                mr-2"
                  variant="outline"
                  onClick={handleBack}
                >
                  Back
                </Button>

                <Button
                  type="submit"
                  loading={isCreatingTeamInformation}
                  className="w-full lg:w-[30%] rounded-3xl bg-[#241A3F] mt-8"
                >
                  Proceed
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default TeamInformation;
