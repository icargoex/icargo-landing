import * as React from "react"
import "twin.macro"

const Footer = () => {
  return <footer tw="container py-5">© {new Date().getFullYear()}</footer>
}

export default Footer
