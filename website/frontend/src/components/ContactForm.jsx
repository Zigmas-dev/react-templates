import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaEnvelope, FaUser, FaPaperPlane, FaPhone, FaComment } from "react-icons/fa";
import DOMPurify from "dompurify";
import "./contactForm.scss";

const ContactForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Įveskite savo vardą"),
    email: Yup.string()
      .email("Neteisingas el. pašto formatas")
      .required("Įveskite savo el. paštą"),
    phone: Yup.string()
      .matches(/^\+?\d{7,15}$/, "Neteisingas telefono formatas")
      .required("Įveskite savo telefono numerį"),
    message: Yup.string().required("Įveskite žinutę"),
  });

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    const sanitizedValues = {
      name: DOMPurify.sanitize(values.name),
      email: DOMPurify.sanitize(values.email),
      phone: DOMPurify.sanitize(values.phone),
      message: DOMPurify.sanitize(values.message),
    };

    console.log("Form submitted with sanitized values:", sanitizedValues);
    resetForm();
  };

  return (
    <div className="contact-form">
      <h2>Susisiekite su mumis</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="name">
                <FaUser aria-hidden="true" /> <span className="sr-only">Vardas</span>
              </label>
              <Field id="name" name="name" placeholder="Įveskite vardą" autoComplete="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <FaEnvelope aria-hidden="true" /> <span className="sr-only">El. paštas</span>
              </label>
              <Field id="email" name="email" placeholder="Įveskite el. paštą" type="email" autoComplete="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                <FaPhone aria-hidden="true" /> <span className="sr-only">Telefonas</span>
              </label>
              <Field id="phone" name="phone" placeholder="Įveskite telefono numerį" type="tel" autoComplete="tel" />
              <ErrorMessage name="phone" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                <FaComment aria-hidden="true" /> <span className="sr-only">Žinutė</span>
              </label>
              <Field as="textarea" id="message" name="message" placeholder="Įveskite žinutę" rows="5" autoComplete="off" />
              <ErrorMessage name="message" component="div" className="error" />
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              <FaPaperPlane aria-hidden="true" /> <span className="sr-only">Išsiųsti</span>
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
