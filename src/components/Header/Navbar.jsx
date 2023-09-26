import { Link, NavLink } from "react-router-dom";
import Logo from "/src/img/logo.png";

const Navbar = () => {
  return (
    <div className="container mx-auto py-10 px-2">
      <nav className="flex justify-between gap-4 items-center flex-col md:flex-row">
        <div>
          <Link to={"/"}>
            <img src={Logo} />
          </Link>
        </div>

        <ul className="flex gap-4 md:gap-10">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-[#FF444A] underline font-bold text-lg"
                  : isPending
                  ? "font-normal text-lg"
                  : "font-normal text-lg"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/donation"}
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-[#FF444A] underline font-bold text-lg"
                  : isPending
                  ? ""
                  : "font-normal text-lg"
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/statistics"}
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-[#FF444A] underline font-bold text-lg"
                  : isPending
                  ? ""
                  : "font-normal text-lg"
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
