import { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import "./contenteditor.scss";

const ContentEditor = () => {
  const [content, setContent] = useState(' ');

  const validationSchema = Yup.object({
    title: Yup.string().required('Pavadinimas yra privalomas'),
    body: Yup.string().required('Turinys yra privalomas'),
  });

  return (
    <div className="content-editor">
      <h1>Redagouti turynį</h1>
      <Formik
        initialValues={{ title: '', body: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
           setContent(values.body);
           alert('Turinys sėkmingai išsuagotas');
        }}
       >
        <Form>
          <div>
            <label htmlFor="title">Pavadinimas</label>
            <Field as="textarea" id="body" name="body" />
          </div>
          <button type="submit">Išsaugoti</button>
        </Form>
       </Formik>
       {content && <div className="preview"><h2>Turinio peržiūra</h2><p>{content}</p></div>}
    </div>
  );
};

export default ContentEditor;