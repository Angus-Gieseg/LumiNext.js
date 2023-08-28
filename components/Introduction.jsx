'use client'
import React from 'react'
import Image from 'next/image'

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
          I am a digital consultant, based in Christchurch, New Zealand. I
          specialize in helping businesses bloom in the digital space.
        </p>
        <p className="text-base text-gray-500 sm:text-lg mb-6">
          My journey began my software journey after transitioned from
          structural engineering to software development after initiating a B2B
          Tourism Tech Startup. I bring a unique blend of technical skills,
          innovation, and entrepreneurship.
        </p>
        <p className="text-base text-gray-500 sm:text-lg mb-6">
          I recognize that your website is&apos;t just a business tool,
          it&apos;s a manifestation of your vision and passion. I dive deep into
          understanding your objectives and brand values, creating a digital
          presence that authentically represents you.
        </p>
        <p className="text-base text-gray-500 sm:text-lg">
          At Not Bad Websites, I aim to merge creativity and strategy to create
          captivating digital experiences. Welcome aboard; let&apos;s make your
          digital dreams take flight.
        </p>
      </div>
      <div className="flex justify-center items-center sm:w-1/2 order-1 sm:order-2 w-1/2 h-1/2">
        <Image
          src="/Assets/ProfilePicture.jpg"
          alt="Angus"
          height={400}
          width={400}
          className="rounded-lg shadow-lg border-4 border-purple-400 mb-4"
        />
      </div>
    </section>
  )
}

export default Introduction
