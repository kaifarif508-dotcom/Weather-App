import React from 'react'
import { WiHumidity, WiStrongWind, WiBarometer } from "react-icons/wi";
import { IoIosSunny } from "react-icons/io";

const Card = ({ result }) => {

  const current = result?.current;

  return (
    <div className="w-full">

      <div className="grid grid-cols-2 gap-3 sm:gap-4">

        {/* Humidity */}
        <div className="flex items-center gap-3 p-3 bg-white border shadow-md sm:p-4 rounded-2xl">
          <WiHumidity className="text-3xl text-blue-400 sm:text-4xl" />
          <div className="leading-tight">
            <h1 className="text-xs text-gray-500 sm:text-sm">Humidity</h1>
            <h2 className="text-sm font-semibold sm:text-base">
              {current?.humidity ?? "--"}%
            </h2>
          </div>
        </div>

        {/* Pressure */}
        <div className="flex items-center gap-3 p-3 bg-white border shadow-md sm:p-4 rounded-2xl">
          <WiBarometer className="text-3xl text-gray-500 sm:text-4xl" />
          <div className="leading-tight">
            <h1 className="text-xs text-gray-500 sm:text-sm">Pressure</h1>
            <h2 className="text-sm font-semibold sm:text-base">
              {current?.pressure_mb ?? "--"} hPa
            </h2>
          </div>
        </div>

        {/* UV Index */}
        <div className="flex items-center gap-3 p-3 bg-white border shadow-md sm:p-4 rounded-2xl">
          <IoIosSunny className="text-3xl text-yellow-400 sm:text-4xl" />
          <div className="leading-tight">
            <h1 className="text-xs text-gray-500 sm:text-sm">UV Index</h1>
            <h2 className="text-sm font-semibold sm:text-base">
              {current?.uv ?? "--"}
            </h2>
          </div>
        </div>

        {/* Wind */}
        <div className="flex items-center gap-3 p-3 bg-white border shadow-md sm:p-4 rounded-2xl">
          <WiStrongWind className="text-3xl text-green-500 sm:text-4xl" />
          <div className="leading-tight">
            <h1 className="text-xs text-gray-500 sm:text-sm">Wind</h1>
            <h2 className="text-sm font-semibold sm:text-base">
              {current?.wind_kph ?? "--"} km/h
            </h2>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Card