import { useEffect, useState } from "react";
import { Link } from "react-router";
import { fetchUsers } from "../services/userApi";
import type { User } from "../types/user";

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .catch(() => setError("Không tải được danh sách users"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="page-status">Đang tải users...</p>;
  if (error) return <p className="page-status error">{error}</p>;

  return (
    <section className="page-card">
      <h1>👥 Danh sách Users</h1>
      <p>
        Data fetch qua <code>services/userApi.ts</code> khi vào trang.
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
