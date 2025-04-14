import { Formik, Form, Field } from "formik";
import PropTypes from "prop-types";
import "./bulletin.scss";

const BulletinForm = ({ show, onClose, onAdd }) => {
  if (!show) return null;

  return (
    <div className={`modal-overlay ${show ? "show" : ""}`} onClick={onClose}>
  <div className="modal-content" onClick={(e) => e.stopPropagation()}>
    <button className="close-btn" onClick={onClose}>✖</button>
    <Formik
      initialValues={{ title: "", text: "" }}
      onSubmit={(values, { resetForm }) => {
        if (values.title && values.text) {
          onAdd(values);
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
