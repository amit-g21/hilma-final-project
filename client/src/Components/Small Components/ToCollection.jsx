import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../../clientCss/home.css";

function ToCollection(props) {
  const [collection, editCollection] = useState(props.collection);
  const Navigate = useNavigate();

  return (
    <div className="collections-menu" onClick={() => Navigate(`${collection.id}`)}>
      <div className="collection" key={collection.id}>
        <h4 className="collection-header">{collection.collection_name}</h4>
        <img src={collection.image_url} />
      </div>
    </div>
  );
}

export default ToCollection;
