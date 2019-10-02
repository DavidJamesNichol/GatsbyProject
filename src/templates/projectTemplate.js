import React from "react"
import {graphql} from "gatsby"
import styles from "../css/items.module.css"
import SlugProject from '../Components/Projects/SlugProject'
import StyledHero from '../Components/StyledHero'
import Navbar from '../Components/Navbar'
import Title from '../Components/Title'
import Layout from '../Components/Layout'

const projectTemplate = ({data}) => {
    const projects = data.projectTemplate.edges
    const heroImage = data.heroImage

    return (
      <Layout>
        <section className={styles.tours}>
            <StyledHero img={heroImage.heroImage.fluid}/>
            <div className={styles.banner}>
                <Title subtitle={heroImage.category}/>
            </div>
            <div className={styles.center}>
                {projects.map(({node}) => {
                    return <SlugProject key={node.contentful_id} projects={node}/>
                })}
            </div>
        </section>
      </Layout>
    )
}

export const query = graphql `
  query($category: String!) {
    projectTemplate:allContentfulProject(filter: {category: {eq: $category}}) {
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
    heroImage:contentfulProject(category: {eq: $category}) {
            category
            heroImage {
              fluid {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
  }
}
`

export default projectTemplate