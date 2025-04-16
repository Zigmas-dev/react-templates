import { Formik, Form, Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";
import { FaPlusCircle } from "react-icons/fa";
import * as Yup from "yup";
import DOMPurify from "dompurify";
import "./adminDashboard.scss";

const AdminDashboard = ({ onAddAd }) => {
  return (
    <div className="admin-dashboard">
      <h2>
        <FaPlusCircle /> Pridėti skelbimą
      </h2>
      <Formik
        initialValues={{ title: "", content: "" }}
        validationSchema={Yup.object({
          title: Yup.string().required("Įveskite antraštę"),
          content: Yup.string().required("Įveskite turinį"),
        })}
        onSubmit={(values, { resetForm }) => {
          const sanitizedAd = {
            title: DOMPurify.sanitize(values.title),
            content: DOMPurify.sanitize(values.content),
          };
          onAddAd(sanitizedAd);
          resetForm();
        }}
      >
        {() => (
          <Form className="ad-form">
            <label htmlFor="title">Antraštė</label>
            <Field name="title" type="text" />
            <ErrorMessage name="title" component="div" className="error" />

            <label htmlFor="content">Turinys</label>
            <Field name="content" as="textarea" rows="4" />
            <ErrorMessage name="content" component="div" className="error" />

            <button type="submit">
              <FaPlusCircle /> Pridėti
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

AdminDashboard.propTypes = {
  onAddAd: PropTypes.func.isRequired,
};

export default AdminDashboard;
