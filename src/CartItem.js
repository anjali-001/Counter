import React, { Component } from "react";

export default class CartItem extends Component {
  render() {
    return (
      <div className="row ml-2 mt-1">
        <button
          type="button"
          className={
            this.props.count === 0
              ? "btn btn-warning col-md-1 m-2"
              : "btn btn-info text-light col-md-1 m-2"
          }
        >
          {this.props.count === 0 ? "zero" : this.props.count}
        </button>
        <button
          type="button"
          className="btn btn-secondary m-1"
          onClick={() => this.props.increment(this.props.id)}
        >
          Increment
        </button>
        <button
          type="button"
          className="btn btn-danger text-light m-2"
          onClick={() => this.props.onDelete(this.props.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

