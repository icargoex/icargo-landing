import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import tw, { css, styled } from "twin.macro"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from "../components/button"
import LogoGrid from "../components/logo-grid"
import MapInfoCard from "../components/map-info-card"
import Carousel from "../components/carousel"

import network from "../data/network"

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
          <HeroTitle>Fulfilling our promises to online sellers</HeroTitle>
          <HeroSubtitle tw="">
            Let us handle the shipments so you can deliver the best to your
            customers
          </HeroSubtitle>

          <Button title="Get a Quote" />
        </div>
      </section>

      <section>
        <div tw="container py-20">
          <div tw="mb-20">
            <H1>E-Commerce fulfillment on platforms you care about ❤️</H1>
            <p tw="text-white">
              We have been focused on serving e-commerce sellers on Amazon,
              Walmart, Wayfair, eBay, and Chewy platforms with support by our{" "}
              <span tw="text-yellow-400">Dynamic Logistics Platform</span> which
              enables customers to optimize their fulfillment strategies and
              resources on a single system.
            </p>
          </div>

          <LogoGrid />
        </div>
      </section>

      {/* <section
        tw="container flex place-content-between text-xl mb-60"
        css={css`
          .text-stats {
            font-weight: 800;
            font-size: 15rem;
            line-height: 1;
          }
        `}
      >
        <div tw="text-white">
          <p>Capable of fulfilling Prime orders covering</p>
          <p tw="text-yellow-400" className="text-stats">
            97%
          </p>
          <p>
            of continental U.S.A by FedEx, UPS, and other major LTL carriers
          </p>
        </div>
        <div tw="bg-yellow-400 p-10 rounded-xl">
          <p tw="text-blue-800 text-center" className="text-stats">
            20
          </p>
          <p>e-commerce fulfillment centers in the U.S. and Mexico</p>
        </div>
      </section>

      <section tw="container pb-60">
        <h1 tw="text-center font-extrabold text-7xl text-yellow-400 mb-20">
          Our Network
        </h1>

        <div tw="flex flex-wrap place-content-around space-y-10">
          {networkData.map((data, i) => {
            return <MapInfoCard {...data} key={i} />
          })}
        </div>
      </section>

      <section>
        <div tw="container">
          <h1 tw="text-center font-extrabold text-7xl text-yellow-400 mb-20">
            Supercharge your supply chain ⚡️
          </h1>
        </div>
        <Carousel />
      </section> */}
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
`

export default IndexPage
