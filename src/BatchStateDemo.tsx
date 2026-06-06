import { useRef, useState } from "react";

type UserForm = {
  name: string;
  email: string;
  role: string;
};

const emptyUser: UserForm = { name: "", email: "", role: "guest" };

const sampleUser: UserForm = {
  name: "Chiến",
  email: "chien@example.com",
  role: "admin",
};

export default function BatchStateDemo() {
  const renderCount = useRef(0);
  renderCount.current += 1;

  const [user, setUser] = useState<UserForm>(emptyUser);
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [scoreC, setScoreC] = useState(0);

  function fillUserForm() {
    setUser(sampleUser);
  }

  function resetUserForm() {
    setUser(emptyUser);
  }

  function bumpThreeStates() {
    setScoreA((value) => value + 1);
    setScoreB((value) => value + 1);
    setScoreC((value) => value + 1);
  }

  function bumpSameStateThreeTimes() {
    setScoreA((value) => value + 1);
    setScoreA((value) => value + 1);
    setScoreA((value) => value + 1);
  }

  return (
    <section className="state-demo">
      <h2>Cập nhật state hàng loạt</h2>
      <p className="batch-render-note">
        Số lần render component: <strong>{renderCount.current}</strong>
      </p>

      <div className="state-block">
        <h3>1. Một lần setState — nhiều field (object)</h3>
        <p>
          {user.name || "—"} | {user.email || "—"} | {user.role}
        </p>
        <div className="state-actions">
          <button type="button" onClick={fillUserForm}>
            Điền mẫu
          </button>
          <button type="button" onClick={resetUserForm}>
            Reset form
          </button>
        </div>
        <pre className="batch-code">
          {`setUser({ name: "...", email: "...", role: "..." })`}
        </pre>
      </div>

      <div className="state-block">
        <h3>2. Nhiều setState — React gom batch (1 render)</h3>
        <p>
          A: {scoreA} | B: {scoreB} | C: {scoreC}
        </p>
        <div className="state-actions">
          <button type="button" onClick={bumpThreeStates}>
            +1 cho A, B, C
          </button>
        </div>
        <pre className="batch-code">
          {`setScoreA(v => v + 1)
setScoreB(v => v + 1)
setScoreC(v => v + 1)`}
        </pre>
      </div>

      <div className="state-block">
        <h3>3. Cùng một state — gọi nhiều lần (functional update)</h3>
        <p>A hiện tại: {scoreA}</p>
        <div className="state-actions">
          <button type="button" onClick={bumpSameStateThreeTimes}>
            setScoreA 3 lần liên tiếp
          </button>
        </div>
        <pre className="batch-code">
          {`setScoreA(v => v + 1) // x3
// Kết quả: +3, không phải +1`}
        </pre>
      </div>
    </section>
  );
}
