// src/components/SalaryCalculator.jsx
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaUser, FaMoneyBill, FaClock, FaGift, FaMinusCircle, FaEquals } from "react-icons/fa";
import * as Yup from "yup";
import "./salaryCalculator.scss";

const SalaryCalculator = () => {
  const [total, setTotal] = useState(null); // Išsaugome apskaičiuotą sumą
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

  const handleSubmit = (values, { setSubmitting }) => {
    setLoading(true);
    setSubmitting(true);
    setTimeout(() => {
      const { rate, hours, bonus, deductions } = values;
      const result = (rate * hours + Number(bonus)) - Number(deductions);
      setTotal(result.toFixed(2));
      setLoading(false);
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="salary-calculator">
      <h2>Algos skaičiuoklė</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="calculator-form">
            <table className="data-table">
              <thead>
                <tr>{/* Pašalinti tarpai tarp <th> žymų */}
                  <th><FaUser /> Vardas</th><th><FaMoneyBill /> Val. atlygis</th><th><FaClock /> Valandų</th><th><FaGift /> Premija</th><th><FaMinusCircle /> Išskaitymai</th><th><FaEquals /> Bendra suma</th>
                </tr>
              </thead>
              <tbody>
                <tr>{/* Pašalinti tarpai tarp <td> žymų */}
                  <td>
                    <Field name="name" type="text" placeholder="Vardas" />
                    <ErrorMessage name="name" component="div" className="error" />
                  </td><td>
                    <Field name="rate" type="number" placeholder="€ / val." />
                    <ErrorMessage name="rate" component="div" className="error" />
                  </td><td>
                    <Field name="hours" type="number" placeholder="Valandų skaičius" />
                    <ErrorMessage name="hours" component="div" className="error" />
                  </td><td>
                    <Field name="bonus" type="number" placeholder="€" />
                    <ErrorMessage name="bonus" component="div" className="error" />
                  </td><td>
                    <Field name="deductions" type="number" placeholder="€" />
                    <ErrorMessage name="deductions" component="div" className="error" />
                  </td><td className="total-cell">
                    {loading ? (
                      <span className="loading-text">Skaičiuojama...</span>
                    ) : total !== null ? (
                      <strong>{total} €</strong>
                    ) : (
                      <span className="placeholder-text">--.-- €</span>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Skaičiuojama...' : 'Skaičiuoti'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SalaryCalculator;