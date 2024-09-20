import { useState, useRef, useEffect } from "react";
import { useField } from "formik";
import { SelectProps } from "./types";
import { ArrowIcon, UploadIcon, SuccessIcon } from "../../assets/icons";

const Select = ({ options, name, label, isAgent, openModal }: SelectProps) => {
  const [field, meta, helpers] = useField(name);
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    helpers.setTouched(true);
  };

  const handleSelect = (value: number) => {
    helpers.setTouched(true);
    helpers.setValue(value);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative flex-1 gap-[10px] lg:w-[384px]">
      <label htmlFor={name} className="block mb-1">
        {label}
      </label>

      <div
        className={`text-[14px] font-firaGo400 border-[#808A93] border-[1px] rounded-[6px] p-[10px] [&_*]:text-[14px] [&_*]:font-firaGo400 ${
          isOpen ? "rounded-b-none" : ""
        }`}
        onClick={handleToggle}
      >
        <span className="flex justify-between items-center">
          {options.find((option) => option.value == field.value)?.label ||
            "აირჩიე"}{" "}
          <ArrowIcon rotate={false} />
        </span>
      </div>
      {isOpen && (
        <div className="absolute  w-full bg-white max-h-[200px] overflow-y-auto">
          {isAgent && (
            <div
              onClick={openModal}
              className="flex gap-2 text-[14px] font-firaGo400 border border-[#808A93] p-[10px]  hover:bg-gray-100 cursor-pointer last-of-type:rounded-b-[6px]"
            >
              <UploadIcon /> დაამატე აგენტი
            </div>
          )}
          {options.map((option) => (
            <div
              key={option.value}
              className="text-[14px] font-firaGo400 border border-[#808A93] p-[10px]  hover:bg-gray-100 cursor-pointer last-of-type:rounded-b-[6px]"
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}

      <div
        className={
          "flex items-center font-firaGo400 gap-[7px] " +
          (meta.touched || meta.value
            ? meta.error
              ? "text-[#F93B1D]"
              : "text-[#45A849]"
            : "")
        }
      >
        <SuccessIcon /> სავალდებულო
      </div>
    </div>
  );
};
export default Select;
