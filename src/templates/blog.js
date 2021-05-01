import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export const query = graphql`
  query($slug: String) {
    contentfulProjectPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString:"MMMM Do, YYYY")
    }
  }
`



const Blog = (props) => {
    return (
        <Layout>
          <h1>{props.data.contentfulProjectPost.title}</h1>
          <p>{props.data.contentfulProjectPost.publishedDate}</p>
        </Layout>
    )
}

export default Blog
