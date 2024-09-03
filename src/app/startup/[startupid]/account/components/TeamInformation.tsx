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
import { Button } from "../../../../../components/ui/button";
import {
  TeamInformationSchema,
  TeamInformationValidation,
} from "@/lib/validations/account";
import MobileStepper from "../../../components/MobileStepper";

interface Props {
  teamDetails: TeamInformationValidation;
  handleTeamInformation: (v: TeamInformationValidation) => void;
  handleNext: () => void;
  handleBack: () => void;
}

const TeamInformation = ({
  teamDetails,
  handleNext,
  handleTeamInformation,
  handleBack,
}: Props) => {
  const form = useForm<TeamInformationValidation>({
    resolver: zodResolver(TeamInformationSchema),
    defaultValues: teamDetails,
  });

  const onSubmit = (values: TeamInformationValidation) => {
    handleTeamInformation(values);
    handleNext();
  };
  return (
    <div className="w-full px-6">
      <h2 className="text-[#0F172A] text-[24px] font-medium text-center lg:text-left">
        Team Information
      </h2>

      <MobileStepper numberOfSteps={6} currentStep={5} />

      <div className="mt-8 border border-solid border-[#D8D8E2] rounded-2xl grid place-content-center p-5 lg:p-12">
        <div className="mb-3 flex gap-12 flex-wrap justify-center mt-6">
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
                        className="py-[1.9rem] rounded-[48px]"
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
                        className="py-[1.9rem] rounded-[48px]"
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
                        className="py-[1.9rem] rounded-[48px]"
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
                        className="py-[1.9rem] rounded-[48px]"
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
                        className="py-[1.9rem] rounded-[48px] h-[150px]"
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
                          className="py-[1.9rem] rounded-[48px] w-[100%]"
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
                          className="py-[1.9rem] rounded-[48px] w-[100%]"
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
                    <FormLabel>Expereince of Co-founder</FormLabel>
                    <FormControl>
                      <Input
                        type="textarea"
                        className="py-[1.9rem] rounded-[48px] h-[150px]"
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
                    <FormLabel>Number of Team Memebrs</FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.9rem] rounded-[48px]"
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
                        className="py-[1.9rem] rounded-[48px] h-[150px]"
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
                        className="py-[1.9rem] rounded-[48px]"
                        placeholder="Provide an expereince"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                className="w-full md:w-[30%] rounded-3xl bg-light mt-8
                mr-2"
                onClick={handleBack}
              >
                Back
              </Button>

              <Button
                type="submit"
                className="w-full lg:w-[30%] rounded-3xl bg-[#241A3F] mt-8"
              >
                Proceed
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default TeamInformation;
