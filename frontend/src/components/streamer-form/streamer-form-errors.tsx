import { AxiosError } from "axios";

import { FormError } from "@/components/form-error/form-error";

type Props = {
  status?: number;
  error: unknown;
};

export const StreamerFormErrors = ({ error, status }: Props) => {
  const isAxiosError = error instanceof AxiosError;

  if (!isAxiosError) {
    return null;
  }

  return (
    <>
      <FormError status={status === 409} message={error.message} />
      <FormError
        status={status === 429}
        message={"Rate limit exceeded. Wait a few minutes and try again."}
      />
    </>
  );
};
