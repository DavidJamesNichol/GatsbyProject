import React, { Component } from 'react'
// import {Link} from 'gatsby'
import Layout from '../Components/Layout'
import StyledHero from '../Components/StyledHero'
import { graphql } from 'gatsby'
import FeaturedClients from '../components/Home/FeaturedClients'


export default class client extends Component {
render() {
    return (
        <Layout>
            <StyledHero img={this.props.data.blogBcg.childImageSharp.fluid} />
            <FeaturedClients />
        </Layout>
    )}
} 
export const query = graphql`
query {
    blogBcg:file(relativePath:{eq:"clientHero.jpg"}){
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`