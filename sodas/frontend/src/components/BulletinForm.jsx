import { Formik, Form, Field } from "formik";
import PropTypes from "prop-types";
import DOMPurify from "dompurify";
import "./bulletinForm.scss";

const BulletinForm = ({ show, onClose, onAdd }) => {
  if (!show) return null;

  return (
    <div className={`modal-overlay ${show ? "show" : ""}`}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>
        <Formik
          initialValues={{ title: "", text: "" }}
          onSubmit={(values, { resetForm }) => {
            const sanitizedValues = {
              title: DOMPurify.sanitize(values.title),
              text: DOMPurify.sanitize(values.text),
            };

            if (sanitizedValues.title && sanitizedValues.text) {
              onAdd(sanitizedValues);
              resetForm();
              onClose();
            }
          }}
        >
          <Form className="bulletin-form">
            <Field type="text" name="title" placeholder="Skelbimo pavadinimas" />
            <Field as="textarea" name="text" placeholder="Skelbimo tekstas" />
            <button type="submit">Pridėti</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

BulletinForm.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default BulletinForm;
