'use strict'
import React from 'react'

export const Form = () => {
  return (
    <section className="py-20 px-4 sm:px-0 bg-orange-300 relative w-full">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="w-full sm:w-1/2 ml-40">
          <h2 className="text-3xl font-extrabold text-slate-800 sm:text-4xl mb-8">
            Contact Us
          </h2>
          <form className="grid grid-cols-1 gap-4 w-1/2">
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
        <div className="mt-10 sm:mt-0 sm:w-3/5 sm:pl-10 absolute right-10 -top-10">
          <img
            src="/Assets/pexels-fauxels-3184465.jpg"
            alt="Contact Form"
            className="object-cover mx-auto sm:w-3/4 h-auto rounded-md shadow-md border-4 border-orange-200"
          />
        </div>
      </div>
    </section>
  )
}

export default Form
