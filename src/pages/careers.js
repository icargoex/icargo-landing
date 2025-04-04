import React from "react"
import tw, { styled } from "twin.macro"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from "../components/button"
import GradientTitleBanner from "../components/gradient-title-banner"

const OperationsAnalystPage = () => {
  const jobRequirements = [
    "Identify potential problems and opportunities for improvement in areas such as business operation, inventory, logistics, and finance",
    "Monitor, collect and organize data such as sales histories, advertising campaigns and associated costs, market pricing, inventory turnover ratios, shipping rates, interest rates and customer feedback",
    "Manage and optimize the end-to-end order fulfillment process for assigned accounts",
    "Coordinate activities related to order entry, tracking, routing, and shipping",
    "Serve as the primary decision-maker for distribution network strategies, ensuring timely and efficient order delivery",
    "Collaborate with cross-functional teams (finance, customer service, sales, and warehousing) to streamline the vendor and distributor selection process",
    "Utilize Microsoft Access as the database management system for data such as sales, client information, and inventory management",
    "Apply analytics techniques in IBM SPSS Statistics such as descriptive ratio statistics, ANOVA, correlation, linear regression, factor analysis, forecasting and simulations",
    "Perform Data Mining Method to analyze customer performances based on receiving, storage and shipping, etc",
    "Use historical and real-time logistic data to construct predictive models for warehouse management, transportation, backorder trends, and delivery performance",
    "Develop predictive and analytical tools for material forecasting and planning models based on demand patterns",
    "Help the accounting department develop a time series model to forecast budget and reduce cost",
    "Collect, calculate, format and report key performance indicators for warehouses on a monthly basis",
  ]

  const qualifications = [
    "Master of Science Degree in Finance or Mathematics related field",
    "At least 3 years of experience in operations research analyst field",
    "Knowledge of descriptive ratio statistics, ANOVA, correlation, linear regression, factor analysis and logistics to develop and evaluate alternative courses of action",
    "Knowledge of database management systems, particularly Microsoft Access",
    "Expertise in using IBM SPSS Statistics for statistical analysis and data mining",
    "Ability to develop and implement data-driven strategies for optimizing warehouse operations",
  ]

  return (
    <Layout>
      <Seo title="Operations Research Analyst - iCargoEx - Professional E-commerce Fulfillment Solutions" />

      {/* Hiring Banner */}
      <HiringBanner>
        <div tw="container mx-auto text-center py-3">
          <span tw="text-white font-bold">
            We're Hiring! Join our team and help shape the future of logistics.
          </span>
        </div>
      </HiringBanner>

      {/* Hero Section with Gradient Background */}
      <HeroSection>
        <GradientWrapper>
          <GradientTitleBanner hideContent={true} />
        </GradientWrapper>

        <ContentOverlay>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            tw="text-center max-w-4xl mx-auto"
          >
            <JobTitle>Operations Research Analyst</JobTitle>
            <JobLocation>Gainesville, GA Area, United States</JobLocation>
          </motion.div>
        </ContentOverlay>
      </HeroSection>

      {/* Job Details */}
      <JobSection>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div tw="container mx-auto px-4">
            <SectionContainer>
              <SectionTitle>Role Overview</SectionTitle>
              <p tw="text-gray-600 mb-6">
                As an Operations Research Analyst at iCargoEx, you will use
                advanced analytical techniques to optimize our logistics
                operations, improve business processes, and drive data-based
                decision making across the organization. You will play a crucial
                role in enhancing our order fulfillment efficiency and
                developing predictive models that help us better serve our
                clients.
              </p>
            </SectionContainer>

            <SectionContainer>
              <SectionTitle>Key Responsibilities</SectionTitle>
              <ul tw="list-disc pl-6 text-gray-600 space-y-3">
                {jobRequirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            </SectionContainer>

            <SectionContainer>
              <SectionTitle>Qualifications</SectionTitle>
              <ul tw="list-disc pl-6 text-gray-600 space-y-3">
                {qualifications.map((qualification, index) => (
                  <li key={index}>{qualification}</li>
                ))}
              </ul>
            </SectionContainer>

            <SectionContainer tw="text-center">
              <SectionTitle>How to Apply</SectionTitle>
              <p tw="text-gray-600 mb-6">
                Ready to join our team? Send your resume to Ken Chen, President
                of iCargoEx, at
                <a
                  href="mailto:hr@icargoex.com"
                  tw="text-blue-600 hover:text-blue-800 ml-1"
                >
                  hr@icargoex.com
                </a>
              </p>
              <p tw="text-gray-600 mb-8">
                iCargoEx Inc. 2751 Buford Hwy, STE 200, Buford, GA 30518
              </p>
              <div tw="mt-8">
                <Button
                  title="Apply Now"
                  to="mailto:hr@icargoex.com?subject=Application for Operations Research Analyst Position"
                />
              </div>
            </SectionContainer>
          </div>
        </motion.div>
      </JobSection>
    </Layout>
  )
}

// Styled Components
const HiringBanner = styled.div`
  ${tw`bg-yellow-500 py-2 sticky top-0 z-50`}
`

const HeroSection = styled.section`
  ${tw`relative mx-auto overflow-hidden py-20 md:py-28`}
  height: 300px;
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
  ${tw`relative z-10 flex items-center justify-center h-full container px-4`}
`

const JobTitle = styled.h1`
  ${tw`text-white font-bold leading-tight mb-4`}
  ${tw`text-4xl md:text-5xl lg:text-6xl`}
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`

const JobLocation = styled.p`
  ${tw`text-gray-200 leading-relaxed`}
  ${tw`text-lg md:text-xl`}
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`

const JobSection = styled.section`
  ${tw`py-12 bg-white`}
`

const SectionContainer = styled.div`
  ${tw`mb-12 max-w-4xl mx-auto`}
`

const SectionTitle = styled.h2`
  ${tw`text-blue-800 text-2xl md:text-3xl font-bold mb-6`}

  &:after {
    content: "";
    display: block;
    width: 80px;
    height: 4px;
    ${tw`bg-yellow-400 mt-4`}
  }
`

export default OperationsAnalystPage
