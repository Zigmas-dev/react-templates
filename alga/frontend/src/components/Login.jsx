// src/components/Login.jsx
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaEnvelope, FaLock } from "react-icons/fa";
// import axios from "axios"; // Užkomentuojame axios importą
import "./forms.scss";

const Login = ({ onRegisterClick, onLoginSuccess }) => {
  const [serverError, setServerError] = useState("");

  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Neteisingas el. pašto formatas").required("El. paštas būtinas"),
    password: Yup.string().min(6, "Slaptažodis turi būti bent 6 simbolių").required("Slaptažodis būtinas"),
  });

  const handleLogin = async (values, { setSubmitting }) => {
    setServerError("");

    console.log("Imituojamas prisijungimas su:", values);
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Imituoja tinklo delsimą

    if (values.email === "test@test.com" && values.password === "password") {
      alert("Prisijungimas sėkmingas!"); // Šį alert galite palikti, arba jį pašalinti, jei nereikalingas
      localStorage.setItem("token", "fake-jwt-token-123");
      if (onLoginSuccess) {
        onLoginSuccess();
      }
    } else {
      setServerError("Neteisingas el. paštas arba slaptažodis (imitacija)");
    }

    setSubmitting(false);
  };

  return (
    <div className="form-container">
      <h2>Reikia prisijungti</h2>
      {serverError && <div className="server-error">{serverError}</div>}
      <Formik initialValues={{ email: "", password: "" }} validationSchema={loginSchema} onSubmit={handleLogin}>
        {({ errors, touched, isSubmitting }) => (
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
              <button type="submit" className="form-button" disabled={isSubmitting}>
                {isSubmitting ? 'Prisijungiama...' : 'Prisijungti'}
              </button>
            </div>

            <p>
              Neturi paskyros?{" "}
              <button className="link-button" type="button" onClick={onRegisterClick} disabled={isSubmitting}>
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