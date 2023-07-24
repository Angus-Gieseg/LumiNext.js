'use strict'
import React from 'react'

const PartnerShowcase = () => {
  const partners = [
    {
      name: 'Greenwood',
      description: 'This is Partner 1',
      image: '/Assets/james_bradnew-scaled.jpeg',
      logo: '/Assets/Greenwood sheds logoAsset 20@4x-8.png',
      link: 'www.greenwoodshedsinfo.co.nz',
    },
    {
      name: 'Sinsulation',
      description: 'This is Partner 2',
      image: '/Assets/pexels-fauxels-3184465.jpg',
      logo: '/Assets/Sinsulation logoAsset 19@4x-8.png',
      link: 'www.greenwoodshedsinfo.co.nz',
    },
    {
      name: 'Sinsulation',
      description: 'This is Partner 2',
      image: '/Assets/pexels-fauxels-3184465.jpg',
      logo: '/Assets/Sinsulation logoAsset 19@4x-8.png',
      link: 'www.greenwoodshedsinfo.co.nz',
    },
    // add more partners here...
  ]

  return (
    <section className="pt-20 pb-20 px-4 sm:px-0">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8 text-center">
        Our Partners
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-lg rounded-lg p-5"
          >
            <div className="w-24 h-24 mb-3">
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-64 h-40 mb-3">
              <img
                src={partner.image}
                alt={partner.name}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {partner.name}
            </h3>
            <p className="text-base text-gray-500 mb-3">
              {partner.description}
            </p>
            <a
              href={partner.link}
              className="text-blue-600 hover:text-blue-800"
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PartnerShowcase
