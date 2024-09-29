import PropTypes from "prop-types";
import Grandchild from "./Grandchild";

const Child = ({ childKey, name, age, grandchildrenData }) => {
  console.log("CHILDREN DATA :::> ", grandchildrenData);
  return (
    <>
      <div className="col-6">
        <div
          className={`mb-4 border ${
            childKey % 2 ? "border-danger" : "border-primary"
          } childFontSize d-flex flex-column justify-content-between`}
        >
          <p className="px-sm-2 py-sm-2 ">{name}</p>
          <p className="px-sm-2 mb-1 fw-bold font-monospace">{age} yrs</p>
        </div>
        <div className="row h-75 gx-2">
          {grandchildrenData.map((value, key) => {
            return (
              <Grandchild
                key={key}
                childKey={childKey}
                name={value.name}
                hobby={value.hobby}
                grandchildrenData={value.grandchildren}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

Child.propTypes = {
  childKey: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  grandchildrenData: PropTypes.array.isRequired,
};

export default Child;
