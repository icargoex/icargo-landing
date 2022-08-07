import React from "react"
import TestimonyCard from "./card"
import "twin.macro"

const TestimonyGrid = () => {
  return (
    <div tw="grid grid-cols-1 gap-12">
      <TestimonyCard />
    </div>
  )
}

export default TestimonyGrid
