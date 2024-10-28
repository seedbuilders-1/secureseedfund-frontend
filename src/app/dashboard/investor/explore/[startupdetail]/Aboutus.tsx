import { retry } from "@reduxjs/toolkit/query"

const AboutSection = () => (
 
    <div className="mt-8 max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center gap-8">
          <h2 className="text-[#0F8B3A] text-2xl font-bold whitespace-nowrap">About us</h2>
          <div className="bg-[#0F8B3A] h-[3px] w-[200px]" />
        </div>
      </div>
      <div className="flex items-start justify-between gap-8 pt-6">
        <div className="space-y-3">
          <h2 className="font-medium text-gray-800 text-lg">Headquarters</h2>
          <p className="text-gray-600 max-w-sm text-[1.2rem]">
            1036 Country Club Dr,
            <br />
            Suite 200 Moraga, CA 94556
          </p>
        </div>
        <div className="space-y-2">
          <p className="font-medium text-gray-800">Website</p>
          <a href="#" className="text-[#0F8B3A] transition-colors duration-200 group inline-block border-b">
            View website
            <div className="h-[1px] bg-[#0F8B3A] w-0 group-hover:w-full transition-all duration-300" />
          </a>
        </div>
      </div>
      <p className="mt-6">
        Kene AI software technologies are force multipliers for machine data communications, 
        enabling up to 2-4x more data to be sent over existing networks with the potential for added security.
      </p>
    </div>
  );
  export default AboutSection;