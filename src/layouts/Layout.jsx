import Drawer from "./Drawer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="h-dvh overflow-hidden w-dvw">
      <Header />
      <Drawer>{children}</Drawer>
    </div>
  );
}
