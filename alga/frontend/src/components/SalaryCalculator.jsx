import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaUser, FaMoneyBill, FaClock, FaGift, FaMinusCircle, FaEquals } from "react-icons/fa";
import * as Yup from "yup";
import "./salaryCalculator.scss"; // Įsitikinkite, kad kelias yra teisingas

const SalaryCalculator = () => {
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: '',
    rate: '',
    hours: '',
    bonus: '',
    deductions: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Įveskite vardą'),
    rate: Yup.number().positive('Turi būti teigiamas skaičius').required('Įveskite valandinį atlygį'),
    hours: Yup.number().positive('Turi būti teigiamas skaičius').required('Įveskite darbo valandas'),
    bonus: Yup.number().min(0, 'Negali būti neigiamas').required('Įveskite premiją'),
    deductions: Yup.number().min(0, 'Negali būti neigiamas').required('Įveskite išskaitymus')
  });

  const handleSubmit = (values) => {
    setLoading(true);
    setTimeout(() => {
      const { rate, hours, bonus, deductions } = values;
      const result = (rate * hours + Number(bonus)) - Number(deductions);
      setTotal(result.toFixed(2));
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="salary-calculator">
      <h2>Algos skaičiuoklė</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form className="calculator-form">
          <table className="data-table">
            <thead>
              <tr>
                <th><FaUser /> Vardas</th>
                <th><FaMoneyBill /> Val. atlygis</th>
                <th><FaClock /> Valandų</th>
                <th><FaGift /> Premija</th>
                <th><FaMinusCircle /> Išskaitymai</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Field name="name" type="text" placeholder="Vardas" />
                  <ErrorMessage name="name" component="div" className="error" />
                </td>
                <td>
                  <Field name="rate" type="number" placeholder="€ / val." />
                  <ErrorMessage name="rate" component="div" className="error" />
                </td>
                <td>
                  <Field name="hours" type="number" placeholder="Valandų skaičius" />
                  <ErrorMessage name="hours" component="div" className="error" />
                </td>
                <td>
                  <Field name="bonus" type="number" placeholder="€" />
                  <ErrorMessage name="bonus" component="div" className="error" />
                </td>
                <td>
                  <Field name="deductions" type="number" placeholder="€" />
                  <ErrorMessage name="deductions" component="div" className="error" />
                </td>
              </tr>
            </tbody>
          </table>

          <button type="submit" disabled={loading}>
            {loading ? 'Skaičiuojama...' : 'Skaičiuoti'}
          </button>

          {total !== null && (
            <div className="result">
              <FaEquals /> Bendra suma: <strong>{total} €</strong>
            </div>
          )}
        </Form>
      </Formik>
    </div>
  );
};

export default SalaryCalculator;