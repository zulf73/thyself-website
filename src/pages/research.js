import React from "react"
import { Helmet } from "react-helmet"
import Layout from "~components/layout"

export default ({ data }) => {
  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <link rel="canonical" href="www.thyselfdna.com/about"></link>
      </Helmet>
      B{" "}
      <Layout>
        <h1> Research </h1>
        <p>
          {" "}
          We focus primarily on massive global personality trait data that had
          been measured by World Values Survey and find 33 factors able to
          specify individual personalities almost uniquely. These form the
          personality DNA variables. We also explore further artificial
          intelligence models of human personality that come from the OCC model
          that had allowed AI researchers to use Bayesian Networks to model
          artificial personalities which we use as a tool to model actual human
          personalities.{" "}
        </p>

        <p>
          We resolve the various debates regarding whether Big Five or MBTI is
          better by noting that the Big Five lead to consistent types for MBTI
          without problems by producing continuous MBTI variables. We extend
          these to 16 factors by examining the World Values Survey Big Five
          estimates for the entire human race which provide us with use of high
          dimensional statistical analysis tools from which we produce a
          Personality DNA with 33 factors. These then can be used to determine a
          wealth of information regarding individual personality including
          probabilities of many sorts of events putting our approach firmly in
          the quantitative psychological tradition.
        </p>
      </Layout>
    </div>
  )
}
