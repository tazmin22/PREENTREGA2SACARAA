import { useState, useEffect} from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import axios from "axios"

const Home = () => {

  const [products, setProducts] = useState ([]);

  useEffect(() => {
    axios
     .get("https://dummyjson.com/products?limit=6")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);

    return(
        <main>
      <ItemListContainer productsData={products} />;
      </main>
    )
}

export default Home