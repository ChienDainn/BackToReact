import { useState } from "react";

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

const initialTodos: Todo[] = [
  { id: 1, text: "Học useState", done: true },
  { id: 2, text: "Học cập nhật array", done: false },
];

export default function ArrayStateDemo() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [input, setInput] = useState("");
  const [nextId, setNextId] = useState(3);

  function addTodo() {
    const text = input.trim();
    if (!text) return;

    setTodos([...todos, { id: nextId, text, done: false }]);
    setNextId(nextId + 1);
    setInput("");
  }

  function removeTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id: number) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }

  function updateTodoText(id: number, text: string) {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)),
    );
  }

  function resetTodos() {
    setTodos(initialTodos);
    setNextId(3);
  }

  return (
    <section className="state-demo">
      <h2>Cập nhật React State là Array</h2>

      <div className="state-block">
        <h3>1. Thêm phần tử — spread</h3>
        <div className="state-actions">
          <input
            type="text"
            value={input}
            placeholder="Nhập việc mới..."
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
          />
          <button type="button" onClick={addTodo}>
            Thêm
          </button>
        </div>
        <pre className="batch-code">
          {`setTodos([...todos, { id, text, done: false }])`}
        </pre>
      </div>

      <div className="state-block">
        <h3>2. Xóa — filter</h3>
        <ul className="array-list">
          {todos.map((todo) => (
            <li key={todo.id} className={todo.done ? "done" : ""}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => toggleTodo(todo.id)}
                />
                <input
                  type="text"
                  className="array-item-input"
                  value={todo.text}
                  onChange={(e) => updateTodoText(todo.id, e.target.value)}
                />
              </label>
              <button type="button" onClick={() => removeTodo(todo.id)}>
                Xóa
              </button>
            </li>
          ))}
        </ul>
        <pre className="batch-code">
          {`// Xóa
setTodos(todos.filter(t => t.id !== id))

// Sửa 1 phần tử
setTodos(todos.map(t =>
  t.id === id ? { ...t, done: !t.done } : t
))`}
        </pre>
      </div>

      <div className="state-actions">
        <button type="button" onClick={resetTodos}>
          Reset danh sách
        </button>
      </div>
    </section>
  );
}
