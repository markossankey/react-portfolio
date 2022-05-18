import { Modal, Button } from "react-bootstrap"

function SuccessModal(props) {

  let { isVisible, setIsVisible } = props

  return (
    <Modal show={isVisible} onHide={() => setIsVisible(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Submitted Successfully</Modal.Title>
      </Modal.Header>
      <Modal.Body>Thank you for reaching out.  I'll email you shortly.</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setIsVisible(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default SuccessModal