import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaEnvelope, FaUser, FaPaperPlane, FaPhone, FaComment, FaSpinner } from "react-icons/fa";  // Pridėjome FaSpinner
import DOMPurify from "dompurify";
import axios from "axios";
import "./contactForm.scss";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

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

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);
    setSuccess("");

    const sanitizedValues = {
      name: DOMPurify.sanitize(values.name),
      email: DOMPurify.sanitize(values.email),
      phone: DOMPurify.sanitize(values.phone),
      message: DOMPurify.sanitize(values.message),
    };

    try {
      const response = await axios.post("https://tkqq.l.dedikuoti.lt/send-email", sanitizedValues);
      if (response.data.success) {
        setSuccess("Žinutė išsiųsta!");
        resetForm();
        setTimeout(() => {
          setSuccess("");  // Pranešimas išnyks po 1.5 sekundės
        }, 2000);
      } else {
        setSuccess(`Nepavyko išsiųsti žinutės: ${response.data.message || "Nežinoma klaida"}`);
      }
    } catch (error) {
      console.error("Siuntimo klaida:", error);
      setSuccess(`Įvyko klaida siunčiant žinutę: ${error.response?.data?.message || error.message}`);
    }

    setLoading(false);
  };

  return (
    <div className="contact-form">
      <h2>Susisiekite su manim</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="name">
                <FaUser className="icon-name" aria-hidden="true" /> <span className="sr-only">Vardas</span>
              </label>
              <Field id="name" name="name" placeholder="Įveskite vardą" autoComplete="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <FaEnvelope className="icon-email" aria-hidden="true" /> <span className="sr-only">El. paštas</span>
              </label>
              <Field id="email" name="email" placeholder="Įveskite el. paštą" type="email" autoComplete="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                <FaPhone className="icon-phone" aria-hidden="true" /> <span className="sr-only">Telefonas</span>
              </label>
              <Field id="phone" name="phone" placeholder="Įveskite telefono numerį" type="tel" autoComplete="tel" />
              <ErrorMessage name="phone" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                <FaComment className="icon-message" aria-hidden="true" /> <span className="sr-only">Žinutė</span>
              </label>
              <Field as="textarea" id="message" name="message" placeholder="Įveskite žinutę" rows="5" autoComplete="off" />
              <ErrorMessage name="message" component="div" className="error" />
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting || loading}>
              {loading ? (
                <FaSpinner className="spinner" aria-hidden="true" />
              ) : (
                <FaPaperPlane className="icon-send" aria-hidden="true" />
              )}
              {loading ? "Siunčiama..." : "Išsiųsti"}
            </button>

            {success && <div className="success-message">{success}</div>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
