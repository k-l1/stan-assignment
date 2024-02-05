import { Language, Rating, Type } from "../../../static/types";
import { ContentInfo } from "../../components/ContentInfo";

export const ProgramSkeleton = () => (
  <ContentInfo
    program={{
      id: "",
      title: "",
      description: "",
      type: Type.Movie,
      image: "",
      rating: Rating.M,
      genre: "",
      year: 0,
      language: Language.English,
    }}
  />
);
