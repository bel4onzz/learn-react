import { useState } from "react";
import SelectedComponent from "./SelectedColor";
import ColorsList from "./ColorsList";
import AddColor from "./AddColor";

const ColorPicker = () => {
  // Predefined colors
  const predefinedColors = ["white", "red", "green", "blue", "yellow"];
  const [colors, setColors] = useState(predefinedColors);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleAddColor = (color) => {
    setColors([...colors, color]);
  };

  return (
    <div>
      <SelectedComponent color={selectedColor} />
      <AddColor colors={colors} onAddNewColor={handleAddColor} />
      <ColorsList colors={colors} onColorClick={handleColorSelect} />
    </div>
  );
};

export default ColorPicker;
