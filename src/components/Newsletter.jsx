import React from 'react'
import { AiFillGithub } from "react-icons/ai";

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white bg-black'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Des conseils et astuces pour optimiser mon site ?</h1>
                <p className='p-4'>N'hésitez pas à me contacter sur mes réseaux sociaux.</p>
                </div> 
                    <div className='flex justify-center items-center'>
                        <div>
                        <button type="button" class="mr-8 text-black bg-white font-medium rounded-full text-sm px-4 py-2.5 text-center inline-flex items-center">
                            <AiFillGithub size={30} className='mx-auto' />
                            </button>

                        <button type="button" class="text-black bg-white font-medium rounded-full text-sm px-4 py-2.5 text-center inline-flex items-center">
                            <AiFillGithub size={30} className='mx-auto' />
                            </button>
                        </div>
                    </div>       
        </div>
    </div>
  )
}

export default Newsletter