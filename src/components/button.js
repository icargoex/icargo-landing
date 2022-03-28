import * as React from "react"
import PropTypes from "prop-types"
import "twin.macro"

// TODO: make button more flexible
const Button = ({ title }) => {
  return (
    <button
      type="button"
      tw="bg-yellow-400 p-5 rounded hover:bg-yellow-500 transition-colors focus:outline-none focus:ring focus:ring-yellow-300 active:bg-yellow-600"
    >
      <span tw="text-blue-800 text-3xl font-extrabold">{title}</span>
    </button>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Button
