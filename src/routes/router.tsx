import { createBrowserRouter, defer, redirect } from "react-router-dom";
import { Layout } from "./Layout";
import { Container } from "./pages/Container";
import { Movies } from "./pages/Movies";
import { NotFound } from "./pages/NotFound";
import { Programs } from "./pages/Programs";
import { Shows } from "./pages/Shows";
import { Home } from "./pages/Home";
import { ErrorPage } from "./pages/ErrorPage";

const delay = (time: number) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

const contentLoader = async () => {
  const result = await fetch(`/static/data.json`);
  if (result.status === 404) {
    throw new Response("Not Found", { status: 404 });
  }
  return defer({ data: delay(2000).then(() => result.json()) });
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
        errorElement: <ErrorPage />,
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
