import { useState, useEffect} from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import axios from "axios"
import { useParams } from "react-router-dom";

function getProducts() {
    return axios.get("https://dummyjson.com/products?limit=10");
  }
  
  const Category = () => {
    const [products, setProducts] = useState([]);
    
    const { categoryId } = useParams();
  
    useEffect(() => {
      getProducts()
        .then((res) => {
          console.log(res.data.products)
          const dataFiltered = res.data.products.filter(item => item.category === categoryId);
          setProducts(dataFiltered);
        })
        .catch((err) => {})
    }, [categoryId]);
  
    return (
      <ItemListContainer productsData={products} />
    );
  };
  
  export default Category;