import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

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

const Header = () => {
  const { 
    site: {siteMetadata},
   } = useStaticQuery(getSiteData);

    return (
        <div>
            <h1>title:{siteMetadata.title}</h1>
            <h1>author:{siteMetadata.author}</h1>
        </div>
    )
}

export default Header
