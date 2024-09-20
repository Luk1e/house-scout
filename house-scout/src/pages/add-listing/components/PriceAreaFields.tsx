import React from "react";
import { Field, useFormikContext } from "formik";
import { FormValues } from "../values";
import { SuccessIcon } from "../../../assets/icons";

const PriceAreaFields: React.FC = () => {
  const { errors, touched, values } = useFormikContext<FormValues>();

  return (
    <div className="flex flex-col justify-between md:flex-row gap-[25px] [&_*]:text-[14px]">
      {/* price field */}
      <div className="flex-1 gap-[5px] lg:w-[384px] ">
        <label htmlFor="price" className="block">
          ფასი *
        </label>
        <Field
          name="price"
          type="number"
          className="w-full justify-between my-1"
          placeholder="ფასი"
        />
        <div
          className={
            "flex items-center font-firaGo400 gap-[7px] " +
            (touched.price || values.price
              ? errors.price
                ? "text-[#F93B1D]"
                : "text-[#45A849]"
              : "")
          }
        >
          <SuccessIcon /> მხოლოდ რიცხვები
        </div>
      </div>

      {/* area field */}
      <div className="flex-1 gap-[5px] lg:w-[384px] ">
        <label htmlFor="area" className="block">
          ფართობი *
        </label>
        <Field
          name="area"
          type="number"
          className="w-full justify-between my-1"
          placeholder="ფართობი"
        />
        <div
          className={
            "flex items-center font-firaGo400 gap-[7px] " +
            (touched.area || values.area
              ? errors.area
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

export default PriceAreaFields;
