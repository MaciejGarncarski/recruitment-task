import styles from "./avatar.module.scss";

export const Avatar = () => {
  return (
    <img
      className={styles.avatar}
      src="https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png"
      width={75}
      height={75}
    />
  );
};
