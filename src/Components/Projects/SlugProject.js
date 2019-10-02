import React from 'react'
import Image from 'gatsby-image'
import styles from '../../css/slugProjects.module.css'
import {FaMap} from 'react-icons/fa'

const SlugProject = ({projects}) => {
    const {name, image} = projects

    let mainImage = image.fluid

    return (
        <article className={styles.project}>
            <div className={styles.imgContainer}>
                <Image fluid={mainImage} className={styles.img} alt="single project"/>
            </div>
            <div className={styles.footer}>
                <h3>{name}</h3>
            </div>

        </article>
    )
}



export default SlugProject