import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from "../components/head"



const AboutPage = () => {
    return (
        <div>
            <Layout>
                <Head title="About"/>
                <Link to="/contact">Swig Swag</Link>
            </Layout>
        </div>
    )
}

export default AboutPage
