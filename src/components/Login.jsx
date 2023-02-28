import React, { useEffect, useRef, useState } from 'react'
import {Whatsapp} from 'react-bootstrap-icons'
export default function Login() {
    const url = "https://randomuser.me/api/?gender="
    const [gender,setGender]=useState("male");
    const [imageUrl,setImageUrl]=useState("");
    const male=useRef();
    const female=useRef();
    useEffect(()=>{

        fetch(url+gender)
    .then((response) => response.json())
    .then((res)=>setImageUrl(res.results[0].picture.large))
    },[gender])


   const maleHandle=()=>{
    setGender("male")
    male.current.checked=true
    female.current.checked=false

   }
   const femaleeHandle=()=>{
    setGender("female")
    male.current.checked=false
    female.current.checked=true
    
   }

    return (
        <div className='bg-black-whatsapp h-screen'>
            <div className='w-screen bg-grean-whatsapp h-56 '>
                <div className=' max-w-4xl w-full mx-auto z-10 h-screen'>
                    <div className='h-32  flex items-center  '>
                        {/* Logo */}
                        <div className='w-16 h-full flex flex-row items-center top-1/3'>
                            
                            <Whatsapp className='w-12 h-12'/>
                        </div>
                        {/* Whatsapp web Title */}
                        <p className='font-medium text-white'> WHATSAPP WEB</p>
                    </div>

                    <div className='w-full h-3/4 bg-white rounded-sm grid grid-cols-2 '>

                        <div className='col-span-1 flex items-center'>
                            <div className='p-16 '>
                                {/* Name input */}
                                <div className='flex flex-col'>
                                    <p className='text-center'>Name</p>
                                    <input type='text' className='w-full ml-3 bg-grean-whatsapp text-center focus:outline-none focus:bg-teal-500 text-white rounded-full' />
                                </div>
                                

                                <button className='mt-10 bg-grean-whatsapp w-full py-3 rounded-full text-white hover:bg-teal-500'>Login</button>
                            </div>
                        </div>

                        <div className='col-span-1  flex mt-28 mx-auto flex-col'>
                            <div className='w-56 h-56 flex items-center justify-center'>
                                <img src={imageUrl}></img>
                            </div>
                            <div className='flex flex-row justify-between py-2 '>
                                <div className='text-center'>
                                    <p>Male</p>
                                    <input onClick={maleHandle} ref={male} id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                </div>
                                <div className='text-center default-checkbox'>
                                    <p>Female</p>
                                    <input onClick={femaleeHandle} ref={female} id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
