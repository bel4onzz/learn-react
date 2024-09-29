import PropTypes from "prop-types";
import ListItem from "./ListItem";

function UnorderedList({ items }) {
  if (!Array.isArray(items) || items.length === 0) {
    return <p className="m-0">No tasks available.</p>;
  }

  return (
    <ul className="list-group">
      {items.map((item, index) => {
        return (
          <ListItem
            key={index}
            item={{ slot: item.name, class: item.priority }}
          />
        );
      })}
    </ul>
  );
}

UnorderedList.propTypes = {
  items: PropTypes.array,
};

export default UnorderedList;
