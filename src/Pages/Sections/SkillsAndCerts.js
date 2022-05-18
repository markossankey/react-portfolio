import SectionTemplate from "./SectionTemplate"
import { skillData } from "../../RenderData/SkillsData"
import { certData } from "../../RenderData/CertData"
import { Col, Row } from "react-bootstrap"

function SkillsAndCerts(props) {

  const renderSkills = () => {
    return skillData.map((skill, index) => {
      return (
        <div key={"" + skill.name + index} style={{ display: 'inline-block', width: '20%' }}>
          <img style={{ width: '5rem' }} src={skill.icon} />
          <p>{skill.title}</p>
        </div>
      )
    })
  }

  const renderCerts = () => {
    return certData.map((cert, index) => {
      return (
        <div key={"" + cert.name + index} className="mx-5" style={{ display: 'inline-block', width: '35%' }}>
          <img style={{ width: '10rem' }} src={cert.icon} />
          <p>{cert.title}</p>
        </div>
      )
    })
  }

  return (
    <SectionTemplate motionKey="skillsAndCerts">
      <Row>
        <Col xl={12}>
          {certData && renderCerts()}
        </Col>
        <hr className="my-4" />
        <Col xl={12}>
          {skillData && renderSkills()}
        </Col>
      </Row>
    </SectionTemplate>
  )
}

export default SkillsAndCerts