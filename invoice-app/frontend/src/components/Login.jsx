import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "./login.scss";

const Login = () => {
  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Neteisingas el. pašto formatas').required('El. paštas būtinas'),
    password: Yup.string().min(6, 'Slaptažodis turi būti bent 6 simbolių').required('Slaptažodis būtinas'),
  });

  const handleLogin = (values) => {
    console.log('Login values:', values);
    alert('Prisijungimas sėkmingas!');
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={handleLogin}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="login-email">El. paštas</label>
              <div className="input-wrapper">
                <FaEnvelope className="icon" />
                <Field
                  type="email"
                  name="email"
                  id="login-email"
                  placeholder="Įveskite el. paštą"
                  className={errors.email && touched.email ? "error" : ""}
                />
              </div>
              <ErrorMessage name="email">
                {msg => <div className="input-error">{msg}</div>}
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
                {msg => <div className="input-error">{msg}</div>}
              </ErrorMessage>
            </div>

            <div className="button-wrapper">
              <button type="submit" className="form-button">Prisijungti</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
