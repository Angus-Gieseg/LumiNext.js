'use client'
import Image from 'next/image'

export const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="shadow-lg flex-between w-full mb-8 pr-8 fixed top-0 left-0 right-0 z-20 bg-purple-700">
      <a className="flex flex-center">
        <Image
          src="/Assets/NotBadWebsitesLogoOrangeAsset23@4x-8.png"
          alt="Not Bad Websites Logo"
          width={250}
          height={250}
          layout="intrinsic"
        />
      </a>
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

export default Navbar
