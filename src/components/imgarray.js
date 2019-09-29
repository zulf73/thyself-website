import React from "react"
import { withRouter } from "react-router-dom"

import { useQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
https://stackoverflow.com/questions/49046492/how-to-access-url-parameter-in-a-react-component

import {withRouter} from 'react-router-dom';
class CustomCoponent extends React.Component {
constructor(props) {
   }
   //**ACCESS PARAMETER VALUE LIKE THIS**
   sample(){
      let Paramvalue=this.props.match.params.ParamName;
   }   
}
 export defualt withRouter(CustomCoponent);
 */
class ImgArray extends React.Component {
  constructor(props) {
    super(props)
    this.imgList = props.match.params.list

    var jl = "[" + this.imgList.join() + "]"
    var query = graphql`
      query {
        file(relativePath: { in: $list }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
    var ll = this.imgList.join()
    var res = useQuery(query, { variables: { ll } })
  }

  render() {
    const items = ""
    for (const [index, value] of this.imgList.entries()) {
      items.push(
        <div>
          <Img fluid={value} />
        </div>
      )
    }
    return <div>{items}</div>
  }
}

export default withRouter(ImgArray)
