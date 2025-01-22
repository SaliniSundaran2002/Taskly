import React from 'react'
import image from '../assets/image.png'

const Home = () => {
  return (
<div className="bg-black w-screen h-screen flex items-center justify-center relative">
  <div className="text-center space-y-6">
    <img
      src={image}
      alt="image"
      className="w-64 h-64 mx-auto rounded-full"
    />
    <h1 className="text-5xl font-bold text-cyan-500 drop-shadow-lg">Welcome to Taskly</h1>
    <p className="text-lg text-cyan-200">Your ultimate task management solution</p>
  </div>
</div>


  )
}

export default Home