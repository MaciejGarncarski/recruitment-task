import { zodResolver } from "@hookform/resolvers/zod";
import type { MouseEvent } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const platformSchema = z.union([
  z.literal("YouTube", {
    errorMap: () => ({ message: "Please choose platform" })
  }),
  z.literal("Twitch"),
  z.literal("Kick"),
  z.literal("Rumble"),
  z.literal("TikTok")
]);

export type Platform = z.infer<typeof platformSchema>;

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name is too short" })
    .max(30, { message: "Name is too long" }),
  description: z
    .string()
    .min(1, { message: "Description is too short" })
    .max(250, { message: "Description is too long" }),
  platform: platformSchema
});

export type FormValues = z.infer<typeof formSchema>;

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
