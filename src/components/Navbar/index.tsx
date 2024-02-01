import "./Navbar.css";
import Logo from "../../../public/logo.svg";
import { Link, NavLink } from "react-router-dom";

// TODO Tightly coupled to react-router
export const Navbar = ({
  routes,
}: {
  routes: { name: string; path: string }[];
}) => {
  return (
    <header className="Navbar">
      <Logo width="150" height="100" />
      <nav className="Navbar__Links">
        {routes.map((route) => (
          <NavLink
            to={route.path}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            {route.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};
