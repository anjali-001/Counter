import React, { Component } from "react";
import { cartProducts } from "./data";
import CartItem from "./CartItem";

class Cart extends Component {
  state = {
    products: [],
    total: 2,
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    cartProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  increment = (id) => {
    let tempProduct = [...this.state.products];
    const selectedProduct = tempProduct.find((item) => item.id === id);
    const index = tempProduct.indexOf(selectedProduct);
    const product = tempProduct[index];

    product.count = product.count + 1;

    this.setState(
      () => {
        return { products: [...tempProduct] };
      },
      () => this.addTotal()
    );
  };

  deleteItem = (id) => {
    let tempProducts = [...this.state.products];

    tempProducts = tempProducts.filter((item) => item.id !== id);
    this.setState(
      () => {
        return { products: tempProducts };
      },
      () => this.addTotal()
    );
  };

  addTotal = () => {
    let subTotal = 0;
    this.state.products.map((item) => (subTotal += item.count));
    this.setState(() => {
      return {
        total: subTotal,
      };
    });
  };

  render() {
    return (
      <div>
        <nav class="navbar navbar-light bg-secondary">
          <h2 className="text-light">Counter</h2>
          <ul class="navbar-nav">
            <li className="ml-auto">
              <i className="fa text-light" style={{ fontSize: "30px" }}>
                &#xf07a;
              </i>
              <span className="badge badge-warning" id="lblCartCount">
                {" "}
                {this.state.total}{" "}
              </span>
            </li>
          </ul>
        </nav>

        {this.state.products.map((item) => (
          <CartItem
            key={item.id}
            count={item.count}
            onDelete={this.deleteItem}
            increment={this.increment}
            id={item.id}
          />
        ))}
      </div>
    );
  }
}

export default Cart;
