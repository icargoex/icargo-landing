import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import tw, { styled } from "twin.macro"

const LogoGrid = () => {
  return (
    <GridContainer>
      <StaticImage src="../images/logos/amazon.png" objectFit="contain" />
      <StaticImage src="../images/logos/ebay.png" objectFit="contain" />
      <StaticImage src="../images/logos/walmart.png" objectFit="contain" />
      <StaticImage src="../images/logos/wayfair.png" objectFit="contain" />
      <StaticImage src="../images/logos/chewy.png" objectFit="contain" />
    </GridContainer>
  )
}

const GridContainer = styled.div`
  ${tw`flex bg-white p-10 rounded-xl`}

  .gatsby-image-wrapper {
    ${tw`m-8`}
  }
`

export default LogoGrid
