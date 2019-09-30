import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from '../Components/Layout'
import StyledHero from '../Components/StyledHero'
import Banner from '../Components/Banner'
import About from '../Components/Home/About'
import Services from '../Components/Home/Services'
import { graphql } from 'gatsby'

export default({data}) => (
<Layout>
    <StyledHero home="true" img={data.portrait1.childImageSharp.fluid} >
        <Banner
            title="continue exploring"
            info="lorem ipsum dolor sit amete consectetur adipisicing elit.">
            <AniLink fade to="/Tours/" className="btn-white">Explore Tours</AniLink>
        </Banner>
    </StyledHero>
    <About/>
    <Services/>
</Layout>
)
export const query = graphql`
query {
    portrait1:file(relativePath:{eq:"portrait1.jpeg"}){
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`