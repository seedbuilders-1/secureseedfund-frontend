import { IoEllipseSharp } from "react-icons/io5";
const TeamMember = () => (

  <div>
  <div className="flex items-center justify-center mb-8">
      <div className="flex items-center gap-8">
        <h2 className="text-2xl font-bold whitespace-nowrap">Terms</h2>
        <div className="bg-[#000] h-[1px] w-[280px]" />
      </div>
    </div>

    
  <div className="mt-6">
   
  <div className="flex items-center justify-between mb-6 gap-6">
    <div className="w-full h-[180px] bg-[#D9D9D9] rounded-lg" />
    <div>
      <h2 className="flex font-medium items-center">
        Kenechukwu
        <IoEllipseSharp className="w-2 h-2" />
        Founder
      </h2>
      <p className="mt-2">
        Kene, with 25+ years in executive roles and investment banking, has led multiple firms and founded successful companies, including major insurance brokerages. He's a former U.S. Navy intelligence officer with an AB
      </p>
      <a href="#" className="text-[#0F8B3A] border-b group">
        read more
        <div className="h-[1px] bg-[#0F8B3A] w-0 group-hover:w-full transition-all duration-300" />
      </a>
    </div>
  </div>
  <div className="flex items-center justify-between gap-6">
    <div className="w-full h-[180px] bg-[#D9D9D9] rounded-lg" />
    <div>
      <h2 className="flex font-medium items-center">
      Aboubakar  
        <IoEllipseSharp className="w-2 h-2" />
        Co-Founder
      </h2>
      <p className="mt-2">
        Kene, with 25+ years in executive roles and investment banking, has led multiple firms and founded successful companies, including major insurance brokerages. He's a former U.S. Navy intelligence officer with an AB
      </p>
      <a href="#" className="text-[#0F8B3A] border-b group">
        read more
        <div className="h-[1px] bg-[#0F8B3A] w-0 group-hover:w-full transition-all duration-300" />
      </a>
    </div>
  </div>
  </div>



  </div>
  );
  export default TeamMember;