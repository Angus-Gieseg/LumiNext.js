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
    <nav className="bg-white rounded-b-lg shadow-md flex-between w-full mb-8 p-3 fixed top-0 left-0 right-0 z-20">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/Assets/NBW Logo ReversedAsset 21.png"
          width={75}
          height={75}
          alt="Not Bad Websites Logo"
        />
      </Link>
      {/* <button onClick={() => scrollToSection('section1')}>Section 1</button> */}
    </nav>
  )
}
