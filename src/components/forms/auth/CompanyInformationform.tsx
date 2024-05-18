"use client";
import { zodResolver } from "@hookform/resolvers/zod";
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
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import useOnboarding from "@/hooks/onboarding/useOnboarding";
import {
  CompanyInformationSchema,
  CompanyInformationValidation,
} from "@/lib/validations/startuponboarding";

interface Props {
  handleCompanyInformation: (x: CompanyInformationValidation) => void;
  handleNext: () => void;
  companyInformationValues: CompanyInformationValidation;
}
const CompanyInformationform = ({
  handleCompanyInformation,
  companyInformationValues,
  handleNext,
}: Props) => {
  const form = useForm<CompanyInformationValidation>({
    resolver: zodResolver(CompanyInformationSchema),
    defaultValues: companyInformationValues,
  });

  const onSubmit = (values: CompanyInformationValidation) => {
    handleCompanyInformation(values);
    handleNext();
    if (Object.keys(form.formState.errors).length === 0) {
      console.log(form.formState.errors);
    }
  };

  const { allCountries } = useOnboarding();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="mb-3 grid grid-cols-2 gap-x-2 gap-y-4">
          <FormField
            control={form.control}
            name="companyname"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel className="text-[15px]">Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter company name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[15px]">Company Email</FormLabel>
                <FormControl>
                  <Input placeholder=" Enter company email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyPhone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[15px]">
                  Company Phone number
                </FormLabel>
                <FormControl>
                  <Input placeholder=" Enter company phone number" {...field} />
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
                <FormLabel>Country</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full mt-2 text-slate-900 border border-slate-300  h-[44px]">
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent
                    className="overflow-auto   h-48 pb-4"
                    style={{ scrollBehavior: "smooth" }}
                  >
                    {allCountries?.items?.map((country) => (
                      <SelectItem
                        key={country.id}
                        value={country.id.toString()}
                      >
                        {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="Enter address" {...field} />
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
        <Button type="submit" className="w-full rounded-md h-[40px] mt-3">
          Next
        </Button>
      </form>
    </Form>
  );
};

export default CompanyInformationform;
