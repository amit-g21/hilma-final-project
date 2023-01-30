import { useEffect, useState } from "react";
import "../clientCss/home.css";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import LoadingLogo from "./Small Components/LoadingLogo";
import "../clientCss/productPage.css";

function ProductPage() {
  const [product, setProduct] = useState([]);
  const [variants, setVariants] = useState([]);
  const [isSize, setSize] = useState(false);
  const [isColor, setColor] = useState(false);
  const [variantColors, setVariantColors] = useState([]);
  console.log("variantColors: ", variantColors);
  const [variantSizes, setVariantSizes] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState();

  let location = useLocation();

  let urlArr = location.pathname.split("/");
  let productName = urlArr[urlArr.length - 1];
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

  return (
    <div className="productPage">
      <Navbar />
      <h1>{productName}</h1>
      <img src={`${image_url}`} />
      <h3>${`${price}`}</h3>
      <p>{product_description}</p>
      {isColor && (
        <div className="colorButtons">
          <p>Colors:</p>
          {variantColors.map((color) => (
            <button key={Math.random() * 0.5}>{color}</button>
          ))}
          <p>Sizes:</p>
          {variantSizes.map((size) => (
            <button key={Math.random() * 0.5}>{size}</button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductPage;
