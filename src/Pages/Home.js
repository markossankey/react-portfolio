import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import SideBar from "../Components/SideBar";
import About from "./Sections/About";
import Intro from "./Sections/Intro";
import SkillsAndCerts from "./Sections/SkillsAndCerts";
import Projects from "./Sections/Projects"
import Contact from "./Sections/Contact"
import { HashRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import useFirstRender from "../CustomHooks/useFirstRender";


function Home(props) {

  const navigate = useNavigate()
  const location = useLocation()
  const isFirstRender = useFirstRender()
  const paths = ['/', '/about-me', '/skills-and-certs', '/projects', '/contact-me']

  const handleWheel = (e) => {
    let currLocationIndex = paths.indexOf(location.pathname)
    if (e.deltaY > 0 && !(currLocationIndex + 1 >= paths.length)) {
      navigate(paths[currLocationIndex + 1])
    }
    else if (e.deltaY < 0 && !(currLocationIndex - 1 < 0)) {
      navigate(paths[currLocationIndex - 1])
    }
  }

  return (
    <Container onWheel={handleWheel}>
      <Row style={{ height: '100vh', overflow: 'hidden' }}>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Intro isFirstRender={isFirstRender} location={location} paths={paths} />} />
            <Route path="/about-me" element={<About location={location} paths={paths} />} />
            <Route path="/skills-and-certs" element={<SkillsAndCerts location={location} paths={paths} />} />
            <Route path="/projects" element={<Projects location={location} paths={paths} />} />
            <Route path="/contact-me" element={<Contact location={location} paths={paths} />} />
          </Routes>
        </AnimatePresence>
        <SideBar />
      </Row>
    </Container>
  )
}

export default Home