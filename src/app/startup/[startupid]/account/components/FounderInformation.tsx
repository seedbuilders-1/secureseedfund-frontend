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
import { FounderSchema, FounderValidation } from "@/lib/validations/account";
import { useEffect, useState } from "react";
import MobileStepper from "../../../components/MobileStepper";
import UploadProfileImage from "./UploadProfileImage";
import { useToast } from "@/components/ui/use-toast";
import { useUploadfileMutation } from "@/services/fileupload";
import { FileWithPath } from "react-dropzone";

interface Props {
  founderDetails: FounderValidation;
  handleFounder: (v: FounderValidation) => void;
  handleNext: () => void;
  handleBack: () => void;
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

  const { toast } = useToast();
  const [fileUpload, { error: uploadError }] = useUploadfileMutation();

  const [profileImageUrl, setProfileImageUrl] = useState<string>("");
  const [profileImageFile, setProfileImageFile] = useState<FileWithPath | null>(
    null
  );

  console.log(profileImageFile);

  const onSubmit = (values: FounderValidation) => {
    if (!profileImageUrl) {
      return toast({
        variant: "destructive",
        title: "Double check.",
        description: "Some file uploads are missing",
      });
    }
    handleFounder(values);
    handleNext();
  };

  useEffect(() => {
    if (uploadError) {
      toast({
        variant: "destructive",
        title: `${"unable to upload file please try again"}`,
      });
      setProfileImageFile(null);
    }
  }, [uploadError]);
  const handleUpload = async (
    acceptedFiles: FileWithPath[],
    fileType: string
  ) => {
    const uploadedFile = acceptedFiles[0];
    if (fileType === "profileImage") {
      setProfileImageFile(uploadedFile);
    }

    const formData = new FormData();
    formData.append("file", uploadedFile);
    const res = await fileUpload(formData).unwrap();

    if (fileType === "profileImage") {
      setProfileImageUrl(res);
      form.setValue("image", res); // Set form value to include the image URL
    }
  };

  return (
    <div className="w-full px-6">
      <h2 className="text-[#0F172A] text-[24px] font-medium text-center lg:text-left">
        Founder Information
      </h2>
      <MobileStepper numberOfSteps={6} currentStep={1} />

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
                      <Input
                        {...field}
                        value={profileImageUrl}
                        onChange={(e) => field.onChange(e.target.value)}
                        className="hidden"
                      />
                    </FormControl>

                    <UploadProfileImage
                      handleUpload={(files) =>
                        handleUpload(files, "profileImage")
                      }
                    />

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
                  name="firstname"
                  render={({ field }) => (
                    <FormItem className="col-span-2 py-2">
                      <FormLabel>First Name</FormLabel>
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
                  name="lastname"
                  render={({ field }) => (
                    <FormItem className="col-span-2 py-2">
                      <FormLabel>Last Name</FormLabel>
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
                  name="email"
                  render={({ field }) => (
                    <FormItem className="col-span-2 py-2">
                      <FormLabel>Email Address</FormLabel>
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
                  name="education"
                  render={({ field }) => (
                    <FormItem className="col-span-2 py-2">
                      <FormLabel>Education</FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px] h-[150px]"
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
                    name="phonenumber"
                    render={({ field }) => (
                      <FormItem className="space-x-0 py-2 w-full lg:w-[50%]">
                        <FormLabel>Phone Number</FormLabel>
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
                  name="expereince"
                  render={({ field }) => (
                    <FormItem className="col-span-2 py-2">
                      <FormLabel>Expereince</FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px] h-[150px]"
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
