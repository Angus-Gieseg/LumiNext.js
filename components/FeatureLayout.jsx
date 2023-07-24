'use client'

import FeatureCard from '@components/FeatureCard'
import { useSpring, animated } from 'react-spring'
const FeatureLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 pt-8">
      <h1 className="head_text text-6xl font-bold text-center orange-purple_gradient">
        OUR CORE SERVICES
      </h1>
      <div className="grid grid-cols-3 gap-10 m-8 pb-8">
        <FeatureCard
          imgSrc="Assets/Website builder iconAsset 16@4x-8.png"
          heading="Web Development"
          text="We build websites that are fast, secure, and easy to manage."
        />
        <FeatureCard
          imgSrc="Assets/CRM icon imageAsset 17@4x-8.png"
          heading="CRM and Email Automation"
          text="We help you automate your sales and marketing processes."
        />
        <FeatureCard
          imgSrc="Assets/DigitalAdvisory iconAsset 18@4x-8.png"
          heading="Digital Advisory"
          text="We help you make the right decisions for your business."
        />
      </div>
    </div>
  )
}

export default FeatureLayout
