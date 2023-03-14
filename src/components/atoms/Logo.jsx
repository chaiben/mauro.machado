import React from 'react'
import styled from 'styled-components'

const LogoFormated = styled.img`
  max-width: 200px;
`

const Logo = ({ src, alt, title }) => {
  return (
    <LogoFormated
      src={src}
      alt={alt}
      title={title}
    />
  )
}

export default Logo
