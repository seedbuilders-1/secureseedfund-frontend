const DUMMY_EVENTS = [
  {
    id: "1",
    title: "Pharoah Pharmacautical bags $10 in pre-seed funding",
    desc: "Lorem ipsum dolor sit amet consectetur. At cum luctus nunc lobortis mus ultrices vel commodo pellentesque. Pellentesque vel tristique vulputate arcu. Curabitur nec integer pharetra prtus nunc loborti sdassas lo...",
  },
  {
    id: "2",
    title: "Pharoah Pharmacautical bags $10 in pre-seed funding",
    desc: "Lorem ipsum dolor sit amet consectetur. At cum luctus nunc lobortis mus ultrices vel commodo pellentesque. Pellentesque vel tristique vulputate arcu. Curabitur nec integer pharetra prtus nunc loborti sdassas lo...",
  },
  {
    id: "3",
    title: "Pharoah Pharmacautical bags $10 in pre-seed funding",
    desc: "Lorem ipsum dolor sit amet consectetur. At cum luctus nunc lobortis mus ultrices vel commodo pellentesque. Pellentesque vel tristique vulputate arcu. Curabitur nec integer pharetra prtus nunc loborti sdassas lo...",
  },
];

const EventsAndNews = () => {
  return (
    <div className="w-full pt-4 flex flex-col justify-between">
      {DUMMY_EVENTS.map((event, i) => {
        const { desc, id, title } = event;
        return (
          <div
            key={id}
            className={`w-full flex items-center pb-4 space-x-4 ${
              i + 1 !== DUMMY_EVENTS.length && "border-b border-slate-300 "
            }`}
          >
            <div className="w-[10rem] aspect-[1/.8] bg-gray-200 rounded-[.625rem]" />
            <div className="flex flex-col space-y-2">
              <h3 className="text-slate-600 text-[.875rem] font-[600]">
                {title}
              </h3>
              <p className="text-[.8rem] text-slate-600 leading-[1.3rem]">
                {desc}{" "}
                <span className="hover:underline font-[500] text-green-700">
                  Read More
                </span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EventsAndNews;
