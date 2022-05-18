import SectionTemplate from "./SectionTemplate"
import { projectData } from "../../RenderData/ProjectData"
import ProjectCard from "../../Components/ProjectCard"
import { Col, Row } from "react-bootstrap"
import { motion } from 'framer-motion'

function Projects(props) {
  const renderProjects = () => {
    return projectData.map((project, index) => {
      return (
        <ProjectCard key={project.title + index} {...project} />
      )
    })
  }

  return (
    <SectionTemplate motionKey="projects">
      {projectData && renderProjects()}
      {projectData && renderProjects()}
      {projectData && renderProjects()}
      {projectData && renderProjects()}
    </SectionTemplate>
  )
}

export default Projects