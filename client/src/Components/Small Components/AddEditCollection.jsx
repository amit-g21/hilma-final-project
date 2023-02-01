import { useEffect, useState } from "react";
import "../../clientCss/adminHomePage.css";

function AddEditCollection(props) {
  const [myCollections, setMyCollections] = useState(props.myCollections);
  const [selectedCompId, setSelectedCompId] = useState(0);
  const [selectedComp, setSelectedComp] = useState([]);
  const [textAreaInfo, setTextAreaInfo] = useState({
    collectionId: "",
    collectionName: "",
    collectionImg: "",
  });
  console.log("textAreaInfo: ", textAreaInfo);

  async function submitChanges(obj) {
    let promise = await fetch("http://localhost:8000/collection", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    let json = await promise.json();
    console.log(json);
    window.location.reload()
  }

  function onChange(e, type, id) {
    let shallowCopy = JSON.parse(JSON.stringify(textAreaInfo));
    console.log('shallowCopy: ', shallowCopy);
    shallowCopy.collectionId = id
    shallowCopy[type] = e.target.value;
    setTextAreaInfo(shallowCopy);
  }

  function handleEdit(e) {
    if (e.target.id == selectedCompId) {
      setSelectedCompId(0);
      return;
    }
    setSelectedCompId(e.target.id);
    console.log("e.target.id: ", e.target.id);
    for (let collection of myCollections) {
      console.log("collection: ", collection.id);
      if (e.target.id == collection.id) {
        setSelectedComp(collection);
      }
    }
  }

  return (
    <div className="addEditCollections">
      {myCollections.map((collection) => {
        if (selectedCompId != collection.id) {
          return (
            <div key={collection.id} className="oneCollection">
              <p>Collection's Id: {collection.id}</p>
              <p>Collection's Name: {collection.collection_name}</p>
              <p>Collection's Image Url: {collection.image_url}</p>
              <button id={collection.id} onClick={(e) => handleEdit(e)}>
                Edit Collection
              </button>
              <div className="XContainer">
                <img src="../../../images/X.png" />
              </div>
              <hr />
            </div>
          );
        } else {
          return (
            <div key={collection.id} className="oneCollection">
              <textarea
                placeholder={`Collection's Name: ${collection.collection_name}`}
                value={textAreaInfo.collectionName}
                onChange={(e) => onChange(e, "collectionName", collection.id)}
              ></textarea>
              <textarea
                placeholder={`Collection's Image Url: ${collection.image_url}`}
                value={textAreaInfo.collectionImg}
                onChange={(e) => onChange(e, "collectionImg", collection.id)}
              ></textarea>
              <button id={collection.id}>Exit Editing Mode</button>
              <button onClick={() => submitChanges(textAreaInfo)}>
                Submit Changes
              </button>
              <div className="XContainer">
                <img src="../../../images/X.png" />
              </div>
              <hr />
            </div>
          );
        }
      })}
    </div>
  );
}

export default AddEditCollection;
