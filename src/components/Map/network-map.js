import React, { useState } from "react"
import tw, { css, styled } from "twin.macro"
import { RiMapPin2Fill } from "react-icons/ri"

import MapImg from "../../images/us-mx-map.svg"
import MapInfoCard from "./map-info-card"

const NetworkMap = ({ data }) => {
  const [active, setActive] = useState("")

  const handleMouseOver = code => {
    setActive(code)
  }

  const handleMouseOut = () => {
    setActive("")
  }

  return (
    <MapContainer>
      <div>
        <BgImg src={MapImg} />

        <MapOverlay>
          <div>
            {data.map(pin => {
              return (
                <Pin
                  position={pin.position}
                  cardOffset={pin.cardOffset}
                  onMouseOver={() => handleMouseOver(pin.code)}
                  onMouseOut={handleMouseOut}
                  key={pin.code}
                  active={active === pin.code}
                >
                  <RiMapPin2Fill className="pin" />

                  {/* label component */}
                  <span
                    tw="block md:mt-2 mt-1 mx-auto p-1 text-[5px] md:text-xs text-center bg-yellow-400 rounded-full"
                    css={css`
                      width: fit-content;
                    `}
                  >
                    {pin.label}
                  </span>

                  <MapInfoCard {...pin} />
                </Pin>
              )
            })}
          </div>
        </MapOverlay>
      </div>
    </MapContainer>
  )
}

export default NetworkMap

const MapContainer = styled.div`
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
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
    margin: 0 auto;
  }

  .card {
    position: absolute;

    // adjust info card position based on where they are on map
    left: ${({ cardOffset, position }) =>
      position[0] + (cardOffset ? cardOffset[0] : 0) + 100}%;
    top: ${({ cardOffset, position }) =>
      position[1] + (cardOffset ? cardOffset[1] : 0) - 80}%;

    opacity: ${({ active }) => !active && "0"};
    visibility: ${({ active }) => !active && "hidden"};
    transition: visibility 0.5s, opacity 0.5s;
    cursor: auto;
  }

  &:hover {
    height: 12%;
    transition: height 0.5s;
    cursor: pointer;
    z-index: 50;
  }
`
