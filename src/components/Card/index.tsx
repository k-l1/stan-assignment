import styles from "./Card.module.css";

export type CardItem = {
  id: string;
  image: string;
  title: string;
};

type CardProps = CardItem & {
  callback: (id: string) => void;
};

export const Card = ({ id, title, callback, image }: CardProps) => {
  return (
    <div id={id} className={styles.card} onClick={() => callback(id)}>
      <img src={image} alt={title} />
    </div>
  );
};
