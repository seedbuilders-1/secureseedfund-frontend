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
import { BiImageAdd } from "react-icons/bi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../../../../components/ui/button";
import { FounderSchema, FounderValidation } from "@/lib/validations/account";
import { useEffect, useState } from "react";
import MobileStepper from "../../components/MobileStepper";
import { useToast } from "@/components/ui/use-toast";
import { FileWithPath } from "react-dropzone";
import UserEmptyState from "@/assets/iconspng/ImageEmptyState.svg";
import useProfile from "@/hooks/profile/useProfile";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useUserAuth from "@/hooks/auth/useAuth";
import useAccount from "../hooks/useAccount";

interface Props {
  setProfileImageFile: (x: FileWithPath | null) => void;
  profileImageFile: FileWithPath | null;
  handleNext: () => void;
}

const FounderInformation = ({
  handleNext,
  profileImageFile,
  setProfileImageFile,
}: Props) => {
  const form = useForm<FounderValidation>({
    resolver: zodResolver(FounderSchema),
  });

  const { toast } = useToast();
  const { userProfile } = useProfile();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { user } = useUserAuth();
  const creatorId = user?.userId as string;
  const {
    createFounderInformation,
    isCreatingFounderInformation,
    isSuccess,
    accountInformation,
  } = useAccount(creatorId);

  useEffect(() => {
    if (isSuccess) {
      handleNext();
    }
  }, [isSuccess]);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();

    const file = e.target.files?.[0];
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
    setProfileImageFile(file);
    const reader = new FileReader();
    reader.onload = (event) => {
      setSelectedImage(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = (values: FounderValidation) => {
    if (!profileImageFile && !selectedImage) {
      toast({
        variant: "destructive",
        title: "Please upload a profile image.",
      });
      return;
    }

    const createFounderDto = new FormData();
    createFounderDto.append("founderTitle", values.title);
    createFounderDto.append("founderGender", values.gender);
    createFounderDto.append(
      "founderFirstname",
      userProfile?.firstName as string
    );
    createFounderDto.append("founderLastname", userProfile?.lastName as string);
    createFounderDto.append("founderEmail", userProfile?.email as string);
    createFounderDto.append("founderEducationHistory", values.education);
    createFounderDto.append("founderPhone", values.phonenumber);
    createFounderDto.append("founderLinkdln", values.linkedinprofile);
    if (profileImageFile) {
      createFounderDto.append("profileImage", profileImageFile as File);
    }
    createFounderDto.append("founderExperience", values.experience);
    const payload = {
      creatorId,
      createFounderDto,
    };
    // @ts-ignore
    createFounderInformation(payload);
  };
  useEffect(() => {
    form.setValue("firstname", userProfile?.firstName || "");
    form.setValue("lastname", userProfile?.lastName || "");
    form.setValue("email", userProfile?.email || "");
    if (accountInformation?.founder?.id) {
      setSelectedImage(accountInformation.founder.profileImage || "");
      form.setValue("title", accountInformation.founder.founderTitle || "");
      form.setValue("gender", accountInformation.founder.founderGender || "");
      form.setValue(
        "education",
        accountInformation.founder.founderEducationHistory || ""
      );
      form.setValue(
        "phonenumber",
        accountInformation.founder.founderPhone || ""
      );
      form.setValue(
        "linkedinprofile",
        accountInformation.founder.founderLinkdln || ""
      );
      form.setValue(
        "experience",
        accountInformation.founder.founderExperience || ""
      );
    }
  }, [accountInformation, userProfile]);

  return (
    <div className="w-full px-6">
      <h2 className="text-[#0F172A] text-[24px] font-medium text-center ">
        Founder Information
      </h2>
      <MobileStepper numberOfSteps={6} currentStep={1} />

      <div className="mt-8">
        <div className=" block lg:flex justify-center  items-center">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="md:w-[700px] sm:w-[500px]"
            >
              <div className="flex justify-center relative w-fit items-center flex-col mx-auto ">
                <label htmlFor="profileImage" style={{ cursor: "pointer" }}>
                  <Image
                    src={selectedImage || UserEmptyState}
                    alt="logo"
                    width={110}
                    height={100}
                    objectFit="contain"
                    className="object-cover w-full h-[150px]  mx-auto rounded-md"
                  />
                  <input
                    type="file"
                    id="profileImage"
                    accept="image/*"
                    onChange={(e) => handleFile(e)}
                    className="hidden"
                  />
                  <div className="absolute bottom-0 right-[-10px] bg-white p-[0.5rem] rounded-full cursor-pointer">
                    <BiImageAdd className="text-xl text-gray-700" />
                  </div>
                </label>
              </div>
              <div className="border border-solid border-[#D8D8E2] mt-4 rounded-2xl p-5 lg:p-12">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>Title</FormLabel>
                      <Select
                        onValueChange={(value) => field.onChange(value)}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full capitalize">
                          <SelectValue placeholder="Select a title" />
                        </SelectTrigger>
                        <SelectContent className="w-full bg-white">
                          <SelectGroup>
                            {["Mr", "Miss", "Mrs", "Others"].map(
                              (opt: string, idx: number) => (
                                <SelectItem
                                  key={idx}
                                  className="capitalize"
                                  value={opt}
                                >
                                  {opt}
                                </SelectItem>
                              )
                            )}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
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
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px] disabled:opacity-100"
                          placeholder="Provide your First Name"
                          {...field}
                          disabled
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
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px] disabled:opacity-100"
                          placeholder="Provide your Last Name"
                          {...field}
                          disabled
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
                          className="py-[1.5rem] md:py-[1.9rem] rounded-[10px] md:rounded-[48px] disabled:opacity-100"
                          placeholder="Eg; keneeneh@gmail.com"
                          {...field}
                          disabled
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gender</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={(value) => field.onChange(value)}
                          value={field.value}
                        >
                          <SelectTrigger className="w-full capitalize">
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent className="w-full bg-white">
                            <SelectGroup>
                              {["male", "female"].map(
                                (opt: string, idx: number) => (
                                  <SelectItem
                                    key={idx}
                                    className="capitalize"
                                    value={opt}
                                  >
                                    {opt}
                                  </SelectItem>
                                )
                              )}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
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
                          className="py-[1.1rem] md:py-[1.2rem] rounded-[10px] md:rounded-[48px] h-[80px]"
                          placeholder="What is your qualification?"
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
                  name="experience"
                  render={({ field }) => (
                    <FormItem className="col-span-2 py-2">
                      <FormLabel>Experience</FormLabel>
                      <FormControl>
                        <Input
                          className="py-[1.1rem] md:py-[1.3rem] rounded-[10px] md:rounded-[48px] h-[80px]"
                          placeholder="Provide an experience"
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
                  loading={isCreatingFounderInformation}
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
