import { Carousel } from "../../components/Carousel";

export const HomeSkeleton = () => {
  const placeholders = [
    { id: "1", title: "Loading...", image: "" },
    { id: "2", title: "Loading...", image: "" },
    { id: "3", title: "Loading...", image: "" },
    { id: "4", title: "Loading...", image: "" },
    { id: "5", title: "Loading...", image: "" },
    { id: "6", title: "Loading...", image: "" },
  ];
  return (
    <Carousel carouselItems={placeholders} onClick={() => {}} itemsToShow={6} />
  );
};
