import { z } from "zod";
import { DispatchType } from "../../store/store";
import { createAgent } from "../../toolkit/agent/createAgentSlice";

export const initialValues = {
  name: "",
  surname: "",
  email: "",
  phone: "",
  avatar: undefined,
};

const MAX_UPLOAD_SIZE = 1024 * 1024 * 1;

export const validationSchema = z.object({
  name: z.string().min(2),

  surname: z.string().min(2),

  email: z.string().refine((val) => val.endsWith("@redberry.ge"), {
    message: "უნდა მთავრდებოდეს @redberry.ge-თ",
  }),

  phone: z
    .string()
    .regex(/^\d+$/, "ნუმერული სიმბოლოები")
    .regex(/^5\d{8}$/, "უნდა იყოს ფორმატის 5XXXXXXXX"),

  avatar: z
    .instanceof(File, { message: "სავალდებულო" })
    .refine(
      (file) => file.size <= MAX_UPLOAD_SIZE,
      "არ უნდა აღებმატებოდეს 1mb-ის ზომაში"
    )
    .refine(
      (file) =>
        ["image/jpeg", "image/png", "image/gif", "image/webp"].includes(
          file.type
        ),
      "სურათის ტიპი"
    ),
});

export type FormValues = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  avatar: File | undefined;
};

interface FormProps {
  values: FormValues;
  dispatch: DispatchType;
}

export const onSubmit = ({ values, dispatch }: FormProps) => {
  dispatch(createAgent(values));
};
