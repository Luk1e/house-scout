import { Field, useFormikContext } from "formik";
import { FormValues } from "../values";
import { SuccessIcon } from "../../../assets/icons";

function DescriptionField() {
  const { errors, touched, values } = useFormikContext<FormValues>();

  return (
    <div className="flex flex-col justify-between md:flex-row gap-[25px] [&_*]:text-[14px]">
      {/* description field */}
      <div className="flex-1 gap-[5px] lg:w-[384px] ">
        <label htmlFor="description" className="block">
          აღწერა *
        </label>
        <Field
          name="description"
          as="textarea"
          className="w-full  h-[135px] my-1  border border-[#808A93] rounded-[6px] text-[14px] font-firaGo400 p-[10px] resize-none"
          placeholder="აღწერა"
        />

        <div
          className={
            "flex items-center font-firaGo400 gap-[7px] " +
            (touched.description || values.description
              ? errors.description
                ? "text-[#F93B1D]"
                : "text-[#45A849]"
              : "")
          }
        >
          <SuccessIcon /> მინიმუმ 5 სიტყვა
        </div>
      </div>
    </div>
  );
}

export default DescriptionField;
