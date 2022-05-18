import { Card } from 'react-bootstrap'

function ProjectCard(props) {

  const { title, description, github, demo, tech } = props

  return (
    <Card className="m-2" style={{ width: '25rem' }}>
      <Card.Body>
        <Card.Title><strong>{title}</strong></Card.Title>
        <Card.Text>
          <strong>Tech Used:</strong><br />
          {tech.join(', ')}
        </Card.Text>
        <Card.Text>
          <a href={demo} target="_blank">View the demo</a>&nbsp;&nbsp;|&nbsp;&nbsp;
          <a href={github} target="_blank">View the code</a>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ProjectCard