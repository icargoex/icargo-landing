import * as React from "react"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"
import { StaticImage } from "gatsby-plugin-image"
import { Link as Scroll } from "react-scroll"

const Header = () => (
  <header tw="border-b-4 border-yellow-400">
    <div tw="container py-5">
      <div tw="flex justify-between text-blue-800">
        <h1>
          <Link to="/" tw="font-bold">
            <StaticImage
              src="../images/logo.png"
              alt="iCargoEx logo"
              width={150}
            />
          </Link>
        </h1>

        <StyledNav>
          <ul tw="hidden md:flex items-center space-x-6">
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
            <li>
              <a
                href="mailto:ken@icargoex.com?subject=Request For Quote"
                target="_blank"
                rel="noreferrer"
                tw="font-bold bg-yellow-400 py-2 px-5 rounded"
              >
                Let's Talk
              </a>
            </li>
          </ul>
        </StyledNav>
      </div>
    </div>
  </header>
)

export default Header

const StyledNav = styled.nav`
  li {
    cursor: pointer;

    ${tw`hover:text-blue-900 hover:transition-colors transition-colors`}
  }
`
