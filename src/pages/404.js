import React from 'react'
import Layout from '../Components/Layout'
import styles from '../css/error.module.css'
import {Link} from 'gatsby'
import Banner from '../Components/Banner'


export default function error() {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="oops its's a dead end">
          <Link to="/" className="btn-white">
            Back to Home!
          </Link>
        </Banner>
      </header>
      
    </Layout>
  )
}
