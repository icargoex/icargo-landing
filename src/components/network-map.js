import React, { useState } from "react"
import tw, { styled } from "twin.macro"
import { FiMapPin } from "react-icons/fi"

import MapImg from "../images/us-map.svg"
import MapInfoCard from "./map-info-card"

const NetworkMap = ({ data }) => {
  const [active, setActive] = useState("")

  const handleMouseOver = code => {
    setActive(code)
  }

  const handleMouseOut = e => {
    setActive("")
  }

  return (
    <MapContainer>
      <div>
        <BgImg src={MapImg} />

        <MapOverlay>
          {data.map(pin => {
            return (
              <Pin
                position={pin.position}
                code={pin.code}
                onMouseOver={() => handleMouseOver(pin.code)}
                onMouseOut={handleMouseOut}
                key={pin.code}
                active={active === pin.code}
              >
                <FiMapPin className="pin" />

                <MapInfoCard {...pin} />
              </Pin>
            )
          })}
        </MapOverlay>
      </div>
    </MapContainer>
  )
}

export default NetworkMap

const MapContainer = styled.div`
  overflow: hidden;
  position: relative;
`

const BgImg = styled.img`
  width: 100%;
`

const MapOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`
const Pin = styled.div`
  left: ${({ position }) => position[0]}%;
  top: ${({ position }) => position[1]}%;

  ${({ code }) => code === "WL-CA" && tw`z-50`}

  width: 5%;
  height: 10%;
  position: absolute;
  transform: translate(-50%, -50%);
  transition: height 0.5s;

  .pin {
    width: 4vw;
    height: 4vw;
    min-width: 4vw;
    min-height: 4vw;
    ${tw`text-yellow-400`}
    position: relative;
  }

  .card {
    position: absolute;
    // adjust info card position based on where they are on map
    left: ${({ code, position }) =>
      code.includes("NJ") || code.includes("GA")
        ? position[0] - 950
        : position[0] + 100}%;
    top: ${({ position }) => position[1] - 80}%;
    opacity: ${({ active }) => !active && "0"};
    visibility: ${({ active }) => !active && "hidden"};
    transition: visibility 0.5s, opacity 0.5s;
    cursor: auto;
  }

  &:hover {
    height: 12%;
    transition: height 0.5s;
    cursor: pointer;
  }
`