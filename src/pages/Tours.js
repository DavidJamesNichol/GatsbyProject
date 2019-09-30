import React, { Component } from 'react'
// import {Link} from 'gatsby'
import Layout from '../Components/Layout'
import StyledHero from '../Components/StyledHero'
import { graphql } from 'gatsby'

export default class Tours extends Component {
render() {
    return (
        <Layout>
            <StyledHero img={this.props.data.defaultBcg.childImageSharp.fluid} />
        </Layout>
    )}
} 
export const query = graphql`
query {
    defaultBcg:file(relativePath:{eq:"defaultBcg.jpeg"}){
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`