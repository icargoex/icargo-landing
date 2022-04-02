import * as React from "react"
import "twin.macro"
import { BsCheck2Circle } from "react-icons/bs"
import { FiUsers, FiPhone } from "react-icons/fi"

const MapInfoCard = () => {
  return (
    <div tw="inline-flex p-10 bg-white w-auto rounded-xl space-x-10">
      <div>
        <p tw="text-sm text-gray-500">140,000 sqft</p>
        <h1 tw="font-bold text-5xl">BC-GA</h1>
        <p tw="text-sm text-gray-500">
          2751 Buford Hwy, Suite 200, Buford, GA 30518{" "}
        </p>

        <ul tw="mt-5 space-y-3">
          <li>
            <BsCheck2Circle tw="text-green-500 inline mr-2 text-xl" />
            FBM by FedEx, UPS & LTL
          </li>
          <li>
            <BsCheck2Circle tw="text-green-500 inline mr-2 text-xl" />
            FBM by FedEx, UPS & LTL
          </li>
        </ul>
      </div>
      <div>
        <p tw="mb-3">
          <FiUsers tw="inline mr-2 text-xl" />
          <span>Jose Chang</span>
        </p>
        <p>
          <FiPhone tw="inline mr-2 text-xl" />
          (626) 360-8898
        </p>
      </div>
    </div>
  )
}

export default MapInfoCard
