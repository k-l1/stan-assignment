import type { Program } from "../../../static/types";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Carousel } from "../../components/Carousel";
import styles from "../Layout.module.css";

export const Home = () => {
  const navigate = useNavigate();
  const data = useLoaderData() as Program[];
  const items = data.map((x) => ({
    id: x.id as unknown as string, // TODO: Impl zod-esque type transformation
    title: x.title,
    image: x.image,
  }));

  return data ? (
    <div className={styles.container}>
      <Carousel onClick={(id) => navigate("./program")} items={items} />
    </div>
  ) : null;
};
