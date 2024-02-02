import styles from "./Card.module.css";
export type CardProps = {
  id: string;
  callback: (id: string) => void;
  image: string;
  title: string;
};

export const Card = ({ id, title, callback, image }: CardProps) => {
  return (
    <div id={id} className={styles.card} onClick={() => callback(id)}>
      <img src={image} alt={title} />
    </div>
  );
};
