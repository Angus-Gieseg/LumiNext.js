'use client'
import React from 'react'
import Image from 'next/image'

const FeatureCard = ({ imgSrc, heading, text, features }) => {
  return (
    <div className="shadow-md rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
      <div className="h-full bg-contain flex flex-col md:flex-row items-start justify-start bg-white text-slate-700 shadow-md rounded-md p-4">
        <div className="w-16 h-16 object-contain">
          <Image src={imgSrc} alt={heading} width={64} height={64} />
        </div>
        <div className="md:ml-4">
          <h2 className="text-lg font-semibold mt-2">{heading}</h2>
          <p className="text-sm mt-1">{text}</p>
          <ul className="list-none mt-4 md:flex md:flex-col">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start md:space-x-2">
                <Image
                  src="/Icons/tick.svg"
                  alt="tick"
                  className="w-4 h-4 mt-1"
                  width={16}
                  height={16}
                />
                <p className="text-sm">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard
