'use client'
import { useEffect } from 'react'
import { useSpring, animated, config } from 'react-spring'

export const NewHero = () => {
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
        className="absolute flex-col w-full transform-gpu top-1/3 -translate-y-1/2 z-0"
        style={{
          opacity: scrollY.to((value) => Math.max(1 - value / 500, 0)),
          transform: scrollY.to((value) => `translateY(${value * 1.2}px)`),
        }}
      >
        <div className="p-2 ml-40">
          <h1 className="head_text text-white font-bold">
            SIMPLE WEB DEVELOPMENT, ROOTED IN CREATIVITY
          </h1>
          <p className="text-white">
            We build branded websites, custom applications, and implement
            software solutions to drive operational profitability.
          </p>
        </div>
      </animated.div>
      <animated.div
        className="mountain1 parallax absolute bg-no-repeat bg-contain"
        style={{
          transform: scrollY.to((value) => `translateX(${value * 0.15}px)`),
        }}
      />
      <animated.div
        className="developer parallax absolute bg-no-repeat bg-contain"
        style={{
          transform: scrollY.to((value) => `translateX(-${value * 0.15}px)`),
          transformOrigin: 'bottom',
        }}
      />
      <animated.div
        className="mountain2 parallax absolute bg-no-repeat bg-contain"
        style={{
          transform: scrollY.to((value) => `translateX(${value * 0.1}px)`),
        }}
      />
      <animated.div
        className="mountain3 parallax absolute bg-no-repeat bg-contain"
        style={{
          transform: scrollY.to((value) => `translateX(${value * 0.15}px)`),
        }}
      />
      <animated.div
        className="cloud1 parallax absolute bg-no-repeat bg-contain"
        style={{
          transform: scrollY.to((value) => `translateX(-${value * 0.05}px)`),
        }}
      />
      <animated.div
        className="cloud2 parallax absolute bg-no-repeat bg-contain"
        style={{
          transform: scrollY.to((value) => `translateX(${value * 0.05}px)`),
        }}
      />
      <animated.div
        className="cloud3 parallax absolute bg-no-repeat bg-contain"
        style={{
          transform: scrollY.to((value) => `translateX(-${value * 0.05}px)`),
        }}
      />
    </section>
  )
}
