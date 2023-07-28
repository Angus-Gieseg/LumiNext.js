'use client'
import React from 'react'

// Card Component
// Card Component
const Card = ({ title, subtitle, bulletPoints }) => {
  const [showMore, setShowMore] = React.useState(false)
  return (
    <div className="card shadow-md rounded-lg relative overflow-hidden bg-white">
      <div className="front p-4 rounded-md w-full">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{subtitle}</p>
      </div>
      {showMore && (
        <div className="back bg-white p-4 rounded-md">
          <ul className="list-disc list-inside mt-2">
            {bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      )}
      <button
        className="mt-4 bg-slate-200 text-blue-500 font-semibold rounded-md px-4 py-2 m-3"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? 'See Less' : 'See More'}
      </button>
    </div>
  )
}

const WebDesignProcess = () => {
  // Define data for each card
  const cardData = [
    {
      title: '1. Initial Discussion',
      subtitle: 'Phone Call & Pricing',
      bulletPoints: [
        'Discuss website requirements',
        'Gather important details',
        'Provide transparent pricing',
      ],
    },
    {
      title: '2. Building Connections',
      subtitle: 'Coffee & Chat',
      bulletPoints: [
        'Meet over coffee',
        'Discuss vision, goals, preferences',
        'Understand brand deeply',
      ],
    },
    {
      title: '3. Creative Planning',
      subtitle: 'Strategy & Ideation',
      bulletPoints: [
        'Understand your objectives',
        'Brainstorm creative ideas',
        'Develop tailored strategy',
      ],
    },
    {
      title: '4. Visualizing the Design',
      subtitle: 'Design Mockups',
      bulletPoints: [
        'Present captivating mockups',
        'Align with brand identity',
        'Gather feedback for refinement',
      ],
    },
    {
      title: '5. Bringing it to Life',
      subtitle: 'Development',
      bulletPoints: [
        'Skilled developers create a user-friendly website',
        'Keep you informed of progress',
      ],
    },
    {
      title: '6. Final Review & Launch',
      subtitle: 'Review & Launch',
      bulletPoints: [
        'Thorough review for performance',
        'Get feedback for final touches',
        'Celebrate website launch',
      ],
    },
  ]

  return (
    <section id="process" className="w-full py-20 px-4 sm:px-0">
      <div className=" px-8">
        <h2 className="text-2xl font-bold mb-4">What to Expect</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cardData.map((data, index) => (
            <Card key={index} {...data} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WebDesignProcess
