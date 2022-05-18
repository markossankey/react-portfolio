import { Card } from "react-bootstrap";
import SectionTemplate from "./SectionTemplate";

function About(props) {



  return (
    <SectionTemplate motionKey="about">
      <Card bg="transparent" style={{ width: '90%' }}>
        <Card.Header style={{ background: "transparent", borderBottom: 'none' }}>
          <h2 className="text-success"><strong>A little bit about me</strong></h2>
        </Card.Header>
        <Card.Body>
          I recently finished my last tour as a Logistics Specialist in the Navy. The 5 years that I was in opened my eyes to what outside of the small town that I grew up in. It also gave me opportunity to be a part of something bigger than myself and travel the world. It was during this time that I found just how much I enjoyed technology.
          <br />
          <br />
          My passion for technology drove me to Code Platoon, a coding bootcamp for veterans and military spouses.  It was here that I learned the fundamentals of creating fullstack applications utilizing Django for the backend and React for the frontend.
        </Card.Body>
      </Card>
    </SectionTemplate>
  )
}

export default About