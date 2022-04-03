import * as React from "react"
import { Link } from "gatsby"
import "twin.macro"
import { StaticImage } from "gatsby-plugin-image"

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

        <nav>
          <ul tw="hidden md:flex items-center space-x-4">
            <li>
              <a href="http://icargoex.com/login">Login</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

export default Header
