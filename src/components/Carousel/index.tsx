import { Suspense, useEffect, useMemo, useState } from "react";
import { Card, CardItem } from "../Card";
import styles from "./Carousel.module.css";
import { useKeyPress } from "../../utils/keypress";

export interface CarouselProps {
  carouselItems: CardItem[];
  onClick: (id: string) => void;
  itemsToShow: number;
}

export const Carousel = ({
  carouselItems,
  onClick,
  itemsToShow,
}: CarouselProps) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(carouselItems.length / itemsToShow);

  const rightKeyPress = useKeyPress("ArrowRight");
  const leftKeyPress = useKeyPress("ArrowLeft");
  const enterKeyPress = useKeyPress("Enter");

  const length = carouselItems.length;

  // Impl 2 circular arrays. One for the carousel and one for the pages itself.
  useEffect(() => {
    rightKeyPress &&
      setActiveIdx((prev) => {
        if (prev + 1 >= itemsToShow) {
          // If cursor moves right past last item in the carousel, move to next page
          setPage((page + 1 + totalPages) % totalPages);
          return 0;
        }
        return (prev + 1) % length;
      });
    leftKeyPress &&
      setActiveIdx((prev) => {
        if (prev - 1 < 0) {
          // If cursor moves left past first item in the carousel, move to previous page
          setPage((page - 1 + totalPages) % totalPages);
          return itemsToShow - 1;
        }
        return (prev - 1) % length;
      });
    enterKeyPress && onClick(items[activeIdx].id);
    console.log(items);
    console.log(page);
  }, [rightKeyPress, leftKeyPress, enterKeyPress]);

  const items = useMemo(() => {
    return carouselItems.slice(
      page * itemsToShow,
      page * itemsToShow + itemsToShow
    );
  }, [page]);

  return (
    <div className={styles.carousel}>
      {items.map((i, idx) => (
        <Card
          key={idx}
          id={i.id}
          title={i.title}
          image={i.image}
          callback={onClick}
          isActive={idx === activeIdx}
        />
      ))}
    </div>
  );
};
