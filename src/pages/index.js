import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "~components/layout"
import SEO from "~components/seo"
import Img from "gatsby-image"

const IndexPage = ({ data }) => {
  const query = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Isabella-Madrid.jpg" }) {
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
    <Layout>
      <SEO title="Home" />
      <h1>Thyself Inc.</h1>
      <h2>Personality Psychology Applications</h2>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
      <Img fluid={data.file.childImageSharp.fluid} />
      <Link to="/about/">Who We Are</Link>
    </Layout>
  )
}

export default IndexPage
