import React from "react"
import tw, { styled } from "twin.macro"
import { motion } from "framer-motion"
import TestimonyGrid from "../Testimony/grid"
import { FaQuoteLeft } from "react-icons/fa"

const TestimonialSection = () => {
  return (
    <section tw="py-20 bg-white">
      <div tw="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          tw="mb-12"
        >
          <div tw="max-w-md mx-auto text-center">
            <QuoteIcon>
              <FaQuoteLeft />
            </QuoteIcon>
            <SectionTitle>What Our Clients Say</SectionTitle>
            <p tw="text-gray-600 mb-10">
              Don't just take our word for it. Here's what our clients have to
              say about our services.
            </p>
          </div>
        </motion.div>

        <div tw="bg-blue-50 rounded-2xl p-8 lg:p-12">
          <TestimonyGrid />
        </div>
      </div>
    </section>
  )
}

const SectionTitle = styled.h2`
  ${tw`text-blue-800 text-3xl md:text-4xl font-bold mb-4 text-center`}

  &:after {
    content: "";
    display: block;
    width: 80px;
    height: 4px;
    ${tw`bg-yellow-400 mx-auto mt-4`}
  }
`

const QuoteIcon = styled.div`
  ${tw`text-yellow-400 text-4xl mb-6 mx-auto`}
  width: fit-content;
`

export default TestimonialSection
