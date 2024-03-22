import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/travel-logo.png";
import { toast } from "react-toastify";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const handlerSignOut = () => {
    userLogOut()
      .then(() => {
        toast.success("user SigOut Successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const items = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "border-b-4 border-red-500 p-0.5  " : " "
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "border-b-4 border-red-500 p-0.5 " : " "
          }
        >
          About
        </NavLink>
      </li>

      {user?.email && (
        <li>
          <NavLink
            to="/profileEdit"
            className={({ isActive }) =>
              isActive ? "border-b-4 border-red-500 p-0.5  " : " "
            }
          >
            Profile
          </NavLink>
        </li>
      )}

      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "border-b-4 border-red-500 p-0.5 " : " "
          }
        >
          Blog
        </NavLink>{" "}
      </li>
    </>
  );

  return (
    <div className="navbar  shadow-md px-3  bg-blue-100">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className=" space-y-2 p-3   menu-sm text-center  dropdown-content mt-3 absolute z-20  shadow bg-base-100 rounded-box w-52"
          >
            {items}
          </ul>
        </div>
        <div className="hidden lg:flex">
          <Link to="/">
            <img className="w-20" src={logo} alt="" />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" text-[18px] font-bold space-x-3 menu-horizontal px-1">
          {items}
        </ul>
      </div>
      <div className="navbar-end ">
        {user ? (
          <div className="space-x-3 flex items-center ">
            <button
              onClick={handlerSignOut}
              className="btn btn-sm btn-primary "
            >
              Sign out
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn btn-sm btn-primary">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
