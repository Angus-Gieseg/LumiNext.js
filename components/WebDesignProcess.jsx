'use client'
import React from 'react'

const WebDesignProcess = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-2xl font-bold mb-4">What to Expect</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Row 1 */}
        <div className="shadow-md rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
          <div className="bg-white p-4 rounded-md">
            <h3 className="text-lg font-semibold mb-2">
              1. Initial Discussion
            </h3>
            <p className="text-gray-600">Phone Call & Pricing</p>
            <ul className="list-disc list-inside mt-2">
              <li>Discuss website requirements</li>
              <li>Gather important details</li>
              <li>Provide transparent pricing</li>
            </ul>
          </div>
        </div>
        <div className="shadow-md rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
          <div className="bg-white p-4 rounded-md">
            <h3 className="text-lg font-semibold mb-2">
              2. Building Connections
            </h3>
            <p className="text-gray-600">Coffee & Chat</p>
            <ul className="list-disc list-inside mt-2">
              <li>Meet over coffee</li>
              <li>Discuss vision, goals, preferences</li>
              <li>Understand brand deeply</li>
            </ul>
          </div>
        </div>

        <div className="shadow-md rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-2">3. Creative Planning</h3>
            <p className="text-gray-600">Strategy & Ideation</p>
            <ul className="list-disc list-inside mt-2">
              <li>Understand your objectives</li>
              <li>Brainstorm creative ideas</li>
              <li>Develop tailored strategy</li>
            </ul>
          </div>
        </div>

        {/* Row 2 */}
        <div className="shadow-md rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-2">
              4. Visualizing the Design
            </h3>
            <p className="text-gray-600">Design Mockups</p>
            <ul className="list-disc list-inside mt-2">
              <li>Present captivating mockups</li>
              <li>Align with brand identity</li>
              <li>Gather feedback for refinement</li>
            </ul>
          </div>
        </div>

        <div className="shadow-md rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-2">
              5. Bringing it to Life
            </h3>
            <p className="text-gray-600">Development</p>
            <ul className="list-disc list-inside mt-2">
              <li>Skilled developers create a user-friendly website</li>
              <li>Keep you informed of progress</li>
            </ul>
          </div>
        </div>

        <div className="shadow-md rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-2">
              6. Final Review & Launch
            </h3>
            <p className="text-gray-600">Review & Launch</p>
            <ul className="list-disc list-inside mt-2">
              <li>Thorough review for performance</li>
              <li>Get feedback for final touches</li>
              <li>Celebrate website launch</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebDesignProcess
