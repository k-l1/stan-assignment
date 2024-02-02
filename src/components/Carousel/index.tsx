import { Card, CardProps } from "../Card";
import styles from "./Carousel.module.css";

export interface CarouselProps {
  items: CardProps[];
  onClick: (id: string) => void;
}

export const Carousel = ({ items, onClick }: CarouselProps) => {
  return (
    <div className={styles.carousel}>
      {items.map((i) => (
        <Card id={i.id} title={i.title} image={i.image} callback={onClick} />
      ))}
    </div>
  );
};
