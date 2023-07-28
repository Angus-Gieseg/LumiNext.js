'use strict'
import React from 'react'

const Introduction = () => {
  return (
    <section
      className="pt-20 pb-20 px-4 sm:px-0 flex flex-col 
      sm:flex-row justify-between items-center space-y-10 sm:space-y-0 
      sm:space-x-10 ml-8"
      id="about"
    >
      <div className="sm:w-1/2 order-2 sm:order-1">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
          Welcome to Not Bad Websites
        </h2>
        <p className="text-xl text-gray-500 sm:text-2xl mb-6">
          We are a digital consultancy rooted in creativity and innovation,
          based in Christchurch, New Zealand. We specialize in helping
          businesses bloom in the digital space.
        </p>
        <p className="text-base text-gray-500 sm:text-lg mb-6">
          Our journey began with Angus, our founder, who transitioned from
          structural engineering to software development after initiating a B2B
          Tourism Tech Startup. Angus brings to the table a unique blend of
          technical skills, innovation, and entrepreneurship.
        </p>
        <p className="text-base text-gray-500 sm:text-lg mb-6">
          We recognize that your website is not just a business tool, it's a
          manifestation of your vision and passion. We dive deep into
          understanding your objectives and brand values, creating a digital
          presence that authentically represents you.
        </p>
        <p className="text-base text-gray-500 sm:text-lg">
          At Not Bad Websites, we merge creativity and strategy to create
          captivating digital experiences. Welcome aboard; let's make your
          digital dreams take flight.
        </p>
      </div>
      <div className="flex justify-center items-center sm:w-1/2 order-1 sm:order-2">
        <img
          src="/Assets/ProfilePicture.jpg"
          alt="Angus"
          className="w-full sm:w-1/2 rounded-lg shadow-lg"
        />
      </div>
    </section>
  )
}

export default Introduction
