import React from 'react'
import Image from 'gatsby-image'
import styles from '../../css/projects.module.css'
import {FaMap} from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/Anilink'

const Client = ({clients}) => {
    const { category, slug, image} = clients

    let mainImage = image.fluid

    return (
        <article className={styles.tour}>
        <div className={styles.info}>
            <h2 className={styles.country}>
                <FaMap className={styles.icon}/> 
                {category}
            </h2>
        </div>
            <div className={styles.imgContainer}>
                <Image fluid={mainImage} className={styles.img} alt="single client"/>
                <AniLink fade className={styles.link} to={`/clients/${slug}`}>
                    view {slug}
                </AniLink>
            </div>
        </article>
    )
}

export default Client
