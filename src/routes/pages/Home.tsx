import { useLoaderData } from "react-router-dom";
import { Carousel } from "../../components/Carousel";
import type { Program } from "../../../static/types";
import styles from "../Layout.module.css";

export const Home = () => {
  const navigation = (id: string) => console.log(id);
  const data = useLoaderData() as Program[];
  const items = data.map((x) => ({ id: x.id, title: x.title, image: x.image }));

  return data ? (
    <div className={styles.container}>
      <Carousel onClick={navigation} items={items} />
    </div>
  ) : null;
};
