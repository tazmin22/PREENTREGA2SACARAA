import { useState, useEffect} from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import axios from "axios"
import { productsData } from "../../json/productsData";

import React from 'react'


const Home = () => {
  return(

     <ItemListContainer productsData={productsData} /> 
  )
}

export default Home