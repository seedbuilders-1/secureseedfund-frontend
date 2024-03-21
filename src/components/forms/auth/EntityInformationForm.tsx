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
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import useOnboarding from "@/hooks/onboarding/useOnboarding";
import { FileWithPath } from "react-dropzone";
import useUserAuth from "@/hooks/auth/useAuth";

interface Props {
  selectedOption: string;
  handleEntityInformation: (x: EntityInformationValidation) => void;
  logo: FileWithPath | null;
}

const EntityInformationForm = ({
  selectedOption,
  handleEntityInformation,
  logo,
}: Props) => {
  const form = useForm<EntityInformationValidation>({
    resolver: zodResolver(EntityInformationSchema),
  });
  const { user } = useUserAuth();
  const { handleNext, allCountries } = useOnboarding();

  const onSubmit = (values: EntityInformationValidation) => {
    handleEntityInformation(values);

    if (Object.keys(form.formState.errors).length === 0) {
      handleNext();
    }
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
              <FormItem>
                <FormLabel className="text-[15px]">First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Ex. Jane" value={user?.firstName} />
                </FormControl>
              </FormItem>
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Ex. Doe" value={user?.lastName} />
                </FormControl>
              </FormItem>
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
        <Button
          type="submit"
          // onClick={() => handleNext()}
          className="w-full rounded-md h-[40px] mt-3"
        >
          Next
        </Button>
      </form>
    </Form>
  );
};

export default EntityInformationForm;
