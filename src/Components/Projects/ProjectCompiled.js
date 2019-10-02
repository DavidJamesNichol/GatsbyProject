import React from 'react'
import {graphql} from 'gatsby'
import SlugProject from './SlugProject'
import styles from '../../css/items.module.css'
import Layout from '../Layout'

const projectCompiled = ({data}) => {
    const projects = data.project.edges

    return (
      <Layout>
        <div className={styles.tours}>
            <div className={styles.center}>
                {projects.map(({node}) => {
                    return <SlugProject key={node.contentful_id} projects={node}/>
                })}
            </div>
        </div>
      </Layout>
    )
}


export default projectCompiled
