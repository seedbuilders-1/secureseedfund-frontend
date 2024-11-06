"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  MilestonSchema,
  MilestoneValidation,
} from "@/lib/validations/campaign";
import { FiPlus } from "react-icons/fi";
import { useForm, useFieldArray } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

interface Props {
  handleMilestone: (v: MilestoneValidation) => void;
  handleNext: () => void;
  handleBack: () => void;
  milestoneDetail: MilestoneValidation;
}
const Milestone = ({
  handleNext,
  handleMilestone,
  milestoneDetail,
  handleBack,
}: Props) => {
  const form = useForm<MilestoneValidation>({
    resolver: zodResolver(MilestonSchema),
    defaultValues: milestoneDetail,
  });
  const { fields, append, remove } = useFieldArray({
    name: "milestones",
    control: form.control,
  });

  const addMilestone = () => {
    append({
      date: "",
      milestoneDescription: "",
      milestoneTitle: "",
      targetAmount: "",
    });
  };
  const removeMileStone = (index: number) => {
    remove(index);
  };
  const onSubmit = (values: MilestoneValidation) => {
    handleMilestone(values);
    handleNext();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full  px-5 lg:px-0"
      >
        <div className="mt-8">
          <h2 className="text-[#0F172A] text-[24px] font-medium text-center lg:text-left">
            Set up Campaign Milstones
          </h2>
          <h3 className="text-[#747474] text-[16px] mt-3 text-center lg:text-left">
            Add compelling images or videos to showcase your startup and attract
            potential investors
          </h3>
          <div
            className="flex items-center mt-4"
            onClick={() => addMilestone()}
          >
            <FiPlus className="w-[15px] h-[15px] text-[#6C8C3C] font-bold" />
            <h2 className=" text-[#6C8C3C] font-bold cursor-pointer">
              Add New Milestone
            </h2>
          </div>
          {fields.map((milestone, index) => (
            <div
              key={index}
              className="mb-3 grid grid-cols-2 gap-x-2 gap-y-4 space-y-2 mt-6 border border-[#D8D8E2] rounded-[16px] py-[2rem] px-[1rem]"
            >
              <div className="col-span-2 flex justify-between items-center">
                <h2 className="text-[#DADADA] text-[26px] font- mt-4">
                  Milestone {index < 10 ? `0${index + 1}` : index}
                </h2>
                <Trash
                  className="w-[20px] h-[20px] text-[#6C8C3C] font-bold cursor-pointer"
                  onClick={() => removeMileStone(index)}
                />
              </div>

              <FormField
                control={form.control}
                name={`milestones.${index}.milestoneTitle`}
                render={({ field }) => (
                  <FormItem className="col-span-2 ">
                    <FormLabel>Milestone name</FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.9rem] rounded-[48px]"
                        placeholder="Provide a  milestone name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="col-span-2 flex flex-col">
                <FormField
                  control={form.control}
                  name={`milestones.${index}.milestoneDescription`}
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input
                          className="py-[3rem]"
                          placeholder="Provide a description"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end mt-[-1rem]">
                  <span className="text-[#94A3B8] text-[16px]">
                    40 Chars Max
                  </span>
                </div>
              </div>

              <FormField
                control={form.control}
                name={`milestones.${index}.targetAmount`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Target Amount</FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.9rem] rounded-[48px]"
                        placeholder="15,000"
                        {...field}
                        type="number"
                        min="0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`milestones.${index}.date`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                      <Input
                        className="py-[1.9rem] rounded-[48px] block"
                        type="date"
                        placeholder="DD-MM-YY"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-[2rem]">
          <Button variant="outline" className="w-[30%]" onClick={handleBack}>
            Back
          </Button>
          <Button type="submit" className="w-[30%] rounded-3xl bg-[#241A3F] ">
            Proceed
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default Milestone;
