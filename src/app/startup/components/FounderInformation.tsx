"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../../components/ui/button";
import { FounderSchema, FounderValidation } from "@/lib/validations/account";
import { ChangeEvent, useState } from "react";
import MobileStepper from "./MobileStepper";

interface Props {
  founderDetails: FounderValidation;
  handleFounder: (v: FounderValidation) => void;
  handleNext: () => void;
}

const FounderInformation = ({
  founderDetails,
  handleNext,
  handleFounder,
}: Props) => {
  const form = useForm<FounderValidation>({
    resolver: zodResolver(FounderSchema),
    defaultValues: founderDetails,
  });

  const onSubmit = (values: FounderValidation) => {
    handleFounder(values);
    handleNext();
  };

  const [imagePreview, setImagePreview] = useState<string>(
    "/assets/icons/account.svg"
  );
  const [imageName, setImageName] = useState<string>("Upload Image");

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file) {
      setImageName(file.name);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full px-6">
      <h2 className="text-[#0F172A] text-[24px] font-medium text-center lg:text-left">
        Founder Information
      </h2>
      <MobileStepper numberOfSteps={6} currentStep={5} />

      <div className="mt-8">
        <div className="mb-3 flex gap-12 flex-wrap justify-center mt-6">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="md:w-[700px] sm:w-[500px]"
            >
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem className="col-span-2 flex flex-col items-center justify-center">
                    <FormControl>
                      <div
                        className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] bg-[#D9D9D9] rounded-md"
                        style={{
                          backgroundImage: `url(${imagePreview})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "50%",
                          backgroundPosition: "center",
                        }}
                        onChange={handleImageChange}
                      >
                        <Input
                          type="file"
                          {...field}
                          value={field.value}
                          className="opacity-0 w-full h-full cursor-pointer rounded-full"
                        />
                      </div>
                    </FormControl>
                    <FormLabel className="p-5 text-center">
                      {imageName}
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="border border-solid border-[#D8D8E2] rounded-2xl p-5 lg:p-12">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>Title</FormLabel>
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
                  name="firstname"
                  render={({ field }) => (
                    <FormItem className="col-span-2 py-2">
                      <FormLabel>First Name</FormLabel>
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
                  name="lastname"
                  render={({ field }) => (
                    <FormItem className="col-span-2 py-2">
                      <FormLabel>Last Name</FormLabel>
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
                  name="email"
                  render={({ field }) => (
                    <FormItem className="col-span-2 py-2">
                      <FormLabel>Email Address</FormLabel>
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
                  name="education"
                  render={({ field }) => (
                    <FormItem className="col-span-2 py-2">
                      <FormLabel>Education</FormLabel>
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
                    name="linkedinprofile"
                    render={({ field }) => (
                      <FormItem className="py-2 w-full lg:w-[50%]">
                        <FormLabel>LikendIn Profile</FormLabel>
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
                    name="phonenumber"
                    render={({ field }) => (
                      <FormItem className="space-x-0 py-2 w-full lg:w-[50%]">
                        <FormLabel>Phone Number</FormLabel>
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
                  name="expereince"
                  render={({ field }) => (
                    <FormItem className="col-span-2 py-2">
                      <FormLabel>Expereince</FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.9rem] rounded-[48px] h-[150px]"
                          placeholder="Provide an expereince"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full md:w-[30%] rounded-3xl bg-[#241A3F] mt-8"
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

export default FounderInformation;
