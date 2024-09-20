import { Field, useFormikContext } from "formik";
import { FormValues } from "../values";
import { SuccessIcon } from "../../../assets/icons";

function BedroomField() {
  const { errors, touched, values } = useFormikContext<FormValues>();

  return (
    <div className="flex flex-col justify-between md:flex-row gap-[25px] [&_*]:text-[14px]">
      {/* bedrooms field */}
      <div className="flex-1 gap-[5px] lg:w-[384px]">
        <label htmlFor="bedrooms" className="block">
          საძინებლების რაოდენობა *
        </label>
        <Field
          name="bedrooms"
          type="number"
          className="w-full justify-between my-1"
          placeholder="საძინებლების რაოდენობა"
        />
        <div
          className={
            "flex items-center font-firaGo400 gap-[7px] " +
            (touched.bedrooms || values.bedrooms
              ? errors.bedrooms
                ? "text-[#F93B1D]"
                : "text-[#45A849]"
              : "")
          }
        >
          <SuccessIcon /> მხოლოდ რიცხვები
        </div>
      </div>

      <div className="hidden flex-1 gap-[5px] lg:w-[384px] md:block"></div>
    </div>
  );
}

export default BedroomField;
