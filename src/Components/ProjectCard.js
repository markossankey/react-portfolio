import { Card } from 'react-bootstrap'

function ProjectCard(props) {

  const { title, description, github, demo, tech } = props

  let splitDescription = description.split('-').filter((item) => item != '')
  return (
    <Card className="m-2 " bg="transparent" style={{ width: '25rem' }}>
      <Card.Body>
        <Card.Title className="text-success"><strong>{title}</strong></Card.Title>
        <Card.Text>
          <strong>What it does</strong><br />
          {splitDescription.map((item) => <p className='my-0'>-{item}</p>)}
        </Card.Text>
        <Card.Text>
          <strong>Tech Used</strong><br />
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