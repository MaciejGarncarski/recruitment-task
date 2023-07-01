import { zodResolver } from "@hookform/resolvers/zod";
import type { MouseEvent } from "react";
import { useForm } from "react-hook-form";

import {
  formSchema,
  type FormValues
} from "@/components/streamer-form/streamer-form.data";

export const useStreamerForm = () => {
  const {
    register,
    formState: { errors, defaultValues, isDirty },
    reset,
    watch,
    handleSubmit
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      description: "",
      platform: undefined
    }
  });

  const isFieldDirty = (key: keyof FormValues) => {
    if (!defaultValues) {
      return false;
    }

    return watch()[key] !== defaultValues[key];
  };

  const handleReset = (ev: MouseEvent) => {
    ev.preventDefault();
    reset();
  };

  return {
    watch,
    errors,
    isFieldDirty,
    handleReset,
    register,
    handleSubmit,
    isDirty
  };
};
