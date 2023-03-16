import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Title } from '../atoms'
import Experience from './Experience'

const CvFormated = styled.div`
padding: 2rem;
`

const Cv = () => {
  const data = useSelector(state => state.csv.data)
  const { category: categories, cv, config } = data
  console.log('categories', categories)

  return (
    <CvFormated>
      {categories &&
      categories.map(
        categoryData =>
          <section key={categoryData.category}>
            <Title as='h3'>{categoryData.category}</Title>
            {cv[categoryData.category] &&
            cv[categoryData.category].map(
              cvData =>
                <Experience
                  key={cvData.title}
                  {...cvData}
                  {...config}
                />
            )}
          </section>
      )}
    </CvFormated>
  )
}

export default Cv
