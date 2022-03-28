import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "twin.macro"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from "../components/button"
import LogoGrid from "../components/logo-grid"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <section tw="bg-blue-800 relative">
      <StaticImage
        src="../images/hero-bg.png"
        css={css`
          position: absolute;
          width: 100%;
          height: 100%;
        `}
      />

      <div tw="container py-20 z-10 relative">
        <h1 tw="text-yellow-400 text-8xl font-extrabold leading-normal mb-5 w-4/5">
          Fulfilling your promises as online sellers
        </h1>
        <p tw="text-white text-3xl leading-normal w-2/5 mb-8">
          Let us handle the shipments so you can deliver the best to your
          customers
        </p>

        <Button title="Get a Quote" />
      </div>
    </section>

    <section tw="bg-blue-800">
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
  </Layout>
)

export default IndexPage
