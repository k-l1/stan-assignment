import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./Layout";
import { Shows } from "./pages/Shows";
import { Movies } from "./pages/Movies";
import { NotFound } from "./pages/NotFound";

const homepageRoutes = [
  {
    path: "home",
    id: "Home",
    index: true,
    element: <Home />,
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
