'use client'
import React from 'react'
import ReactCardFlip from 'react-card-flip'
import Image from 'next/image'

// Card Component
const Card = ({ title, subtitle, bulletPoints, source }) => {
  const [isFlipped, setIsFlipped] = React.useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="card front shadow-md rounded-lg bg-white h-40">
        <div className="front p-4 rounded-md w-full relative">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{subtitle}</p>
          <button
            className="bg-white text-blue-400 font-semibold rounded-md mt-3 hover:underline"
            onClick={handleClick}
          >
            See More
          </button>
          <div className="absolute right-3 top-5 h-1/4 w-1/4 opacity-25">
            <Image
              src={source}
              alt={subtitle}
              height={200}
              width={200}
              objectFit="contain"
            />
          </div>
        </div>
      </div>

      <div className="card back shadow-md rounded-lg bg-blue-600">
        <div className="back bg-purple-600 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2 text-slate-100">{title}</h3>
          <ul className="list-disc list-inside mt-2 text-slate-100">
            {bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <button
            className=" bg-purple-600 text-white font-semibold rounded-md mt-3 hover:underline"
            onClick={handleClick}
          >
            See Less
          </button>
        </div>
      </div>
    </ReactCardFlip>
  )
}

const WebDesignProcess = () => {
  // Define data for each card
  const cardData = [
    {
      title: 'Initial Discussion',
      subtitle: 'Phone Call & Pricing',
      bulletPoints: [
        'Discuss website requirements',
        'Gather important details',
        'Provide transparent pricing',
      ],
      source: 'Icons/1NumberAsset 1.svg',
    },
    {
      title: 'Building Connections',
      subtitle: 'Coffee & Chat',
      bulletPoints: [
        'Meet over coffee',
        'Discuss vision, goals, preferences',
        'Understand brand deeply',
      ],
      source: 'Icons/2NumberAsset 2.svg',
    },
    {
      title: 'Creative Planning',
      subtitle: 'Strategy & Ideation',
      bulletPoints: [
        'Understand your objectives',
        'Brainstorm creative ideas',
        'Develop tailored strategy',
      ],
      source: 'Icons/3NumberAsset 3.svg',
    },
    {
      title: 'Visualizing the Design',
      subtitle: 'Design Mockups',
      bulletPoints: [
        'Present captivating mockups',
        'Align with brand identity',
        'Gather feedback for refinement',
      ],
      source: 'Icons/4NumberAsset 4.svg',
    },
    {
      title: 'Bringing it to Life',
      subtitle: 'Development',
      bulletPoints: [
        'Skilled developers create a user-friendly website',
        'Keep you informed of progress',
      ],
      source: 'Icons/5NumberAsset 7.svg',
    },
    {
      title: 'Final Review & Launch',
      subtitle: 'Review & Launch',
      bulletPoints: [
        'Thorough review for performance',
        'Get feedback for final touches',
        'Celebrate website launch',
      ],
      source: 'Icons/6NumberAsset 5.svg',
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
