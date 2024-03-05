"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  EntityInformationSchema,
  EntityInformationValidation,
} from "@/lib/validations/onboarding";
import { useForm } from "react-hook-form";
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
import useOnboarding from "@/hooks/onboarding/useOnboarding";

interface Props {
  selectedOption: string;
}

const EntityInformationForm = ({ selectedOption }: Props) => {
  const form = useForm<EntityInformationValidation>({
    resolver: zodResolver(EntityInformationSchema),
  });
  const { handleNext, steps } = useOnboarding();
  console.log(steps);
  const onSubmit = (values: EntityInformationValidation) => {
    // registerUser({
    //     email,
    //     firstName,
    //     lastName,
    //     password,
    //     role: "STARTUP",
    // });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="mb-3 grid grid-cols-2 gap-x-2 gap-y-4">
          {selectedOption === "institutional" ? (
            <FormField
              control={form.control}
              name="companyname"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel className="text-[15px]">Company name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter company name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ) : (
            <>
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[15px]">First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex. Jane" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex. Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
          <FormField
            control={form.control}
            name="dateofbirth"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date of Birth</FormLabel>
                <FormControl>
                  <Input placeholder="DD-MM-YY" type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phonenumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="(123) 123-1234" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input placeholder="Select country" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="Enter city" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="postalcode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Postal Code</FormLabel>
                <FormControl>
                  <Input placeholder="Enter postal code" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          onClick={() => handleNext()}
          className="w-full rounded-md h-[40px] mt-3"
        >
          Next
        </Button>
      </form>
    </Form>
  );
};

export default EntityInformationForm;
