import { useAsyncValue, useNavigate, useParams } from "react-router-dom";
import { Program } from "../../../static/types";
import styles from "./Programs.module.css";
import { useKeyPress } from "../../utils/keypress";
import { useEffect } from "react";

export const Programs = () => {
  const data = useAsyncValue() as Program[];
  const { id } = useParams();
  const navigate = useNavigate();
  const program = data.filter((d) => d.id == id)[0];

  const backKeyPress = useKeyPress("Backspace");

  useEffect(() => {
    backKeyPress && navigate("/home");
  }, [backKeyPress]);

  return (
    <div className={styles.program}>
      <img src={program.image} alt={program.title} />
      <div className={styles.blurb}>
        <h1>{program.title}</h1>
        <h3>
          {program.rating} | {program.year} | {program.genre} |{" "}
          {program.language}
        </h3>
        <p>{program.description}</p>
      </div>
    </div>
  );
};
