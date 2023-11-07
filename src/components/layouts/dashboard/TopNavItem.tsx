interface Props {
  label: string;
  active: boolean;
}

const TopNavItem = ({ label, active }: Props) => {
  return (
    <div
      className={` flex items-center justify-center rounded-[0.3125rem] text-white font-[500] px-3 py-2 text-[.875rem] cursor-pointer ${
        active && "border border-white bg-[#FFFFFF4D]"
      }`}
    >
      {label}
    </div>
  );
};

export default TopNavItem;
