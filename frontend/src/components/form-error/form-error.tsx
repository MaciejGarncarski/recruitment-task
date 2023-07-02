import styles from "./form-error.module.scss";

type Props = {
  message: string;
};

export const FormError = ({ message }: Props) => {
  return <p className={styles.error}>{message}</p>;
};
