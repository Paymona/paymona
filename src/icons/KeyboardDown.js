import React from 'react'
import styled from 'styled-components'
import SvgTemplate from './SvgTemplate'
import PropTypes from 'prop-types'

const Svg = styled(SvgTemplate)` 
  width: ${props => props.size}px; 
  height: ${props => props.size}px;
`

const KeyboardDown = ({ 
  className,
  size
}) => ( 
  <Svg viewBox='0 0 24 24' className={className} size={size} fill='currentColor'>   
    <path 
      fill='currentColor'
      d='M11 3L11 17.17L7.41 13.59L6 15L12 21L18 15L16.59 13.59L13 17.17L13 3L11 3Z' 
    />
  </Svg>
)

KeyboardDown.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
}

KeyboardDown.defaultProps = {
  className: '',
  size: 24
}

export default KeyboardDown
