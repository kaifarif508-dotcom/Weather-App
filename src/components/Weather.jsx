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

  }, [weather])

  // 🌍 AUTO LOAD CITY
  useEffect(() => {
    const savedCity = localStorage.getItem("city") || "karachi"
    search(savedCity)
  }, [])

  return (
    <div className='relative w-full px-10 py-10 my-20 overflow-hidden bg-gray-200 shadow-2xl mx-60 rounded-2xl h-180'>

      {/* 🎧 SOUND */}
      <audio ref={audioRef} src="/sounds/thunder.mp3" />

      {/* 🌧️ WEATHER ANIMATIONS */}
      {isRain && <Rain />}
      {isCloud && <Clouds />}
      {isSun && <Sun />}

      {/* UI */}
      <Navbar search={search} />

      {loading && (
        <p className="mt-10 text-xl text-center">Loading...</p>
      )}

      {!loading && weather && (
        <>
          <Result result={weather} />

          <div className='flex gap-5'>
            <Card result={weather} />
            <Forecast result={weather} />
          </div>
        </>
      )}

    </div>
  )
}

export default Weather