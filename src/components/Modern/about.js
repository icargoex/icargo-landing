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
              has emerged as a major player of 3PL fulfillment services with
              warehouses and operations across the U.S. and Mexico including Los
              Angeles, Sacramento, Atlanta, New Jersey, Tampa, Houston, Chicago,
              Tecate MX and Mexico City.
            </Paragraph>

            <Paragraph>
              We have been focused on serving our B2B and B2C customers to
              optimize their fulfillment and distribution strategies and
              resources on a single system. We specialize in handling large
              items ranging from furniture, ebike, gun safe, to industrial
              products and components. With a professional service team in the
              U.S., Mexico & China, we're able to provide cross border and door
              to door logistics solutions in the U.S. and Mexico.
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
