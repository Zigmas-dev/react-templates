import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DOMPurify from 'dompurify';
import "./forms.scss";

const LoginForm = ({ onLoginSuccess, onSwitchToRegister }) => {
  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Neteisingas el. pašto formatas').required('El. paštas būtinas'),
    password: Yup.string().min(6, 'Slaptažodis turi būti bent 6 simbolių').required('Slaptažodis būtinas'),
  });

  const handleLogin = (values) => {
    const sanitizedValues = {
      email: DOMPurify.sanitize(values.email),
      password: DOMPurify.sanitize(values.password),
    };
  
    console.log('Sanitized login values:', sanitizedValues);
    alert('Prisijungimas sėkmingas!');
    if (onLoginSuccess) onLoginSuccess();
  };  

  return (
    <div className="form-container">
      <h2>Reikia prisijungti</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={handleLogin}
      >
        {() => (
          <Form>
            <div className="form-group">
              <label htmlFor="login-email">El. paštas</label>
              <Field type="email" name="email" id="login-email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="login-password">Slaptažodis</label>
              <Field type="password" name="password" id="login-password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <button type="submit" className="form-button">Prisijungti</button>

            {/* Papildomas tekstas su nuoroda į registraciją */}
            <div className="form-footer">
              <span>Neturi paskyros?</span>{" "}
              <button type="button" onClick={onSwitchToRegister} className="link-button">
                Registruokis čia
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
