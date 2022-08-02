import * as React from "react"
import "twin.macro"
import { BsCheck2Circle } from "react-icons/bs"
import { FiUsers, FiPhone } from "react-icons/fi"

const MapInfoCard = ({ code, size, address, contact, phone, features }) => {
  return (
    <div
      tw="md:inline-flex p-7 md:p-10 bg-white rounded-xl md:space-x-10 place-content-between z-50 md:min-w-max w-52 text-xs md:text-sm"
      className="card"
    >
      <div>
        <p tw="text-xs md:text-sm text-gray-500">
          {size.toLocaleString("en-US")} sqf
        </p>
        <h1 tw="font-bold lg:text-5xl md:text-2xl">{code}</h1>
        <p tw="text-xs md:text-sm text-gray-500">{address}</p>

        <ul tw="mt-5 space-y-3">
          {features &&
            features.map((feature, i) => (
              <li key={i} tw="flex">
                <BsCheck2Circle tw="text-green-500 inline mr-2 mt-1" />
                {feature}
              </li>
            ))}
        </ul>
      </div>
      <div tw="mt-10 md:mt-0">
        <div tw="flex">
          <FiUsers tw="inline mr-2 " />
          <p tw="mb-3">
            {contact.map((name, i) => (
              <span key={i}>
                {name}
                <br />
              </span>
            ))}
          </p>
        </div>
        <div tw="flex">
          <FiPhone tw="inline mr-2" />
          <p>{phone}</p>
        </div>
      </div>
    </div>
  )
}

export default MapInfoCard
