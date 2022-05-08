import * as React from "react"
import PropTypes from "prop-types"
import { css } from "twin.macro"
import { BsCheck2Circle } from "react-icons/bs"
import { FiUsers, FiPhone } from "react-icons/fi"

const MapInfoCard = ({ code, size, address, contact, phone, features }) => {
  return (
    <div
      tw="md:inline-flex p-10 bg-white rounded-xl md:space-x-10 place-content-between"
      css={css`
        min-height: 20rem;
        min-width: 35vw;
      `}
      className="card"
    >
      <div>
        <p tw="text-sm text-gray-500">{size.toLocaleString("en-US")} sqft</p>
        <h1 tw="font-bold text-5xl">{code}</h1>
        <p tw="text-sm text-gray-500">{address}</p>

        <ul tw="mt-5 space-y-3">
          {features &&
            features.map((feature, i) => (
              <li key={i} tw="flex">
                <BsCheck2Circle tw="text-green-500 inline mr-2 text-xl mt-1" />
                {feature}
              </li>
            ))}
        </ul>
      </div>
      <div tw="mt-10 md:mt-0">
        <div tw="flex">
          <FiUsers tw="inline mr-2 text-xl" />
          <p tw="mb-3">
            {contact.map((name, i) => (
              <span key={i}>
                {name}
                <br />
              </span>
            ))}
          </p>
        </div>
        <p>
          <FiPhone tw="inline mr-2 text-xl" />
          {phone}
        </p>
      </div>
    </div>
  )
}

export default MapInfoCard
