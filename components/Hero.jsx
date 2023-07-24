'use client'
import { useEffect } from 'react'
import Image from 'next/image'

export const Hero = () => {
  const handleScroll = () => {
    const imageLeft = document.getElementById('imageLeft')
    const imageRight = document.getElementById('imageRight')
    const scrollY = window.scrollY

    imageLeft.style.transform = `translateX(${scrollY * 1}px) scale(${
      1 + scrollY * 0.01
    })`
    imageLeft.style.transformOrigin = 'bottom center'
    imageRight.style.transform = `translateX(-${scrollY * 1}px) scale(${
      1 + scrollY * 0.01
    })`
    imageRight.style.transformOrigin = 'bottom center'
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="relative h-screen w-screen z-10 flex flex-col items-center justify-center background_gradient">
      <div id="imageLeft" className="absolute left-0 bottom-0">
        <Image
          src="/Assets/BN christchurch websitesAsset 13@4x-8.png"
          width={500}
          height={500}
          alt="Left Image"
        />
      </div>

      <div id="imageRight" className="absolute right-0 bottom-0">
        <Image
          src="/Assets/SM website developmentAsset 14@4x-8.png"
          width={100}
          height={100}
          alt="Right Image"
        />
      </div>

      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-left p-2">
          SIMPLE WEB DEVELOPMENT, ROOTED IN CREATIVITY
        </h1>
        <p className="sub_text text-center">
          We are a small team of web developers and designers who love to create
          simple, yet beautiful websites.
        </p>
      </section>
    </div>
  )
}
