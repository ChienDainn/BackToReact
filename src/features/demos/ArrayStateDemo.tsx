import { useState } from "react";

type FoodItem = {
  id: number;
  name: string;
  eaten: boolean;
};

const initialFridge: FoodItem[] = [
  { id: 1, name: "Sữa", eaten: false },
  { id: 2, name: "Trứng", eaten: true },
];

export default function ArrayStateDemo() {
  const [fridge, setFridge] = useState<FoodItem[]>(initialFridge);
  const [input, setInput] = useState("");
  const [nextId, setNextId] = useState(3);
  const [lastAction, setLastAction] = useState(
    "Tủ lạnh đang mở — đây là data (array) React đang giữ.",
  );

  function addFood() {
    const name = input.trim();
    if (!name) return;

    const newItem = { id: nextId, name, eaten: false };
    setFridge([...fridge, newItem]);
    setNextId(nextId + 1);
    setInput("");
    setLastAction(
      `Bỏ thêm "${name}" vào tủ → tạo tủ MỚI (không nhét trực tiếp vào tủ cũ)`,
    );
  }

  function removeFood(id: number) {
    const removed = fridge.find((item) => item.id === id);
    setFridge(fridge.filter((item) => item.id !== id));
    setLastAction(
      removed
        ? `Lấy "${removed.name}" ra khỏi tủ → còn ${fridge.length - 1} món`
        : `Lấy 1 món ra → còn ${fridge.length - 1} món`,
    );
  }

  function toggleEaten(id: number) {
    const target = fridge.find((item) => item.id === id);
    setFridge(
      fridge.map((item) =>
        item.id === id ? { ...item, eaten: !item.eaten } : item,
      ),
    );
    setLastAction(
      target
        ? `Đổi nhãn "${target.name}": ${target.eaten ? "đã ăn" : "chưa ăn"} → ${!target.eaten ? "đã ăn" : "chưa ăn"} (món khác không đụng)`
        : "Sửa 1 món trong tủ",
    );
  }

  function renameFood(id: number, name: string) {
    setFridge(fridge.map((item) => (item.id === id ? { ...item, name } : item)));
    setLastAction(`Đổi tên món id=${id} → "${name}"`);
  }

  function resetFridge() {
    setFridge(initialFridge);
    setNextId(3);
    setLastAction("Đóng tủ, mở lại → về danh sách ban đầu");
  }

  return (
    <section className="state-demo analogy-demo">
      <h2>State là Array = các món trong tủ lạnh</h2>

      <div className="analogy-story">
        <p>
          <strong>🧊 Tủ lạnh</strong> giống <code>useState([])</code>: mỗi ngăn
          là 1 phần tử. Muốn React cập nhật UI → phải{" "}
          <strong>thay cả danh sách mới</strong>, không sửa tủ cũ bằng{" "}
          <code>push</code>.
        </p>
      </div>

      <div className="array-result-box">
        <p className="result-label">📋 Result (data sau thao tác)</p>
        <p>
          <strong>Giải thích:</strong> {lastAction}
        </p>
        <p>
          <strong>Số món trong tủ (length):</strong> {fridge.length}
        </p>
        <pre className="batch-code">{JSON.stringify(fridge, null, 2)}</pre>
      </div>

      <div className="fridge-visual">
        <p className="fridge-visual-title">🚪 Mở tủ nhìn thấy gì?</p>
        <div className="fridge-shelf">
          {fridge.length === 0 ? (
            <p className="fridge-empty">Tủ trống</p>
          ) : (
            fridge.map((item, index) => (
              <div
                key={item.id}
                className={item.eaten ? "fridge-item eaten" : "fridge-item"}
              >
                <span className="fridge-slot">Ngăn {index + 1}</span>
                <strong>{item.name}</strong>
                <span>{item.eaten ? "✅ đã ăn" : "🆕 còn ngon"}</span>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="state-block">
        <h3>➕ Thêm món — bỏ vào tủ (spread)</h3>
        <p className="analogy-hint">
          Như mua thêm đồ, bỏ vào tủ: copy tủ cũ + món mới.
        </p>
        <div className="state-actions">
          <input
            type="text"
            value={input}
            placeholder="VD: Cơm, Táo..."
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addFood()}
          />
          <button type="button" onClick={addFood}>
            Bỏ vào tủ
          </button>
        </div>
      </div>

      <div className="state-block">
        <h3>🗑️ Lấy ra / ✏️ Sửa nhãn — filter & map</h3>
        <p className="analogy-hint">
          Lấy 1 món ra không ảnh hưởng món khác. Đổi nhãn 1 món cũng vậy.
        </p>
        <ul className="array-list">
          {fridge.map((item) => (
            <li key={item.id} className={item.eaten ? "done" : ""}>
              <label>
                <input
                  type="checkbox"
                  checked={item.eaten}
                  onChange={() => toggleEaten(item.id)}
                />
                <input
                  type="text"
                  className="array-item-input"
                  value={item.name}
                  onChange={(e) => renameFood(item.id, e.target.value)}
                />
              </label>
              <button type="button" onClick={() => removeFood(item.id)}>
                Lấy ra
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button type="button" className="array-kids-reset" onClick={resetFridge}>
        🔄 Đóng tủ, mở lại (reset)
      </button>

      <div className="array-diagram">
        <h3>📐 Sơ đồ — State Array hoạt động thế nào?</h3>

        <div className="diagram-row">
          <p className="diagram-title">1. Thêm món (spread)</p>
          <div className="diagram-flow">
            <div className="diagram-box old">
              <span className="diagram-tag">tủ cũ</span>
              <div className="diagram-slots">
                {fridge.slice(0, -1).length > 0 ? (
                  fridge.slice(0, -1).map((item) => (
                    <span key={item.id} className="diagram-slot">
                      {item.name}
                    </span>
                  ))
                ) : (
                  <span className="diagram-slot empty">...</span>
                )}
              </div>
            </div>
            <span className="diagram-arrow">+ món mới →</span>
            <div className="diagram-box new">
              <span className="diagram-tag ok">tủ MỚI ✅</span>
              <div className="diagram-slots">
                {fridge.map((item) => (
                  <span key={item.id} className="diagram-slot highlight">
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <p className="diagram-note">
            <code>setFridge([...fridge, mónMoi])</code> — tạo mảng mới, React
            mới render lại.
          </p>
        </div>

        <div className="diagram-row">
          <p className="diagram-title">2. Lấy món ra (filter)</p>
          <div className="diagram-flow">
            <div className="diagram-box old">
              <span className="diagram-tag">trước</span>
              <div className="diagram-slots">
                <span className="diagram-slot">A</span>
                <span className="diagram-slot removed">B ✕</span>
                <span className="diagram-slot">C</span>
              </div>
            </div>
            <span className="diagram-arrow">filter bỏ B →</span>
            <div className="diagram-box new">
              <span className="diagram-tag ok">sau ✅</span>
              <div className="diagram-slots">
                <span className="diagram-slot">A</span>
                <span className="diagram-slot">C</span>
              </div>
            </div>
          </div>
          <p className="diagram-note">
            <code>fridge.filter(item =&gt; item.id !== id)</code> — giữ món còn
            lại, bỏ đúng 1 món.
          </p>
        </div>

        <div className="diagram-row">
          <p className="diagram-title">3. Sửa 1 món (map)</p>
          <div className="diagram-flow">
            <div className="diagram-box old">
              <span className="diagram-tag">trước</span>
              <div className="diagram-slots">
                <span className="diagram-slot">Sữa</span>
                <span className="diagram-slot changed">Trứng 🆕</span>
                <span className="diagram-slot">Táo</span>
              </div>
            </div>
            <span className="diagram-arrow">map đổi 1 ô →</span>
            <div className="diagram-box new">
              <span className="diagram-tag ok">sau ✅</span>
              <div className="diagram-slots">
                <span className="diagram-slot">Sữa</span>
                <span className="diagram-slot highlight">Trứng ✅</span>
                <span className="diagram-slot">Táo</span>
              </div>
            </div>
          </div>
          <p className="diagram-note">
            <code>{`{ ...item, eaten: true }`}</code> — chỉ đổi 1 phần tử, các
            ô khác copy y nguyên.
          </p>
        </div>

        <div className="diagram-row diagram-wrong">
          <p className="diagram-title">❌ Không làm thế này</p>
          <div className="diagram-flow single">
            <div className="diagram-box bad">
              <span className="diagram-tag bad">sai</span>
              <code>fridge.push(món)</code> → sửa tủ cũ → React có thể{" "}
              <strong>không cập nhật</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
