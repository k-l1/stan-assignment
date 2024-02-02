import { useNavigate, useRouteLoaderData } from "react-router-dom";
import type { Program } from "../../../static/types";
import { Carousel } from "../../components/Carousel";

export const Home = () => {
  const navigate = useNavigate();
  const navigateById = (id: string) => navigate(`./program/${id}`);

  const data = useRouteLoaderData("home") as Program[];
  const items = data.map((x) => ({
    id: x.id as unknown as string, // TODO: Impl zod-esque type transformation
    title: x.title,
    image: x.image,
  }));

  return data ? <Carousel onClick={navigateById} items={items} /> : null;
};
