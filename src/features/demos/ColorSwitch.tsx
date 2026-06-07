type ColorSwitchProps = {
  onChangeColor: () => void;
};

export default function ColorSwitch({ onChangeColor }: ColorSwitchProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onChangeColor();
  };

  return (
    <button type="button" className="color-switch-btn" onClick={handleClick}>
      Change color
    </button>
  );
}
