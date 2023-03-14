import React from 'react'
import styled from 'styled-components'
import { Logo, Title } from '../atoms'

const HeaderFormated = styled.header`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: space-between;
  gap: 1rem;
  background: ${props => props.headerTopColor ? props.headerTopColor : 'grey'};
  background: linear-gradient(180deg, ${props => props.headerTopColor ? props.headerTopColor : 'grey'} 0%, ${props => props.headerBottomColor ? props.headerBottomColor : 'white'} 100%);
  padding: 1.5rem;
  div{
    text-align: right;
    flex-grow: 1;
    text-align: center;
  }
`

const Header = ({ headerBottomColor, headerImage, headerTitle, headerSubtitle, headerTopColor, headerFontTitleColor, headerFontSubtitleColor }) => {
  return (
    <HeaderFormated
      headerBottomColor={headerBottomColor}
      headerTopColor={headerTopColor}
      headerFontTitleColor={headerFontTitleColor}
      headerFontSubtitleColor={headerFontSubtitleColor}
    >
      {headerImage && <Logo src={headerImage} alt={headerTitle} title={headerTitle} />}
      <div>
        <Title color={headerFontTitleColor}>{headerTitle}</Title>
        <Title color={headerFontSubtitleColor} as='h2'>{headerSubtitle}</Title>
      </div>
    </HeaderFormated>
  )
}

export default Header
