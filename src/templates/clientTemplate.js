import React from "react"
import {graphql} from "gatsby"
import styles from "../css/items.module.css"
import SlugClient from '../Components/Clients/SlugClient'
import StyledHero from '../Components/StyledHero'
import Navbar from '../Components/Navbar'
import Title from '../Components/Title'
import Layout from '../Components/Layout'

const clientTemplate = ({data}) => {
    const clients = data.clientTemplate.edges
    const heroImage = data.heroImage

    return (
      <Layout>
        <section className={styles.tours}>
            <StyledHero img={heroImage.heroImage.fluid}/>
            <div className={styles.banner}>
                <Title subtitle={heroImage.category}/>
            </div>
            <div className={styles.center}>
                {clients.map(({node}) => {
                    return <SlugClient key={node.contentful_id} clients={node}/>
                })}
            </div>
        </section>
        </Layout>
    )
}

export const query = graphql `  
query($category: String!) {
  clientTemplate:allContentfulClient(filter: {category: {eq: $category}}) {
    edges {
      node {
        name
        category
        contentful_id
        image {
          fluid {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
  heroImage:contentfulClient(category: {eq: $category}) {
          category
          heroImage {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
}
}
`

export default clientTemplate