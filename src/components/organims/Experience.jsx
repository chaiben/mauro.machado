import React from 'react'
import styled from 'styled-components'
import { capitalizeFirstLetter, convertDate } from '../../helpers'
import { Title } from '../atoms'

const ExperienceFormated = styled.article`
  padding: 0.5rem 2rem;
  display: flex;
  gap: 1rem;
  h4, h5 {
    margin: 0;
    padding: 0;
  }
  .title, .subtitle {
    padding-bottom: 0.5rem;
  }
  .content h5 {
    margin: 0;
    padding: 0;
  }
  .date,
  .content,
  .date,
  .place {
    align-self: flex-start;
  }
  .date{
    min-width: 200px;
  }
  .content{
    flex-grow: 1;
  }
  .place{
    width: 100px;
    text-align: right;
  }
  .subtitle {
    font-style: italic;
  }
  .comments{
    white-space: pre-wrap;
    text-align: justify;
  }
  @media only screen and (max-width: 600px) {
    gap: 0.2rem;
    flex-direction: column;
    .place{
      text-align: left;
      width: 100%;
    }
    .title, .subtitle {
      padding-bottom: 0;
    }
  }


`

const Experience = ({
  title,
  subtitle,
  category,
  place,
  start,
  end,
  comments,
  locale,
  activeText
}) => {
  console.log(title)
  return (
    <ExperienceFormated>
      {start &&
        <Title as='h5' className='date'>
          {`${capitalizeFirstLetter(convertDate(start, locale, activeText))} - `}
          {`${capitalizeFirstLetter(convertDate(end, locale, activeText))}`}
        </Title>}
      <div className='content'>
        {title &&
          <Title as='h4' className='title'>
            {title}
          </Title>}
        {subtitle && <div className='subtitle'>{subtitle}</div>}
        {comments && <div className='comments'>{comments}</div>}
      </div>
      {place &&
        <div className='place'>
          {place}
        </div>}
    </ExperienceFormated>
  )
}

export default Experience
