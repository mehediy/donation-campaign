import { NavLink } from "react-router-dom";
import Logo from "/src/img/logo.png";

const Navbar = () => {
  return (
    <div className="container mx-auto py-10">
      <nav className="flex justify-between items-center">
        <div>
          <img src={Logo} />
        </div>

        <ul className="flex gap-10">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-[#FF444A] underline font-bold text-lg"
                  : isPending
                  ? ""
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
