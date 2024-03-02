"use client"
import React from 'react'
import { Button } from '../ui/button'
import * as Switch from '@radix-ui/react-switch';
import useOnboarding from '@/hooks/onboarding/useOnboarding';



const TermandCondition = () => {
    const { handleNext } = useOnboarding()
    return (
        <>
            <div className='w-full'>
                <h2 className="text-primaryMain mt-4">Need help?</h2>

                <div className="flex flex-col justify-center  ml-5">
                    <div>
                        <h2 className="font-medium text-[24px] text-slate-900 mt-8">
                            Terms and Conditions
                        </h2>

                        <div className=' border border-slate-300 py-8 px-8 rounded-2xl mt-4 flex justify-between items-center'>
                            <div>
                                <h2 className='text-slate-700 font-medium'>Age Declaration</h2>
                                <p className='text-[14px] text-slate-600 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laudantium architecto impedit similique error, sequi ad nemo at deserunt sed?</p>
                            </div>
                            <div>

                                <Switch.Root
                                    className="w-[42px] h-[25px] bg-blackA6 rounded-full relative shadow-[0_2px_10px] shadow-blackA4 focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-black outline-none cursor-default"
                                    id="airplane-mode"
                                    // @ts-ignore
                                    style={{ '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)' }}
                                >
                                    <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                                </Switch.Root>
                            </div>
                        </div>
                        <div className=' border border-slate-300 py-8 px-8 rounded-2xl mt-4 flex justify-between items-center'>
                            <div>
                                <h2 className='text-slate-700 font-medium'>Risk Notice</h2>
                                <p className='text-[14px] text-slate-600 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laudantium architecto impedit similique error, sequi ad nemo at deserunt sed?</p>
                            </div>
                            <div>

                                <Switch.Root
                                    className="w-[42px] h-[25px] bg-blackA6 rounded-full relative shadow-[0_2px_10px] shadow-blackA4 focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-black outline-none cursor-default"
                                    id="airplane-mode"
                                    // @ts-ignore
                                    style={{ '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)' }}
                                >
                                    <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                                </Switch.Root>
                            </div>
                        </div>

                        <h2 className='text-slate-600 text-[15px] text-center mt-3'>Do you accept the <span className='text-primaryMain'>terms & conditions</span> and <span className='text-primaryMain'>privacy policy</span></h2>
                    </div>

                    <Button onClick={() => handleNext()} className="w-full rounded-md h-[40px] mt-8" >
                        Next
                    </Button>
                </div>
            </div>
        </>
    )
}

export default TermandCondition