import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { Col, Container, Row } from "react-bootstrap"
import SectionTemplate from "./SectionTemplate"

function Intro(props) {




  return (

    <SectionTemplate motionKey="intro" {...props}>
      <h1>Hey, I'm <strong>Markos</strong>, <br /> and I'm a Fullstack Developer</h1>
    </SectionTemplate>
  )

}

export default Intro