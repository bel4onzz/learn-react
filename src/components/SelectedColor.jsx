import PropTypes from "prop-types";

const SelectedComponent = ({ color }) => {
  return (
    <div
      className="alert"
      style={{ backgroundColor: color }}
      role="alert"
    >
      Selected Color: {color}
    </div>
  );
};

// Prop validation
SelectedComponent.propTypes = {
  color: PropTypes.string.isRequired,
};

export default SelectedComponent;
