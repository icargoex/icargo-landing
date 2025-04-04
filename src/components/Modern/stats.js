import React from "react"
import tw, { styled } from "twin.macro"
import { motion } from "framer-motion"
import { TbTruckDelivery } from "react-icons/tb"
import { FaWarehouse, FaGlobeAmericas } from "react-icons/fa"

const Stats = () => {
  return (
    <StatsSection>
      <div tw="container mx-auto px-4">
        <div tw="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard
            icon={<FaGlobeAmericas />}
            title="Coverage"
            value="97%"
            description="of continental U.S.A covered for Prime orders by FedEx, UPS, and other major LTL carriers"
            delay={0}
          />

          <StatCard
            icon={<FaWarehouse />}
            title="Fulfillment Centers"
            value="10"
            description="e-commerce fulfillment centers strategically located in the U.S. and Mexico"
            delay={0.1}
          />

          <StatCard
            icon={<TbTruckDelivery />}
            title="Specialization"
            value="Large Items"
            description="Specialized in handling furniture, e-bikes and other large items for e-commerce sellers"
            delay={0.2}
          />
        </div>
      </div>
    </StatsSection>
  )
}

const StatCard = ({ icon, title, value, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <CardContainer>
        <IconContainer>{icon}</IconContainer>
        <div tw="text-center mt-4">
          <h3 tw="text-gray-600 text-sm uppercase tracking-wider font-semibold">
            {title}
          </h3>
          <ValueText>{value}</ValueText>
          <p tw="text-gray-600 mt-2">{description}</p>
        </div>
      </CardContainer>
    </motion.div>
  )
}

const StatsSection = styled.section`
  ${tw`py-20 bg-gray-50`}
`

const CardContainer = styled.div`
  ${tw`bg-white rounded-xl shadow-lg p-6 h-full`}
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    ${tw`shadow-xl`}
  }
`

const IconContainer = styled.div`
  ${tw`w-16 h-16 rounded-full bg-blue-800 text-yellow-400 flex items-center justify-center mx-auto`}
  font-size: 1.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 26, 86, 0.3);
`

const ValueText = styled.div`
  ${tw`text-blue-800 font-bold text-4xl md:text-5xl mt-3 mb-2`}
`

export default Stats
