import { Field } from "formik";
import { useField } from "formik";
import { SuccessIcon } from "../../../assets/icons";

function RentTypeFields() {
  const [, meta] = useField("is_rental");
  return (
    <div>
      <div className="flex gap-[32px]">
        <label className="flex items-center gap-2 font-firaGo400 text-[14px]">
          <Field type="radio" name="is_rental" value="0" />
          იყიდება
        </label>

        <label className="flex items-center gap-2 font-firaGo400 text-[14px] ml-auto">
          <Field type="radio" name="is_rental" value="1" />
          ქირავდება
        </label>
      </div>

      {meta.touched && (
        <div
          className={
            "flex items-center font-firaGo400 gap-[7px] text-[14px] " +
            (meta.error ? "text-[#F93B1D]" : "text-[#45A849]")
          }
        >
          <SuccessIcon /> სავალდებულო
        </div>
      )}
    </div>
  );
}

export default RentTypeFields;
