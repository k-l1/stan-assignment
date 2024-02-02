import { createBrowserRouter, redirect } from "react-router-dom";
import { Layout } from "./Layout";
import { Container } from "./pages/Container";
import { Movies } from "./pages/Movies";
import { NotFound } from "./pages/NotFound";
import { Programs } from "./pages/Programs";
import { Shows } from "./pages/Shows";
import { Home } from "./pages/Home";

const contentLoader = async () => {
  const res = await fetch(`/static/data.json`);
  if (res.status === 404) {
    throw new Response("Not Found", { status: 404 });
  }
  return res.json();
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        loader: async () => redirect("/home"),
      },
      {
        id: "home",
        path: "home",
        element: <Container />,
        loader: contentLoader,

        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "program/:id",
            element: <Programs />,
          },
        ],
      },

      {
        path: "tv-shows",
        id: "series",
        element: <Shows />,
      },
      {
        path: "movies",
        id: "movies",
        element: <Movies />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
