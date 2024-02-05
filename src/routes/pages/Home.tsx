import { Suspense } from "react";
import { Await, useNavigate, useRouteLoaderData } from "react-router-dom";
import type { Program } from "../../../static/types";
import { Carousel } from "../../components/Carousel";
import { HomeSkeleton } from "../loading/HomeSkeleton";

export const Home = () => {
  const { data } = useRouteLoaderData("home") as { data: Program[] };
  const navigate = useNavigate();
  const navigateById = (id: string) => navigate(`./program/${id}`);

  return (
    <Suspense fallback={<HomeSkeleton />}>
      <Await resolve={data}>
        {(items) => (
          <Carousel
            onClick={navigateById}
            carouselItems={mapToCarousel(items)}
            itemsToShow={6}
          />
        )}
      </Await>
    </Suspense>
  );
};

const mapToCarousel = (data: Program[]) =>
  data.map((x) => ({
    id: x.id as unknown as string,
    title: x.title,
    image: x.image,
  }));
