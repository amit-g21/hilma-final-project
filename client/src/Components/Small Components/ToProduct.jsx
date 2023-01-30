import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../../clientCss/home.css";

function ToProduct(props) {
  const [product, setProducts] = useState(props.product);
  const Navigate = useNavigate();

  return (
    <div className="product-menu" onClick={() => Navigate(`${product.product_name}`)}>
      <div className="collection" key={product.id}>
        <h4 className="collection-header">{product.product_name}</h4>
        <img src={""} />
      </div>
    </div>
  );
}

export default ToProduct;