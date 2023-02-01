import { useEffect, useState } from "react";
import "../clientCss/home.css";
import ToProduct from "./Small Components/ToProduct";
import LoadingLogo from "./Small Components/LoadingLogo";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";




function GetProductCollections() {

  const [products, setProducts] = useState([]);
  console.log(products);

  const location = useLocation();
  const path = location.pathname.split("/");
  let collectionName = path[path.length - 1];

  console.log(collectionName, "collection name");


  useEffect(() => {

    const getProducts = async () => {
      if (collectionName) {
        let data = await fetch(`http://localhost:8000/product/${collectionName}`);
        let result = await data.json();
        setProducts(result);
      }
    }

    getProducts()
  }, []);



  // "collections-menu"

  return (
    <div>
      <Navbar />
      <h3>our products:</h3>

      <div className="collections-menu">
        {products.map((product) => {
          console.log(product);
          return <ToProduct key={Math.random()*0.5} product={product} />
        })}
      </div>
    </div>
  );
}

export default GetProductCollections;