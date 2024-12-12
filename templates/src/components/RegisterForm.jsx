import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./forms.scss";

const RegisterForm = () => {
    const registerSchema = Yup.object().shape({
      username: Yup.string().required('Vartotojo vardas būtinas'),
      email: Yup.string().email('Neteisingas el. pašto formatas').required('El. paštas būtinas'),
      password: Yup.string().min(6, 'Slaptažodis turi būti bent 6 simbolių').required('Slaptažodis būtinas'),
    });
  
    const handleRegister = (values) => {
      console.log('Register values:', values);
      alert('Registracija sėkminga!');
    };
  
    return (
      <div className="form-container">
        <h2>Registracija</h2>
        <Formik
          initialValues={{ username: '', email: '', password: '' }}
          validationSchema={registerSchema}
          onSubmit={handleRegister}
        >
          {() => (
            <Form>
              <div className="form-group">
                <label htmlFor="username">Vartotojo vardas</label>
                <Field type="text" name="username" id="username" />
                <ErrorMessage name="username" component="div" className="error" />
              </div>
  
              <div className="form-group">
                <label htmlFor="email">El. paštas</label>
                <Field type="email" name="email" id="email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
  
              <div className="form-group">
                <label htmlFor="password">Slaptažodis</label>
                <Field type="password" name="password" id="password" />
                <ErrorMessage name="password" component="div" className="error" />
              </div>
  
              <button type="submit" className="form-button">Registruotis</button>
            </Form>
          )}
        </Formik>
      </div>
    );
  };
  
  export default RegisterForm;
  