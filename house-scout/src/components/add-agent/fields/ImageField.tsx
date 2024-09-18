import React, { useState } from "react";
import { useFormikContext } from "formik";
import { FormValues } from "../values";
import { UploadIcon, RemoveIcon, SuccessIcon } from "../../../assets/icons";

interface ImageFieldProps {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}

const ImageField: React.FC<ImageFieldProps> = ({ setFieldValue }) => {
  const { errors, touched, setFieldTouched } = useFormikContext<FormValues>();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];

    const updateAvatar = (file: File | undefined) => {
      return new Promise<void>((resolve) => {
        setFieldValue("avatar", file || undefined);
        resolve();
      });
    };

    updateAvatar(file).then(() => {
      setFieldTouched("avatar", true);
    });

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  };

  const handleRemoveImage = () => {
    setFieldValue("avatar", undefined);
    setPreviewUrl(null);
  };

  return (
    <div className="flex flex-col gap-[5px] [&_*]:text-[14px]">
      <label htmlFor="avatar" className="block">
        ატვირთეთ ფოტო *
      </label>

      <div className="flex items-center">
        <div className="relative flex w-full">
          <input
            id="avatar"
            name="avatar"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="sr-only"
          />
          <label
            htmlFor="avatar"
            className="flex w-full items-center justify-center h-[120px] border border-[#2D3648] border-dashed rounded-[8px] cursor-pointer focus-within:outline-none text-[#2D3648] hover:opacity-60 transition-all duration-300"
          >
            {previewUrl ? (
              <div className="relative">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-[92px] h-[82px]  rounded-[4px]"
                />
                {previewUrl && (
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2"
                  >
                    <RemoveIcon />
                  </button>
                )}
              </div>
            ) : (
              <div className="space-y-1 text-center">
                <UploadIcon />
              </div>
            )}
          </label>
        </div>
      </div>

      <div
        className={
          "flex items-center font-firaGo400 gap-[7px] " +
          (touched.avatar
            ? errors.avatar
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

export default ImageField;
