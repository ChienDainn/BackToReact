import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import About from "./pages/About";
import DemosPage from "./pages/DemosPage";
import Home from "./pages/Home";
import UserDetail from "./pages/UserDetail";
import Users from "./pages/Users";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<UserDetail />} />
        <Route path="demos" element={<DemosPage />} />
      </Route>
    </Routes>
  );
}
