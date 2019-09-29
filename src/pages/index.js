import React from "react"
import {Link} from 'gatsby'
import Layout from '../Components/Layout'
import SimpleHero from '../Components/SimpleHero'
import Banner from '../Components/Banner'
import About from '../Components/Home/About'
import Services from '../Components/Home/Services'

export default() => <Layout>
    <SimpleHero>
        <Banner
            title="continue exploring"
            info="lorem ipsum dolor sit amete consectetur adipisicing elit.">
            <Link to="/Tours/" className="btn-white">Explore Tours</Link>
        </Banner>
    </SimpleHero>
    <About />
    <Services />
</Layout>
