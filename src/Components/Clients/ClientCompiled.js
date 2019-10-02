import React from 'react'
import {graphql} from 'gatsby'
import SlugClient from './SlugClient'
import styles from '../../css/items.module.css'
import Layout from '../Layout'

const clientCompiled = ({data}) => {
    const clients = data.client.edges

    return (
      <Layout>
        <div className={styles.tours}>
            <div className={styles.center}>
                {clients.map(({node}) => {
                    return <SlugClient key={node.contentful_id} clients={node}/>
                })}
            </div>
        </div>
      </Layout>
    )
}


export default clientCompiled
