"use client"
import React from 'react'
import { Button } from '../ui/button'
import Checkicon from '@/assets/icons/Checkicon'



const Successpage = () => {
    return (
        <>
            <div className='w-full h-full'>
                <h2 className="text-primaryMain mt-4">Need help?</h2>

                <div className="flex flex-col justify-center items-center mx-auto  ml-5 mt-[5rem]">
                    <div>
                        <div className='flex flex-col justify-center items-center'>
                            <Checkicon />
                        </div>
                        <h2 className='text-slate-800 text-[16px] text-center mt-5 font-medium'>Thank you for becoming an investor</h2>
                        <p className='text-slate-600 text-[14px] w-[70%] text-center mt-3 mx-auto'>We’ve received your application and review shortly. Expect an email soon on the status of your application.</p>
                    </div>

                    <Button type="submit" className="w-[30%] rounded-md mx-auto h-[40px] mt-8" >
                        Go to Dashboard
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Successpage