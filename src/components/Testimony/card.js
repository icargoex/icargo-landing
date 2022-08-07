import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import "twin.macro"

function TestimonyCard() {
  return (
    <div tw="bg-white p-10 rounded-xl text-center">
      <StaticImage
        src="../../images/logos/mika-micky.png"
        width={300}
        tw="mb-5"
      />
      <h1 tw="mb-3 text-gray-400 text-sm">
        Mika Micky - #1 Seller in Bedside Cribs on Amazon
      </h1>
      <figure>
        <blockquote>
          <p tw="font-bold text-blue-800">
            We've partnering with iCargoEx from very beganning our Amazon
            business when we launched our first product in 2018. And they have
            been helping us in almost every aspect of our logistics from freight
            to Amazon FC to handling warehousing, customer returns and spare
            parts fulfillment. We're very lucky to have such a partner that we
            can truly account on.
          </p>
        </blockquote>
        <figcaption tw="mt-5 text-gray-400 text-sm">
          Nicole Wang, Founder and CEO
        </figcaption>
      </figure>
    </div>
  )
}

export default TestimonyCard
