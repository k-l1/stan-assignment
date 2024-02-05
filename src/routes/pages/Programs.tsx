import { Suspense, useEffect } from "react";
import {
  Await,
  useNavigate,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
import { Program } from "../../../static/types";
import { ContentInfo } from "../../components/ContentInfo";
import { useKeyPress } from "../../utils/keypress";
import { ProgramSkeleton } from "../loading/ProgramSkeleton";

export const Programs = () => {
  const { data } = useRouteLoaderData("home") as { data: Program[] };
  const { id } = useParams();
  const navigate = useNavigate();
  const filterById = (data: Program[]) => data.filter((d) => d.id == id)[0];

  const backKeyPress = useKeyPress("Backspace");

  useEffect(() => {
    backKeyPress && navigate("/home");
  }, [backKeyPress]);

  return (
    <Suspense fallback={<ProgramSkeleton />}>
      <Await resolve={data}>
        {(program) => <ContentInfo program={filterById(program)} />}
      </Await>
    </Suspense>
  );
};
