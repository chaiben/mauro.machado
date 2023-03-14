import React from 'react'
import styled from 'styled-components'
import { FONTS } from '../../style'

const TitleFormated = styled.h1`
  font-family: ${FONTS.SECONDARY};
  font-weight: 700;
  color: ${props => props.color ? props.color : 'black'};
`

const Title = (props) => {
  return (
    <TitleFormated {...props}>{props.children}</TitleFormated>
  )
}

export default Title
