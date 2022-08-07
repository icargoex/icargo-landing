import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import tw, { css, styled } from "twin.macro"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from "../components/button"
import LogoGrid from "../components/logo-grid"
import Carousel from "../components/photo-carousel"

import network from "../data/network"
import { BREAKPOINTS } from "../utils/constants"
import NetworkMap from "../components/Map/network-map"
import TestimonyGrid from "../components/Testimony/grid"

const IndexPage = () => {
  const networkData = network

  return (
    <Layout>
      <Seo title="Home" />

      <section tw="relative">
        <StaticImage
          src="../images/hero-bg.png"
          css={css`
            position: absolute;
            width: 100%;
            height: 100%;
          `}
          objectPosition="left top"
          alt=""
        />

        <div tw="container py-20 z-10 relative">
          <HeroTitle>Fulfill Your Dreams</HeroTitle>
          <HeroSubtitle tw="mb-20">
            Let us handle the shipments so you can deliver the best to your
            customers
          </HeroSubtitle>

          <Button
            title="Talk To An Expert"
            to="mailto:info@icargoex.com?subject=Request For Quote"
          />
        </div>
      </section>

      <section id="about">
        <div tw="container py-20">
          <div tw="mb-20">
            <H1>About iCargoEx Inc.</H1>
            <P>
              Established in 2018 and headquartered in Atlanta Georgia, iCargoEx
              has quickly emerged as a major player of e-commerce fulfillment
              center with warehouses and operations in seven regions in the U.S.
              and Mexico including Atlanta GA, Salt Lake City UT, Houston TX,
              New Jersey NY, Southern & Northern California, and Baja California
              Mexico.
            </P>
            <P>
              We have been focused on serving e-commerce sellers on Amazon,
              Walmart, Wayfair, eBay, and Chewy platforms with support by our{" "}
              <span tw="text-yellow-400">Dynamic Logistics Platform</span> which
              enables customers to optimize their fulfillment strategies and
              resources on a single system. We specialize in handling large
              items ranging from furniture to e-bike. With a professional
              service team in China, we’re able to provide door to door
              logistics solutions from China, Vietnam, and Thailand to all major
              ports and inland locations in the U.S.
            </P>
          </div>

          <LogoGrid />
        </div>
      </section>

      <StatsSection tw="mb-20 lg:mb-60">
        <div tw="text-white mt-20">
          <p>Capable of fulfilling Prime orders covering</p>
          <p tw="text-yellow-400" className="text-stats">
            97%
          </p>
          <p>
            of continental U.S.A by FedEx, UPS, and other major LTL carriers
          </p>
        </div>
        <div tw="bg-yellow-400 p-10 rounded-xl mt-20">
          <p tw="text-blue-800 lg:text-center" className="text-stats">
            20
          </p>
          <p>e-commerce fulfillment centers in the U.S. and Mexico</p>
        </div>
      </StatsSection>

      <section tw="container pb-48" id="network">
        <H1 tw="text-center">Our Network</H1>

        <NetworkMap data={networkData} />

        <div tw="pt-36 flex justify-center">
          <Button
            title="Talk To An Expert"
            to="mailto:info@icargoex.com?subject=Request For Quote"
          />
        </div>
      </section>

      <section tw="bg-yellow-400 mb-20">
        <div tw="container p-10">
          <H1 tw="text-blue-800 text-center">What Our Clients Say</H1>

          <TestimonyGrid />
        </div>
      </section>

      <section>
        <div tw="container">
          <H1>Supercharge your supply chain</H1>
        </div>
        <Carousel />
      </section>
    </Layout>
  )
}

const HeroTitle = styled.h1`
  ${tw`text-yellow-400 font-extrabold mb-5`}

  ${tw`text-4xl sm:text-5xl sm:leading-normal`}
  ${tw`md:text-6xl md:leading-relaxed`}
  ${tw`lg:text-7xl lg:leading-relaxed`}
  ${tw`xl:text-8xl xl:leading-relaxed`}

  line-height: 3.5rem;
`

const HeroSubtitle = styled.p`
  ${tw`text-white leading-normal mb-8`}

  ${tw`sm:text-lg md:text-xl lg:text-2xl xl:text-3xl`}
`

const H1 = styled.h1`
  ${tw`text-yellow-400 text-3xl font-bold leading-normal mb-5`}

  ${tw`md:text-6xl md:leading-relaxed`}
  ${tw`xl:text-7xl xl:leading-relaxed`}
`

const P = styled.p`
  ${tw`text-white lg:text-lg xl:text-xl mb-5`}
`

const StatsSection = styled.section`
  ${tw`container lg:flex place-content-between text-xl lg:space-x-20`}

  .text-stats {
    ${tw`font-extrabold text-9xl leading-none mb-0`}

    @media (min-width: ${BREAKPOINTS.xl}) {
      font-size: 15rem;
      line-height: 1;
    }
  }
`

export default IndexPage
