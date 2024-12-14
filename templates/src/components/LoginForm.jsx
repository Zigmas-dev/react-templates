import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./forms.scss";

const LoginForm = () => {
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
      <h2>Prisijungimas</h2>
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
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;