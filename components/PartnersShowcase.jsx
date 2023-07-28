'use strict'
import React from 'react'

const PartnerShowcase = () => {
  const partners = [
    {
      name: 'Greenwood',
      description:
        'For this client we were engaged to build a website from scratch. We were able to deliver a website that was modern and a great asset to generate new leads. We were additionally engaged to modernise their admins process by replacing their spreadsheets to a cloud solution that meant there was no double handling of client information. ',
      image: '/Assets/GreenwoodShedsWebsiteImage.png',
      logo: '/Assets/Greenwood sheds logoAsset 20@4x-8.png',
      link: 'https://greenwoodsheds.netlify.app/',
    },
    {
      name: 'Sinsulation',
      description:
        'For this client we were engaged to takeover their website design and optimise their SEO. Additionally handle their Google Ads. Through the experience we were able to increase their website traffic by over 900%',
      image: '/Assets/james_bradnew-scaled.jpeg',
      logo: '/Assets/Sinsulation logoAsset 19@4x-8.png',
      link: 'https://sinsulation.co.nz/',
    },
    {
      name: 'University Of Canterbury Chaplains',
      description:
        'The University of Canterbury Chaplains needed a new website to showcase their services and events. We were able to deliver a website that was modern and easy to navigate.',
      image: '/Assets/Chaplains UC website.png',
      logo: '/Assets/ChaplainsLogo.png',
      link: 'https://ucchaplains.netlify.app/',
    },
    // add more partners here...
  ]

  return (
    <section className="pt-20 pb-20 px-8 sm:px-0">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8 text-center">
        Recent Clients
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-10 px-4 sm:px-8">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row bg-white shadow-lg rounded-lg p-5 space-y-5 sm:space-y-0 sm:space-x-5"
          >
            <div className="flex flex-col justify-between w-full sm:w-1/2 space-y-5">
              <div>
                <div className="w-24 h-24 mb-3">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center sm:text-left">
                  {partner.name}
                </h3>
                <p className="text-base text-gray-500 mb-3 text-center sm:text-left">
                  {partner.description}
                </p>
              </div>
              <a
                href={partner.link}
                className="text-blue-600 hover:text-blue-800 bl w-full text-center sm:text-left"
              >
                Visit Website
              </a>
            </div>
            <div className="w-full sm:w-fu">
              <img
                src={partner.image}
                alt={partner.name}
                className="w-full md:min-h-[300px] object-cover rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PartnerShowcase
