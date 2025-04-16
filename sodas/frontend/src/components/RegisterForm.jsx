import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DOMPurify from "dompurify";
import "./forms.scss";

const RegisterForm = () => {
  const registerSchema = Yup.object().shape({
    username: Yup.string().required('Vartotojo vardas būtinas'),
    email: Yup.string().email('Neteisingas el. pašto formatas').required('El. paštas būtinas'),
    password: Yup.string().min(6, 'Slaptažodis turi būti bent 6 simbolių').required('Slaptažodis būtinas'),
  });

  const handleRegister = (values) => {
    const sanitizedValues = {
      username: DOMPurify.sanitize(values.username),
      email: DOMPurify.sanitize(values.email),
      password: DOMPurify.sanitize(values.password),
    };

    console.log('Register values:', sanitizedValues);
    alert('Registracija sėkminga!');
  };

  return (
    <div className="form-container">
      <h2>Registruotis</h2>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={registerSchema}
        onSubmit={handleRegister}
      >
        {() => (
          <Form>
            <div className="form-group">
              <label htmlFor="register-username">Vartotojo vardas</label>
              <Field type="text" name="username" id="register-username" />
              <ErrorMessage name="username" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="register-email">El. paštas</label>
              <Field type="email" name="email" id="register-email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="register-password">Slaptažodis</label>
              <Field type="password" name="password" id="register-password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <div className="form-footer">
              <button type="submit" className="form-button">Registruotis</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
