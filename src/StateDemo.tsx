import { useState } from "react";

export default function StateDemo() {
  const [count, setCount] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const [name, setName] = useState("");

  return (
    <section className="state-demo">
      <h2>State demo</h2>

      <div className="state-block">
        <h3>1. Counter (number)</h3>
        <p>Count: {count}</p>
        <div className="state-actions">
          <button type="button" onClick={() => setCount(count + 1)}>
            +1
          </button>
          <button type="button" onClick={() => setCount(count - 1)}>
            -1
          </button>
          <button type="button" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </div>

      <div className="state-block">
        <h3>2. Toggle (boolean)</h3>
        <button
          type="button"
          className={isDark ? "toggle-btn dark" : "toggle-btn light"}
          onClick={() => setIsDark(!isDark)}
        >
          {isDark ? "🌙 Dark mode" : "☀️ Light mode"}
        </button>
      </div>

      <div className="state-block">
        <h3>3. Input (string)</h3>
        <input
          type="text"
          value={name}
          placeholder="Nhập tên..."
          onChange={(e) => setName(e.target.value)}
        />
        <p>
          {name ? `Xin chào, ${name}!` : "Chưa nhập tên"}
        </p>
      </div>
    </section>
  );
}
