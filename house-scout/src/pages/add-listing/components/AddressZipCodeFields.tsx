import React from "react";
import { Field, useFormikContext } from "formik";
import { FormValues } from "../values";
import { SuccessIcon } from "../../../assets/icons";

const AddressZipCodeFields: React.FC = () => {
  const { errors, touched, values } = useFormikContext<FormValues>();

  return (
    <div className="flex flex-col justify-between md:flex-row gap-[25px] [&_*]:text-[14px]">
      {/* address field */}
      <div className="flex-1 gap-[5px] lg:w-[384px] ">
        <label htmlFor="address" className="block">
          მისამართი *
        </label>
        <Field
          name="address"
          className="w-full justify-between my-1"
          placeholder="მისამართი"
        />
        <div
          className={
            "flex items-center font-firaGo400 gap-[7px] " +
            (touched.address || values.address
              ? errors.address
                ? "text-[#F93B1D]"
                : "text-[#45A849]"
              : "")
          }
        >
          <SuccessIcon /> მინიმუმ ორი სიმბოლო
        </div>
      </div>

      {/* zip_code field */}
      <div className="flex-1 gap-[5px] lg:w-[384px] ">
        <label htmlFor="zip_code" className="block">
          საფოსტო ინდექსი *
        </label>
        <Field
          name="zip_code"
          type="number"
          className="w-full justify-between my-1"
          placeholder="საფოსტო ინდექსი"
        />
        <div
          className={
            "flex items-center font-firaGo400 gap-[7px] " +
            (touched.zip_code || values.zip_code
              ? errors.zip_code
                ? "text-[#F93B1D]"
                : "text-[#45A849]"
              : "")
          }
        >
          <SuccessIcon /> მხოლოდ რიცხვები
        </div>
      </div>
    </div>
  );
};

export default AddressZipCodeFields;
