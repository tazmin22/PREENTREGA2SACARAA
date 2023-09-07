import { useEffect, useState } from "react";

import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ItemListContainer = ({ productsData }) =>{
  console.log(productsData)
  return <div className="productContainer">
    {productsData.map ((product) => {

return(
  <Card style={{ width: '18rem' }} key = {product.id}>
  <Card.Img variant="top" src={product.thumbnail} />
  <Card.Body>
    <Card.Title>{product.title} </Card.Title>
    <Card.Text>
      {product.description}
    </Card.Text>
    <Button variant="primary">Buy</Button>
  </Card.Body>
</Card>
)
    })}
  </div>
}

export default ItemListContainer;