import React from "react"
import "twin.macro"

function TestimonyCard({ name, body, signature, id, logo }) {
  console.log(name)
  return (
    <div tw="bg-white p-10 rounded-xl">
      <img src={logo} alt={`${id} logo`} width={300} tw="mb-5 mx-auto" />
      <h1 tw="mb-3 text-gray-400 text-sm">{name}</h1>
      <figure>
        <blockquote>
          <p tw="font-bold text-blue-800">{body}</p>
        </blockquote>
        <figcaption tw="mt-5 text-gray-400 text-sm">{signature}</figcaption>
      </figure>
    </div>
  )
}

export default TestimonyCard
