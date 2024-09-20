import React, { useEffect } from "react";
import { useFormikContext, FormikValues } from "formik";

type FormikPersistProps = {
  name: string;
};

const FormikPersist: React.FC<FormikPersistProps> = ({ name }) => {
  const { values, errors, setValues, setErrors } =
    useFormikContext<FormikValues>();
  const storageKey = `formik.form.${name}`;

  useEffect(() => {
    const data = localStorage.getItem(storageKey);
    if (data) {
      const { values: storedValues, errors: storedErrors } = JSON.parse(data);
      setValues(storedValues);
      setErrors(storedErrors);
    }

    return () => {
      localStorage.removeItem(storageKey);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify({ values, errors }));
  }, [values, errors, storageKey]);

  return null;
};

export default FormikPersist;
