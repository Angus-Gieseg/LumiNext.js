'use client'
import React from 'react'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'

const FeatureCard = ({ imgSrc, heading, text }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
  })

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    marginLeft: inView ? 0 : -100,
    config: { duration: 500 }, // This configures the speed of the animation
  })
  return (
    <animated.div ref={ref} style={animation}>
      <div className="bg-contain flex flex-col items-start justify-start bg-gradient-to-r from-pink-400 via-orange-500 to-red-500 text-white shadow-md rounded-md p-4">
        <img className="w-16 h-16 object-contain " src={imgSrc} alt={heading} />
        <h2 className="text-lg font-semibold mt-2">{heading}</h2>
        <p className="text-sm mt-1">{text}</p>
      </div>
    </animated.div>
  )
}

export default FeatureCard
