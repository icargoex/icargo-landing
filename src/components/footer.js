import * as React from "react"
import tw, { css } from "twin.macro"
import { Link as Scroll } from "react-scroll"
import Logo from "../images/logo-full.png"

const Footer = () => {
  return (
    <footer tw="container py-20">
      <div tw="flex flex-wrap gap-x-32">
        <div>
          <img src={Logo} alt="iCargoEx logo" width={200} />

          <p tw="mt-10">Fulfilling our promises to online sellers</p>
        </div>
        <div tw="">
          <h1 tw="mb-5 font-bold">Product</h1>
          <ul
            tw="mb-5"
            css={css`
              li {
                ${tw`cursor-pointer`}
              }
            `}
          >
            <li>
              <Scroll to="about" spy smooth>
                About
              </Scroll>
            </li>
            <li>
              <Scroll to="network" spy smooth>
                Network
              </Scroll>
            </li>
            <li>
              <a href="http://icargoex.com/login">Login</a>
            </li>
          </ul>

          <p>
            Copyright © {new Date().getFullYear()} iCargoEx, Inc. All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
