import React from 'react'
import Image from 'gatsby-image'
import styles from '../../css/projects.module.css'
import {FaMap} from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/Anilink'

const Project = ({projects}) => {
    const {name, category, slug, image} = projects

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
                <Image fluid={mainImage} className={styles.img} alt="single project"/>
                <AniLink fade className={styles.link} to={`/projects/${slug}`}>
                    view {slug}
                </AniLink>
            </div>
            <div className={styles.footer}>
                <h3>{name}</h3>
            </div>

        </article>
    )
}

export default Project
