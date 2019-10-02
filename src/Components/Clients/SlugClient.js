import React from 'react'
import Image from 'gatsby-image'
import styles from '../../css/slugProjects.module.css'
import {FaMap} from 'react-icons/fa'

const SlugClient = ({clients}) => {
    const { image } = clients

    let mainImage = image.fluid

    return (
        <article className={styles.client}>
            <div className={styles.imgContainer}>
                <Image fluid={mainImage} className={styles.img} alt="single client"/>
            </div>

        </article>
    )
}



export default SlugClient