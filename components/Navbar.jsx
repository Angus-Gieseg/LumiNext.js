'use client'
import link from 'next/link'
import Image from 'next/image'
import Link from 'next/link'

export const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    // Add a radius around the bottom corners, and a shadow
    <nav className="shadow-lg flex-between w-full mb-8 pr-8 fixed top-0 left-0 right-0 z-20 bg-purple-700">
      <Link href="/" className="flex flex-center">
        <Image
          src="/Assets/Not Bad Websites Logo OrangeAsset 23@4x-8.png"
          width={250}
          height={250}
          alt="Not Bad Websites Logo"
        />
      </Link>
      <div className="flex gap-8 flex-center text-slate-200 font-medium">
        <button className="sm:text-sm" onClick={() => scrollToSection('about')}>
          About
        </button>
        <button
          className="sm:text-sm"
          onClick={() => scrollToSection('contact')}
        >
          Contact
        </button>
      </div>
    </nav>
  )
}
