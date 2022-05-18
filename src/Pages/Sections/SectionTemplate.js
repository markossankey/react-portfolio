import { Col } from "react-bootstrap";
import { motion } from "framer-motion";

function SectionTemplate(props) {

  const { children, isFirstRender } = props



  const rowWrapStyle = {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    alignContent: 'center',
    flexWrap: 'wrap'
  }


  return (
    <Col xs={12} md={8} lg={8} className="text-center align-items-center align-content-center justify-content-center d-flex flex-wrap">
      {
        isFirstRender
          ? <motion.div
            key={props.motionKey}
            initial={{ opacity: 0, x: 0, ...rowWrapStyle }}
            animate={{ opacity: 1, x: 0, ...rowWrapStyle, transition: { duration: 3 } }}
            exit={{ opacity: 0, y: -200, ...rowWrapStyle, transition: { duration: '.4' } }}
            content
          >
            {children}
          </motion.div>
          : <motion.div
            key={props.motionKey}
            initial={{ opacity: 0, y: 200, ...rowWrapStyle }}
            animate={{ opacity: 1, y: 0, ...rowWrapStyle }}
            exit={{ opacity: 0, y: -200, ...rowWrapStyle }}
            transition={{ duration: '.4' }}
            content
          >
            {children}
          </motion.div>
      }
    </Col>
  )
}

export default SectionTemplate