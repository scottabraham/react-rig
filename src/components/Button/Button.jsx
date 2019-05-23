import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  font-family: 'Roboto', sans-serif;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #CACACA
  font-weight: 600;
  cursor: pointer;
  `
const Button = (props) => {
  return (
      <StyledButton {...props}>{props.children}</StyledButton>
  )
}

export default Button

Button.propTypes = {}

Button.defaultProps = {}