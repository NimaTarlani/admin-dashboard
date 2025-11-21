import { Outlet } from "react-router-dom";
import Drawer from "./Drawer";
import Header from "./Header";
import LogoutDialog from "../components/LogoutDialog";

export default function Layout() {
  return (
    <div className="h-dvh overflow-hidden w-dvw">
      <Header />
      <Drawer>
        <Outlet />
        <LogoutDialog />
      </Drawer>
    </div>
  );
}
