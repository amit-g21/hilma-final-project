import { useEffect, useState } from "react";

function AddEditProduct(props) {
  const [selectedValue, setSelectedValue] = useState({
    S: true,
    M: false,
    L: false,
  });
  const [inputArr, setInputArr] = useState([""]);
  const [toAddProduct, toggleToAddProduct] = useState(false);
  const [products, editProducts] = useState(props.ourProducts);
  const [toEditProduct, toggleToEditProduct] = useState(false);
  const [productInEditMode, setProductInEditMode] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [collectionProductsArr, setCollectionProductsArr] = useState([]);
  console.log("collectionProductsArr: ", collectionProductsArr);

  useEffect(() => {}, []);

  function sortByCollection(collectionName) {
    let newArr = [];
    for (let product of products) {
      console.log("collection_name: ", product.collection_name);
      product.collection_name === collectionName && newArr.push(product);
    }
    setCollectionProductsArr(newArr);
  }

  function handleChange(event) {
    if (event.target.value === "All") {
      console.log("ALL");
      let shallowCopy = [...products];
      setCollectionProductsArr(shallowCopy);
      setSelectedOption(event.target.value);
    } else {
      setSelectedOption(event.target.value);
      sortByCollection(event.target.value);
    }
  }

  function handleRadioChange(event) {
    let letter = event.target.value;
    let shallowArr = JSON.parse(JSON.stringify(selectedValue));
    console.log("shallowArr: ", shallowArr);
    shallowArr[letter] = !shallowArr[letter];
    setSelectedValue(shallowArr);
  }

  return (
    <>
      {toAddProduct && (
        <div>
          <p>Variants:</p>
          {inputArr.map(() => (
            <div key={Math.random()} className="AddProductInput">
              <input placeholder="Product Name" />
              <br />
              <input placeholder="Color" type={"text"} />
              <input placeholder="Quantity" type={"number"} />
              <input placeholder="Collection" type={"number"} />
              <div>
                <span>Pick Sizes:</span>
                <input
                  type="radio"
                  value="S"
                  checked={selectedValue.S}
                  onClick={handleRadioChange}
                />
                <label>S</label>

                <input
                  type="radio"
                  value="M"
                  checked={selectedValue.M}
                  onClick={handleRadioChange}
                />
                <label>M</label>

                <input
                  type="radio"
                  value="L"
                  checked={selectedValue.L}
                  onClick={handleRadioChange}
                />
                <label>L</label>

                <hr />
              </div>
            </div>
          ))}

          <button
            onClick={() => {
              setInputArr([...inputArr, 1]);
            }}
          >
            Add More Variants
          </button>
          <button
            onClick={() => {
              console.log("submit here the variants to the database");
            }}
          >
            Submit Variant
          </button>
        </div>
      )}
      <button onClick={() => toggleToAddProduct(!toAddProduct)}>
        {toAddProduct ? "Exit Add Mode" : "Add A Product"}
      </button>
      <button
        onClick={() => {
          toggleToEditProduct(!toEditProduct);
        }}
      >
        Edit A Product
      </button>
      <div className="editProducts">
        {toEditProduct && <h6>Filter By Collection:</h6>}
        {toEditProduct && (
          <select value={selectedOption} onChange={handleChange}>
            {props.myCollections.map((collection) => {
              return (
                <option key={Math.random()} value={collection.collection_name}>
                  {collection.collection_name}
                </option>
              );
            })}
            <option key={Math.random()} value={"All"}>
              All Collections
            </option>
          </select>
        )}
        {selectedOption &&
          collectionProductsArr.map((product) => {
            if (productInEditMode !== product.id) {
              return (
                <div key={Math.random()} className="editOneProduct">
                  <p>Product's Id: {product.id}</p>
                  <p>Name: {product.product_name}</p>
                  <p>Price: {product.price}$</p>
                  <p>Collection Name: {product.collection_name}</p>
                  <p>Products Description: {product.product_description}</p>
                  <button
                    id={`${product.id}`}
                    onClick={(e) => {
                      console.log("e: ", e.target.id);
                      setProductInEditMode(product.id);
                    }}
                  >
                    Edit Product
                  </button>
                  <button>Delete This Product</button>
                  <hr />
                </div>
              );
            } else {
              return (
                <div key={Math.random()} className="editOneProduct">
                  <p>Product's Id: {product.id}</p>
                  <textarea
                    placeholder={`Name: ${product.product_name}`}
                  ></textarea>
                  <textarea placeholder={`Price: ${product.price}`}></textarea>
                  <textarea
                    placeholder={`Collection Name: ${product.collection_name}`}
                  ></textarea>
                  <textarea
                    placeholder={`Description: ${product.product_description}`}
                  ></textarea>
                  <textarea
                    placeholder={`Image Url: ${product.image_url}`}
                  ></textarea>

                  <button
                    id={`${product.id}`}
                    onClick={(e) => {
                      console.log("e: ", e.target.id);
                      productInEditMode
                        ? setProductInEditMode(false)
                        : setProductInEditMode(product.id);
                    }}
                  >
                    {productInEditMode === product.id
                      ? `Close Editing`
                      : `Edit Product`}
                  </button>
                  {productInEditMode && <button>Submit Changes</button>}
                  <button>Delete This Product</button>
                  <hr />
                </div>
              );
            }
          })}
      </div>
    </>
  );
}

export default AddEditProduct;
