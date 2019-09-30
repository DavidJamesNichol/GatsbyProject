import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Header from './Header'

const getSiteData = graphql`
{
  site {
    siteMetadata {
      author
      title
      description
      __typename
      data {
        item1
        item0
      }
    }
  }
}
`

const HeaderRegular = () => {
  return (
    <StaticQuery query={getSiteData} render={ data => {
      return <h1>Hello, I am {data.site.siteMetadata.author}</h1>
    }} >
      <Header />
    </StaticQuery>
  )
}

export default HeaderRegular
