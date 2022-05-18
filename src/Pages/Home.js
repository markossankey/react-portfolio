import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import SideBar from "../Components/SideBar";
import About from "./Sections/About";
import Intro from "./Sections/Intro";
import SkillsAndCerts from "./Sections/SkillsAndCerts";
import Projects from "./Sections/Projects"
import Contact from "./Sections/Contact"
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import useFirstRender from "../CustomHooks/useFirstRender";


function Home(props) {

  const location = useLocation()
  const isFirstRender = useFirstRender()

  return (
    <Container>
      <Row style={{ height: '100vh', overflow: 'hidden' }}>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Intro isFirstRender={isFirstRender} />} />
            <Route path="/about-me" element={<About />} />
            <Route path="/skills-and-certs" element={<SkillsAndCerts />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact-me" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <SideBar />
      </Row>
    </Container>
  )
}

export default Home