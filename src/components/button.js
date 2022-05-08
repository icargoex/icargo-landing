import * as React from "react"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"

// TODO: make button more flexible

/**
 *
 * @param title
 * @param to
 */
const Button = ({ title, to }) => {
  return (
    <StyledButton type="button">
      {to ? (
        <a href={to} target="_blank" rel="noreferrer">
          {title}
        </a>
      ) : (
        <span>{title}</span>
      )}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  ${tw`inline-block bg-yellow-400 rounded hover:bg-yellow-500 transition-colors focus:outline-none focus:ring focus:ring-yellow-300 active:bg-yellow-600`}

  ${tw`p-2 md:p-4 xl:p-5`}

  span, a {
    ${tw`text-blue-800 font-extrabold text-lg md:text-xl xl:text-3xl`}
  }
`

Button.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Button
