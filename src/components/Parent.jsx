import PropTypes from "prop-types";
import Child from "./Child";
// import Child from "./Child";

const Parent = ({ name, childrenData }) => {
  console.log("CHILDREN DATA :::> ", childrenData);
  return (
    <>
      <p className="m-0 mb-4 fs-3">{name}</p>
      <div className="row gx-sm-4 gy-2">
        {childrenData.map((value, key) => {
          return (
            <Child
              key={key}
              childKey={key}
              name={value.name}
              age={value.age}
              grandchildrenData={value.grandchildren}
            />
          );
        })}
      </div>
    </>
  );
};

Parent.propTypes = {
  name: PropTypes.string.isRequired,
  childrenData: PropTypes.array.isRequired,
};

export default Parent;
