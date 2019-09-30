import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styles from '../css/footer.module.css'
import links from '../constants/links'
import socialIcons from '../constants/social-icons'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
                {links.map((item, index) => {
                    return (
                        <AniLink fade key={index} to={item.path}>
                            {item.text}
                        </AniLink>
                    )
                })}
            </div>
            <h1>I'm a Footer!!!!</h1>
            <div className={styles.icons}>
                {socialIcons.map((item, index) => {
                    return (
                        <a key={index} target="_blank" rel="noopener noreferrer" href={item.url}>{item.icon}</a>
                    )
                })}
            </div>
            <div className={styles.copyright}>
                copyright &copy; backroads travel company {new Date().getFullYear()}
                all rights reserved
            </div>
        </footer>
    )
}

export default Footer
