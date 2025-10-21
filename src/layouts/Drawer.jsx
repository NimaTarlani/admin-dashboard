import { GoTools } from "react-icons/go";
import { Link, NavLink } from "react-router-dom";

export default function Drawer({ children }) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="h-dvh overflow-hidden bg-base-200 flex flex-col gap-4">
          <ul className="menu w-80 p-4 ">
            <li className="menu-title">Dashboard</li>
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
          <ul className="menu  rounded-box max-w-xs w-full p-4">
            <li className="menu-title">General</li>

            <li>
              <Link to="/settings">
                <GoTools className="h-4 w-4" />
                Setting
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
