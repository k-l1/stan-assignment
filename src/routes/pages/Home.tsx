import { Carousel } from "../../components/Carousel";
import styles from "./Layout.module.css";

export const Home = () => {
  const navigation = (id: string) => console.log(id);
  return (
    <div className={styles.container}>
      <Carousel onClick={navigation} items={[]} />
    </div>
  );
};
