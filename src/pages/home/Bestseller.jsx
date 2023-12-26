import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { data } from 'autoprefixer';
import { Link } from 'react-router-dom';

const Bestseller = () => {
    const [products,setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json').then(res =>res.json()).then(data => setProducts(data))
    },[])
    const bestSeller = products.filter((item) => item.status ==="Best sellers");
   // console.log(bestSeller)
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-28 px-4'>
        <div>
            <h2 className='title'>Best Sellers</h2>
            <p className='text-black/75 capitalize md:w-2/3 mx-auto mb-8 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae consequatur autem libero quam ratione, in praesentium? Non quos, libero facere blanditiis dolorum, sunt, dicta est alias fugit unde pariatur a id optio deleniti perspiciatis excepturi.</p>

        </div>
        {/* best seller products card*/}
        <div className='mb-2'>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
            bestSeller.map((products) => (
                <SwiperSlide key={products.id}>
                    <Link to={`/shop/${products.id}`}>
            <img className="h-80 w-64 mx-auto hover:scale-105 transition-all duration-300" src={products.image} alt={products.title} />
          </Link>
          <div className="mt-4 p-4 items-start">
            <h4 className="font-semibold text-Black text-base mb-2">
              {products.title}
            </h4>
            <div className="flex justify-between">
              <p className="font-semibold text-blue-500">{products.category}</p>
              <p className="font-semibold"><del className=" text-red-500">${products.prevPrice}</del>  ${products.newPrice}</p>
            </div>
          </div>

                </SwiperSlide>
            ))
        }
    

          
      </Swiper>
        </div>
        </div>
  )
}

export default Bestseller