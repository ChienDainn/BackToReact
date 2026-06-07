import { Route, Routes } from "react-router";
import Layout from "../components/layout/Layout";
import AboutPage from "../pages/AboutPage";
import DemosPage from "../pages/DemosPage";
import HomePage from "../pages/HomePage";
import UserDetailPage from "../pages/UserDetailPage";
import UsersPage from "../pages/UsersPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="users/:id" element={<UserDetailPage />} />
        <Route path="demos" element={<DemosPage />} />
      </Route>
    </Routes>
  );
}
