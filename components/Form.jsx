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
          <form
            className="grid gap-4 w-1/2 "
            data-netlify="true"
            method="POST"
            name="contact"
          >
            {' '}
            <input
              className="p-2 border border-purple-600 rounded-md"
              type="text"
              placeholder="Name"
            />
            <input
              className="p-2 border border-purple-600 rounded-md"
              type="text"
              placeholder="Email"
            />
            <input
              className="p-2 border border-purple-600 rounded-md"
              type="text"
              placeholder="Phone"
            />
            <select
              className="p-2 border border-purple-600 rounded-md"
              name="service"
              id="service"
            >
              <option value="Web Development">Web Development</option>
              <option value="CRM and Email Automation">
                CRM/ Email Automation
              </option>
              <option value="General Consultation">General Consulation</option>
            </select>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="pricing"
                name="pricing"
                value="pricing"
                className="mr-2"
              />
              <label
                htmlFor="pricing"
                className="text-sm text-slate-800 font-semibold"
              >
                I would like to recieve a pricing sheet
              </label>
            </div>
            <button
              type="submit"
              className="mt-4 py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="hidden sm:block sm:w-3/5 justify-center">
          <Image
            src="/Assets/pexels-fauxels-3184465.webp"
            alt="Contact Form"
            width={300}
            height={300}
            className="mx-auto sm:w-4/4 h-auto rounded-md shadow-md border-4 border-orange-200"
          />
        </div>
      </div>
      <hr className="mt-8 border-3 border-amber-500 drop-shadow-xl"></hr>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Image
              src="/Assets/NBWLogoReversedAsset21.webp"
              alt="Contact Form"
              width={300}
              height={300}
              className="mx-auto"
            />
            <p className="text-sm text-slate-800 font-semibold">
              &copy; 2023 - All Rights Reserved
            </p>
          </div>
          <div className="flex flex-col justify-between items-left space-x-4">
            <h3 className="text-base text-slate-800 font-semibold">
              Contact Info.
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
