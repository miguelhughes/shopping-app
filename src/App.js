import React, { useState } from "react";
import PropTypes from "prop-types";
import Nav from "./Nav";
import "./App.css";
import { items } from "./static-data";
import ItemPage from "./ItemPage";
import CartPage from "./CartPage";
import ReadmeViewer from "@bit/miguelhughes.showcase.readme-viewer";

function Content({ tab, onAddToCart, onRemoveFromCart, cart }) {
  switch (tab) {
    default:
    case "items":
      return <ItemPage items={items} onAddToCart={onAddToCart} />;
    case "cart":
      return (
        <CartPage
          items={cart}
          onAddOne={onAddToCart}
          onRemoveOne={onRemoveFromCart}
        />
      );
  }
}

Content.propTypes = {
  tab: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
};

const summarizeCart = (cart) => {
  const groupedItems = cart.reduce((summary, item) => {
    summary[item.id] = summary[item.id] || {
      ...item,
      count: 0,
    };
    summary[item.id].count++;
    return summary;
  }, {});

  return Object.values(groupedItems);
};
const App = () => {
  const [activeTab, setActiveTab] = useState("items");
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };
  const removeFromCart = (item) => {
    setCart((prevCart) => {
      var index = cart.findIndex((i) => i.id === item.id);
      if (index >= 0) {
        let newCart = [...prevCart];
        newCart.splice(index, 1);
        return newCart;
      } else return prevCart;
    });
  };

  const summarizedCart = summarizeCart(cart);
  return (
    <div className="App">
      <ReadmeViewer repoName="shopping-app" />
      <Nav
        activeTab={activeTab}
        onTabChange={setActiveTab}
        cart={summarizedCart}
      />
      <main className="App-content">
        <Content
          tab={activeTab}
          onAddToCart={addToCart}
          onRemoveFromCart={removeFromCart}
          cart={summarizedCart}
        />
      </main>
    </div>
  );
};

export default App;
