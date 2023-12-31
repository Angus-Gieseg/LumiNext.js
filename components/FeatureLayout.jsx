'use client'
import React from 'react'
import FeatureCard from './FeatureCard'

const FeatureLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 pt-8">
      <h1 className="head_text text-6xl font-bold text-center orange-purple_gradient">
        OUR CORE SERVICES
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 m-8 pb-8">
        <FeatureCard
          imgSrc="/Assets/Websitebuilder.webp"
          heading="Web Development"
          text="We build websites that are fast, secure, and easy to manage."
          features={[
            'Guaranteed Google speed test of 100%',
            'SEO optimized',
            'Custom domain',
            // add more features here...
          ]}
        />
        <FeatureCard
          imgSrc="/Assets/CRMicon.webp"
          heading="CRM and Email Automation"
          text="We help you automate your sales and marketing processes."
          features={[
            'Automate marketing campaigns',
            'Capture and track leads efficiently',
            'Segment and target customers with personalized communications',
          ]}
        />
        <FeatureCard
          imgSrc="/Assets/DigitalAdvisory.webp"
          heading="Custom Applications"
          text="We help you make custom applications for our business needs"
          features={[
            'Tailored to your specific business requirements',
            'Streamline business processes',
            'Integration with existing systems',
          ]}
        />
      </div>
    </div>
  )
}

export default FeatureLayout
