import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export const query = graphql`
  query($slug: String) {
    contentfulProjectPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString:"MMMM Do, YYYY")
      body {
        raw
      }
    }
  }
`
const Blog = (props) => {
    return (
        <Layout>
          <h1>{props.data.contentfulProjectPost.title}</h1>
          <p>{props.data.contentfulProjectPost.publishedDate}</p>
          {documentToReactComponents(JSON.parse(props.data.contentfulProjectPost.body.raw))}
        </Layout>
    )
}

export default Blog
