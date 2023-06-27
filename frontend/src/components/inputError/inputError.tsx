import styles from "./inputError.module.scss";

type Props = {
  message?: string;
};

export const InputError = ({ message }: Props) => {
  if (!message) {
    return null;
  }
  return <p className={styles.error}>{message}</p>;
};
