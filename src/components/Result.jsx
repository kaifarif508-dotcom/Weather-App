import React from 'react'
import { IoIosSunny } from "react-icons/io";
import { FaCloudRain } from "react-icons/fa";
import { BsClouds } from "react-icons/bs";

const Result = ({ result }) => {

  if (!result) {
    return (
      <p className="mt-6 text-sm text-center text-gray-500">
        Loading weather...
      </p>
    )
  }

  const condition = result?.current?.condition?.text?.toLowerCase() || "";

  const getWeatherIcon = () => {
    if (condition.includes("sunny") || condition.includes("clear")) {
      return <IoIosSunny className="text-5xl text-yellow-300 md:text-6xl" />;
    }
    if (condition.includes("rain") || condition.includes("drizzle")) {
      return <FaCloudRain className="text-5xl text-blue-300 md:text-6xl" />;
    }
    if (condition.includes("cloud")) {
      return <BsClouds className="text-5xl text-gray-300 md:text-6xl" />;
    }

    return <IoIosSunny className="text-5xl text-yellow-300 md:text-6xl" />;
  };

  return (
    <div className='relative w-full px-4 py-6 my-6 overflow-hidden rounded-2xl sm:px-6 md:px-10'>

      {/* 🌫️ DARK OVERLAY (IMPORTANT FIX) */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* BACKGROUND IMAGE */}
      <div
        className='absolute inset-0 bg-center bg-cover'
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1574610758891-5b809b6e6e2e?q=80&w=1176&auto=format&fit=crop")'
        }}
      />

      {/* CONTENT */}
      <div className='relative flex flex-col gap-6 text-white md:flex-row md:items-center md:justify-between'>

        {/* LEFT */}
        <div className='flex items-center gap-4'>
          {getWeatherIcon()}

          <div>
            <h1 className='text-4xl font-bold md:text-5xl'>
              {result.current?.temp_c}°C
            </h1>

            <h4 className='text-lg md:text-2xl'>
              {result.location?.name}
            </h4>
          </div>
        </div>

        {/* RIGHT */}
        <div className='text-left md:text-right'>
          <h3 className='text-lg font-semibold md:text-xl'>
            {result.location?.localtime}
          </h3>

          <h5 className='text-lg md:text-xl'>
            {result.current?.is_day ? "Day" : "Night"}
          </h5>

          <p className='text-sm md:text-base'>
            {result.current?.condition?.text}
          </p>
        </div>

      </div>
    </div>
  )
}

export default Result