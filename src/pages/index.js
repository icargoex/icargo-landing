import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "twin.macro"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from "../components/button"

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
        <p tw="text-white text-3xl leading-normal w-2/5 mb-5">
          Let us handle the shipments so you can deliver the best to your
          customers
        </p>

        <Button title="Get a Quote" />
      </div>
    </section>
  </Layout>
)

export default IndexPage
