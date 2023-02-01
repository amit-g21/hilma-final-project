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
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [productEdit, setProductEdit] = useState("");





  console.log("collectionProductsArr: ", collectionProductsArr);

  useEffect(() => { }, []);

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

  const changeProduct = async (e) => {
    const data = await fetch(`http://localhost:8000/product/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        productEdit: productEdit,
        productName: productName,
        productPrice: productPrice,
        productDescription: productDescription,
        imageUrl: imageUrl,
      })
    })
    const json = await data.json();
    // localStorage.setItem('onlineUser', JSON.stringify({username:json[0].username , user_id:json[0].user_id}))
    // setUser(json[0].username);
    if (json) {
      alert('all good')
    }


  }

  function onChange(e) {
    setProductName(e.target.value);
    if (e.target.id !== productEdit) {
      console.log('changing')
      setProductEdit(e.target.id);
    }
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
                <div key={product.id} className="editOneProduct">
                  <p>Product's Id: {product.id}</p>
                  <textarea id={product.product_name} placeholder={`Name: ${product.product_name}`} value={productName} onChange={(e) => onChange(e)}></textarea>
                  <textarea placeholder={`Price: ${product.price}`} value={productPrice} onChange={e => setProductPrice(e.target.value)}></textarea>
                  <textarea placeholder={`Description: ${product.product_description}`} value={productDescription} onChange={e => setProductDescription(e.target.value)}></textarea>
                  <textarea placeholder={`Image Url: ${product.image_url}`} value={imageUrl} onChange={e => setImageUrl(e.target.value)}></textarea>

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
                  {productInEditMode && <button onClick={changeProduct}>Submit Changes</button>}
                  <button>Delete This Product</button>
                  {/* <hr /> */}
                </div>
              );
            }
          })}
      </div>
    </>
  );
}

export default AddEditProduct;
