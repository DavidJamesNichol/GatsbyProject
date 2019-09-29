import React, { Component } from 'react'
import {Link} from 'gatsby'
import Layout from '../Components/Layout'

export default class tours extends Component {
  render() {
    return (
      <Layout>
        Hello from the tours page!!!!!!!!!
        <Link to="/">Home Page</Link>
      </Layout>
    )
  }
}