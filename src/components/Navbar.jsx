import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci"
import { FaMicrophone } from "react-icons/fa"

const Navbar = ({ search }) => {
  const [city, setCity] = useState("karachi")

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

    recognition.start()

    recognition.onresult = (event) => {
      const spokenCity = event.results[0][0].transcript
      setCity(spokenCity)
      search(spokenCity)
    }
  }

  return (
    <div className='flex justify-between px-2'>

      <h1 className='text-3xl font-semibold text-gray-500'>
        Weather App
      </h1>

      <div className='flex items-center border-2 border-gray-500 rounded'>

        <input
          className='px-2 py-1 outline-none'
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        {/* SEARCH */}
        <CiSearch
          onClick={() => search(city)}
          className='text-2xl cursor-pointer'
        />

        {/* VOICE */}
        <FaMicrophone
          onClick={startVoice}
          className='mx-2 text-xl text-red-500 cursor-pointer'
        />

      </div>
    </div>
  )
}

export default Navbar