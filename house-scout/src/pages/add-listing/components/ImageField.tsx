import React, { useEffect, useState } from "react";
import { useFormikContext } from "formik";
import { FormValues } from "../values";
import { UploadIcon, RemoveIcon, SuccessIcon } from "../../../assets/icons";

const ImageField: React.FC = () => {
  const { errors, touched, values, setFieldTouched, setFieldValue } =
    useFormikContext<FormValues>();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    const savedData = localStorage.getItem("image_field");

    if (savedData) {
      const { values } = JSON.parse(savedData);
      if (values.image) {
        const imageDataUrl = values.image.dataUrl;

        // Function to convert base64 to a Blob
        const base64ToBlob = (base64Data: string, contentType: string = "") => {
          const byteCharacters = atob(base64Data.split(",")[1]); // Decode base64, skipping "data:image/png;base64,"
          const byteNumbers = new Array(byteCharacters.length);

          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }

          const byteArray = new Uint8Array(byteNumbers);
          return new Blob([byteArray], { type: contentType });
        };

        // Convert the base64 string back to Blob
        const imageBlob = base64ToBlob(imageDataUrl, values.image.type);

        // Create a new File object from the Blob
        const imageFile = new File([imageBlob], values.image.name, {
          type: values.image.type,
          lastModified: Date.now(),
        });

        setFieldValue("image", imageFile).then(() => {
          setFieldTouched("image", true);
        });
        setPreviewUrl(values.image.dataUrl);
      }
    }
  }, [setFieldValue, setFieldTouched]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];

    const updateImage = (file: File | undefined) => {
      return new Promise<void>((resolve) => {
        setFieldValue("image", file || undefined);
        resolve();
      });
    };

    updateImage(file).then(() => {
      setFieldTouched("image", true);
    });

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result as string;
        setPreviewUrl(dataUrl);

        const imageData = {
          dataUrl: dataUrl,
          name: file.name,
          type: file.type,
          size: file.size,
        };
        localStorage.setItem(
          "image_field",
          JSON.stringify({ values: { image: imageData } })
        );
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  };

  const handleRemoveImage = () => {
    localStorage.removeItem("image_field");
    setFieldValue("image", null);
    setPreviewUrl(null);
  };

  return (
    <div className="flex flex-col gap-[5px] [&_*]:text-[14px]">
      <label htmlFor="image" className="block">
        ატვირთეთ ფოტო *
      </label>

      <div className="flex items-center">
        <div className="relative flex w-full">
          <input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            onBlur={() => setFieldTouched("image", true)}
            className="sr-only"
          />
          <label
            htmlFor="image"
            className="flex w-full items-center justify-center h-[120px] border border-[#2D3648] border-dashed rounded-[8px] cursor-pointer focus-within:outline-none text-[#2D3648] hover:opacity-60 transition-all duration-300"
          >
            {previewUrl ? (
              <div className="relative">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-[92px] h-[82px] rounded-[4px]"
                />
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2"
                >
                  <RemoveIcon />
                </button>
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
        className={`flex items-center font-firaGo400 gap-[7px] ${
          touched.image || values.image
            ? errors.image
              ? "text-[#F93B1D]"
              : "text-[#45A849]"
            : ""
        }`}
      >
        <SuccessIcon /> არ უნდა აღემატებოდეს 1mb-ის
      </div>
    </div>
  );
};

export default ImageField;
