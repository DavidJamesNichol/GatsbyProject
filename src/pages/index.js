import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from '../Components/Layout'
import StyledHero from '../Components/StyledHero'
import Banner from '../Components/Banner'
import About from '../Components/Home/About'
import Services from '../Components/Home/Services'
import { graphql } from 'gatsby'
import FeaturedProjects from '../Components/Home/FeaturedProjects'
import FeaturedClients from '../Components/Home/FeaturedClients'

export default({data}) => (
<Layout>
    <StyledHero home="true" img={data.portrait1.childImageSharp.fluid} >
        <Banner
            title="Angelo Marr Photography"
            info="Book me today!">
            <AniLink fade to="/projects/" className="btn-white">Click Me!</AniLink>
        </Banner>
    </StyledHero>
    <About/>
    <Services/>
    <FeaturedProjects />
    <FeaturedClients />
</Layout>
)
export const query = graphql`
query {
    portrait1:file(relativePath:{eq:"portrait1.jpg"}){
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`