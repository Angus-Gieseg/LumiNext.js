'use client'
import React from 'react'
import { useEffect } from 'react'
import { useSpring, animated, config } from 'react-spring'

export const ParallaxDiv = ({ className, transformMultiplier }) => {
  const [{ scrollY }, setScrollY] = useSpring(() => ({
    scrollY: 0,
    config: { tension: 60, friction: 20 },
  }))

  useEffect(() => {
    const handleScroll = () => setScrollY({ scrollY: window.scrollY })
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setScrollY])

  return (
    <animated.div
      className={`${className} parallax absolute bg-no-repeat bg-cover bg-center sm:h-1/2`}
      style={{
        transform: scrollY.to(
          (value) => `translateX(${value * transformMultiplier}px)`
        ),
      }}
    />
  )
}

export const Hero = () => {
  const [{ scrollY }, setScrollY] = useSpring(() => ({
    scrollY: 0,
    config: { tension: 60, friction: 20 },
  }))

  useEffect(() => {
    const handleScroll = () => setScrollY({ scrollY: window.scrollY })
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setScrollY])

  return (
    <section
      id="hero"
      className="overflow-y-hidden overflow-x-hidden relative w-full h-screen background_gradient"
    >
      <animated.div
        id="hero-text"
        className="absolute flex-col w-full transform-gpu top-1/4 -translate-y-1/2 z-0"
        style={{
          opacity: scrollY.to((value) => Math.max(1 - value / 500, 0)),
          transform: scrollY.to((value) => `translateY(${value * 1.2}px)`),
        }}
      >
        <div className="p-2 md:ml-40 sm:ml-8">
          <h1 className="head_text text-white font-bold xl:text-7xl 2xl:text-9xl w-4/5">
            SIMPLE WEB DEVELOPMENT, ROOTED IN CREATIVITY
          </h1>
          <p className="text-white xl:text-lg 2xl:text-3xl">
            We build branded websites, custom applications, and implement
            software solutions to drive operational profitability.
          </p>
        </div>
      </animated.div>
      <ParallaxDiv className="mountain1" transformMultiplier={0.15} />
      <ParallaxDiv className="developer" transformMultiplier={-0.15} />
      <ParallaxDiv className="mountain2" transformMultiplier={0.1} />
      <ParallaxDiv className="mountain3" transformMultiplier={0.15} />
      <ParallaxDiv className="cloud1" transformMultiplier={-0.05} />
      <ParallaxDiv className="cloud2" transformMultiplier={0.05} />
      <ParallaxDiv className="cloud3" transformMultiplier={-0.05} />
    </section>
  )
}
