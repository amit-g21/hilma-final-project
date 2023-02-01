import { useState } from "react";

function AddEditProduct(props) {
  const [selectedValue, setSelectedValue] = useState({
    S: true,
    M: false,
    L: false,
  });
  const [inputArr, setInputArr] = useState([""]);
  const [toAddProduct, toggleToAddProduct] = useState(true);

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

          <button onClick={() => props.setactionSelected(!props.actionSelected)}>
            {toAddProduct ? "Exit Add Mode" : "Add A Product"}
          </button>
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
    </>
  );
}

export default AddEditProduct;
