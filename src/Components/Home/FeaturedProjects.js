import React from 'react'
import Project from '../Projects/Project'
import {useStaticQuery, graphql} from 'gatsby'
import Title from '../Title'
import layout from '../layout.css'
import styles from '../../css/items.module.css'

const getFeaturedProjects = graphql `
query {
  getFeaturedProjectsQuery:allContentfulProject(filter: {featured: {eq: true}}) {
    edges {
      node {
        name
        slug
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
}
`

const FeaturedProjects = () => {
    const response = useStaticQuery(getFeaturedProjects)
    const projects = response.getFeaturedProjectsQuery.edges

    return (
        <section className={styles.tours}>
            <Title title="featured" subtitle="projects"/>
            <div className={styles.center}>
                {projects.map(({node}) => {
                    return <Project key={node.contentful_id} projects={node}/>
                })}
            </div>
        </section>
    )
}

export default FeaturedProjects
