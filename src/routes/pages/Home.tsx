import { useAsyncValue, useNavigate } from "react-router-dom";
import type { Program } from "../../../static/types";
import { Carousel } from "../../components/Carousel";

export const Home = () => {
  const data = useAsyncValue() as Program[];
  const navigate = useNavigate();
  const navigateById = (id: string) => navigate(`./program/${id}`);

  return (
    <Carousel
      onClick={navigateById}
      carouselItems={mapToCarousel(data)}
      itemsToShow={6}
    />
  );
};

const mapToCarousel = (data: Program[]) =>
  data.map((x) => ({
    id: x.id as unknown as string,
    title: x.title,
    image: x.image,
  }));
