import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import Layout from "~components/layout"

export default ({ data }) => {
  useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
      file(relativePath: { eq: "robert-frank.jpg" }) {
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
        <link rel="canonical" href="www.thyselfdna.com/about"></link>
      </Helmet>
      <Layout>
        <h1> Products </h1>
        <p>
          {" "}
          Our products employ a 33 factor Personality DNA system that is far
          more nuanced than Briggs-Myers as well as Big Five personality test
          metrics and consistently expand from the Big Five Personality Trait
          metrics.{" "}
        </p>
        <Img fluid={data.file.childImageSharp.fluid} />
      </Layout>
    </div>
  )
}
