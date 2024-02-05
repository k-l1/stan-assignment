import styles from "./Card.module.css";

export type CardItem = {
  id: string;
  image: string;
  title: string;
};

type CardProps = CardItem & {
  callback: (id: string) => void;
  isActive: boolean;
};

export const Card = ({ id, title, callback, image, isActive }: CardProps) => {
  return (
    <div
      id={id}
      className={`${styles.card} ${isActive && image ? styles.active : ""}`}
      onClick={() => callback(id)}
    >
      {image ? (
        <img src={image} alt={title} />
      ) : (
        <div className={styles.placeholder} />
      )}
    </div>
  );
};
