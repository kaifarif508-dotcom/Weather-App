import React, { useEffect, useState, useRef } from 'react'
import Navbar from './Navbar'
import Rain from './Rain'
import Clouds from './Clouds'
import Sun from './Sun'
import Result from './Result'
import Forecast from './Forecast'
import Card from './Card'

const Weather = () => {
  const [loading, setLoading] = useState(false)
  const [weather, setWeather] = useState(null)
  const audioRef = useRef(null)

  const search = async (city) => {
    if (!city) return

    localStorage.setItem("city", city)

    try {
      setLoading(true)

      const url = `https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_APP}&q=${city}&days=1&aqi=no&alerts=no`

      const response = await fetch(url)
      const data = await response.json()

      if (!data.error) {
        setWeather(data)
      } else {
        setWeather(null)
      }

    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  // 🌦️ CONDITION
  const condition = weather?.current?.condition?.text?.toLowerCase() || ""

  const isRain = condition.includes("rain") || condition.includes("drizzle")
  const isCloud = condition.includes("cloud")
  const isSun = condition.includes("sunny") || condition.includes("clear")

  // 🎧 SOUND CONTROL
  useEffect(() => {
    if (!audioRef.current) return

    if (isRain) {
      audioRef.current.volume = 0.4
      audioRef.current.loop = true

      const playAudio = async () => {
        try {
          await audioRef.current.play()
        } catch (err) {
          console.log("Autoplay blocked:", err)
        }
      }

      playAudio()
    } else {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }

  }, [isRain])

  // 🌍 AUTO LOAD CITY
  useEffect(() => {
    const savedCity = localStorage.getItem("city") || "karachi"
    search(savedCity)
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen px-3 bg-gray-300 sm:px-6">

      {/* MAIN CONTAINER */}
      <div className="relative w-full max-w-6xl p-4 my-10 overflow-hidden bg-gray-200 shadow-2xl rounded-2xl sm:p-6 md:p-10">

        {/* 🎧 SOUND */}
        <audio ref={audioRef} src="/sounds/thunder.mp3" />

        {/* 🌧️ ANIMATIONS */}
        {isRain && <Rain />}
        {isCloud && <Clouds />}
        {isSun && <Sun />}

        {/* NAVBAR */}
        <Navbar search={search} />

        {/* LOADING */}
        {loading && (
          <p className="mt-10 text-lg text-center sm:text-xl">
            Loading...
          </p>
        )}

        {/* CONTENT */}
        {!loading && weather && (
          <div className="mt-6 space-y-6">

            {/* RESULT */}
            <Result result={weather} />

            {/* CARDS + FORECAST */}
            <div className="flex flex-col gap-5 lg:flex-row">

              {/* CARD */}
              <div className="w-full lg:w-1/2">
                <Card result={weather} />
              </div>

              {/* FORECAST */}
              <div className="w-full lg:w-1/2">
                <Forecast result={weather} />
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  )
}

export default Weather