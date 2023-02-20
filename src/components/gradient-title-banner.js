import React, { useEffect } from "react"
import tw, { styled } from "twin.macro"

import Button from "./button"

import { Gradient } from "../utils/gradient"

const GradientTitleBanner = () => {
  useEffect(() => {
    // Create your instance
    const gradient = new Gradient()

    // Call `initGradient` with the selector to your canvas
    gradient.initGradient("#gradient-canvas")

    return () => {
      gradient.disconnect()
    }
  })

  return (
    <>
      <CanvasWrapper>
        <canvas id="gradient-canvas" data-transition-in />
      </CanvasWrapper>

      <div tw="absolute inset-0 flex items-center">
        <div tw="container my-20 relative">
          <HeroTitle tw="mix-blend-screen">Deliver More</HeroTitle>
          <HeroTitle tw="absolute top-0 opacity-30">Deliver More</HeroTitle>

          <HeroSubtitle tw="mb-14">
            Let us handle the shipments so you can deliver the best to your
            customers
          </HeroSubtitle>

          <Button
            title="Talk To An Expert"
            to="mailto:info@icargoex.com?subject=Request For Quote"
          />
        </div>
      </div>
    </>
  )
}

const CanvasWrapper = styled.div`
  #gradient-canvas {
    width: 100%;
    height: 100%;
    --gradient-color-1: #001a56;
    --gradient-color-2: #1f5bc3;
    --gradient-color-3: #73afe3;
    --gradient-color-4: #c5811b;
  }
`

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

export default GradientTitleBanner
