import { Formik, Form, Field, ErrorMessage } from "formik";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import * as Yup from "yup";
import "./forms1.scss";

const LoginForm1 = () => {
  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Neteisingas el. paštas').required('El. paštas būtinas'),
    password: Yup.string().min(6, 'Slaptažodis turi būti bent iš 6 simbolių').required('Slaptažodis privalomas'),
  });

  const handleLogin = (values) => {
    console.log('Login values:', values);
    alert('Preisijungimas sėkmingas!');
  };

  const handleGoogleLOgin = (response) => {
    console.log('Google login response:', response);
    alert('Prisijungta su Google!');
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
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
             <label htmlFor="login-email">EL. paštas</label>
             <Field type="email" name="email" id="login-email" />
             <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-group">
             <label htmlFor="login-password">Slaptažodis</label>
             <Field type="password" name="password" id="login-password" />
             <ErrorMessage name="passwoerd" component="div" className="error" />
            </div>

            <button type="submit" className="form-button">Prisijungti</button>
           </Form>
         )}
        </Formik>

        <p>arba prisijunkite su</p>

        <div className="oauth-buttons">
         <GoogleLogin
           onSuccess={handleGoogleLOgin}
           onError={() => alert('Google prisijungimo klaida')}
         />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginForm1;