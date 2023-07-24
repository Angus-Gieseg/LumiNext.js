'use client'

import React from 'react'

// Contact form to gather contact information(Phone, Email, Name) from potential clients, and send it to the backend
// Additionally a tick box to determine whether they would like to recieve pricing sheet
// Drop down box to determine what type of service they are inquiring regarding.
export const Form = () => {
  return (
    <section className="contact_section">
      <form>
        <h3 className="contact_heading">Contact Us</h3>
        <div className="contact_form">
          <input className="contact_input" type="text" placeholder="Name" />
          <input className="contact_input" type="text" placeholder="Email" />
          <input className="contact_input" type="text" placeholder="Phone" />
          <select className="contact_input" name="service" id="service">
            <option value="Web Development">Web Development</option>
            <option value="CRM and Email Automation">
              CRM/ Email Automation
            </option>
            <option value="General Consultation">General Consulation</option>
          </select>
          <div className="contact_checkbox">
            <input
              type="checkbox"
              id="pricing"
              name="pricing"
              value="pricing"
            />
          </div>
          <label for="pricing">I would like to recieve a pricing sheet</label>
        </div>
      </form>
      <div className="flex justify-center items-center sm:w-1/2">
        <img
          src="/Assets/ProfilePicture.jpg"
          alt="Angus"
          className="w-full sm:w-1/2 rounded-lg shadow-lg"
        />
      </div>
    </section>
  )
}

export default Form
