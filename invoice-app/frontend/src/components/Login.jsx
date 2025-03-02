import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaEnvelope, FaLock } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./forms.scss";

const Login = ({ onRegisterClick }) => {
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Neteisingas el. pašto formatas").required("El. paštas būtinas"),
    password: Yup.string().min(6, "Slaptažodis turi būti bent 6 simbolių").required("Slaptažodis būtinas"),
  });

  const handleLogin = async (values, { setSubmitting }) => {
    setServerError("");

    try {
      const response = await axios.post("http://127.0.0.1:3000/auth/login", values);
      localStorage.setItem("token", response.data.token); // Išsaugome tokeną

      navigate("/main");
    } catch (error) {
      setServerError(error.response?.data?.message || "Prisijungimo klaida");
    }

    setSubmitting(false);
  };

  return (
    <div className="form-container">
      <h2>Reikia prisijungti</h2>
      {serverError && <div className="server-error">{serverError}</div>} {/* Rodo klaidą, jei yra */}
      <Formik initialValues={{ email: "", password: "" }} validationSchema={loginSchema} onSubmit={handleLogin}>
        {({ errors, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="login-email">El. paštas</label>
              <div className="input-wrapper">
                <FaEnvelope className="icon" />
                <Field type="email" name="email" id="login-email" placeholder="Įveskite el. paštą" className={errors.email && touched.email ? "error" : ""} />
              </div>
              <ErrorMessage name="email">{(msg) => <div className="input-error">{msg}</div>}</ErrorMessage>
            </div>

            <div className="form-group">
              <label htmlFor="login-password">Slaptažodis</label>
              <div className="input-wrapper">
                <FaLock className="icon" />
                <Field type="password" name="password" id="login-password" placeholder="Įveskite slaptažodį" className={errors.password && touched.password ? "error" : ""} />
              </div>
              <ErrorMessage name="password">{(msg) => <div className="input-error">{msg}</div>}</ErrorMessage>
            </div>

            <div className="button-wrapper">
              <button type="submit" className="form-button">Prisijungti</button>
            </div>

            <p>
              Neturi paskyros?{" "}
              <button className="link-button" type="button" onClick={onRegisterClick}>
                Registruokis
              </button>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
