import { Button, Col } from 'react-bootstrap'
import { buttonsData } from '../RenderData/ButtonsData'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'


function SideBar(props) {

  const windowLocation = useLocation().pathname
  const navigate = useNavigate()

  const renderButtons = () => {
    return buttonsData.map((button, index) => {
      return (
        <motion.div
          key={'btn' + index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: .2 * index }}

        >
          <Button
            className="my-3"
            style={{ width: '15rem' }}
            onClick={() => navigate(button.nav)}
            variant={button.nav == windowLocation ? 'success' : 'outline-success'}
          >
            {button.name}
          </Button>
        </motion.div>
      )
    })
  }


  return (
    <Col lg={4} className="d-flex flex-column justify-content-center align-items-center">
      {buttonsData && renderButtons()}
      <motion.div
        key={'links'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: .2 * buttonsData.length }}

      >
        <div className='d-flex justify-content-around align-items-center'>
          <a href='https://github.com/markossankey' target='_blank'>
            <img className="mx-4 my-3" src="githubIcon.png" alt="github icon" style={{ height: '4rem' }} />
          </a>
          <a href='https://linkedin.com/in/markossankey' target='_blank'>
            <img className="mx-4" src="linkedinIcon.png" alt="linked in icon" style={{ height: '3.5rem' }} />
          </a>
        </div>
      </motion.div>
    </Col >
  )
}

export default SideBar