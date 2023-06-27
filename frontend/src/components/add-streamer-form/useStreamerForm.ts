import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name is too short" })
    .max(30, { message: "Name is too long" }),
  description: z
    .string()
    .min(1, { message: "Description is too short" })
    .max(250, { message: "Description is too long" }),
  platform: z.object({
    text: z.string().min(1, { message: "Platform must not be empty" }),
    value: z.string().min(1, { message: "Platform must not be empty" })
  })
});

export type FormValues = z.infer<typeof formSchema>;

export const useStreamerForm = () => {
  const {
    setValue,
    register,
    formState: { errors, dirtyFields },
    resetField,
    watch,
    handleSubmit
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      description: "",
      platform: {
        text: "",
        value: ""
      }
    }
  });

  return {
    watch,
    errors,
    dirtyFields,
    setValue,
    resetField,
    register,
    handleSubmit
  };
};
