import { Formik, Form, Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";
import * as Yup from "yup";
import { FaEnvelope, FaUser, FaPaperPlane } from "react-icons/fa";
import "./contactform.scss";

const ContactForm = ({ onSubmit }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Įveskite savo vardą"),
    email: Yup.string().email("Neteisingas el. pašto formatas").required("Įveskite savo el. paštą"),
    message: Yup.string().required("Įveskite žinutę"),
  });

  const initialeValues = {
    name: "",
    email: "",
    message: "",
  };

  return (
    <div className="contact-form">
      <h2>Susisiekite su mumis</h2>
      <Formik
       initialValues={initialeValues}
       validationSchema={validationSchema}
       onSubmit={(values, {resetForm }) => {
         onSubmit(values);
         resetForm();
       }}
      >
       {({ isSubmitting }) => (
         <Form>
          <div className="form-group">
           <label htmlFor="name">
            <FaUser /> Vardas
           </label>
           <Field id="name" name="name" placeholder="Įveskite vardą" />
           <ErrorMessage name="name" component="div" className="error" />
          </div>

          <div className="form-group">
           <label htmlFor="email">
            <FaEnvelope /> El. paštas
           </label>
           <Field id="email" name="email" placeholder="Įveskite el. paštą" />
           <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div className="form-group">
           <label htmlFor="mesagge">Žinutė</label>
           <Field 
             as="textarea"
             id="message" 
             name="message" 
             placeholder="Įveskite žinutę"
             row="5" 
            />
           <ErrorMessage name="message" component="div" className="error" />
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
           <FaPaperPlane /> Išsiųsti 
          </button>
         </Form>
       )}
      </Formik>
    </div>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
