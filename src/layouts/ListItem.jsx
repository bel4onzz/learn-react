import PropTypes from "prop-types";

function ListItem({ item }) {
  // Mapping props to Bootstrap classes
  const classMap = {
    Low: "list-group-item-success",
    Medium: "list-group-item-warning",
    High: "list-group-item-danger",
  };
  const bootstrapClass = classMap[item.class] || "";

  return (
    <>
      <li className={`list-group-item ${bootstrapClass}`}>{item.slot}!</li>
    </>
  );
}

ListItem.propTypes = {
  item: PropTypes.exact({
    slot: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired,
  }).isRequired,
};

export default ListItem;
