import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "twin.macro"

const Header = ({ siteTitle }) => (
  <header tw="border-b-4 border-yellow-400">
    <div tw="container py-5">
      <div tw="flex justify-between text-blue-800">
        <h1>
          <Link to="/" tw="font-bold">
            {siteTitle}
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
