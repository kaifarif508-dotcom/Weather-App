import React from 'react'
import { IoIosSunny } from "react-icons/io";
import { FaCloudRain } from "react-icons/fa";
import { BsClouds } from "react-icons/bs";

const Result = ({ result }) => {
  if (!result) {
    return <p>Loading...</p>
  }

  const condition = result.current?.condition?.text?.toLowerCase();

  const getWeatherIcon = () => {
    if (condition?.includes("sunny")) {
      return <IoIosSunny className="text-6xl text-yellow-300" />;
    }
    if (condition?.includes("rain")) {
      return <FaCloudRain className="text-6xl text-blue-300" />;
    }
    if (condition?.includes("cloud")) {
      return <BsClouds className="text-6xl text-gray-300" />;
    }

    return <IoIosSunny className="text-6xl text-yellow-300" />;
  };

  return (
    <div className='w-full px-10 py-10 my-6 bg-cover bg-center bg-[url("https://images.unsplash.com/photo-1574610758891-5b809b6e6e2e?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] rounded-2xl h-72'>

      <div className='flex items-center justify-between mt-24'>

        {/* LEFT SIDE */}
        <div className='flex items-center gap-4 text-white'>
          {getWeatherIcon()}
          <div>
            <h1 className='text-5xl'>
              {result.current?.temp_c}°C
            </h1>
            <h4 className='text-2xl'>
              {result.location?.name}
            </h4>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className='text-right text-white'>
          <h3 className='text-xl font-bold'>
            {result.location?.localtime}
          </h3>
          <h5 className='text-xl'>
            {result.current?.is_day ? "Day" : "Night"}
          </h5>

          <p className='mt-2 text-sm'>
            {result.current?.condition?.text}
          </p>
        </div>

      </div>

    </div>
  )
}

export default Result