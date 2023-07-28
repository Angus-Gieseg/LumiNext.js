'use strict'
import React from 'react'
import Image from 'next/image'

export const Form = () => {
  return (
    <section className="py-20 px-4 sm:px-0 orange relative w-full" id="contact">
      <div className="max-w-7xl flex flex-col-reverse sm:flex-row justify-between items-center sm:mx-8">
        <div className="w-full sm:w-1/2 justify-center">
          <h2 className="text-3xl font-extrabold text-slate-800 sm:text-4xl mb-8 mt-8">
            Contact Us
          </h2>
          <form className="grid gap-4 w-1/2">{/* form fields */}</form>
        </div>
        <div className="mt-10 sm:mt-0 sm:w-3/5 justify-center">
          <Image
            src="/Assets/pexels-fauxels-3184465.jpg"
            alt="Contact Form"
            layout="fill"
            objectFit="cover"
            className="mx-auto sm:w-4/4 h-auto rounded-md shadow-md border-4 border-orange-200"
          />
        </div>
      </div>
      <hr></hr>
      {/* Footer Content */}
      <hr className="mt-8 border-3 border-amber-500 drop-shadow-xl"></hr>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Image
              src="/Assets/NBW Logo ReversedAsset 21.png"
              alt="logo"
              width={200}
              height={50}
              className="object-contain"
            />
            <p className="text-sm text-slate-800 font-semibold">
              &copy; 2023 - All Rights Reserved
            </p>
          </div>
          <div className="flex flex-col justify-between items-left space-x-4">
            <h3 className="text-base text-slate-800 font-semibold">
              Contact Info
            </h3>
            <div className="flex flex-col justify-between items-left space-y-2">
              <p className="text-sm text-slate-800 font-medium">
                angus@notbadwebsites.com
              </p>
              <p className="text-sm text-slate-800 font-medium">0220123254</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Form
