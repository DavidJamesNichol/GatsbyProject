import React, { Component } from 'react'
// import {Link} from 'gatsby'
import Layout from '../Components/Layout'
import StyledHero from '../Components/StyledHero'
import { graphql } from 'gatsby'

export default class Blog extends Component {
render() {
    return (
        <Layout>
            <StyledHero img={this.props.data.blogBcg.childImageSharp.fluid} />
                {/* <Link to="/Tours/">Tours Page</Link> */}
        </Layout>
    )}
} 
export const query = graphql`
query {
    blogBcg:file(relativePath:{eq:"blogBcg.jpeg"}){
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`