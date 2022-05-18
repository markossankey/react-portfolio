import { motion } from "framer-motion"
import ContactForm from "../../Components/ContactForm"
import SectionTemplate from "./SectionTemplate"
function Contact(props) {



  return (
    <SectionTemplate motionKey="contact">
      <ContactForm />
    </SectionTemplate>
  )
}

export default Contact