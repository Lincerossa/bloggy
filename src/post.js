import React from "react"
import 'antd/dist/antd.css';
import {Carousel} from 'antd'
import Padder from '../components/Padder'



export default (props) => {
  const {pageContext} = props
  const slider = pageContext.node.frontmatter.slider

  return <div>
    <h1>{pageContext.node.frontmatter.title}</h1>
    <h2>{pageContext.node.frontmatter.date}</h2>
    <Padder size="small">
      <img src={pageContext.node.frontmatter.featuredImage} />
    </Padder>
    <Padder size="small">
    {
      slider && <Carousel afterChange={() => {}}>
        {slider.map(slide => <div><img src={slide.image} /></div>)}
      </Carousel>
    }
    </Padder>
  </div>
}

