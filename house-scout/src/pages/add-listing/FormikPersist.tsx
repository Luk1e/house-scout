import { useEffect } from "react";
import { useFormikContext, FormikValues } from "formik";

const FormikPersist = () => {
  const { values, errors, setValues, setErrors } =
    useFormikContext<FormikValues>();
  const storageKey = `formik.form.FormName`;

  useEffect(() => {
    const data = localStorage.getItem(storageKey);
    if (data) {
      const { values: storedValues, errors: storedErrors } = JSON.parse(data);
      setValues(storedValues);
      setErrors(storedErrors);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify({ values, errors }));
  }, [values, errors, storageKey]);

  return null;
};

export default FormikPersist;
