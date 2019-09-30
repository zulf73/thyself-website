import React from "react"
import { Helmet } from "react-helmet"
import ImgArray from "~components/imgarray"
import Layout from "~components/layout"

export default ({ data }) => {
  const imgList = [
    "Flor-Garduno.jpg",
    "Robert-Frank-1950.jpg",
    "Sergio-Larrain.jpg",
    "salgado-2017-kuwait.jpg",
    "Goddard-Still.jpg",
    "Robert-Frank-2016-Aug.jpg",
    "arbus-01.jpg",
    "Henri-Cartier-Bresson-Jean-Berger.jpg",
    "Robert-Frank-NYC-1948.jpg",
    "robert-frank-2.jpg",
  ]

  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <link rel="canonical" href="www.thyselfdna.com/about"></link>
      </Helmet>
      <Layout>
        <h1> Psychologists </h1>
        <p>
          {" "}
          William Wundt in 1879 pioneered psychology as a scientific discipline.
          Personality psychology had origins with Francis Galton who brilliantly
          suggested that all English words describing personality traits exist
          because they are the species' method of providing significance to
          these traits. Carl Jung had written "On Psychological Types" based on
          two scales of thinking-feeling and sensing-intuition which Isabel
          Briggs Myers and Karen Cook Myers implemented Jung's ideas in a 16
          Types categorization and in the past several decades Robert McCrae and
          Paul Costa had championed the five factor model since mid 1970s.{" "}
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

        <ImgArray list={imgList} />
      </Layout>
    </div>
  )
}
