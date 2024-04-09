"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const data = [
    {
        id:1,
        title:"always fresh & always crispy & always hot",
        image:"/slide1.png",
    },
    {
        id:2,
        title:"we deliver your order wherever you are in NY",
        image:"/slide2.png",
    },
    {
        id:3,
        title:"the best pizza to share whith your family",
        image:"/slide3.jpg",
    }
]
const Slider = () => {
  const [currentSlide, setcurrentSlide] = useState(0);
  
useEffect(()=>{
   const interval = setInterval(
     ()=>setcurrentSlide((prev) => (prev ===data.length-1 ? 0 : prev+1)),
   2000
)
   return ()=>clearInterval(interval)
  },[])

  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]'>
        {/*TEXT CONTAINER*/}
        <div className='h-1/2 flex items-center justify-center flex-col gap-8 text-red-500 font-bold'>
            <h1 className='text-center text-5xl uppercase p-4 md:6xl lg:7xl'>
                {data[currentSlide].title}
            </h1>
            <button className='bg-red-500 text-white px-8 py-4 rounded-md'>Order Now</button>
        </div>
        {/*IMAGE CONTAINER*/}
        <div className='w-full h-1/2 relative'>
            <Image src={data[currentSlide].image} alt="" fill className='object-cover'/>
        </div>
    </div>
  )
}

export default Slider