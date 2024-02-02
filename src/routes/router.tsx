import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./Layout";
import { Shows } from "./pages/Shows";
import { Movies } from "./pages/Movies";
import { NotFound } from "./pages/NotFound";

const contentLoader = async () => {
  const res = await fetch(`/static/data.json`);
  if (res.status === 404) {
    throw new Response("Not Found", { status: 404 });
  }
  return res.json();
};

const homepageRoutes = [
  {
    path: "home",
    id: "Home",
    index: true,
    element: <Home />,
    loader: contentLoader,
  },
  {
    path: "tv-shows",
    id: "TV Shows",
    element: <Shows />,
  },
  {
    path: "movies",
    id: "Movies",
    element: <Movies />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: homepageRoutes,
  },
]);
