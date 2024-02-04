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
      className={`${styles.card} ${isActive ? styles.active : ""}`}
      onClick={() => callback(id)}
    >
      <img src={image} alt={title} />
    </div>
  );
};
