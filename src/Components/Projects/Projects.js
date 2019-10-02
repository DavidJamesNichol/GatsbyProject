import React from 'react'
import Projectlist from './Projectlist'
import { useStaticQuery, graphql } from 'gatsby'

const getProjects = graphql`
query {
  projects:allContentfulProject {
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

const Projects = () => {

  const { projects } = useStaticQuery(getProjects)

  return (
      <Projectlist projects={projects} />
  )
}

export default Projects
