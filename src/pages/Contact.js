import React, { Component } from 'react'
// import {Link} from 'gatsby'
import Layout from '../Components/Layout'
import StyledHero from '../Components/StyledHero'
import { graphql } from 'gatsby'
import ContactForm from '../Components/Contact/Contact'

export default class Contact extends Component {
render() {
    return (
        <Layout>
            <StyledHero img={this.props.data.connectBcg.childImageSharp.fluid} />
                {/* <Link to="/Tours/">Tours Page</Link> */}
                <ContactForm />
        </Layout>
    )}
} 
export const query = graphql`
query {
    connectBcg:file(relativePath:{eq:"connectBcg.jpeg"}){
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`