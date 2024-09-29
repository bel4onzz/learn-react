import PropTypes from "prop-types";

const Grandchild = ({ childKey, name, hobby }) => {
  return (
    <>
      <div className="col-6">
        <div
          className={`border ${
            childKey % 2 ? "border-danger" : "border-primary"
          } grandchildFontSize h-100 d-flex flex-column justify-content-around`}
        >
          <p className="px-sm-2 py-sm-2 text-break">{name}</p>
          <p className="px-sm-2 mb-1 fw-bold font-monospace">{hobby}</p>
        </div>
      </div>
    </>
  );
};

Grandchild.propTypes = {
  childKey: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  hobby: PropTypes.string.isRequired,
};

export default Grandchild;
