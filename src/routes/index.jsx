import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Settings from "../pages/Settings";
import ProfileSettings from "../pages/profile/ProfileSettings";
import Profile from "../pages/profile";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="dashboard" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="profile" element={<Layout />}>
          <Route path="" element={<Profile />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
