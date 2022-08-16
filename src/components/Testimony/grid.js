import React from "react"
import TestimonyCard from "./card"
import "twin.macro"

import data from "../../data/testimony"

const TestimonyGrid = () => {
  return (
    <div tw="grid grid-cols-1 gap-12">
      {data.map(testimony => {
        return <TestimonyCard {...testimony} />
      })}
    </div>
  )
}

export default TestimonyGrid
