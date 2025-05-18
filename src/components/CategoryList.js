import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { Id: 1, Name: "Beverages" },
        { Id: 2, Name: "Condiments" },
      ],
      
    };
  }
 

  render() {
    return (
      <div>
        <center>
          <h4>{this.props.info.title}</h4>
          <h6>{this.state.counter}</h6>
        </center>
        <ListGroup>
          {this.state.categories.map((cat) => (
            <ListGroup.Item
              key={cat.Id}
              onClick={() => this.props.info.changeCategory(cat)}
            >
              {cat.Name}
            </ListGroup.Item>
          ))}
          {/* <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
        </ListGroup>
        <br />
        <br />
        <h6>
          {this.props.info.selectedCategory === ""
            ? ""
            : this.props.info.selectedCategory + " is selected"}{" "}
        </h6>
      </div>
    );
  }
}
