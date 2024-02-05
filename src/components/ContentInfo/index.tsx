import { Program } from "../../../static/types";
import styles from "./ContentInfo.module.css";

export const ContentInfo = ({ program }: { program: Program }) => {
  const { image, title, rating, year, genre, language, description } = program;
  return (
    <div className={styles.program}>
      {image ? (
        <img src={image} alt={title} />
      ) : (
        <div className={styles.placeholderImg} />
      )}
      {title ? (
        <div className={styles.blurb}>
          <h1>{title}</h1>
          <h3>
            {rating} | {year} | {genre} | {language}
          </h3>
          <p>{description}</p>
        </div>
      ) : (
        <div className={styles.placeholderBlurb}>
          <div />
          <div />
          <div />
        </div>
      )}
    </div>
  );
};
