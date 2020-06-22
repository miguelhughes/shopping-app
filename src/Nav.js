import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartTotal } from "./CartTotal";
const Nav = ({ activeTab, onTabChange, cart }) => {
  return (
    <nav className="App-nav">
      <ul>
        <NavItem
          name="items"
          onTabChange={onTabChange}
          activeTab={activeTab}
        ></NavItem>
        <NavItem
          name="cart"
          onTabChange={onTabChange}
          activeTab={activeTab}
        ></NavItem>
        <Summary onTabChange={onTabChange} cart={cart}></Summary>
      </ul>
    </nav>
  );
};

const NavItem = ({ name, activeTab, onTabChange }) => {
  const itemClass = (tabName) =>
    `App-nav-item ${activeTab === tabName ? "selected" : ""}`;
  return (
    <li className={itemClass(name)}>
      <button onClick={() => onTabChange(name)}>{name}</button>
    </li>
  );
};
const countItems = (items) => items.reduce((sum, item) => sum + item.count, 0);

const Summary = ({ onTabChange, cart }) => (
  <li className="App-nav-item summary">
    <button onClick={() => onTabChange("cart")}>
      <FontAwesomeIcon icon={faShoppingCart} />
      {countItems(cart)} items (<CartTotal cart={cart} />)
    </button>
  </li>
);
export default Nav;
