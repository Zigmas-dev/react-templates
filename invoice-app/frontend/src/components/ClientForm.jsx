import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaBuilding, FaBarcode, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "./clientForm.scss";

const ClientForm = ({ onSubmit }) => {
  const validationSchema = Yup.object({
    companyName: Yup.string().required("Įmonės pavadinimas privalomas"),
    companyCode: Yup.string().required("Įmonės kodas privalomas"),
    vatCode: Yup.string().nullable(),
    address: Yup.string().required("Adresas privalomas"),
    phone: Yup.string().required("Telefono numeris privalomas"),
    email: Yup.string().email("Neteisingas el. paštas").required("El. paštas privalomas"),
  });

  return (
    <Formik
      initialValues={{ companyName: "", companyCode: "", vatCode: "", address: "", phone: "", email: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="client-form">
          <div className="form-group">
            <FaBuilding className="icon" />
            <Field type="text" name="companyName" placeholder="Įmonės pavadinimas" />
            <ErrorMessage name="companyName" component="div" className="error" />
          </div>
          <div className="form-group">
            <FaBarcode className="icon" />
            <Field type="text" name="companyCode" placeholder="Įmonės kodas" />
            <ErrorMessage name="companyCode" component="div" className="error" />
          </div>
          <div className="form-group">
            <FaBarcode className="icon" />
            <Field type="text" name="vatCode" placeholder="PVM kodas" />
          </div>
          <div className="form-group">
            <FaMapMarkerAlt className="icon" />
            <Field type="text" name="address" placeholder="Adresas" />
            <ErrorMessage name="address" component="div" className="error" />
          </div>
          <div className="form-group">
            <FaPhone className="icon" />
            <Field type="text" name="phone" placeholder="Telefono numeris" />
            <ErrorMessage name="phone" component="div" className="error" />
          </div>
          <div className="form-group">
            <FaEnvelope className="icon" />
            <Field type="email" name="email" placeholder="El. paštas" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <button type="submit" disabled={isSubmitting}>Pridėti klientą</button>
        </Form>
      )}
    </Formik>
  );
};

export default ClientForm;
