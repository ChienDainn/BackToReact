import { Link } from "react-router";

export default function HomePage() {
  return (
    <section className="page-card">
      <h1>🏠 Home</h1>
      <p>App dùng React Router — chuyển trang không reload.</p>
      <ul className="page-links">
        <li>
          <Link to="/users">👥 Danh sách Users</Link> — fetch API
          jsonplaceholder
        </li>
        <li>
          <Link to="/demos">🧪 Demos</Link> — state, ref, array...
        </li>
        <li>
          <Link to="/about">ℹ️ About</Link>
        </li>
      </ul>
    </section>
  );
}
