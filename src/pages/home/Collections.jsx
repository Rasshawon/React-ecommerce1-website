import React from 'react'

const Collections = () => {
  return (
    <div className='bg-[url("/images/Cards-img/girl_model_face_in_black_background_hd_girls.jpg")] bg-cover bg-center bg-no-repeat xl:px-28 px-4 my-20'>
        <div className='h-[550px] flex justify-between md:flex-row items-center'>
          <div className='md:w-1/2'></div>
          <div className='md:w-1/2'>
            <img className='bg-white ' src="../../../public/zara-2-logo-png-transparent.png" alt="" />
            <p className='text-lg text-white capitalize my-8 md:w-2/3 leading-[32px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas maiores tempore voluptatem eveniet aliquid numquam molestiae, vero cupiditate, explicabo magni aperiam deleniti laboriosam a amet. Repudiandae sunt eos sint fugiat?</p>
            <button className='bg-white px-6 py-2 text-black rounded-sm font-semibold  hover:bg-orange-500 hover:text-white items-center gap-2'>See Collections</button>
          </div>
        </div>
        
        </div>
  )
}

export default Collections