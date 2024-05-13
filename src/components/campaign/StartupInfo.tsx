"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { StartupInfoSchema, StartupInfoValidation } from "@/lib/validations/campaign";
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

interface Props {
  handleStartupInfo:(v:StartupInfoValidation) => void;
  handleNext: () => void;
  startupDetail:StartupInfoValidation
}
const StartupInfo = ({ handleNext, handleStartupInfo ,startupDetail}: Props) => {
  const form = useForm<StartupInfoValidation>({
    resolver: zodResolver(StartupInfoSchema),
    defaultValues: startupDetail
  });

  
  const onSubmit = (values: StartupInfoValidation) => {
     handleStartupInfo(values)
     handleNext()
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full  ">
        <h2 className="text-[#0F172A] text-[24px] font-medium">Tell Investors about your Startup</h2>
        <h3 className="text-[#747474] text-[16px] mt-3">Add compelling images or videos to showcase your startup and attract potential investors</h3>
     
      
            <div  className="mb-3 grid grid-cols-2 gap-x-2 gap-y-4 space-y-6 mt-6 border border-[#D8D8E2] rounded-[16px] py-[2rem] px-[1rem]"  >
            

              <FormField
                control={form.control}
                name="companyType"
                render={({ field }) => (
                  <FormItem  className="col-span-2" >
                    <FormLabel>Company Type</FormLabel>
                    <FormControl >
                      <Input className="py-[1.9rem] rounded-[48px]" placeholder="As written on your Registration Documents" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
                <FormField
                  control={form.control}
                  name="cofounders"
                  render={({ field }) => (
                    <FormItem  >
                      <FormLabel>Number Of Co-Founders</FormLabel>
                      <FormControl >
                        <Input className="py-[1.9rem]  rounded-[48px]"  {...field} type="number" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
         
              <FormField
                control={form.control}
                name="teamMembers"
                render={({ field }) => (
                  <FormItem  >
                    <FormLabel>Number Of Team Members</FormLabel>
                    <FormControl >
                      <Input className="py-[1.9rem] rounded-[48px]"{...field} type="number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

      <FormField
            control={form.control}
            name="about"
            render={({ field }) => (
              <FormItem className="col-span-2 rounded-[48px]"  >
                <FormLabel>Tell Us About You Briefly</FormLabel>
                <FormControl >
                  <Input className="py-[3rem]" placeholder="70 chars max" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />


            </div>
    
     
        <div className="">
          <Button type="submit" className="w-[30%] rounded-3xl bg-[#241A3F] mt-[4rem]">
            Proceed
          </Button>
        </div>

      </form>
    </Form>
  );
};

export default StartupInfo
