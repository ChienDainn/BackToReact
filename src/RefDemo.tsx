import { useRef, useState } from "react";

export default function RefDemo() {
  const renderCount = useRef(0);
  renderCount.current += 1;

  const [tick, setTick] = useState(0);
  const [stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);
  let letCount = 0;

  const [input, setInput] = useState("");
  const [lastAction, setLastAction] = useState("Bấm nút để thử");

  const inputRef = useRef(input);
  inputRef.current = input;

  const savedAtClickRef = useRef("");

  function bumpLet() {
    letCount += 1;
    setLastAction(
      `let++ trong handler → ${letCount}. Re-render xong let lại = 0 trên UI.`,
    );
    setTick((value) => value + 1);
  }

  function bumpRef() {
    refCount.current += 1;
    setLastAction(
      `ref.current++ → ${refCount.current}. Re-render vẫn giữ, nhưng UI chỉ đổi khi bạn bấm "Vẽ lại UI".`,
    );
  }

  function bumpState() {
    setStateCount((value) => value + 1);
    setLastAction(`setState → ${stateCount + 1}. React tự vẽ lại UI.`);
  }

  function forceRender() {
    setTick((value) => value + 1);
    setLastAction("Chỉ re-render (tick++) — xem cột nào giữ số, cột nào về 0.");
  }

  function logAfterDelay(useRefValue: boolean) {
    savedAtClickRef.current = input;
    const capturedState = input;

    setLastAction(
      useRefValue
        ? `Đã hẹn log ref sau 2s. Gõ thêm chữ trong lúc chờ nhé!`
        : `Đã hẹn log state sau 2s. Gõ thêm chữ trong lúc chờ nhé!`,
    );

    window.setTimeout(() => {
      const message = useRefValue
        ? `[ref] lúc log: "${inputRef.current}" | lúc bấm nút: "${savedAtClickRef.current}"`
        : `[state] lúc log: "${capturedState}" (bị kẹt bản cũ)`;

      setLastAction(message);
    }, 2000);
  }

  return (
    <section className="state-demo ref-demo">
      <h2>Ref — tránh bị reset value khi re-render</h2>

      <div className="analogy-story">
        <p>
          <strong>Biến let</strong> = viết số lên giấy nháp, mỗi lần render xé
          đi viết lại từ 0. <strong>ref</strong> = ngăn kéo — cất số, không làm
          tường đổi. <strong>state</strong> = bảng hiển thị — đổi là mọi người
          thấy.
        </p>
      </div>

      <div className="array-result-box">
        <p className="result-label">📋 Result</p>
        <p>{lastAction}</p>
        <p>
          <strong>Render lần:</strong> {renderCount.current} |{" "}
          <strong>tick (ép re-render):</strong> {tick}
        </p>
      </div>

      <div className="ref-compare-grid">
        <article className="ref-card bad">
          <h3>❌ let (reset mỗi render)</h3>
          <p className="ref-value">{letCount}</p>
          <button type="button" onClick={bumpLet}>
            let++
          </button>
          <p className="ref-hint">Luôn thấy 0 sau re-render</p>
        </article>

        <article className="ref-card ok">
          <h3>✅ useRef (giữ qua render)</h3>
          <p className="ref-value">{refCount.current}</p>
          <button type="button" onClick={bumpRef}>
            ref.current++
          </button>
          <p className="ref-hint">Số giữ nguyên, UI cần bấm “Vẽ lại UI”</p>
        </article>

        <article className="ref-card state">
          <h3>✅ useState (giữ + tự vẽ UI)</h3>
          <p className="ref-value">{stateCount}</p>
          <button type="button" onClick={bumpState}>
            setState++
          </button>
          <p className="ref-hint">Đổi số → UI cập nhật ngay</p>
        </article>
      </div>

      <div className="state-actions">
        <button type="button" onClick={forceRender}>
          🔄 Vẽ lại UI (re-render)
        </button>
      </div>

      <div className="state-block">
        <h3>⏱️ Async: ref giữ giá trị mới nhất</h3>
        <p className="analogy-hint">
          Bấm nút → trong 2 giây gõ thêm chữ. State trong closure bị kẹt; ref
          đọc được chữ mới nhất.
        </p>
        <input
          type="text"
          value={input}
          placeholder="Gõ gì đó..."
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="state-actions">
          <button type="button" onClick={() => logAfterDelay(false)}>
            Log sau 2s (state)
          </button>
          <button type="button" onClick={() => logAfterDelay(true)}>
            Log sau 2s (ref)
          </button>
        </div>
      </div>

      <div className="array-diagram">
        <h3>📐 Sơ đồ</h3>
        <div className="diagram-row">
          <div className="diagram-flow">
            <div className="diagram-box old">
              <span className="diagram-tag">render</span>
              <code>let x = 0</code>
            </div>
            <span className="diagram-arrow">→</span>
            <div className="diagram-box bad">
              <span className="diagram-tag bad">mất</span>
              số cũ biến mất
            </div>
          </div>
        </div>
        <div className="diagram-row">
          <div className="diagram-flow">
            <div className="diagram-box old">
              <span className="diagram-tag">ref</span>
              <code>ref.current = 5</code>
            </div>
            <span className="diagram-arrow">re-render →</span>
            <div className="diagram-box new">
              <span className="diagram-tag ok">vẫn 5</span>
              không reset
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
