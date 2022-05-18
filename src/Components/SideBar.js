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
    </Col>
  )
}

export default SideBar