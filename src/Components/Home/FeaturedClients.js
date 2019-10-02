import React from 'react'
import Client from '../Clients/Client'
import {useStaticQuery, graphql} from 'gatsby'
import Title from '../Title'
import layout from '../layout.css'
import styles from '../../css/items.module.css'

const getFeaturedClients = graphql `
query {
  getFeaturedClientsQuery:allContentfulClient(filter: {featured: {eq: true}}) {
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

const FeaturedClients = () => {
    const response = useStaticQuery(getFeaturedClients)
    const clients = response.getFeaturedClientsQuery.edges

    return (
        <section className={styles.tours}>
            <Title title="featured" subtitle="clients"/>
            <div className={styles.center}>
                {clients.map(({node}) => {
                    return <Client key={node.contentful_id} clients={node}/>
                })}
            </div>
        </section>
    )
}

export default FeaturedClients
