import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import { Link } from "react-router-dom";

const ItemListContainer = ({productsData}) => {
  
  return (
    <div>
        {

          productsData.map ((item) => {

            return (
              <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title> {item.name} </Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <Link to={`/item/${item.id}`}>Ir a algun lado</Link>
      </Card.Body>
    </Card>
            )
          }
          
          )
        }

    </div>
    
    
  );
};
export default ItemListContainer