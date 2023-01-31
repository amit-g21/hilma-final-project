import { useEffect, useState } from "react";
import "../clientCss/home.css";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import LoadingLogo from "./Small Components/LoadingLogo";
import "../clientCss/productPage.css";
import Footer from "./Footer";

function ProductPage() {
  const [product, setProduct] = useState([]);
  const [variants, setVariants] = useState([]);
  const [isSize, setSize] = useState(false);
  const [isColor, setColor] = useState(false);
  const [variantColors, setVariantColors] = useState([]);
  console.log("variantColors: ", variantColors);
  const [variantSizes, setVariantSizes] = useState([]);
  const [isClickedColor, setClickedColor] = useState("");
  const [isClickedSize, setClickedSize] = useState("");
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [showCart, toggleShowCart] = useState(false);
  const [refreshCart, toggleRefreshCart] = useState(false)


  let location = useLocation();

  let urlArr = location.pathname.split("/");
  let productName =  decodeURIComponent(urlArr[urlArr.length - 1])  ;
  let collectionName = urlArr[urlArr.length - 2];
  let { image_url, price, product_description } = product[0] || "waiting";
  console.log("product: ", product);

  async function getProduct(productName, collectionName) {
    let promise = await fetch(
      `http://localhost:8000/product/${collectionName}/${productName}`
    );
    let result = await promise.json();
    console.log("result: ", result);
    setProduct(result);
    return result;
  }

  function changeColor(color) {
    setClickedSize("");
    setClickedColor(color);
  }

  async function getVariants(id) {
    let promise = await fetch(`http://localhost:8000/variant/${id}`);
    let result = await promise.json();
    let example = result[0];
    console.log("example: ", example);
    console.log("VARIANT RESULT: ", result);
    setVariants(result);
    example.variant_color ? setColor(true) : setColor(false);
    example.variant_size ? setSize(true) : setSize(false);
    return result;
  }

  function decreaseQuantity(quantity){
    if (quantity <= 1){
        return 1
    } else{
        setOrderQuantity(orderQuantity - 1);
    }
  }

  function makeButton(result) {
    console.log("here");
    let newVariants = [...result];
    console.log("newVariants: ", newVariants);
    // console.log("newVariants: ", newVariants);
    let newVariantsSizes = [];
    let newVariantsColors = [];
    for (let obj of newVariants) {
      let didFindSize = false;
      let didFindColor = false;

      for (let size of newVariantsSizes) {
        if (size === obj.variant_size) {
          didFindSize = true;
        }
      }
      if (!didFindSize) newVariantsSizes.push(obj.variant_size);

      for (let color of newVariantsColors) {
        if (color === obj.variant_color) {
          didFindColor = true;
        }
      }
      if (!didFindColor) newVariantsColors.push(obj.variant_color);
    }
    console.log("newVariantsColors: ", newVariantsColors);
    setVariantSizes(newVariantsSizes);
    console.log("newVariantsSizes: ", newVariantsSizes);
    setVariantColors(newVariantsColors);
  }

// sessionStorage.setItem("cart", "{productName: abc, productPrice}");

  function addToCart() {
      sessionStorage.getItem('cart') === null && sessionStorage.setItem('cart', JSON.stringify([]))
      let dataInlocalStorage = JSON.parse(sessionStorage.getItem('cart'));
      dataInlocalStorage.push({productName, price, isClickedColor, isClickedSize, orderQuantity, image_url})
      console.log('dataInlocalStorage: ', dataInlocalStorage);
      sessionStorage.setItem("cart", JSON.stringify(dataInlocalStorage));
      toggleShowCart(true);
      setTimeout(() => {
        toggleShowCart(false)
      }, 2000);
      toggleRefreshCart(!refreshCart);
  }

  useEffect(() => {
    const fetchDbs = async () => {
      let product = await getProduct(productName, collectionName);
      console.log("product: ", product);
      let id = product[0].id;
      let myVariants = await getVariants(id);
      makeButton(myVariants);
    };
    fetchDbs();
  }, []);

  if (product.length === 0 || variants.length === 0) {
    return <LoadingLogo />;
  }

  function findSizes(size) {
    let color = isClickedColor;
    console.log('isClickedColor: ', isClickedColor);
    let variantSize = size;
    let newVariants = [...variants];
    for (let obj of newVariants) {
      if (
        obj.variant_color === color &&
        variantSize === obj.variant_size &&
        obj.variant_quantity > 0
      ) {
        return true;
      }
    }
    return false;
  }

  return (
    <>
      <div className="productPage">
        <Navbar refreshCart={refreshCart} showCart = {showCart}/>
        <div className="imageContainer">
          <img src={`${image_url}`} />
        </div>
        <h2>{productName}</h2>
        <hr />
        <h3>Price: ${`${price}`}</h3>
        <p>{product_description}</p>
        <div className="Buttons">
          {isColor && (
            <div className="colorButtons">
              <p>Colors:</p>
              {variantColors.map((color) => (
                <button
                  className={isClickedColor === color ? "clickedColor" : ""}
                  onClick={() => changeColor(color)}
                  key={Math.random() * 0.5}
                >
                  {color}
                </button>
              ))}
            </div>
          )}
          {isSize && (
            <div className="sizeButtons">
              <p>Sizes:</p>
              {variantSizes.map((size) => (
                <button
                  className={`${findSizes(size) ? "" : "notAvailable"} ${
                    isClickedSize === size ? "clickedSize" : ""
                  }`}
                  onClick={() => setClickedSize(size)}
                  key={Math.random() * 0.5}
                >
                  {size}
                </button>
              ))}
            </div>
          )}
        </div>
        <div id="quantityCounter">
        <p>Quantity:</p>
          <button onClick={() => decreaseQuantity(orderQuantity)}>-</button>
          <span id="count">{orderQuantity}</span>
          <button onClick={() => setOrderQuantity(orderQuantity + 1)}>+</button>
        </div>
        <button id="addToCart" onClick={addToCart}>
          Add To Cart
        </button>
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;
