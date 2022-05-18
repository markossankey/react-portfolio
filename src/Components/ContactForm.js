import { Formik } from 'formik';
import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap'
import * as Yup from 'yup'
import axios from 'axios';
import QueryString from 'qs';
import SuccessModal from './SuccessModal';

function ContactForm(props) {

  const [isValid, setIsValid] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const submitForm = async (values, { setSubmitting, resetForm }) => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    };

    setSubmitting(true);
    await axios.post(`https://script.google.com/macros/s/AKfycbwUE7iRowLoR8uYuplgrL4TGjdUDcLxv6MPqb_z4P3SWLaM3JEuwrbH3vWG_WWusO8G/exec`, values, config);
    resetForm();
    setSubmitting(false);
    setIsVisible(true);
  }

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "*First name must have at least 2 characters")
      .max(30, "*First name cannot be more than 30 characters")
      .required("*First name is required"),
    lastName: Yup.string()
      .min(2, "*Last name must have at least 2 characters")
      .max(30, "*Last name cannot be more than 30 characters")
      .required("*Last name is required"),
    email: Yup.string()
      .email("*Must be a valid email address")
      .required("*Email is required"),
    company: Yup.string(),
    message: Yup.string()
  })

  return (
    <>
      <SuccessModal isVisible={isVisible} setIsVisible={setIsVisible} />
      <Card className="p-5 " bg="transparent" style={{ width: '25rem' }}>
        <Formik
          initialValues={{ firstName: '', lastName: '', email: '', company: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={submitForm}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group className="mb-3" >
                <Form.Label>First name</Form.Label>
                <Form.Control
                  name="firstName"
                  type="text"
                  placeholder="Enter first name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  className={touched.firstName && errors.firstName && "border border-warning"}
                />
                {touched.firstName && errors.firstName ? (
                  <div className="text-warning">{errors.firstName}</div>
                ) : null}
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  name="lastName"
                  type="text"
                  placeholder="Enter last name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  className={touched.lastName && errors.lastName && "border border-warning"}

                />
                {touched.lastName && errors.lastName ? (
                  <div className="text-warning">{errors.lastName}</div>
                ) : null}
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={touched.email && errors.email && "border border-warning"}
                />
                {touched.email && errors.email ? (
                  <div className="text-warning">{errors.email}</div>
                ) : null}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  name="company"
                  type="text"
                  placeholder="Enter company"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.company}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Leave me a message</Form.Label>
                <Form.Control
                  name="message"
                  as="textarea"
                  rows={4}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                />
              </Form.Group>

              <Button variant="outline-primary" type="submit" style={{ width: '50%' }}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Card>
    </>
  )
}

export default ContactForm