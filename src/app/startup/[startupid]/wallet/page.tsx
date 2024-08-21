'use client';
import React, { useState } from 'react'
import StatCard from "@/components/cards/StatCard";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegCopy } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";
import TranscationHistory from '../../components/TranscationHistory';
import Image from "next/image";

const Wallet = () => {
  const [showAddress, setShowAddress] = useState(true);
  const walletAddress = '0xgHJhsghksjgVSHJ';

  const handleToggleAddress = () => {
    setShowAddress(!showAddress);
  };
  const handleCopyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
 
  };

  return (
    <div className='w-full mt-10 md:max-w-6xl md:m-auto md:mt-9'>
    
      <StatCard>
        <div className="flex items-center justify-between p-3 text-white md:h-[150px] md:justify-around ">
          <div className="">
            <h2 className="font-medium text-[1rem] md:text-[1.8rem]">
              Wallet 
            </h2>
            <div className='flex gap-2 md:gap-5'>
              <span className=" text-[1rem] font-medium md:text-[1.5rem]">
                {showAddress ? walletAddress : '***********'}
              </span>
              <span onClick={handleToggleAddress}>
                {showAddress ? (
                  <div className='md:text-[2rem]'> <IoEyeOutline /></div>
                 
                ) : (
                  <div className='md:text-[2rem]'> <FaRegEyeSlash /></div>
                )}
              </span>
              
              <span onClick={handleCopyAddress}>
              <div className='md:text-[2rem]'> <FaRegCopy /> </div>
               
              </span>
            </div>
          </div>
          <div className="bg-[#F3FFDE] p-2 rounded-full">
            <Image
              src="/assets/images/fundraised.png"
              alt="avatars"
              width={30}
              height={30}
            />
          </div>
        </div>
      </StatCard>


     <div className='flex flex-col'>
      <div className=" w-full h-full border border-[#0F8B3A] rounded-[0.6rem] px-4 py-4 mt-[2rem] md:w-[600px] md:m-auto md:mt-10 ">
        
        <h2 className="font-bold text-[1rem] text-center">Total fund raised</h2>
        <p className='text-center text-[#0F8B3A] text-[1.2rem] font-semibold'>  $2, 000, 0000</p>

        <div className='flex justify-between gap-3 mt-5'>
          <div className=' flex  justify-center items-center gap-2 w-full h-full border border-[#0F8B3A] rounded-[0.6rem] px-1 py-1'>
          <span className='bg-[#0F8B3A] p-[8px] rounded-full text-[#fff]'>  <AiOutlineMinus /></span>
          <button > Withdraw</button>
          </div>
         
          <div className=' flex  justify-center items-center gap-2 w-full h-full border border-[#0F8B3A] rounded-[0.6rem] px-1 py-1'>
          <span className='bg-[#0F8B3A] p-[8px] rounded-full text-[#fff]'>   <GoPlus /></span>
          <button > Withdraw</button>
          </div>
        </div>

      </div>
      <div className='mt-5 flex  w-full items-center  justify-around md:w-[600px] md:m-auto md:mt-10 '>
        <div className='flex gap-2 items-center'>
        <div className='bg-[#241A3F] p-2 h-[15px] w-[19px] rounded-md'></div>
        <div className='flex flex-col'>
          <p className='text-[11px] md:text-[15px]'>Widthdrawn:</p>
          <h3 className='text-[#0F8B3A] text-[14px] md:text-[18px]'>$100,000</h3>
        </div>
        </div>

        <div className='flex gap-2 items-center'>
        <div className='bg-[#0F8B3A] p-2 h-[15px] w-[19px] rounded-md'></div>
        <div className='flex flex-col'>
          <p className='text-[11px] md:text-[15px]'>Total Received:</p>
          <h3 className='text-[#0F8B3A] text-[14px] md:text-[18px]'>$600,000</h3>
        </div>
        </div>
       
      </div>
      </div>
    

           <div className='mt-[2rem] md:max-w-6xl md:m-auto md:mt-10'>
            <h2 className='text-[16px] font-bold mb-[1rem]'> Transcation History</h2>
           <TranscationHistory/>
            </div>
   

    </div>
  );
};

export default Wallet;