import React from 'react'
import * as Icon from 'react-bootstrap-icons';


export default function Home() {
    return (
        <div className='w-screen h-screen bg-white-whatsapp'>
            <div className='mx-auto p-6'>
                <div className='w-full grid grid-cols-12 bg-[#F0F2F5] '>
                    <div className='col-span-5 pt-2 '>

                        {/* Nav bar */}
                        <div className='flex items-center justify-between px-2 '>
                            {/* LOGO */}
                            <div className='w-11 h-11 rounded-full bg-green-800' />

                            <div className='flex gap-6'>
                                <Icon.PeopleFill size={22} color={'#54656F'} />
                                <Icon.ExclamationCircle size={22} color={'#54656F'} />
                                <Icon.ChatLeftTextFill size={22} color={'#54656F'} />
                                <Icon.ThreeDotsVertical size={22} color={'#54656F'} />
                            </div>
                        </div>
                        <div className='bg-white h-screen'>
                        {/* Search input */}
                        <div className='flex px-2 mt-3 items-center relative  py-2'>
                            <div className='w-11/12 relative'>
                                <input type={'text'} className='text-center placeholder-placeholder-whatsapp w-full outline-none p-1 rounded-md bg-[#F0F2F5] border-none' placeholder='Aratın veya yeni sohbet başlatın' />
                                <Icon.Search color={'#54656F'} className='absolute top-2.5 left-2' />
                            </div>
                            <Icon.Filter size={23} color={'#95A3AC'} className=' absolute right-2' />
                        </div>

                        {/* Message store */}
                        <div className=' border-t-[1px] overflow-y-scroll h-full'>

                            {/* Item */}
                            <div className='pl-2 flex items-center border-b-[1px] h-20 text-placeholder-whatsapp hover:bg-[#F0F2F5]'>
                                <div className='w-12 h-12 rounded-full  bg-green-800' />

                                {/* User info */}
                                <div className=' w-full px-3 '>
                                    <div className='flex justify-between '>
                                        <p className='text-black'>Samed Say</p>
                                        <p className='text-sm'>Cuma</p>
                                    </div>
                                    {/* Mesaj */}
                                    <p>dasdsadsadsad</p>
                                </div>
                            </div>

                       

                            

                            
                        </div>
                        </div>
                    </div>

                    <div className='col-span-7 bg-blue-500'>

                    </div>
                </div>
            </div>

            <div className='absolute bg-grean-whatsapp w-screen h-32 -z-10 top-0'></div>
        </div>
    )
}
