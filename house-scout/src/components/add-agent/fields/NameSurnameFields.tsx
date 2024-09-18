import React from "react";
import { Field, useFormikContext } from "formik";
import { FormValues } from "../values";
import { SuccessIcon } from "../../../assets/icons";

const NameSurnameFields: React.FC = () => {
  const { errors, touched } = useFormikContext<FormValues>();

  return (
    <div className="flex flex-col justify-between md:flex-row gap-[25px] [&_*]:text-[14px]">
      {/* name field */}
      <div className="flex-1 gap-[5px] lg:w-[384px] ">
        <label htmlFor="name" className="block">
          სახელი *
        </label>
        <Field
          name="name"
          className="w-full justify-between my-1"
          placeholder="სახელი"
        />
        <div
          className={
            "flex items-center font-firaGo400 gap-[7px] " +
            (touched.name
              ? errors.name
                ? "text-[#F93B1D]"
                : "text-[#45A849]"
              : "")
          }
        >
          <SuccessIcon /> მინიმუმ ორი სიმბოლო
        </div>
      </div>

      {/* surname field */}
      <div className="flex-1 gap-[5px] lg:w-[384px] ">
        <label htmlFor="surname" className="block">
          გვარი *
        </label>
        <Field
          name="surname"
          className="w-full justify-between my-1"
          placeholder="გვარი"
        />
        <div
          className={
            "flex items-center font-firaGo400 gap-[7px] " +
            (touched.surname
              ? errors.surname
                ? "text-[#F93B1D]"
                : "text-[#45A849]"
              : "")
          }
        >
          <SuccessIcon /> მინიმუმ ორი სიმბოლო
        </div>
      </div>
    </div>
  );
};

export default NameSurnameFields;
