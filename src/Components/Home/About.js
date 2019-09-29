import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
import img from '../../images/defaultBcg.jpeg'

const About = () => {
  return (
    <section className={styles.about}>
      
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="asdfsadfsdfasdfasdf" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum maiores labore eligendi aliquid voluptas asperiores beatae quasi exercitationem vel dolores iste, in impedit neque sequi doloribus. Minima impedit iusto delectus repellendus error corporis alias, fugit totam reprehenderit distinctio nulla nam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum maiores labore eligendi aliquid voluptas asperiores beatae quasi exercitationem vel dolores iste, in impedit neque sequi doloribus. Minima impedit iusto delectus repellendus error corporis alias, fugit totam reprehenderit distinctio nulla nam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum maiores labore eligendi aliquid voluptas asperiores beatae quasi exercitationem vel dolores iste, in impedit neque sequi doloribus. Minima impedit iusto delectus repellendus error corporis alias, fugit totam reprehenderit distinctio nulla nam.</p>
        </article>
        <button type="button" className="btn-primary">Read More</button>
      </div>
    </section>
  )
}

export default About
