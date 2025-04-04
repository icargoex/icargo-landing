import * as React from "react"
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from "../components/button"
import NetworkMap from "../components/Map/network-map"
import TestimonyGrid from "../components/Testimony/grid"
import Carousel from "../components/photo-carousel"
import network from "../data/network"
import { BREAKPOINTS } from "../utils/constants"
import ModernHero from "../components/Modern/hero"
import Stats from "../components/Modern/stats"
import AboutSection from "../components/Modern/about"
import NetworkSection from "../components/Modern/network"
import TestimonialSection from "../components/Modern/testimonials"
import TeamSection from "../components/Modern/team"
import FinalCta from "../components/Modern/final-cta"

const LandingPage = () => {
  const networkData = network

  return (
    <Layout>
      <Seo title="iCargoEx - Professional E-commerce Fulfillment Solutions" />

      {/* Hiring Banner */}
      <HiringBanner>
        <div tw="container mx-auto text-center py-3">
          <Link to="/careers" tw="text-white font-bold hover:underline">
            We're Hiring! Join our team and help shape the future of logistics.
          </Link>
        </div>
      </HiringBanner>

      {/* Hero Section */}
      <ModernHero />

      {/* About Section */}
      <AboutSection />

      {/* Stats Section */}
      <Stats />

      {/* Network Section */}
      <NetworkSection data={networkData} />

      {/* Testimonials */}
      <TestimonialSection />

      {/* Team Section */}
      <TeamSection />

      {/* Supercharge CTA + Carousel */}
      <FinalCta />
    </Layout>
  )
}

// Styled Components
const HiringBanner = styled.div`
  ${tw`bg-yellow-500 py-2 sticky top-0 z-50`}
`

export default LandingPage
