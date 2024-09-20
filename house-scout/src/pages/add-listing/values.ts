import { z } from "zod";
import { DispatchType } from "../../store/store";
import { createEstate } from "../../toolkit/real-estates/createEstateSlice";

export const initialValues: FormValues = {
  is_rental: "",
  address: "",
  zip_code: "",
  region_id: "",
  city_id: "",
  price: "",
  area: "",
  bedrooms: "",
  description: "",
  image: undefined,
  agent_id: "",
};

const MAX_UPLOAD_SIZE = 1024 * 1024 * 1;

export const validationSchema = z.object({
  is_rental: z.string(),

  address: z.string().min(2),

  zip_code: z.number(),

  region_id: z.number().min(0),

  city_id: z.number().min(0),

  price: z.number(),

  area: z.number(),

  bedrooms: z.number().int(),

  description: z.string().refine((value) => {
    const wordCount = value.trim().split(/\s+/).filter(Boolean).length;
    return wordCount >= 5;
  }),

  image: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_UPLOAD_SIZE)
    .refine((file) =>
      ["image/jpeg", "image/png", "image/gif", "image/webp"].includes(file.type)
    ),

  agent_id: z.number().min(0),
});

export type FormValues = {
  is_rental: string;
  address: string;
  zip_code: string;
  region_id: string;
  city_id: string;
  price: string;
  area: string;
  bedrooms: string;
  description: string;
  image: File | undefined;
  agent_id: string;
};

interface FormProps {
  values: FormValues;
  dispatch: DispatchType;
}

export const onSubmit = ({ values, dispatch }: FormProps) => {
  const parsedValues = {
    ...values,
    is_rental: Number(values.is_rental),
    zip_code: Number(values.zip_code),
    region_id: Number(values.region_id),
    city_id: Number(values.city_id),
    price: Number(values.price),
    area: Number(values.area),
    bedrooms: Number(values.bedrooms),
    agent_id: Number(values.agent_id),
  };
  dispatch(createEstate(parsedValues));
};
