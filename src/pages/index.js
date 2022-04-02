import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "twin.macro"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from "../components/button"
import LogoGrid from "../components/logo-grid"
import MapInfoCard from "../components/map-info-card"

const IndexPage = () => (
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
      />

      <div tw="container py-20 z-10 relative">
        <h1 tw="text-yellow-400 text-8xl font-extrabold leading-normal mb-5 w-4/5">
          Fulfilling your promises as online sellers
        </h1>
        <p tw="text-white text-3xl leading-normal w-1/2 mb-8">
          Let us handle the shipments so you can deliver the best to your
          customers
        </p>

        <Button title="Get a Quote" />
      </div>
    </section>

    <section>
      <div tw="container py-60">
        <div tw="mx-40 mb-20">
          <h1 tw="text-yellow-400 text-7xl font-bold leading-normal mb-10">
            E-Commerce fulfillment on platforms you care about ❤️
          </h1>
          <p tw="text-white text-xl">
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

    <section
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
        <p>of continental U.S.A by FedEx, UPS, and other major LTL carriers</p>
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

      <div>
        <MapInfoCard />
      </div>
    </section>
  </Layout>
)

export default IndexPage
