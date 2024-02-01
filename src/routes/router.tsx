import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { Layout } from "./Layout";
import { Shows } from "./Shows";
import { Movies } from "./Movies";
import { NotFound } from "./NotFound";

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
    // Single route in lazy file
    // lazy: () => import("./pages/About"),
    element: <Shows />,
  },
  {
    path: "movies",
    id: "Movies",
    // Single route in lazy file
    // lazy: () => import("./pages/About"),
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
