import { useState, useEffect} from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import axios from "axios"
import { useParams } from "react-router-dom";
import MainRouter from "../../routes/MainRouter";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { productsData } from "../../json/productsData";


import React from 'react'

const category = () => {

  const {categoryId} = useParams();



    const filter = productsData.filter((item) => item.category === categoryId);

  return (
      <ItemListContainer productsData ={filter} />
    // <div> {filter.map(item =>{

    //   // return (
        
          
    //   //   <Card style={{ width: '18rem' }}>
    //   //   <Card.Img variant="top" src="holder.js/100px180"  />
    //   //   <Card.Body>
    //   //     <Card.Title> {item.name} </Card.Title>
    //   //     <Card.Text>
    //   //       {item.description}.
    //   //     </Card.Text>
    //   //     <Button variant="primary">Go somewhere</Button>
    //   //   </Card.Body>
    //   // </Card>
 
    //   //   //  <div key={item.id}>
 
    //   //   //    <label> {item.descripcion} </label>
 
    //   //   //    </div>
 
    //   //  )
       
 
    //  })} </div>
 
   )
}

export default category