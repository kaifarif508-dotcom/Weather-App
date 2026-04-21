import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci"
import { FaMicrophone } from "react-icons/fa"

const Navbar = ({ search }) => {
  const [city, setCity] = useState("karachi")
  const [listening, setListening] = useState(false)

  // 🎤 VOICE SEARCH
  const startVoice = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition

    if (!SpeechRecognition) {
      alert("Your browser does not support voice search")
      return
    }

    const recognition = new SpeechRecognition()
    recognition.lang = "en-US"

    setListening(true)
    recognition.start()

    recognition.onresult = (event) => {
      const spokenCity = event.results[0][0].transcript
      setCity(spokenCity)
      search(spokenCity)
      setListening(false)
    }

    recognition.onerror = () => {
      setListening(false)
    }
  }

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-600 sm:text-3xl">
        Weather App
      </h1>

      {/* Search Box */}
      <div className="flex items-center w-full overflow-hidden border-2 border-gray-400 rounded-lg sm:w-auto">

        <input
          className="w-full px-3 py-2 text-sm outline-none sm:w-64 sm:text-base"
          type="text"
          value={city}
          placeholder="Enter city..."
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && search(city)}
        />

        {/* SEARCH */}
        <CiSearch
          onClick={() => search(city)}
          className="mx-2 text-2xl cursor-pointer"
        />

        {/* VOICE */}
        <FaMicrophone
          onClick={startVoice}
          className={`mx-2 text-xl cursor-pointer transition ${
            listening ? "text-green-500 animate-pulse" : "text-red-500"
          }`}
        />

      </div>

    </div>
  )
}

export default Navbar