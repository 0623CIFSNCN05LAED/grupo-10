import PropTypes from "prop-types";

function ProductItem({ name }) {
  return (
    <button
      type="button"
      className="list-group-item list-group-item-action text-center"
    >
      {name}
    </button>
  );
}

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ProductItem;
