import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { css } from "twin.macro"
import { Navigation, A11y, Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/a11y"
import "swiper/css/autoplay"

const Carousel = () => {
  const { allFile: allImages } = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { regex: "/photos*/" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData
            }
            id
          }
        }
      }
    }
  `)

  return (
    <Swiper
      modules={[Navigation, A11y, Autoplay]}
      navigation
      loop
      a11y
      autoplay
      css={css`
        height: 35rem;

        .gatsby-image-wrapper {
          height: 100%;
        }
      `}
    >
      {allImages.edges.map(obj => {
        const img = getImage(obj.node)

        return (
          <SwiperSlide key={obj.node.id}>
            <GatsbyImage
              image={img}
              alt="Warehouse photos"
              objectPosition="center"
              tw="w-full"
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default Carousel
