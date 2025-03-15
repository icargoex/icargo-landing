import React from "react"
import tw, { styled } from "twin.macro"
import { motion } from "framer-motion"
import Carousel from "../photo-carousel"
import Button from "../button"

const FinalCta = () => {
  return (
    <section tw="pb-20 pt-16 bg-gradient-to-b from-blue-800 to-blue-900">
      <div tw="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          tw="mb-16"
        >
          <SectionTitle>Supercharge Your Supply Chain</SectionTitle>

          <div tw="max-w-2xl mx-auto text-center">
            <p tw="text-blue-100 text-lg mb-10">
              Optimize your e-commerce logistics with our comprehensive
              fulfillment solutions. Experience faster delivery times, reduced
              costs, and improved customer satisfaction.
            </p>

            <div tw="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                title="Talk To An Expert"
                to="mailto:info@icargoex.com?subject=Request For Quote"
              />
              <SecondaryButton title="Learn More" to="#about" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div tw="rounded-xl overflow-hidden">
            <Carousel />
          </div>

          <div tw="mt-6 text-center">
            <p tw="text-blue-200 text-sm">
              Our warehouses are equipped with state-of-the-art technology to
              ensure accurate and efficient order fulfillment
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const SectionTitle = styled.h2`
  ${tw`text-yellow-400 text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center`}

  &:after {
    content: "";
    display: block;
    width: 80px;
    height: 4px;
    ${tw`bg-yellow-400 mx-auto mt-4 opacity-50`}
  }
`

const SecondaryButton = ({ title, to }) => (
  <a
    href={to}
    css={[
      tw`inline-block py-3 px-6 rounded-md transition duration-300`,
      tw`border-2 border-white text-white hover:bg-white hover:text-blue-900`,
      tw`font-medium text-center content-center`,
    ]}
  >
    {title}
  </a>
)

export default FinalCta
