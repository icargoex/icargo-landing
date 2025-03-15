import React from "react"
import tw, { styled } from "twin.macro"
import { motion } from "framer-motion"
import NetworkMap from "../Map/network-map"
import Button from "../button"

const NetworkSection = ({ data }) => {
  return (
    <section id="network" tw="py-20 bg-blue-800">
      <div tw="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionTitle>Our Network</SectionTitle>

          <div tw="max-w-3xl mx-auto mb-12 text-center">
            <p tw="text-blue-100 text-lg">
              With strategically located fulfillment centers across North
              America, we provide comprehensive logistics coverage to optimize
              your e-commerce operations.
            </p>
          </div>

          <div tw="relative bg-blue-700 bg-opacity-30 rounded-xl p-4 md:p-8 mb-12">
            <NetworkMap data={data} />
          </div>

          <NetworkFeatures />

          <div tw="mt-16 flex justify-center">
            <Button
              title="Talk To An Expert"
              to="mailto:info@icargoex.com?subject=Request For Quote"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const NetworkFeatures = () => {
  const features = [
    {
      title: "Strategic Locations",
      description:
        "Fulfillment centers positioned to maximize delivery speed and reduce shipping costs",
    },
    {
      title: "Multi-Channel Support",
      description:
        "Integrated solutions for Amazon, Walmart, Wayfair, eBay, Chewy and more",
    },
    {
      title: "Large Item Expertise",
      description:
        "Specialized in furniture, e-bikes and other large items that require special handling",
    },
    {
      title: "International Reach",
      description:
        "Door-to-door logistics from Asia to all major US ports and inland locations",
    },
  ]

  return (
    <div tw="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <FeatureCard>
            <h3 tw="text-blue-800 font-semibold text-lg mb-2">
              {feature.title}
            </h3>
            <p tw="text-gray-600">{feature.description}</p>
          </FeatureCard>
        </motion.div>
      ))}
    </div>
  )
}

const SectionTitle = styled.h2`
  ${tw`text-yellow-400 text-3xl md:text-4xl font-bold mb-6 text-center`}

  &:after {
    content: "";
    display: block;
    width: 80px;
    height: 4px;
    ${tw`bg-yellow-400 mx-auto mt-4 opacity-50`}
  }
`

const FeatureCard = styled.div`
  ${tw`bg-white rounded-lg p-5 h-full shadow-lg`}
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

export default NetworkSection
