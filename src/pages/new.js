import * as React from "react"
import { css, styled } from "twin.macro"
import { StaticImage } from "gatsby-plugin-image"

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
import FinalCta from "../components/Modern/final-cta"

const NewLandingPage = () => {
  const networkData = network

  return (
    <Layout>
      <Seo title="iCargoEx - Professional E-commerce Fulfillment Solutions" />

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

      {/* Supercharge CTA + Carousel */}
      <FinalCta />
    </Layout>
  )
}

export default NewLandingPage
