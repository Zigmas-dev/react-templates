import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./VatCalculator.scss";

const VatCalculator = ({ vatRate }) => {
  const formik = useFormik({
    initialValues: {
      totalAmount: "",
    },
    validationSchema: Yup.object({
      totalAmount: Yup.number()
        .typeError("Įveskite skaičių")
        .positive("Suma turi būti teigiama")
        .required("Šis laukas yra privalomas"),
    }),
    onSubmit: () => {}, // Šiuo atveju nereikia papildomo apdorojimo
  });

  const calculateVat = (totalAmount) => {
    const amountWithoutVat = totalAmount / (1 + vatRate / 100);
    const vat = totalAmount - amountWithoutVat;
    return { amountWithoutVat, vat };
  };

  const { totalAmount } = formik.values;
  const calculations =
    totalAmount !== ""
      ? calculateVat(parseFloat(totalAmount))
      : { amountWithoutVat: 0, vat: 0 };

  return (
    <div className="vat-calculator">
      <h2>PVM skaičiuoklė</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="totalAmount">Bendra suma su PVM:</label>
          <input
            type="text"
            id="totalAmount"
            name="totalAmount"
            placeholder="Įveskite bendrą sumą"
            value={formik.values.totalAmount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.totalAmount && formik.errors.totalAmount && (
            <p className="error">{formik.errors.totalAmount}</p>
          )}
        </div>
        <div className="results">
          <p>
            <strong>Suma be PVM:</strong>{" "}
            {calculations.amountWithoutVat.toFixed(2)} €
          </p>
          <p>
            <strong>PVM ({vatRate}%):</strong> {calculations.vat.toFixed(2)} €
          </p>
          <p>
            <strong>Bendra suma:</strong> {totalAmount || 0} €
          </p>
        </div>
      </form>
    </div>
  );
};

VatCalculator.propTypes = {
  vatRate: PropTypes.number,
};

VatCalculator.defaultProps = {
  vatRate: 21, // Numatytasis PVM tarifas
};

export default VatCalculator;
