import PropTypes from "prop-types";

const ColorsList = ({ colors, onColorClick }) => {
  const handleColorClick = (selectedColor) => {
    console.log("SELECTED COLOR ::> ", selectedColor);
    return onColorClick(selectedColor);
  };
  return (
    <>
      <div className="row mt-4">
        {colors &&
          colors.map((color, index) => {
            return (
              <div
                style={{ cursor: "pointer", backgroundColor: color }}
                key={index}
                className="col-3 p-4"
                onClick={() => handleColorClick(color)}
              >
                <span className="m-auto">Column {color}</span>
              </div>
            );
          })}
      </div>
    </>
  );
};

// Prop validation
ColorsList.propTypes = {
  colors: PropTypes.array.isRequired,
  onColorClick: PropTypes.func.isRequired,
};

export default ColorsList;
