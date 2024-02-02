export type Program = {
  id: string;
  title: string;
  description: string;
  type: Type;
  image: string;
  rating: Rating;
  genre: string;
  year: number;
  language: Language;
};

export enum Language {
  English = "English",
  French = "French",
  Iranian = "Iranian",
  Spanish = "Spanish",
}
export enum Rating {
  M = "M",
  Ma15 = "MA 15+",
  PG = "PG",
  R18 = "R 18+",
}

export enum Type {
  Movie = "movie",
  Series = "series",
}
