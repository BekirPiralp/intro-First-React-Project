import React, { Component } from "react";
// import { Navi, Product, Category } from "./components/imports";
import Navi from "./components/Navi";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import { Col, Container, Row } from "react-bootstrap";

export default class App extends Component {
  state = {
    categories: [
      { Id: 1, Name: "Beverages" },
      { Id: 2, Name: "Condiments" },
    ],
    selectedCategory: ""
  };

  changeCategory = (category) => {
    this.setState({ selectedCategory: category.Name });
  };

  render() {
    let productInfo = { title: "Category List" ,selectedCategory: this.state.selectedCategory};
    let categoryInfo = { title: "Product List", changeCategory: this.changeCategory, selectedCategory: this.state.selectedCategory};
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>

          <Row>
            <Col xs="3">
              <CategoryList info={categoryInfo} />
            </Col>
            <Col xs="9">
              <ProductList info={productInfo} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
