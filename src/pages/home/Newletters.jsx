import React from "react";
import { Link } from "react-router-dom";

const Newletters = () => {
  return (
    <div className="bg-[#1E2832] bg-opacity-5 xl:px-28 px-4 py-16">
      <h2 className="text-3xl font-semibold text-center capitalize mb-8">
        Follow products and discounts on Instagram
      </h2>
        {/* insta grid */}
        <div className='flex flex-wrap gap-2 items-center justify-center mb-20  '>
            <Link><img src="/images/Cards-img/insta/1578316070_424_0a1e5400aa3da2e5497747f04b1a2450.jpg" alt="" /></Link>
            <Link><img src="/images/Cards-img/insta/4.png" alt="" className="" /></Link>
            <Link><img src="/images/Cards-img/insta/1.-Kendall-Jenner.jpg" alt="" /></Link>
            <Link><img src="/images/Cards-img/insta/lucky-blue-smith.jpg" alt="" /></Link>
            
        </div>
          {/* newsletter */}
          <div>
        <h2 className="text-3xl font-semibold text-center capitalize mb-8">
        Or subscribe to the newsletter
        </h2>
        <form className='md:w-1/2 mx-auto text-center'>
            <input type="email" name="email" id="email" placeholder='Email address...' className='h-8 bg-transparent outline-none border-b-2 pl-2 border-black md:w-2/3 w-full mb-5 placeholder:text-black/50 mr-4'/>
            <input type="submit" value="SUBMIT" className=' bg-Blue text-white hover:bg-orange-500 px-6 py-2 hover:text-white font-semibold rounded-sm items-center gap-2' />
        </form>
        </div>
        

    </div>
  );
};

export default Newletters;
