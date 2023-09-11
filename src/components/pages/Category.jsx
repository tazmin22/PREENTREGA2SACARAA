import { useState, useEffect} from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import axios from "axios"
import { useParams } from "react-router-dom";

import React from 'react'

const category = () => {

  const {categoryId} = useParams();

const object = [
  {
      "id": 1,
      "nombre": "Café Espresso",
      "tipo": "Fuerte",
      "origen": "Italia",
      "precio": 2.50,
      "descripcion": "Un café corto y fuerte, tradicionalmente servido en Italia.",
      "imagen": "espresso.jpg",
      "vegano": false,
      "categorie": ""
  },
  {
      "id": 2,
      "nombre": "Café Latte",
      "tipo": "Suave",
      "origen": "Estados Unidos",
      "precio": 3.00,
      "descripcion": "Un café suave con leche caliente y una pequeña cantidad de espuma.",
      "imagen": "latte.jpg",
      "vegano": false,
      "categorie": ""
  },
  {
      "id": 3,
      "nombre": "Café Cappuccino",
      "tipo": "Medio",
      "origen": "Italia",
      "precio": 3.50,
      "descripcion": "Un café con partes iguales de espresso, leche y espuma de leche.",
      "imagen": "cappuccino.jpg",
      "vegano": false,
      "categorie": ""
  },
  {
      "id": 4,
      "nombre": "Café Mocha",
      "tipo": "Chocolate",
      "origen": "Estados Unidos",
      "precio": 4.00,
      "descripcion": "Un café con espresso, leche caliente y chocolate.",
      "imagen": "mocha.jpg",
      "vegano": false,
      "categorie": ""
  },
  {
      "id": 5,
      "nombre": "Café Vegano",
      "tipo": "Variado",
      "origen": "Internacional",
      "precio": 4.50,
      "descripcion": "Un café vegano sin productos de origen animal.",
      "imagen": "vegan_coffee.jpg",
      "vegano": true,
      "categorie": ""
  }
];


    const filter = object.filter((item) => item.categorie === categoryId);

  return (
    <div> {object.map(item =>{
      return ( 
        <div key={item.id}>
          <label> {item.descripcion} </label>

          </div>
      )
    })} </div>
  )
}

export default category