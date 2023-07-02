import { zodResolver } from "@hookform/resolvers/zod";
import type { MouseEvent } from "react";
import { useForm } from "react-hook-form";

import { useAddNewStreamer } from "@/hooks/use-add-new-streamer";
import {
  type SingleStreamer,
  singleStreamerSchema
} from "@/schemas/single-streamer";

type Args = {
  closeForm: () => void;
};

export const useStreamerForm = ({ closeForm }: Args) => {
  const {
    register,
    formState: { errors, defaultValues, isDirty },
    reset,
    watch,
    handleSubmit
  } = useForm<SingleStreamer>({
    resolver: zodResolver(singleStreamerSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      description: "",
      platform: undefined
    }
  });

  const isFieldDirty = (key: keyof SingleStreamer) => {
    if (!defaultValues) {
      return false;
    }

    return watch()[key] !== defaultValues[key];
  };

  const handleReset = (ev: MouseEvent) => {
    ev.preventDefault();
    reset();
  };

  const { mutate: addNewStreamer, error: addNewStreamerError } =
    useAddNewStreamer();

  const onSubmit = handleSubmit((streamerData) => {
    addNewStreamer(streamerData, { onSuccess: closeForm });
  });

  return {
    watch,
    errors,
    isFieldDirty,
    handleReset,
    register,
    handleSubmit,
    isDirty,
    addNewStreamerError,
    onSubmit
  };
};
