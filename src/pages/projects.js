import React, { Component } from 'react'
// import {Link} from 'gatsby'
import Layout from '../Components/Layout'
import StyledHero from '../Components/StyledHero'
import { graphql } from 'gatsby'
import FeaturedProjects from '../components/Home/FeaturedProjects'

export default class projects extends Component {
render() {
    return (
        <Layout>
            <StyledHero img={this.props.data.defaultBcg.childImageSharp.fluid} />
            <FeaturedProjects />
        </Layout>
    )} 
} 
export const query = graphql`
query {
    defaultBcg:file(relativePath:{eq:"projectsHero.jpg"}){
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`