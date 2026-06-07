import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import type { User } from "../types/user";

export default function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    setError("");

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Fetch failed");
        return res.json();
      })
      .then((data: User) => setUser(data))
      .catch(() => setError("Không tải được user"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="page-status">Đang tải user...</p>;
  if (error || !user) {
    return (
      <section className="page-card">
        <p className="page-status error">{error || "Không tìm thấy user"}</p>
        <Link to="/users">← Quay lại danh sách</Link>
      </section>
    );
  }

  return (
    <section className="page-card">
      <Link to="/users" className="back-link">
        ← Quay lại danh sách
      </Link>
      <h1>{user.name}</h1>
      <dl className="user-detail">
        <dt>Email</dt>
        <dd>{user.email}</dd>
        <dt>Username</dt>
        <dd>{user.username}</dd>
        <dt>Phone</dt>
        <dd>{user.phone}</dd>
        <dt>Website</dt>
        <dd>{user.website}</dd>
        <dt>Company</dt>
        <dd>{user.company.name}</dd>
      </dl>
    </section>
  );
}
