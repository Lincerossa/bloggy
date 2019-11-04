import React, { useEffect } from "react"
import styled from 'styled-components'

import ImageDistorsion from "../../components/src/ImageDistorsion";

export default () => {

  return (
    <ImageDistorsion image={'http://www.tplh.net/file/osaka01.jpg'} />
  )
}


const Page = styled.div`

  border: 1px solid red;
`
