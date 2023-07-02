import styles from "./form-error.module.scss";

type Props = {
  message: string;
  status: boolean;
};

export const FormError = ({ message, status }: Props) => {
  if (!status) {
    return null;
  }

  return <p className={styles.error}>{message}</p>;
};
