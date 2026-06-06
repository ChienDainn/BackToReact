import { useState } from "react";
import ColorSwitch from "./ColorSwitch";

export default function ColorSwitchDemo() {
  const [backgroundColor, setBackgroundColor] = useState("#ffc0cb");
  const [message, setMessage] = useState("Chưa click gì");

  function handleAreaClick() {
    setBackgroundColor("#ffc0cb");
    setMessage("Click vùng hồng → màu hồng (event bubble từ con cũng vào đây nếu không stopPropagation)");
  }

  function handleChangeColor() {
    setBackgroundColor("#87ceeb");
    setMessage("Click nút → màu xanh (onChangeColor từ props)");
  }

  return (
    <section className="color-switch-demo">
      <h2>ColorSwitch demo</h2>
      <p className="color-switch-message">{message}</p>
      <div
        className="color-switch-area"
        style={{ backgroundColor }}
        onClick={handleAreaClick}
      >
        <p>Click vùng này → hồng</p>
        <ColorSwitch onChangeColor={handleChangeColor} />
      </div>
    </section>
  );
}
