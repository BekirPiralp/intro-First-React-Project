import React from "react";
// import { Navi, Product, Category } from "./components/imports";
import Navi from "./components/Navi";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  let productInfo = {title:'Category List'}
  let categoryInfo = {title:'Product List'}
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

export default App;
