import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface InvestModalProps {
  handleInvest: (amount: number) => void;
  isLoading: boolean;
  campaign: any;
}
const InvestModal = ({
  handleInvest,
  isLoading,
  campaign,
}: InvestModalProps) => {
  const investmentSchema = z.object({
    amount: z
      .number()
      .positive({ message: "Amount must be greater than 0" })
      .min(campaign[0].minimum_value, {
        message: `Amount must be at least ₦${campaign[0].minimum_value}`,
      }),
  });
  type InvestmentFormData = z.infer<typeof investmentSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InvestmentFormData>({
    resolver: zodResolver(investmentSchema),
  });

  const onSubmit = async (data: InvestmentFormData) => {
    handleInvest(data.amount);
  };
  console.log(campaign);
  return (
    <>
      <div className="w-full h-[350px] flex flex-col justify-center rounded-md bg-[#CDEED3]  lg:block lg:w-[450px] ">
        <div className="px-6 py-4">
          <h2 className="text-4xl font-bold">
            {`₦ ${campaign[0].investment_balance}`}
          </h2>
          <p className="text-lg mt-3">Raised from 845 investors</p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <label className=" mt-4">
              Minimum Amount an investor can invest in is{" "}
              <strong>₦ {campaign[0].minimum_value.toLocaleString()}</strong>
            </label>
            <div className="flex gap-4 mt-3">
              <Input
                type="number"
                {...register("amount", { valueAsNumber: true })}
                className="px-6 py-3 border bg-transparent outline-offset-0 border-[#0F8B3A] rounded-lg text-[#0F8B3A] font-medium text-2xl w-full"
              />
            </div>
            {errors.amount && (
              <p className="text-red-500 text-sm">{errors.amount.message}</p>
            )}
            <Button
              type="submit"
              className="bg-[#241A3F] text-white w-full"
              disabled={isLoading}
              loading={isLoading}
            >
              Invest
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default InvestModal;
