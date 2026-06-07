import { useEffect, useState } from "react";
import { Link } from "react-router";
import type { User } from "../types/user";

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Fetch failed");
        return res.json();
      })
      .then((data: User[]) => setUsers(data))
      .catch(() => setError("Không tải được danh sách users"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="page-status">Đang tải users...</p>;
  if (error) return <p className="page-status error">{error}</p>;

  return (
    <section className="page-card">
      <h1>👥 Danh sách Users</h1>
      <p>
        Data fetch bằng <code>useEffect</code> +{" "}
        <code>fetch()</code> khi vào trang.
      </p>

      <ul className="users-list">
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`} className="user-link">
              <strong>{user.name}</strong>
              <span>{user.email}</span>
              <span>{user.company.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
