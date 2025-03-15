import React from "react"
import tw, { styled } from "twin.macro"
import { motion } from "framer-motion"
import LogoGrid from "../logo-grid"

const AboutSection = () => {
  return (
    <section id="about" tw="py-20 bg-white">
      <div tw="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionTitle>About iCargoEx Inc.</SectionTitle>

          <div tw="max-w-4xl mx-auto">
            <Paragraph>
              Established in 2018 and headquartered in Atlanta Georgia, iCargoEx
              has quickly emerged as a major player of e-commerce fulfillment
              center with warehouses and operations in seven regions in the U.S.
              and Mexico including Atlanta, New Jersey, Houston, Salt Lake City,
              Sacramento, Los Angeles, and Tecate, BC Mexico.
            </Paragraph>

            <Paragraph>
              We have been focused on serving e-commerce sellers on Amazon,
              Walmart, Wayfair, eBay, and Chewy platforms with support by our{" "}
              <Highlight>Dynamic Logistics Platform</Highlight> which enables
              customers to optimize their fulfillment strategies and resources
              on a single system. We specialize in handling large items ranging
              from furniture to e-bike. With a professional service team in
              China, we're able to provide door to door logistics solutions from
              China, Vietnam, and Thailand to all major ports and inland
              locations in the U.S.
            </Paragraph>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          tw="mt-16"
        >
          <div tw="text-center mb-8">
            <h3 tw="text-blue-800 text-xl font-semibold">
              Trusted By Leading E-commerce Platforms
            </h3>
          </div>
          <LogoGrid />
        </motion.div>
      </div>
    </section>
  )
}

const SectionTitle = styled.h2`
  ${tw`text-blue-800 text-3xl md:text-4xl font-bold mb-10 text-center`}

  &:after {
    content: "";
    display: block;
    width: 80px;
    height: 4px;
    ${tw`bg-yellow-400 mx-auto mt-4`}
  }
`

const Paragraph = styled.p`
  ${tw`text-gray-700 text-lg leading-relaxed mb-6`}
`

const Highlight = styled.span`
  ${tw`text-blue-600 font-semibold`}
`

export default AboutSection
