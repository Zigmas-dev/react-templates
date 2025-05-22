// src/components/Register.jsx
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaEnvelope, FaLock } from "react-icons/fa";
// import axios from "axios"; // Užkomentuojame axios importą
import "./forms.scss";

const Register = ({ onLoginClick, onRegisterSuccess }) => {
  const registerSchema = Yup.object().shape({
    email: Yup.string().email("Neteisingas el. pašto formatas").required("El. paštas būtinas"),
    password: Yup.string().min(6, "Slaptažodis turi būti bent 6 simbolių").required("Slaptažodis būtinas"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Slaptažodžiai turi sutapti").required("Pakartokite slaptažodį"),
  });

  const handleRegister = async (values, { setSubmitting, resetForm }) => {
    console.log("Imituojama registracija su:", values);
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Imituoja tinklo delsimą

    // Imituojame sėkmingą registraciją
    localStorage.setItem("user", JSON.stringify({ email: values.email })); // Vis tiek išsaugome vartotojo duomenis
    
    resetForm(); // Išvalome formą
    if (onRegisterSuccess) {
      onRegisterSuccess(); // Iškviečiame tėvinio komponento funkciją
    }
    
    setSubmitting(false); // Nustatome, kad formos siuntimas baigtas
  };

  return (
    <div className="form-container">
      <h2>Reikia registruotis</h2>
      <Formik initialValues={{ email: "", password: "", confirmPassword: "" }} validationSchema={registerSchema} onSubmit={handleRegister}>
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="register-email">El. paštas</label>
              <div className="input-wrapper">
                <FaEnvelope className="icon" />
                <Field type="email" name="email" id="register-email" placeholder="Įveskite el. paštą" className={errors.email && touched.email ? "error" : ""} />
              </div>
              <ErrorMessage name="email">{(msg) => <div className="input-error">{msg}</div>}</ErrorMessage>
            </div>

            <div className="form-group">
              <label htmlFor="register-password">Slaptažodis</label>
              <div className="input-wrapper">
                <FaLock className="icon" />
                <Field type="password" name="password" id="register-password" placeholder="Įveskite slaptažodį" className={errors.password && touched.password ? "error" : ""} />
              </div>
              <ErrorMessage name="password">{(msg) => <div className="input-error">{msg}</div>}</ErrorMessage>
            </div>

            <div className="form-group">
              <label htmlFor="confirm-password">Pakartokite slaptažodį</label>
              <div className="input-wrapper">
                <FaLock className="icon" />
                <Field type="password" name="confirmPassword" id="confirm-password" placeholder="Pakartokite slaptažodį" className={errors.confirmPassword && touched.confirmPassword ? "error" : ""} />
              </div>
              <ErrorMessage name="confirmPassword">{(msg) => <div className="input-error">{msg}</div>}</ErrorMessage>
            </div>

            <div className="button-wrapper">
              <button type="submit" className="form-button" disabled={isSubmitting}>
                {isSubmitting ? 'Registruojama...' : 'Registruotis'}
              </button>
            </div>

            <p>
              Jau turi paskyrą?{" "}
              <button className="link-button" type="button" onClick={onLoginClick} disabled={isSubmitting}>
                Prisijunk
              </button>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;