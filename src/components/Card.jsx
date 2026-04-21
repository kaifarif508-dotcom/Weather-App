import React from 'react'
import { WiHumidity } from "react-icons/wi";
import { TbSunset2Filled } from "react-icons/tb";
import { WiStrongWind } from "react-icons/wi";
import { WiSunrise } from "react-icons/wi";
import { WiBarometer } from "react-icons/wi";
import { IoIosSunny } from "react-icons/io";

const Card = ({result}) => {
  return (
    <div className='w-1/3 px-6 py-1 h-60 '>
      
      <div className='flex items-center justify-between gap-3 mb-3 '>

<div className='flex items-center w-1/2 gap-1 px-4 bg-white border-2 shadow-md rounded-3xl h-28 '>
    <WiHumidity className='text-3xl font-lighter'/>
    <div className='leading-tight'>
        
    <h1>Humidity</h1>
    <h2 className='font-medium '>{result.current?.humidity}%</h2>
    </div>
</div>
<div className='flex items-center w-1/2 gap-1 px-4 bg-white border-2 shadow-md rounded-3xl h-28 '>
    <WiBarometer className='text-3xl font-lighter'/>
<div className='leading-tight'>
    <h1>Pressure</h1>
    <h2 className='font-medium '>{result.current?.pressure_mb}hPa</h2>
</div>
</div>
      </div>


      <div className='flex items-center justify-between gap-3 item'>

<div className='flex items-center w-1/2 gap-1 px-2 bg-white border-2 shadow-md rounded-3xl h-28 '>
    <IoIosSunny className='text-3xl font-lighter'/>
    <div className='leading-tight'>
        
    <h1 className='tracking-tight'>UV Index</h1>
    <h2 className='font-medium '>{result.current?.uv}</h2>
    </div>
</div>
<div className='flex items-center w-1/2 gap-1 px-2 bg-white border-2 shadow-md rounded-3xl h-28 '>
    <WiStrongWind className='text-3xl font-lighter'/>
<div className='leading-tight'>
    <h1>Wind</h1>
    <h2 className='font-medium '>{result.current?.wind_kph}km/h</h2>
</div>
</div>
      </div>

    </div>
  )
}

export default Card
