import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaUser, FaLock } from "react-icons/fa"; // Pakeista FaEnvelope į FaUser
// import axios from "axios"; // Užkomentuojame axios importą
import "./forms.scss";

const Register = ({ onLoginClick, onRegisterSuccess }) => {
  const registerSchema = Yup.object().shape({
    username: Yup.string().required("Vartotojo vardas būtinas"), // Pakeista iš email į username
    password: Yup.string()
      .min(6, "Slaptažodis turi būti bent 6 simbolių")
      .required("Slaptažodis būtinas"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Slaptažodžiai turi sutapti")
      .required("Pakartokite slaptažodį"),
  });

  const handleRegister = async (values, { setSubmitting, resetForm }) => {
    console.log("Imituojama registracija su:", values);
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Imituoja tinklo delsimą

    // Imituojame sėkmingą registraciją
    localStorage.setItem("user", JSON.stringify({ username: values.username })); // Išsaugome vartotojo vardą

    resetForm(); // Išvalome formą
    if (onRegisterSuccess) {
      onRegisterSuccess(); // Iškviečiame tėvinio komponento funkciją
    }

    setSubmitting(false); // Nustatome, kad formos siuntimas baigtas
  };

  return (
    <div className="form-container">
      <h2>Reikia registruotis</h2>
      <Formik
        initialValues={{ username: "", password: "", confirmPassword: "" }}
        validationSchema={registerSchema}
        onSubmit={handleRegister}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="register-username">Vartotojo vardas</label>
              <div className="input-wrapper">
                <FaUser className="icon" />
                <Field
                  type="text"
                  name="username"
                  id="register-username"
                  placeholder="Įveskite vartotojo vardą"
                  className={errors.username && touched.username ? "error" : ""}
                />
              </div>
              <ErrorMessage name="username">
                {(msg) => <div className="input-error">{msg}</div>}
              </ErrorMessage>
            </div>

            <div className="form-group">
              <label htmlFor="register-password">Slaptažodis</label>
              <div className="input-wrapper">
                <FaLock className="icon" />
                <Field
                  type="password"
                  name="password"
                  id="register-password"
                  placeholder="Įveskite slaptažodį"
                  className={errors.password && touched.password ? "error" : ""}
                />
              </div>
              <ErrorMessage name="password">
                {(msg) => <div className="input-error">{msg}</div>}
              </ErrorMessage>
            </div>

            <div className="form-group">
              <label htmlFor="confirm-password">Pakartokite slaptažodį</label>
              <div className="input-wrapper">
                <FaLock className="icon" />
                <Field
                  type="password"
                  name="confirmPassword"
                  id="confirm-password"
                  placeholder="Pakartokite slaptažodį"
                  className={errors.confirmPassword && touched.confirmPassword ? "error" : ""}
                />
              </div>
              <ErrorMessage name="confirmPassword">
                {(msg) => <div className="input-error">{msg}</div>}
              </ErrorMessage>
            </div>

            <div className="button-wrapper">
              <button type="submit" className="form-button" disabled={isSubmitting}>
                {isSubmitting ? "Registruojama..." : "Registruotis"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
