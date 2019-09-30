import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'

const getImages = graphql`
query heroImage{
  heroImage:file(relativePath:{eq:"portrait1.jpeg"}){
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}

`

const SimpleHero = ({children}) => {
    const {heroImage} = useStaticQuery(getImages);

    return (
        <header className='defaultHero'>
            <Img fluid={heroImage.childImageSharp.fluid} />
            {children}
        </header>
    )
}

export default SimpleHero
