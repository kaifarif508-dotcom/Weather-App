import React from 'react'

import Weather from './components/Weather'

const App = () => {
  return (
    <div className='w-full h-screen bg-[url("https://images.unsplash.com/photo-1606230144598-ed5d503a4c43?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-center overflow-hidden'>

<div className='flex items-center justify-center '>

      <Weather />
</div>

    
    </div>
  )
}

export default App
