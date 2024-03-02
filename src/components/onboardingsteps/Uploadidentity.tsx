"use client"
import React from 'react'
import { Select, SelectGroup, SelectValue, SelectItem, SelectContent, SelectTrigger } from '../ui/select'
// import { IoMdArrowDropdown } from "react-icons/io";
import UploadFile from '../cards/UploadFile'
import { Button } from '../ui/button'
import useOnboarding from '@/hooks/onboarding/useOnboarding'

const Uploadidentity = () => {
    const { handleNext } = useOnboarding()
    return (
        <>
            <div className=''>
                <h2 className="text-primaryMain mt-4">Need help?</h2>

                <div className="flex flex-col justify-center w-[90%] ml-5">
                    <div>
                        <h2 className="font-medium text-[24px] text-slate-900 mt-6">
                            Upload identity document
                        </h2>
                        <p className='text-slate-700 text-[15px] mt-5'>What document do you have</p>
                        <div >

                            <Select >
                                <SelectTrigger className="w-full mt-2 text-slate-900 border border-slate-300  h-[44px]" >
                                    <SelectValue defaultValue="1"></SelectValue>
                                </SelectTrigger>
                                <SelectContent >
                                    <SelectGroup >
                                        <SelectItem value="1">International Passport</SelectItem>
                                        <SelectItem value="2">CAC</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className='text-slate-700 text-[15px] mb-3'>Upload  Evidence of Company registration</p>
                        <UploadFile />
                    </div>
                    <Button onClick={() => handleNext()} className="w-full rounded-md h-[40px] mt-8" >
                        Next
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Uploadidentity