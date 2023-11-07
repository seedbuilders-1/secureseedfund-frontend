import BorderCard from "@/components/cards/BorderCard";

const MOCK_RECENT_FUNDING = [
  {
    id: "1",
    name: "Wenston Ventures",
    date: "Tuesday 12th March, 2023",
  },
  {
    id: "2",
    name: "Wenston Ventures",
    date: "Tuesday 12th March, 2023",
  },
  {
    id: "3",
    name: "Wenston Ventures",
    date: "Tuesday 12th March, 2023",
  },
  {
    id: "4",
    name: "Wenston Ventures",
    date: "Tuesday 12th March, 2023",
  },
  {
    id: "5",
    name: "Wenston Ventures",
    date: "Tuesday 12th March, 2023",
  },
];

const RecentFunding = () => {
  return (
    <BorderCard btnText="See all funding source">
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <h5 className="large">Recent Funding</h5>
        </div>

        <div className="mt-8 flex flex-col space-y-8">
          {MOCK_RECENT_FUNDING.map((funding) => {
            const { date, id, name } = funding;
            return (
              <div
                key={id}
                className="flex w-full items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-gray-200 w-10 h-10" />
                  <div className="flex flex-col">
                    <h4 className="text-slate-700 text-[.8rem] font-[400] leading-[1.2rem]">
                      {name}
                    </h4>
                    <p className="text-slate-400 text-[.6rem] font-[500] leading-[1rem]">
                      {date}
                    </p>
                  </div>
                </div>

                <span className="text-green-600 text-[.8rem] font-[600]">
                  $120,100
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </BorderCard>
  );
};

export default RecentFunding;
