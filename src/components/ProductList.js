import React, { Component } from "react";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.info.title}{ this.props.info.selectedCategory===''?'': ' - '+ this.props.info.selectedCategory}</h4>
      </div>
    );
  }
}
