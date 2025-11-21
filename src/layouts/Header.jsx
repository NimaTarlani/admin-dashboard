import { FaGithub } from "react-icons/fa";
import { GoPerson, GoSidebarCollapse } from "react-icons/go";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="navbar bg-base-300 shadow-sm">
      <label
        htmlFor="drawer"
        className="btn btn-square drawer-button lg:hidden"
      >
        <GoSidebarCollapse size="2rem" />
      </label>
      <div className="flex-1">
        <div className="ml-4 h-12 flex items-center">
          <div>
            <h1 className="font-bold">Admin Dashboard</h1>
            <Link
              to="https://github.com/NimaTarlani"
              className="flex items-center gap-1 text-xs text-gray-400"
            >
              <FaGithub />
              NimaTarlani
            </Link>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-soft btn-circle avatar"
          >
            <GoPerson size="1.6rem" />
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow-2xl border border-base-200"
          >
            <li>
              <Link to="/profile">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/profile/settings">Settings</Link>
            </li>
            <li>
              <button className="badge badge-soft badge-error" onClick={()=>document.getElementById('logout_modal').showModal()}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
