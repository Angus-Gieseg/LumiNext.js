'use client'
import React from 'react'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'

const FeatureCard = ({ imgSrc, heading, text, features }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    marginLeft: inView ? 0 : -100,
    config: { duration: 500 },
  })

  return (
    <animated.div ref={ref} style={animation}>
      <div className="bg-contain flex flex-col items-start justify-start bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md rounded-md p-4">
        <img className="w-16 h-16 object-contain" src={imgSrc} alt={heading} />
        <h2 className="text-lg font-semibold mt-2">{heading}</h2>
        <p className="text-sm mt-1">{text}</p>
        <ul className="list-none mt-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <img src="/Icons/tick.svg" alt="tick" className="w-4 h-4" />
              <p className="text-sm">{feature}</p>
            </li>
          ))}
        </ul>
      </div>
    </animated.div>
  )
}

export default FeatureCard
