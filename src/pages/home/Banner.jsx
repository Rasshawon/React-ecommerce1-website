import React from 'react'
import bannerImg from '/images/b77d2ef73dab52548fd9c32e28ddb735.jpg';
import {FaShoppingBag} from "react-icons/fa";

const Banner = () => {
  return (
    <div className='bg-primaryBg py-12 xl:px-28 px-4 justify-between'>
        <div className="py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-40">
        <div className='md:w-1/2'>
                <img className='rounded-lg mt-20 ' src={bannerImg} alt=""/>
            </div>
            <div className='md:w-1/2'>
                <h1 className='text-5xl font-semibold'>Collections</h1>
                <p className='text-xl mb-7'>You can explore more different collections.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor obcaecati quo molestias nihil </p>
                <button className='bg-Blue hover:bg-orange-500 px-6 py-2 text-white font-semibold rounded-sm flex items-center gap-2'>
                <FaShoppingBag className="inline-flex " /> Shop Now</button>

            </div>
            

        </div>
    </div>
  )
}

export default Banner