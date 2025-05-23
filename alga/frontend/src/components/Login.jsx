import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaUser, FaLock } from "react-icons/fa"; // Pakeista FaEnvelope į FaUser
// import axios from "axios"; // Užkomentuojame axios importą
import "./forms.scss";

const Login = ({ onRegisterClick, onLoginSuccess }) => {
  const [serverError, setServerError] = useState("");

  const loginSchema = Yup.object().shape({
    username: Yup.string().required("Vartotojo vardas būtinas"), // Pakeista iš email į username
    password: Yup.string()
      .min(6, "Slaptažodis turi būti bent 6 simbolių")
      .required("Slaptažodis būtinas"),
  });

  const handleLogin = async (values, { setSubmitting }) => {
    setServerError("");

    console.log("Imituojamas prisijungimas su:", values);
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Imituoja tinklo delsimą

    // Imitacija: tikrina username = "test", slaptažodis = "password"
    if (values.username === "test" && values.password === "password") {
      alert("Prisijungimas sėkmingas!"); // Galima pašalinti, jei nereikalingas
      localStorage.setItem("token", "fake-jwt-token-123");
      if (onLoginSuccess) {
        onLoginSuccess();
      }
    } else {
      setServerError("Neteisingas vartotojo vardas arba slaptažodis (imitacija)");
    }

    setSubmitting(false);
  };

  return (
    <div className="form-container">
      <h2>Prisijungti</h2>
      {serverError && <div className="server-error">{serverError}</div>}
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={handleLogin}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="login-username">Vartotojo vardas</label>
              <div className="input-wrapper">
                <FaUser className="icon" />
                <Field
                  type="text"
                  name="username"
                  id="login-username"
                  placeholder="Įveskite vartotojo vardą"
                  className={errors.username && touched.username ? "error" : ""}
                />
              </div>
              <ErrorMessage name="username">
                {(msg) => <div className="input-error">{msg}</div>}
              </ErrorMessage>
            </div>

            <div className="form-group">
              <label htmlFor="login-password">Slaptažodis</label>
              <div className="input-wrapper">
                <FaLock className="icon" />
                <Field
                  type="password"
                  name="password"
                  id="login-password"
                  placeholder="Įveskite slaptažodį"
                  className={errors.password && touched.password ? "error" : ""}
                />
              </div>
              <ErrorMessage name="password">
                {(msg) => <div className="input-error">{msg}</div>}
              </ErrorMessage>
            </div>

            <div className="button-wrapper">
              <button type="submit" className="form-button" disabled={isSubmitting}>
                {isSubmitting ? "Prisijungiama..." : "Prisijungti"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
