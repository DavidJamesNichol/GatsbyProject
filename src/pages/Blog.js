import React from 'react'
import {Link} from 'gatsby'
import Layout from '../Components/Layout'

const Blog = () => {
  return (
    <Layout>
      Hello from Blog page!!!!!
      <Link to="/Tours/">Tours Page</Link>
    </Layout>
  )
}

export default Blog
