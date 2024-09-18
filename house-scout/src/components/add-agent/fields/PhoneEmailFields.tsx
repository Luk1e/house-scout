import React from "react";
import { Field, useFormikContext } from "formik";
import { FormValues } from "../values";
import { SuccessIcon } from "../../../assets/icons";

const PhoneEmailFields: React.FC = () => {
  const { errors, touched } = useFormikContext<FormValues>();

  return (
    <div className="flex flex-col justify-between md:flex-row gap-[25px] [&_*]:text-[14px]">
      {/* email field */}
      <div className="flex-1 gap-[5px] lg:w-[384px] ">
        <label htmlFor="email" className="block">
          ელ-ფოსტა *
        </label>
        <Field
          name="email"
          className="w-full justify-between my-1"
          placeholder="ელ-ფოსტა"
        />
        <div
          className={
            "flex items-center font-firaGo400 gap-[7px] " +
            (touched.email
              ? errors.email
                ? "text-[#F93B1D]"
                : "text-[#45A849]"
              : "")
          }
        >
          <SuccessIcon /> გამოიყენეთ @redberry.ge ფოსტა
        </div>
      </div>

      {/* phone field */}
      <div className="flex-1 gap-[5px] lg:w-[384px]">
        <label htmlFor="phone" className="block">
          ტელეფონის ნომერი *
        </label>
        <Field
          name="phone"
          className="w-full justify-between my-1"
          placeholder="ტელეფონის ნომერი"
        />
        <div
          className={
            "flex items-center font-firaGo400 gap-[7px] " +
            (touched.phone
              ? errors.phone
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

export default PhoneEmailFields;
