import { useState } from "react";

const cachedInFridge = {
  milk: "Sữa tươi",
  egg: "Trứng gà",
  fruit: "Táo",
};

type GroceryData = typeof cachedInFridge;

export default function CacheDemo() {
  const [data, setData] = useState<GroceryData | null>(null);
  const [source, setSource] = useState<"fridge" | "market" | null>(null);
  const [loading, setLoading] = useState(false);
  const [elapsedMs, setElapsedMs] = useState<number | null>(null);
  const [message, setMessage] = useState(
    "Cache = tủ lạnh: data có sẵn, mở ra lấy ngay. Không cache = đi chợ mỗi lần đói.",
  );

  function openFridge() {
    const start = performance.now();
    setData(cachedInFridge);
    setSource("fridge");
    setLoading(false);
    setElapsedMs(Math.round(performance.now() - start));
    setMessage(
      "Mở tủ lạnh → lấy ngay đồ có sẵn. Không cần đi chợ (không gọi API lại).",
    );
  }

  function goToMarket() {
    setLoading(true);
    setData(null);
    setSource(null);
    setElapsedMs(null);
    setMessage("Đang đi chợ... (fetch API, chờ server trả data)");

    const start = performance.now();
    window.setTimeout(() => {
      setData({
        milk: "Sữa mới mua",
        egg: "Trứng mới mua",
        fruit: "Cam mới mua",
      });
      setSource("market");
      setLoading(false);
      setElapsedMs(Math.round(performance.now() - start));
      setMessage(
        "Xong! Lần sau nếu bỏ vào tủ lạnh (cache) thì lấy sẽ nhanh hơn nhiều.",
      );
    }, 1500);
  }

  function putInFridge() {
    if (!data || source !== "market") return;
    Object.assign(cachedInFridge, data);
    setMessage("Đã cất vào tủ lạnh (cache). Lần sau bấm 'Mở tủ lạnh' sẽ lấy ngay!");
  }

  return (
    <section className="state-demo analogy-demo">
      <h2>Cache = tủ lạnh chứa data sẵn</h2>

      <div className="analogy-story">
        <p>
          <strong>🧊 Tủ lạnh (cache):</strong> đồ đã mua sẵn, mở ra dùng liền.
        </p>
        <p>
          <strong>🏪 Chợ (API/server):</strong> mỗi lần phải đi mua lại → chậm,
          tốn công.
        </p>
      </div>

      <div className="array-result-box">
        <p className="result-label">📋 Result</p>
        <p>
          <strong>Giải thích:</strong> {message}
        </p>
        {elapsedMs !== null && (
          <p>
            <strong>Thời gian:</strong> {elapsedMs}ms
            {source === "fridge" ? " (gần như tức thì)" : " (phải chờ chợ)"}
          </p>
        )}
        <p>
          <strong>Nguồn:</strong>{" "}
          {source === "fridge"
            ? "🧊 Tủ lạnh (cache hit)"
            : source === "market"
              ? "🏪 Chợ (fetch)"
              : "—"}
        </p>
        <pre className="batch-code">
          {data ? JSON.stringify(data, null, 2) : loading ? "Đang tải..." : "null"}
        </pre>
      </div>

      <div className="state-actions cache-actions">
        <button type="button" onClick={openFridge} disabled={loading}>
          🧊 Mở tủ lạnh (cache)
        </button>
        <button type="button" onClick={goToMarket} disabled={loading}>
          🏪 Đi chợ mua (fetch API)
        </button>
        <button
          type="button"
          onClick={putInFridge}
          disabled={loading || source !== "market" || !data}
        >
          📥 Cất vào tủ (lưu cache)
        </button>
      </div>
    </section>
  );
}
