import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "~components/layout"
import Img from "gatsby-image"

export default ({ data }) => {
  const imgQuery = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
      file(relativePath: { eq: "about.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <title>Thyself Inc. About Page</title>
        <link rel="canonical" href="www.thyselfdna.com/about"></link>
      </Helmet>
      <Layout>
        <h1> Who We Are </h1>
        <p> {data.site.siteMetadata.description} </p>
        <Img fluid={data.file.childImageSharp.fluid} />
      </Layout>
    </div>
  )
}
