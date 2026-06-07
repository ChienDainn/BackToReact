import { NavLink, Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="app-layout">
      <header className="app-header">
        <p className="app-brand">React 2026</p>
        <nav className="app-nav">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/demos">Demos</NavLink>
        </nav>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
}
