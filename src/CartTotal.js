import React from "react";
import PropTypes from "prop-types";
export function CartTotal({ cart }) {
  return <span>${cart.reduce((sum, i) => sum + i.price * i.count, 0)}</span>;
}

CartTotal.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    })
  ),
};
