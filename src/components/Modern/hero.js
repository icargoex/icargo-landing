import React from "react"
import tw, { styled } from "twin.macro"
import { motion } from "framer-motion"
import Button from "../button"
import GradientTitleBanner from "../gradient-title-banner"

const ModernHero = () => {
  return (
    <HeroSection>
      {/* Gradient Background */}
      <GradientWrapper>
        <GradientTitleBanner hideContent={true} />
      </GradientWrapper>

      {/* Content overlay */}
      <ContentOverlay>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HeroTitle>
              Professional <span tw="text-yellow-400">Fulfillment</span>{" "}
              Solutions
            </HeroTitle>
            <HeroSubtitle>
              Let us handle your logistics so you can focus on growing your
              business. Complete e-commerce fulfillment with nationwide
              coverage.
            </HeroSubtitle>
            <div tw="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                title="Talk To An Expert"
                to="mailto:info@icargoex.com?subject=Request For Quote"
              />
              <SecondaryButton title="Learn More" to="#about" />
            </div>
          </motion.div>
        </HeroContent>
        <HeroImageContainer>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroStats>
              <StatItem>
                <StatNumber>97%</StatNumber>
                <StatText>US Coverage</StatText>
              </StatItem>
              <StatItem>
                <StatNumber>20</StatNumber>
                <StatText>Fulfillment Centers</StatText>
              </StatItem>
            </HeroStats>
          </motion.div>
        </HeroImageContainer>
      </ContentOverlay>
    </HeroSection>
  )
}

const HeroSection = styled.section`
  ${tw`relative mx-auto overflow-hidden`}
`

const GradientWrapper = styled.div`
  ${tw`absolute inset-0 z-10 overflow-hidden`}

  // Override GradientTitleBanner styles to make sure it fills the space
  canvas#gradient-canvas {
    height: 110% !important;
    width: 110% !important;
    position: absolute;
    top: -5%;
    left: -5%;
  }
`

const ContentOverlay = styled.div`
  ${tw`relative z-10 flex flex-col md:py-16 lg:py-28 lg:flex-row items-center h-full container`}
`

const HeroContent = styled.div`
  ${tw`lg:w-1/2 z-10`}
`

const HeroTitle = styled.h1`
  ${tw`text-white font-bold leading-tight mb-6`}
  ${tw`text-4xl md:text-5xl lg:text-6xl`}
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`

const HeroSubtitle = styled.p`
  ${tw`text-gray-200 leading-relaxed max-w-xl`}
  ${tw`text-lg md:text-xl`}
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`

const SecondaryButton = ({ title, to }) => (
  <a
    href={to}
    css={[
      tw`inline-block py-3 px-6 rounded-md transition duration-300 bg-blue-800`,
      tw`border-2 border-blue-700 text-blue-400 hover:bg-blue-400 hover:text-blue-900`,
      tw`font-medium text-center content-center`,
    ]}
  >
    {title}
  </a>
)

const HeroImageContainer = styled.div`
  ${tw`lg:w-1/2 relative mt-16 lg:mt-0`}
`

const HeroStats = styled.div`
  ${tw`flex gap-4`}
  width: 100%;
`

const StatItem = styled.div`
  ${tw`bg-white bg-opacity-90 rounded-lg shadow-lg p-4 flex-1 text-center backdrop-blur-sm`}
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    ${tw`shadow-xl`}
  }
`

const StatNumber = styled.div`
  ${tw`text-blue-800 font-bold text-3xl md:text-4xl`}
`

const StatText = styled.div`
  ${tw`text-gray-600 text-sm mt-1`}
`

export default ModernHero
