import styles from "../Layout.module.css";

export const ErrorPage = () => {
  return (
    <div className={styles.container}>
      <h2>An unknown error occured. Please try again later.</h2>
    </div>
  );
};
