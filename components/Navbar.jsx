'use client'
import link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export const Navbar = () => {
  // const scrollToSection = (sectionId) => {
  //   const element = document.getElementById(sectionId)
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' })
  //   }
  // }
  return (
    // Add a radius around the bottom corners, and a shadow
    <nav className="shadow-lg flex-between w-full mb-8 pr-3 fixed top-0 left-0 right-0 z-20 bg-purple-950">
      <Link href="/" className="flex flex-center">
        <Image
          src="/Assets/Not Bad Websites Logo OrangeAsset 23@4x-8.png"
          width={250}
          height={250}
          alt="Not Bad Websites Logo"
        />
      </Link>
      <div className="flex gap-4 flex-center">
        <button onClick={() => scrollToSection('section1')}>Section 1</button>
        <button onClick={() => scrollToSection('section1')}>Section 1</button>
      </div>
    </nav>
  )
}
