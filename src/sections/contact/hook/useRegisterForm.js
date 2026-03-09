import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../registerSchema";

const defaultValues = {
  name: "",
  email: "",
  message: "",
};

export const useRegisterForm = () => {
  const form = useForm({
    mode: "onBlur",
    defaultValues,
    resolver: yupResolver(registerSchema),
  });

  return {
    ...form,
    errors: form.formState.errors,
    isSubmitting: form.formState.isSubmitting,
  };
};
