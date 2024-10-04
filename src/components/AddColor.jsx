import PropTypes from "prop-types";
import { useRef, useState } from "react";

const isValidColor = (color) => {
  const s = new Option().style;
  s.color = color;
  return s.color !== "";
};

const AddColor = ({ colors, onAddNewColor }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const colorInput = useRef(null);
  //   const [errorMessage, setErrorMessage] = useState("");
  //   const [formData, setFormData] = useState({
  //     color: "",
  //   });

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("CURRENT COLOR :::> ", colorInput.current.value);
    const newColor = colorInput.current.value;
    if (isValidColor(newColor) && !colors.includes(newColor)) {
      onAddNewColor(newColor);
      setErrorMessage("");
      colorInput.current.value = ""
    } else {
      setErrorMessage("Invalid color or color already exists.");
    }
    // setFormData({
    //   ...formData,
    //   color: newColor, // Update the color in state based on ref value
    // });
    // setFormData((prevData) => {
    //   const updatedData = {
    //     ...prevData, // Spread the previous form data to keep other properties
    //     color: newColor,
    //   };

    //   onAddNewColor(updatedData);

    //   return updatedData;
    // });
  };

  //   const handleValidColor = (data) => {
  //     onAddNewColor(data);
  //   };
  //   useEffect(() => {
  //     setErrorMessage("");
  //     if (isValidColor(formData.color)) {
  //       handleValidColor(formData);
  //     } else {
  //       setErrorMessage("Invalid color or color already exists.");
  //     }
  //   }, [formData]);
  return (
    <form onSubmit={handleSubmit}>
      <div className="row mb-3">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
          Color
        </label>
        <div className="col-sm-10">
          <input
            ref={colorInput}
            // value={formData.color}
            // onChange={handleInputChange}
            type="text"
            className="form-control"
            id="inputEmail3"
          />
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Add Color
      </button>
    </form>
  );
};

AddColor.propTypes = {
  colors: PropTypes.array.isRequired,
  onAddNewColor: PropTypes.func.isRequired,
};

export default AddColor;
